/*
    ===============================
            Drop Styles
    ===============================
*/

import styled from "styled-components";

export const Form_el = styled.div`
  padding: 100px 0;
  text-align: center;
`

export const Form_title = styled.h2` 
  font-size: 60px;
  margin-bottom: 30px;

  @media (max-width:575px) {
    font-size: 40px
  }

`

export const Title_span = styled.span`
  font-weight: normal;
  color: #eb5424;
`

export const Form = styled.form`
  margin: auto;

  @media (max-width:575px) {
    width: 90%
  }

`

export const Input = styled.input`
  box-sizing: border-box;
  outline: 0;
  padding: 5px;
  margin-bottom: 10px;
`

export const FormInput = styled.div`
  overflow: hidden;
`

export const Input_text = styled(Input)`
  float: left;
  width: 49%;

  @media (max-width:575px) {
    width: 100%;
  }
`

export const Input_email = styled(Input)`
  float: right;
  width: 49%;

  @media (max-width:575px) {
    width: 100%;
  }

`
export const Input_exp = styled(Input)`
width: 100%;
`

export const Textarea = styled.textarea`
  width: 100%;
  outline: 0;
  background: #ddd;
`

export const Input_submit = styled(Input)`
  width: 60%;
  background: #eb5424;
  border: 1px solid #ccc;
  color: #fff;
  cursor: pointer;
`

