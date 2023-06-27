import { Line } from 'rc-progress';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';

const RainChance = ()=>{
  return (
    <div className='flex flex-col h-52 w-96 bg-white rounded-lg mt-10 p-5'>
      <div className='flex justify-between mx-14 mt-4'>
        <h1>UV index</h1>
        <BeachAccessOutlinedIcon/>
      </div>
      <h1 className='text-3xl font-bold mt-5 mb-12 ml-36'>42 %</h1>
      <div className='flex justify-evenly items-center'>
        <Line percent={70} strokeWidth={4} className='w-40 h-3 rounded-lg' strokeColor='#8f9bf7' />
      </div>
    </div>
  )
}

export default RainChance

