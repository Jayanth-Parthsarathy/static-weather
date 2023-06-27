import NorthEastIcon from '@mui/icons-material/NorthEast'
import SolarPowerIcon from '@mui/icons-material/SolarPower'
import WbSunnyIcon from '@mui/icons-material/WbSunny'

const SideBarWeatherContent = () => {
  return (
    <div className='mt-12 flex flex-col text-white'>
      <div className='flex justify-around'>
        <div className='text-base'>
          <NorthEastIcon fontSize='small' /> New York USA
        </div>
        <div className='text-sm flex items-center gap-1'>
          <WbSunnyIcon fontSize='inherit' />
          07:19
        </div>
      </div>
      <div className='flex justify-around gap-10'>
        <div className='text-sm font-thin'>Today 28 Sept</div>
        <div className='text-sm flex items-center gap-1'>
          <SolarPowerIcon fontSize='inherit' />
          19:32
        </div>
      </div>
    </div>
  )
}

export default SideBarWeatherContent
