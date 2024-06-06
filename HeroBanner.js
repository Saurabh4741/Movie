/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Button, Grid } from "@mui/material";
import React from "react";
// import './Herobanner.scss';
import drawericon from '../src/asset/icons8-menu-48.png'
import currosels from "./currosels";
import Currosels from "./currosels";
import TabsComp from "./Tabs";
import CardsComp from "./CardsComp";





const redchillie = () => {

  return (
    <>
    <div className="heroBanner-wrapper">
      <Grid container md={12} lg={12}>
        <Grid item md={6} lg={6}>
          <Box className="btn-logo-wrapper">
          <img src={drawericon}  className="btn"/>
          <img src="https://staticassets.redchillies.com/wp-content/themes/redchillies/img/red_logo_old.png"/>
          </Box>
        </Grid>
        <Grid item md={6} lg={6}>
        </Grid>
      </Grid>
     <Box className="headings-wrapper">
      <h1 className="title">JAWAN</h1>
      <h2>07 September 2023</h2>
     </Box>
    </div>
    <Box>
      <Currosels />
    </Box>
    <Box>
      <TabsComp />
    </Box>
    <Box>
      <CardsComp />
    </Box>
    </>
  );
};

export default redchillie;














// const HeroBannerWithCards = () => {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//      fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
//         .then((response) => response.json())
//         .then((data) => {
//            console.log(data);
//            setPosts(data);
//         })
//         .catch((err) => {
//            console.log(err.message);
//         });
//   }, []);
//   return (
//     <div className="hero-banner-with-cards">
//       <Container>
//       {posts.map((post)=> {
//         return (
//           <>
//           <h1>{post.title}</h1>
//           <p>{post.body}</p>
//           </>
//         )
//       })}
//       </Container>
//     </div>
//   );
// };

// export default HeroBannerWithCards;
