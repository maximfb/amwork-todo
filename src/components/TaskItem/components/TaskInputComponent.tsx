import { useCheckbox } from '../../../hooks/useCheckbox.ts'
import { FC, useEffect } from 'react'

interface TaskInputComponentProps {
  id: number
  title: string
  checked: boolean
  onChange: () => void
}

const TaskInputComponent: FC<TaskInputComponentProps> = ({
  id,
  title,
  checked,
  onChange,
}) => {
  const checkbox = useCheckbox({ checked, value: title })

  useEffect(() => onChange(), [checkbox.checked])

  return (
    <>
      <input
        id={`task-${id}`}
        type='checkbox'
        {...checkbox}
        className='w-[16px] h-[16px] rounded-[4px] bg-neuteral-gray-background border-[1px] border-primary-gray-secondary focus:ring-red-500'
      />
      <label
        htmlFor={`task-${id}`}
        className='ml-2 overflow-hidden text-ellipsis line-clamp-3 leading-[130%] text-primary-blue font-[600] text-[14px]'
      >
        {title}
      </label>
    </>
  )
}

export default TaskInputComponent
