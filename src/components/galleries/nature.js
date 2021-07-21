import './nature.css'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "../../slick-1.8.1/slick/slick-theme.css"
import "../../slick-1.8.1/slick/slick.css"
import App from '../../App'


export default function Nature () {

  const [photos, setPhotos] = useState([])
  console.log('photos', photos)
  const failed = 'https://httpstatusdogs.com/img/204.jpg'
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    centerMode: true,
    // variableWidth: true
  }
  const photosUrl = 'http://localhost:5000/photos/nature'

  useEffect(() => {
    let getPhotos = async () => {
      let response = await fetch('http://localhost:5000/photos/nature')
      let data = await response.json()
      setPhotos(data);
    }
    getPhotos()
  }, [])


return (


<div>
        <h2> The World Through My Eyes</h2>

        {photos && photos.map(p => {
          return(

        <Slider {...settings}>

          <div>
            <img src={p.image_url} alt='not found'  height="500"/>
          </div>
          <div>
            <img src={failed} alt='not found'/>
          </div>
          <div>
            <img src={failed} alt='not found'/>
          </div>
          <div>
            <img src={failed} alt='not found'/>
          </div>
          <div>
            <img src={failed} alt='not found'/>
          </div>
          <div>
            <img src={failed} alt='not found'/>
          </div>
        </Slider>)
        })}
      </div>
  )
}
