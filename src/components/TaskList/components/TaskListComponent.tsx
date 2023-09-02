import { useContext, useEffect, useRef, useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import { observer } from 'mobx-react-lite'
import { faker } from '@faker-js/faker'
import { StoreCtx } from '../../../main.tsx'
import { fetchTasks } from '../../../api/postService.ts'
import { StoreCollectionType } from '../../../store/types.ts'
import TaskListHeaderComponent from './TaskListHeaderComponent.tsx'
import TaskItemComponent from '../../TaskItem'
import { useObserver } from '../../../hooks/useObserver.ts'
import { getDate } from '../../../utils/index.ts'

export const TaskListComponent = observer(() => {
  const { taskStore } = useContext(StoreCtx) as StoreCollectionType
  const [page, setPage] = useState(1)
  const observeElement = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    taskStore.setIaLoading(true)
    fetchTasks(taskStore.limit, page).then((data) => {
      taskStore.setTasks([...taskStore.tasks, ...data.tasks])
      taskStore.setTotalPages(data.total / taskStore.limit)
    })
  }, [page])

  useObserver(
    observeElement,
    page < taskStore.totalPages,
    taskStore.isLoading,
    () => {
      setPage((prev) => prev + 1)
    },
  )

  return (
    <div className={'flex flex-col max-w-[285px] w-[100%] justify-center'}>
      <TaskListHeaderComponent
        lastCount={
          taskStore.totalPages * taskStore.limit - taskStore.tasks.length
        }
      />
      <div
        className={
          'flex flex-col max-h-[600px] overflow-auto w-[100%] gap-[8px] px-[10px]'
        }
      >
        {taskStore.tasks.length ? (
          taskStore.tasks.map((task, index) => {
            if (taskStore.tasks.length - 1 === index) {
              return (
                <TaskItemComponent
                  key={task.id}
                  innerRef={observeElement}
                  {...task}
                  text={faker.lorem.lines({ min: 1, max: 3 })}
                  startDate={getDate(
                    '2020-01-01T00:00:00.000Z',
                    '2021-01-01T00:00:00.000Z',
                  )}
                  endDate={getDate(
                    '2022-01-01T00:00:00.000Z',
                    '2023-01-01T00:00:00.000Z',
                  )}
                />
              )
            }
            return (
              <TaskItemComponent
                key={task.id}
                {...task}
                text={faker.lorem.lines({ min: 1, max: 3 })}
                startDate={getDate(
                  '2020-01-01T00:00:00.000Z',
                  '2021-01-01T00:00:00.000Z',
                )}
                endDate={getDate(
                  '2022-01-01T00:00:00.000Z',
                  '2023-01-01T00:00:00.000Z',
                )}
              />
            )
          })
        ) : (
          <div className={'text-center py-[100px] text-l'}>Empty</div>
        )}
      </div>
      {taskStore.isLoading && (
        <div className={'self-center py-[100px]'}>
          <InfinitySpin width='200' color='#D0DAEB' />
        </div>
      )}
    </div>
  )
})
