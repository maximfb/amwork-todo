import * as React from 'react'
import { normalizeFormatDate } from '../../../utils'
import IconComponent from '../../Iocn'
import { useContext } from 'react'
import { StoreCtx } from '../../../main.tsx'
import { StoreCollectionType } from '../../../store/types.ts'
import TaskInputComponent from './TaskInputComponent.tsx'

interface TaskItemComponentProps {
  id: number
  title: string
  text: string
  startDate: Date
  endDate: Date
  completed: boolean
  innerRef?: React.Ref<any>
}

// eslint-disable-next-line react/display-name
export const TaskItemComponent: React.FC<TaskItemComponentProps> = React.memo(
  // eslint-disable-next-line react/prop-types
  ({ id, title, text, startDate, endDate, completed, innerRef }) => {
    const { taskStore } = useContext(StoreCtx) as StoreCollectionType

    const changeHandler = () => taskStore.finishTask(id)

    return (
      <div
        ref={innerRef}
        className={
          'flex flex-col rounded-[8px] shadow-sm shadow-shadow-blue p-[4px] bg-bg-blue'
        }
      >
        <div className={'rounded-[8px] bg-white p-[10px]'}>
          <div className='flex mb-4'>
            <TaskInputComponent
              id={id}
              title={title}
              checked={completed}
              onChange={changeHandler}
            />
          </div>
          <div
            className={
              'flex justify-between items-center mt-[8px] text-text-green font-[600] text-[14px]'
            }
          >
            <span>{normalizeFormatDate(startDate)}</span>
            <span>{normalizeFormatDate(endDate)}</span>
          </div>
          <p
            className={
              'mt-[5px] overflow-hidden text-ellipsis whitespace-nowrap text-text-black font-[400] text-[13px]'
            }
          >
            {text}
          </p>
          <div className={'flex justify-between mt-[8px]'}>
            <div
              className={
                'flex items-center gap-1 flex-wrap font-[600] text-[14px]'
              }
            >
              <div
                className={
                  'py-[1px] px-[6px] rounded-[4px] text-white bg-label-title whitespace-nowrap'
                }
              >
                Entity title
              </div>
              <div
                className={
                  'relative py-[1px] px-[6px] rounded-[4px] text-text-gray bg-label-theme whitespace-nowrap'
                }
              >
                Front-end
                <div
                  className={
                    'absolute top-[50%] translate-y-[-50%] -right-[7px]'
                  }
                >
                  <IconComponent name={'label'} />
                </div>
              </div>
            </div>
            <div
              className={
                'max-h-[24px] max-w-[24px] w-[100%] rounded-[50%] overflow-hidden'
              }
            >
              <img
                className={'object-cover object-center'}
                src='/ava.svg'
                alt='Avatar'
              />
            </div>
          </div>
        </div>
      </div>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.completed === nextProps.completed
  },
)
