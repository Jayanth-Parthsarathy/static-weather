import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const ContentHeader = () => {

  return (
    <div className='flex justify-between items-center mt-5 mx-9'>
      <div>
        <p className='text-lg font-bold'>Welcome back Jacob!</p>
        <p> Check out today's weather information</p>
      </div>
      <div className='flex items-center gap-5'>
        <MoreHorizIcon />
        <img src='/avatar.jpeg' alt='avatar' className='w-12 h-12 rounded-lg' />
      </div>
    </div>
  )
}

export default ContentHeader
