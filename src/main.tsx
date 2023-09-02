import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createContext } from 'react'
import { TaskStore } from './store/TaskStore.ts'
import { StoreCollectionType } from './store/types.ts'

export const StoreCtx = createContext<StoreCollectionType | null>(null)

ReactDOM.createRoot(document.getElementById('root')!).render(
  // @ts-ignore
  <StoreCtx.Provider value={{ taskStore: new TaskStore() }}>
    <App />
  </StoreCtx.Provider>,
)
