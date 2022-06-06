import {ContactSection, ContacTitle, Span, Form, FormInput, InputText, InputEmail, 
        InputSub, Textarea, InputSubmit } from'./style.js';


const Contact = () => {
  return (
    <div >
        <ContactSection>
            <div className="container">
                <ContacTitle><Span> Drop </Span>Me A line</ContacTitle>
                <Form >
                    <FormInput>
                        <InputText type='text' placeholder="Your Name" />
                        <InputEmail type='email' placeholder="Your Email" />
                    </FormInput>
                    <InputSub type='text' placeholder="Your Subject" />
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <InputSubmit type="submit" value="Send Message" />
                </Form>
            </div>
        </ContactSection>
    </div>
  )
}

export default Contact;