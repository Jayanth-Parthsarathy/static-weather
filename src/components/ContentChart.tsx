import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Example from './AreaChart'
import ChartIcons from './ChartIcons'
const ContentChart = () => {
  return (
    <div className='flex flex-col mt-12 mx-20 bg-white rounded-3xl '>
      <div className='flex justify-between items-center p-4 px-10'>
        <div className='text-base'>Upcoming hours</div>
        <div className='flex gap-5 text-sm'>
          <div className='bg-gray-100 rounded-md p-1'>
            Rain precipitation <KeyboardArrowDownIcon fontSize='inherit' />
          </div>
          <div className='bg-gray-100 rounded-md p-1'>
            Next days <ChevronRightIcon fontSize='inherit' />
          </div>
        </div>
      </div>
      <div className='mb-3 w-12/12'>
        <ChartIcons />
      </div>
      <div className='mb-4 mt-8 w-full'>
        <Example /> 
      </div>
    </div>
  )
}

export default ContentChart
