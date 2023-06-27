import { Line } from 'rc-progress'

const Blob = ({ number }: { number: string}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p>{number}</p>
      <Line
        percent={30}
        strokeWidth={4}
        className='w-4 h-2 rounded-lg'
        strokeColor='#8f9bf7'
      />
    </div>
  )
}

export default Blob
