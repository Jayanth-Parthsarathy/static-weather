import Content from './components/Content'
import Main from './components/Main'
import SideBar from './components/SideBar'

export default function App() {
  return (
    <div className='flex'>
      <SideBar />
      <Content />
    </div>
  )
}
