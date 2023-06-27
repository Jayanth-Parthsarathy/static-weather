import ContentChart from "./ContentChart"
import ContentHeader from "./ContentHeader"


const Content = () => {
  return (
   <div className='h-full w-9/12 justify-self-end bg-blue-100 flex flex-col'>
      <ContentHeader />
      <ContentChart />
    </div>
)
}

export default Content
