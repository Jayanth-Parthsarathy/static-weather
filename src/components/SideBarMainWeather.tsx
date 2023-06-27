import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const SideBarMainWeather = () => {
  return (
    <div className='flex items-center mt-20  justify-evenly text-white'>
      <div className='mb-10'>
        <ChevronLeftIcon fontSize='large' />
      </div>
      <div className='text-7xl flex flex-col items-center justify-center gap-5'>
        <div>27 C</div>
        <div className='text-xl flex items-center justify-center gap-2'>
          <WbSunnyIcon />
          <span> Sunny</span>
        </div>
      </div>
      <div className='mb-11'>
        <ChevronRightIcon fontSize='large' />
      </div>
    </div>
  )
}

export default SideBarMainWeather
