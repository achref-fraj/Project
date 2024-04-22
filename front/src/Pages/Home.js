import AppAbout from '../components/about';
import AppContact from '../components/contact';
import Example from '../components/filter';
import AppHero from '../components/hero';
import AppLook from '../components/look';
import Main from '../components/main';
import Item from './item';
import Panier from './panier';






const Home = () => {
  return (
    <>
       <AppHero/>
      <AppAbout/>
      <Main/>
      <AppLook/>
      <Example/>
      <Item/>
      <Panier/>
      <AppContact/>
      
      
    
    
    </>
  )
}

export default Home
    