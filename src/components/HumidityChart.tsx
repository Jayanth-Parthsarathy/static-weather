import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined'
import { Line } from 'rc-progress'
const HumidityChart = () => {
  return (
    <div className='flex flex-col w-96 h-52 ml-16 rounded-lg bg-white p-5 justify-center items-center gap-4'>
      <div className='flex justify-between'>
        <h3>Humidity</h3>
        <WaterDropOutlinedIcon />
      </div>
      <div>
        <span className='text-2xl font-bold mr-3'>82%</span>
        bad
      </div>
      <div className='flex gap-3'>
        <div>
          good
          <Line percent={100} strokeWidth={15} className='bg-gray-300 h-2 rounded-md' strokeColor='#0000FF' />
        </div>
        <div>
          normal
          <Line percent={100} strokeWidth={15} className='bg-gray-300 rounded-md' strokeColor='#0000FF' />
        </div>
        <div>
          bad
          <Line percent={20} strokeWidth={15} className='h-2 bg-gray-300 rounded-md' strokeColor='#0000FF' />
        </div>
      </div>
    </div>
  )
}

export default HumidityChart
