import { Box, Button, Card, Grid} from "@mui/material";
import React from "react";
// import './Herobanner.scss';
import Slider from "react-slick";



const Currosels = () => {
const settings ={
    dots: true,
    infinite:true,
    slidestoShow:1,
    slidetoScroll:1,
    speed:500,
    autoplay:true,
    autoplaySpeed:2000,
}

  return (
    <Card>
        <Slider {...settings}>
            <div className='currosle'>
                <img src="https://staticassets.redchillies.com/wp-content/uploads/2023/09/1920-x-676_Chaleya.jpg"/>
            </div>
            <div className='currosle'>
                 <img src="https://staticassets.redchillies.com/wp-content/uploads/2023/09/1920-x-676_Trio.jpg"/>
            </div>
            <div className='currosle'>
            <img src="https://staticassets.redchillies.com/wp-content/uploads/2023/09/1920-x-676_5Looks.jpg"/>
            </div>
            {/* {renderImage(Images)} */}
        </Slider>
        
    </Card>
  );
};
export default Currosels;