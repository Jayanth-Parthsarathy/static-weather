import SideBarHeader from './SideBarHeader'
import SideBarMainWeather from './SideBarMainWeather'
import SideBarWeatherContent from './SideBarWeatherContent'

const SideBar = () => {
  return (
    <div className='h-screen w-3/12 fixed top-0 left-0 flex flex-col bg-[url("../sidebarbg.jpg")] bg-hero bg-no-repeat bg-cover bg-center bg-fixed'>
      <SideBarHeader />
      <SideBarWeatherContent />
      <SideBarMainWeather />
    </div>
  )
}

export default SideBar
