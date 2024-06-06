import { Box, Button, Card, Grid} from "@mui/material";
import React from "react";
// import './Herobanner.scss';
import Slider from "react-slick";



const CardsComp = () => {
const settings ={
    dots: true,
    infinite:true,
    slidestoShow:3,
    slidetoScroll:4,
    speed:500,
    // autoplay:true,
    // autoplaySpeed:2000,
}

  return (
    <Card>
        <Slider {...settings}>
            <div className='currosles'>
                <img src="https://staticassets.redchillies.com/wp-content/uploads/2021/08/600x800-1.jpeg"/>
            </div>
            <div className='currosles'>
                 <img src="https://staticassets.redchillies.com/wp-content/uploads/2018/06/600x800.jpg"/>
            </div>
            <div className='currosles'>
            <img src="https://staticassets.redchillies.com/wp-content/uploads/2021/08/BOB-BISWAS_600x800_logo_L.png"/>
            </div>
            <div className='currosles'>
                <img src="https://staticassets.redchillies.com/wp-content/uploads/2021/08/600x800-1.jpeg"/>
            </div>
            <div className='currosles'>
                 <img src="https://staticassets.redchillies.com/wp-content/uploads/2018/06/600x800.jpg"/>
            </div>
            <div className='currosles'>
            <img src="https://staticassets.redchillies.com/wp-content/uploads/2021/08/BOB-BISWAS_600x800_logo_L.png"/>
            </div>
            <div className='currosles'>
                <img src="https://staticassets.redchillies.com/wp-content/uploads/2021/08/600x800-1.jpeg"/>
            </div>
            <div className='currosles'>
                 <img src="https://staticassets.redchillies.com/wp-content/uploads/2018/06/600x800.jpg"/>
            </div>
            <div className='currosles'>
            <img src="https://staticassets.redchillies.com/wp-content/uploads/2021/08/BOB-BISWAS_600x800_logo_L.png"/>
            </div>
            <div className='currosles'>
                <img src="https://staticassets.redchillies.com/wp-content/uploads/2021/08/600x800-1.jpeg"/>
            </div>
            <div className='currosles'>
                 <img src="https://staticassets.redchillies.com/wp-content/uploads/2018/06/600x800.jpg"/>
            </div>
            <div className='currosles'>
            <img src="https://staticassets.redchillies.com/wp-content/uploads/2021/08/BOB-BISWAS_600x800_logo_L.png"/>
            </div>
            <div className='currosles'>
                <img src="https://staticassets.redchillies.com/wp-content/uploads/2021/08/600x800-1.jpeg"/>
            </div>
            <div className='currosles'>
                 <img src="https://staticassets.redchillies.com/wp-content/uploads/2018/06/600x800.jpg"/>
            </div>
            <div className='currosles'>
            <img src="https://staticassets.redchillies.com/wp-content/uploads/2021/08/BOB-BISWAS_600x800_logo_L.png"/>
            </div>
            <div className='currosles'>
                <img src="https://staticassets.redchillies.com/wp-content/uploads/2021/08/600x800-1.jpeg"/>
            </div>
            <div className='currosles'>
                 <img src="https://staticassets.redchillies.com/wp-content/uploads/2018/06/600x800.jpg"/>
            </div>
            <div className='currosles'>
            <img src="https://staticassets.redchillies.com/wp-content/uploads/2021/08/BOB-BISWAS_600x800_logo_L.png"/>
            </div>
            {/* {renderImage(Images)} */}
        </Slider>
        
    </Card>
  );
};
export default CardsComp;