import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import Blob from './Blob'

const UV = () => {
  return (
    <div className='flex flex-col h-52 w-96 bg-white rounded-lg ml-14 mt-10 p-5'>
      <div className='flex justify-between mx-14 mt-4'>
        <h1>UV index</h1>
        <WbSunnyOutlinedIcon />
      </div>
      <h1 className='text-3xl font-bold mt-5 mb-12 ml-20'>4 Medium</h1>
      <div className='flex justify-evenly items-center'>
        <Blob number='0-2' />
        <Blob number='3-5' />
        <Blob number='6-7' />
        <Blob number='8-10' />
        <Blob number='11+' />
      </div>
    </div>
  )
}

export default UV
