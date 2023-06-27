import FeelsLike from './FeelsLike'
import HumidityChart from './HumidityChart'
import Precipitation from './Precipitation'
import RainChance from './RainChance'
import UV from './UV'
import Wind from './Wind'

const ContentMiniCharts = () => {
  return (
    <div className="h-full w-full"> 
      <h1 className='text-xl ml-8 mt-12 w-full mb-8'>
        More details of today's weather
      </h1>
      <div className='grid grid-cols-3 grid-rows-2 gap-9 ml-14' >
        <HumidityChart />
        <Wind />
        <Precipitation />
        <UV />
        <FeelsLike />
        <RainChance />
      </div>
    </div>
  )
}

export default ContentMiniCharts
