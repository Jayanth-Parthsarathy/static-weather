import SideBarHeader from './SideBarHeader'
import SideBarMainWeather from './SideBarMainWeather'
import SideBarWeatherContent from './SideBarWeatherContent'

const SideBar = () => {
  return (
    <div className='h-full bg-blue-400 w-3/12 flex flex-col bg-[url("../public/sidebarbg.jpg")] bg-hero bg-no-repeat bg-cover bg-center bg-fixed'>
      <SideBarHeader />
      <SideBarWeatherContent />
      <SideBarMainWeather />
    </div>
  )
}

export default SideBar
