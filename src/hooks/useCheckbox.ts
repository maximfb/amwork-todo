import { ChangeEvent, useState } from 'react'

interface DefaultStateType {
  checked: boolean
  value: string
}

export function useCheckbox(defaultState: DefaultStateType) {
  const [state, setState] = useState(defaultState)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ checked: e.target.checked, value: e.target.value })
  }

  return { ...state, onChange }
}
