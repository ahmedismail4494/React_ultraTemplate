import React from 'react';
import {About_el, About_info, Info_title, Title_span, Info_dir, Info_desc, Info_desc_a } from "./style.js";



function About() {
  return (
    <About_el id="About" >
        <div class="container">
            <About_info>
                <Info_title><Title_span>This is</Title_span> Me</Info_title>
                <Info_dir>Creative Director</Info_dir>
                <Info_desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Info_desc_a href="#">explicabo</Info_desc_a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </Info_desc>
                <Info_desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </Info_desc>
            </About_info>
        </div>
    </About_el>
  );
}

export default About;
