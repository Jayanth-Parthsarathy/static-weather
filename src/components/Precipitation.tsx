import ThunderstormIcon from '@mui/icons-material/Thunderstorm'
import Blob from './Blob'

const Precipitation = () => {
  return (
    <div className='flex flex-col h-52 w-96 bg-white rounded-lg'>
      <div className='flex justify-between mx-14 mt-4'>
        <h3 className='l-14'>Precipitation</h3>
        <ThunderstormIcon />
      </div>
      <h1 className='text-3xl font-bold mx-auto mt-5 mb-10'>1.4cm</h1>
      <div className='flex justify-evenly items-center'>
        <Blob number={'10'} />
        <Blob number={'20'} />
        <Blob number={'30'} />
        <Blob number={'40'} />
        <Blob number={'50'} />
        <Blob number={'60'} />
        <Blob number={'70'} />
        <Blob number={'80'} />
        <Blob number={'90'} />
      </div>
    </div>
  )
}

export default Precipitation
