import { Line } from 'rc-progress';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';

const FeelsLike = () => {
  return (
    <div className='flex flex-col h-52 w-96 bg-white rounded-lg mt-10 p-5 '>
      <div className='flex justify-between mx-14 mt-4'>
        <h1>UV index</h1>
        <DeviceThermostatOutlinedIcon/>
      </div>
      <h1 className='text-3xl font-bold mt-5 mb-12 ml-36'>30 °</h1>
      <div className='flex justify-evenly items-center'>
        <Line percent={70} strokeWidth={4} className='w-40 h-3 rounded-lg' strokeColor='#8f9bf7' />
      </div>
    </div>
  )
}

export default FeelsLike
