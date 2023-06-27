import ContentChart from "./ContentChart"
import ContentHeader from "./ContentHeader"
import ContentMiniCharts from "./ContentMiniCharts"


const Content = () => {
  return (
   <div className='h-full fixed top-0 right-0 w-9/12 justify-self-end bg-blue-100 flex flex-col'>
      <ContentHeader />
      <ContentChart />
      <ContentMiniCharts />
    </div>
)
}

export default Content
