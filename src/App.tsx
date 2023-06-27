import Content from "./components/Content"
import SideBar from './components/SideBar'

export default function App() {
  return (
    <div className='h-screen w-screen flex'>
      <SideBar />
      <Content />
    </div>
  )
}
