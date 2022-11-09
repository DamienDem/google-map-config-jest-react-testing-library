import type { NextPage } from 'next'
import DetailCard from '../components/detailCard/detailCard'
import Header from '../components/header/header'
import Map from '../components/map/map'
import Sidebar from '../components/sidebar/sidebar'


const Home: NextPage = () => {
  return (
    <>
    <Header/>
    <DetailCard/>
    <Sidebar/>
    <Map/>
    </>
  )
}

export default Home
