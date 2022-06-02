import React from 'react';

import {Home_el, Home_information, Home_title, Home_info, Home_desc, Home_desc_span, Home_btn } from './style.js'



function Home () {
  return (
    <Home_el id=''>
        <div className="container">
            <Home_information>
                <Home_title>AHMED ISMAIL</Home_title>
                <Home_info >Creative Director</Home_info>
                <Home_desc>
                    Iam a professional <Home_desc_span>UX Designer</Home_desc_span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </Home_desc>
                <Home_btn >Let's Begin</Home_btn>
            </Home_information>
        </div>
    </Home_el>
  );
}

export default Home;
