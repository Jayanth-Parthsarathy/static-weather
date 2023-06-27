import { IconButton } from '@mui/material'
import ToggleButton from './ToggleButton'
import AddIcon from '@mui/icons-material/Add'



const SideBarHeader= () => {
  return (
    <div className='w-full h-11 flex items-center justify-around mt-4'>
        <IconButton className="bg-white">
          <AddIcon />
        </IconButton>
        <IconButton className='flex w-fit gap-2'>
          <div className='h-1 w-4 bg-gray-200 rounded-lg'></div>
          <div className='h-1 w-1 rounded-full bg-gray-200'></div>
          <div className='h-1 w-1 rounded-full bg-gray-200'></div>
        </IconButton>
        <div className='flex justify-center items-center'>
          <span className='text-xs font-thin'>°C</span>
          <IconButton className=''>
            <ToggleButton />
          </IconButton>
          <span className='text-xs font-thin'>°F</span>
        </div>
      </div>

  )
}

export default SideBarHeader
