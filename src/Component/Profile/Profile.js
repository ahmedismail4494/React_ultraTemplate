import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Profile_Skills, Profile_el, Profile_title, Profile_list, Profile_item, Profile_span, Skills_el, Skills_title,
        Skills_desc, Skills_bar, Bar_title, Bar_perc, Bar_parent, Bar_parent_span, Title_span,  } from "./style.js";


function Profile () {

  const [skills , setSkills] = useState([]);
  useEffect( () => { axios.get('js/data.json').then(res => { setSkills(res.data.profile)} ) } , [] );
  const Allskills = skills.map( (skill) => {return(
    <Skills_bar key={skill.id}>
      <Bar_title>{skill.title}</Bar_title>
        <Bar_perc>{skill.perc}</Bar_perc>
        <Bar_parent>
          <Bar_parent_span sp={skill.id}></Bar_parent_span>
        </Bar_parent>
    </Skills_bar>
  )} )







  return (
           
    <Profile_Skills id='Profile' >
        <div class="container">
            <Profile_el>
                <Profile_title><Title_span>My </Title_span>Profile</Profile_title>
                <Profile_list>
                    <Profile_item>
                        <Profile_span>Name</Profile_span>
                        Hamza Nabil
                    </Profile_item>
                    <Profile_item>
                        <Profile_span>Birthday</Profile_span>
                        21/1/1996
                    </Profile_item>
                    <Profile_item>
                        <Profile_span>Address</Profile_span>
                        Ain shams
                    </Profile_item>
                    <Profile_item>
                        <Profile_span>Phone</Profile_span>
                        4444 5555 6666
                    </Profile_item>
                    <Profile_item>
                        <Profile_span>Email</Profile_span>
                        hamza@hamza.com
                    </Profile_item>
                    <Profile_item>
                        <Profile_span>Website</Profile_span>
                        <Profile_span class="web">www.google.com</Profile_span>
                    </Profile_item>
                </Profile_list>
            </Profile_el>
            
            <Skills_el>
                <Skills_title>Some <Title_span>skills</Title_span></Skills_title>
                <Skills_desc>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </Skills_desc>
                
                { Allskills }

            </Skills_el>  
        </div>
    </Profile_Skills>
            
  );
}

export default Profile;
