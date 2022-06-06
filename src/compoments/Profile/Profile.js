import { useEffect, useState } from 'react';


import {ProfileSkills, ProfileSection, ProfileTitle, ProfileList, ProfileItem, ItemSpan, Skills, SkillsTitle, SkillsDesc, Bar, BarTitle, BarPerc,
        Parent, ParentSpan} from './style.js';

const Profile = () => {

  let [barData, setBarData] = useState([]);

  useEffect(() => {
    fetch('js/data.json')
    .then(response => response.json())
    .then(JsonData => setBarData(JsonData.profile));
  }, []);

const OurBarData = barData.map((bar) => {
  return(
    <Bar key={bar.id}>
        <BarTitle>{bar.title}</BarTitle>
        <BarPerc>{bar.perc}</BarPerc>
        <Parent>
          <ParentSpan width={bar.perc}></ParentSpan>
        </Parent>
    </Bar>
  )
})

  return (
    <div>
             
        <ProfileSkills id='resume'>
            <div className="container">

                <ProfileSection>
                    <ProfileTitle><span>My </span>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <ItemSpan>Name</ItemSpan>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Birthday</ItemSpan>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Address</ItemSpan>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Phone</ItemSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Email</ItemSpan>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Website</ItemSpan>
                            <ItemSpan web >www.google.com</ItemSpan>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSection>
                
                <Skills>
                    <SkillsTitle>Some <span>skills</span></SkillsTitle>
                    <SkillsDesc>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>

                    {OurBarData}

                </Skills>
                
            </div>
        </ProfileSkills>
    </div>
  )
}

export default Profile
