import IconComponent from './IconComponent'

const ChartIcons = () => {
  return (
    <div className='w-bg-white flex gap-8 items-center justify-evenly mt-5'>
      <IconComponent weather={true} temperature={27} time='Now' />
      <IconComponent weather={true} temperature={28} time='11:00' />
      <IconComponent weather={false} temperature={28} time='12:00' />
      <IconComponent weather={false} temperature={29} time='13:00' />
      <IconComponent weather={true} temperature={30} time='14:00' />
      <IconComponent weather={false} temperature={29} time='15:00' />
      <IconComponent weather={false} temperature={29} time='16:00' />
      <IconComponent weather={true} temperature={28} time='17:00' />
    </div>
  )
}

export default ChartIcons
