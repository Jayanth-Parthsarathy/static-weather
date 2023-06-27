import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
interface IconComponentProps {
  time: string
  temperature: number
  weather: boolean
}
const IconComponent = ({ time, temperature, weather }: IconComponentProps) => {
  return (
    <div className='flex flex-col justify-center items-center gap-1'>
      <div>{time}</div>
      <div>{weather ? <WbSunnyOutlinedIcon fontSize='medium' /> : <CloudOutlinedIcon />}</div>
      <div className='text-xl font-bold'>{temperature}°</div>
    </div>
  )
}

export default IconComponent
