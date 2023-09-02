import axios from 'axios'
import { API } from './config.ts'

export async function fetchTasks(limit?: number, page?: number) {
  try {
    const res = await axios.get(API, {
      params: { _limit: limit ?? 4, _page: page ?? 1 },
    })
    console.log(res)
    return { tasks: res.data, total: res.headers['x-total-count'] }
  } catch (err: any) {
    throw new Error(`Error while fetching tasks: ${err.message}`)
  }
}
