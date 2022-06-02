import React from 'react';

import {Form_el, Form_title, Title_span, Form, FormInput, Input_text, Input_email, Input_exp, Textarea, Input_submit } from './style.js';


function Contact () {
    return (  

      
      <Form_el>
          <div className="container">
              <Form_title><Title_span>Drop </Title_span>Me A line</Form_title>
              <Form>
                  <FormInput>
                      <Input_text type="text" placeholder="Your Name" />
                      <Input_email type="email" placeholder="Your Email" />
                  </FormInput>
                  <Input_exp type="text" className="sub" placeholder="Your Subject" />
                  <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                  <Input_submit type="submit" value="Send Message" />
              </Form>
          </div>
      </Form_el>

    );
};

export default Contact;
