import React from 'react'
import './reasons.css'
import Earth from '../../assets/aboutclimate-rotted-earth.png'
import Industri from '../../assets/aboutclimate-industri.png'
import Cars from '../../assets/aboutclimate-cars.png'
import Tree from '../../assets/aboutclimate-trees.png'
import Mining from '../../assets/aboutclimate-mining.png'
import {Datas} from './Data'

function Reasons() {
  return (
    <div className="rsn-reason-content section__margin">
      <div className="rsn-reason-content_upper-content">
        <h3>Tau Ga Sih Kamu?</h3>
        <h1>Hal - hal di bawah ini penyebab <br/>ada nya perubahan iklim ekstrim</h1>
      </div>

      <div className="rsn-reason-content_bottom-content-container">
          <img src={Earth} alt="" />
          <div className="line"></div>
          <div className="rsn-reason-content_bottom-content-right">
          
            <div className="rsn-reason-content_bottom-content-right_list-left">
              <img src={Industri} alt="" />
              <div className="right-content">
                  <h3>Emisi Industri</h3>
                  <p>Negara kita masih menghasilkan listrik dan panas dengan bahan bakar fosil, hal tersebut merupakan satu penyebab utama emisi global</p>
              </div>
            </div>

            <div className="rsn-reason-content_bottom-content-right_list-left">
              <img src={Cars} alt="" />
              <div className="right-content">
                  <h3>Penggunaan Transportasi</h3>
                  <p>Mobil, truk, kapal dan pesawat menggunakan bahan bakar fosil. Hal ini menjadikan transportasi penyumbang utama emisi karbon dioksida.</p>
              </div>
            </div>

            <div className="rsn-reason-content_bottom-content-right_list-left">
              <img src={Tree} alt="" />
              <div className="right-content">
                  <h3>Kebakaran hutan</h3>
                  <p>Kebakaran hutan sering terjadi saat musim kemarau, hal tersebut berisiko meningkatkan PM 2.5 di udara dan hal ini menyebabkan banyak dampak negatif lainnya.</p>
              </div>
            </div>

            <div className="rsn-reason-content_bottom-content-right_list-left">
              <img src={Mining} alt="" />
              <div className="right-content">
                  <h3>Pertambangan</h3>
                  <p>Proses penambangan ini menyebabkan debu dan bahan kimia dilepaskan di udara. Udara tercemar ini menyebabkan turunnya fungsi para pekerja dan penduduk sekitar.</p>
              </div>
            </div>

          </div>
          
      </div>
    </div>
  )
}

export default Reasons