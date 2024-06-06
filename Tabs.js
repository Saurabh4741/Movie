import { Box, Button, Card, Grid, Tabs, Tab} from "@mui/material";
import React, { useState } from "react";
// import './Herobanner.scss';
import Slider from "react-slick";



const TabsComp = () => {
    const [activeTab, setActiveTab]= useState('Tab1')
    const handleTabChange =(tab)=>{
        setActiveTab(tab);
    }

  return (
    <>
    <Box className='tab-panel'>
        <div>
            <button onClick={() => handleTabChange('Tab1')} className={activeTab ==='Tab1' ? 'active' :'dactive'} >
            SYNOPSIS
            </button>
            <button onClick={() => handleTabChange('Tab2')} className={activeTab ==='Tab2' ? 'active' :'dactive'} >
            CREW & CAST
            </button>
            <button onClick={() => handleTabChange('Tab3')} className={activeTab ==='Tab3' ? 'active' :'dactive'} >
            GALLEARY
            </button>
            {/* <Tab label='SYNOPSIS' />
            <Tab label='CREW & CAST' />
            <Tab label='GALLEARY' /> */}
        </div>
        
    </Box>
    <Box className="content-wrapper">
            {activeTab === 'Tab1' &&
            <>
            <div>A high-octane action thriller which outlines the emotional journey of a man who is set to rectify the wrongs in the society.</div>
            <h1>Other Movies</h1>
            </>
            
            }
            {activeTab === 'Tab2' &&
           <>
           <div>Cast: Starring Shah Rukh Khan, Nayanthara, Vijay Sethupathi and Deepika Padukone (in a special appearance)</div>
           <div>Director: Atlee</div>
           <h1>Other Movies</h1>
           </>}
           {activeTab === 'Tab3' &&
            <>Pictures <h1>Other Movies</h1></>}

        </Box>

    </>
  );
};
export default TabsComp;