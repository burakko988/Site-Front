import Events from '../../components/Home/events/events';
// import SearchBar from '../../components/Home/Search/search';
import ImageCarousel from '../../components/Home/Slider/slider';


const Home = () => {
  return (
    <div style={{justifyContent:"center",display:"flex", flexDirection:"column"}}>
      <ImageCarousel/>
      <h1>HOME</h1>
      <Events />
    </div>
  )
}

export default Home;