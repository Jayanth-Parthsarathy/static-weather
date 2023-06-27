import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: '23%',
    uv: 500,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '29%',
    uv: 750,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '58%',
    uv: 1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '75%',
    uv: 1500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '33%',
    uv: 600,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '20%',
    uv: 300,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '73%',
    uv: 1500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '49%',
    uv: 1400,
    pv: 4300,
    amt: 2100,
  },
]

export default function Example() {
  return (
    <div className='flex justify-center'>
      <ResponsiveContainer height={180} width="85%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid vertical={true} horizontal={false} />
          <XAxis dataKey='name' />
          <Tooltip />
          <Area type='linear' dataKey='uv' stroke='#8884d8' fill='#539fef' />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
