import CircularGauge from './CircularGuage'
import WindPowerIcon from '@mui/icons-material/WindPower'
const Wind = () => {
  return (
    <div className='w-96 h-52 rounded-lg bg-white'>
      <h1 className='text-base mt-3 ml-8'>
        Wind <WindPowerIcon />
      </h1>
      <div className='mx-auto w-full ml-32'>
        <CircularGauge value={90} />
      </div>
      <p className='mt-3 font-bold ml-40'>80 km/h</p>
    </div>
  )
}

export default Wind
