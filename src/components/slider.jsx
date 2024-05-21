import React, { useState } from "react";
import slider1 from '../img/slider1.jpg';
import slider2 from '../img/slider2.png';
import slider3 from '../img/slider3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const HSlider = () => {
 const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  const sliders_ = [
    {
      title: "Existen una de especies",
      description: "Arboles y plantas que se encuentran en el parque, conoce más sobre ellas.",
      buttonText: "Ingresar",
      href: "/login",
      imageUrl: slider1,
    },
    {
      title: "Conoce más sobre el parque",
      description: "Conoce más sobre el parque, su historia y sus especies.",
      buttonText: "Ingresar",
      href: "/login",
      imageUrl: slider2,
    },
    {
      title: "Conoce más sobre el parque",
      description: "Conoce más sobre el parque, su historia y sus especies.",
      buttonText: "Ingresar",
      href: "/login",
      imageUrl: slider3,
    },

  ];

  return (
    <Carousel autoPlay={true}  interval={13000} infiniteLoop={true} transitionTime={200}  swipeable={false}  > 
      {sliders_.map((item, index) => (
         <div className="item-slider" key={index} style={{ backgroundImage: `url(${item.imageUrl})` }}>
         <div className="overlay" style={{ background: "rgba(0,0,0,.2)" }}></div>
         <div className="container">
           <div className="row fullscreen justify-content-center align-items-center">
             <div className="col-md-10 col-12">
               <div className="banner-content text-center">
                 <h4 className="text-white mb-20 text-uppercase" style={{fontWeight:"bold"}}>{item.title}</h4>
                 <h1 className="text-uppercase text-white" style={{fontWeight:"bold"}}>{item.title} </h1>
                 <p className="text-white" style={{fontWeight:"bold"}}>{item.description}</p>
               </div>
             </div>
           </div>
         </div>
       </div>
      ))

      }
</Carousel>
  );
}

export default HSlider;

