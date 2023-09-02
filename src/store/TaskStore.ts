import { makeAutoObservable } from 'mobx'
import { TaskType } from './types.ts'

export class TaskStore {
  private _tasks: TaskType[] = []
  private _limit: number = 8
  private _totalPages: number = 0
  private _isLoading: boolean = true

  constructor() {
    makeAutoObservable(this)
  }

  setTasks(tasks: TaskType[]) {
    this._tasks = tasks
    this.setIaLoading(false)
  }

  setIaLoading(bool: boolean) {
    this._isLoading = bool
  }

  setTotalPages(total: number) {
    this._totalPages = total
  }

  finishTask(id: number) {
    this._tasks = this.tasks.map((t) =>
      t.id === id ? { ...t, completed: true } : t,
    )
  }

  get tasks() {
    return this._tasks
  }

  get limit() {
    return this._limit
  }

  get totalPages() {
    return this._totalPages
  }

  get isLoading() {
    return this._isLoading
  }
}
