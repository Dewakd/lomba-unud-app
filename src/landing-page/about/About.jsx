import React, {useState} from 'react'
import './about.css'
import Bumi from '../../assets/aboutus-earth.png'
import { DataClimate } from './Data';
import Carousel from 'react-elastic-carousel'


const Abouts = () => (
  <>
  <div className="abt__about-content_about-us section__margin">
      <div className="abt__about-content_about-us_left">
        <h1>Rawat Bumi Anda Bersama Naturesia</h1>
        <p>Naturesia adalah komunitas yang berlokasi di Jakarta, Indonesia. Berdiri pada tahun 2013 dan secara resmi didirikan
        pada tahun 2015. 
        Adanya komunitas kami untuk <span> mengatasi, membantu dan bahkan 
        mencegah hal-hal yang akan terjadi atau belum terjadi akibat adanya
        Perubahan Iklim. </span> Kami
        telah bekerja sama dengan beberapa instansi 
        dan komunitas
        lainnya demi mewujudkan harapan kita semua, yaitu bumi
        dan masyarakat yang sehat.
        </p>
        <button>Read more about us</button>
      </div>
      <div className="abt__about-content_about-us_right">
        <img src={Bumi} alt="" />
      </div>
    </div>
  </>
)

const breakPoints = [
  {width: 500, itemsToShow: 1},
  {width: 768, itemsToShow: 2},
  {width: 1000, itemsToShow: 3},
  {width: 1200, itemsToShow: 4},
]

const Info = () => (
  <>
   <div className="abt__about-content_about-info section__margin">
      <h1>How Danger is Climate Change is?</h1>
      <div className="abt__about-content_about-info_card-container">
        <Carousel breakPoints={breakPoints}>
        {DataClimate.map((item) => (
        <div className="abt__about-content_about-info_card-container_card">
          <h2>{item.id}</h2>
          <p>{item.title}</p>
          <span>{item.desc}</span>
          <div className="abt__about-content_about-info_card-container_card-link">
            <a href="#">{item.read}</a>
            <img src={item.img} alt="" />
          </div>
        </div>
        ))}
        </Carousel>
          
      </div>
    </div>
  </>
)

function About() {
  const [toggleMenu, setToggleMenu] = useState("about");
  return (
    <div className='abt__about section__padding'>
      <div className="abt__about-content">
        <div className="abt__about-content_button">
          <p className='kiri' onClick={() => setToggleMenu("about")}>siapa kami?</p>
          <p className='kanan' onClick={() => setToggleMenu("info")}>seberapa bahayanya perubahan iklim?</p>
        </div>
        
        {toggleMenu === "about" && <Abouts/>}
        {toggleMenu === "info" && <Info/>}
        
      </div>
    </div>
  )
}

export default About