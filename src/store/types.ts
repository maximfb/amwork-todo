import { TaskStore } from './TaskStore.ts'

export interface TaskType {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface StoreCollectionType {
  taskStore: TaskStore
}
