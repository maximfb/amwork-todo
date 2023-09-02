import { FC } from 'react'
import IconComponent from '../../Iocn'

interface TaskListHeaderComponentProps {
  lastCount: number
}

const TaskListHeaderComponent: FC<TaskListHeaderComponentProps> = ({
  lastCount,
}) => {
  return (
    <div className={'flex items-center justify-between mb-[10px]'}>
      <h2 className={'text-text-green font-[600] text-[14px]'}>Today</h2>
      <div className={'flex gap-[8px]'}>
        <div
          className={
            'w-[20px] h-[20px] rounded-[4px] bg-neuteral-gray-background flex items-center justify-center'
          }
        >
          <IconComponent name={'plus'} />
        </div>
        <div
          className={
            'px-[6px] text-[12px] rounded-[4px] border-[1px] border-primary-gray-secondary flex items-center justify-center'
          }
        >
          {lastCount}
        </div>
      </div>
    </div>
  )
}

export default TaskListHeaderComponent
