import HeaderComponent from './components/Header'
import TaskListComponent from './components/TaskList'

function App() {
  console.log('Thank you for choosing! Have a nice day!😁')
  return (
    <div className={'wrapper px-4 flex flex-col min-h-screen'}>
      <HeaderComponent />
      <div className={'flex flex-col items-center min-h-full'}>
        <TaskListComponent />
      </div>
    </div>
  )
}

export default App
