import React from 'react'
import './about.css'
import Bumi from '../../assets/aboutus-earth.png'

function About() {
  return (
    <div className='abt__about section__padding'>
      <div className="abt__about-content">
        <div className="abt__about-content_button">
          <p className='kiri'><a href="">siapa kami?</a></p>
          <p className='kanan'><a href="">seberapa bahaya perubahan iklim?</a></p>
        </div>
        
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
          </div>
          <div className="abt__about-content_about-us_right">
            <img src={Bumi} alt="" />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About