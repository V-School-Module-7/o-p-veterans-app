import React from 'react'
import styled from 'styled-components';

const FormFieldContainer = styled.div`
position: absolute;
width: 375px;
height: 476px;
left: 50px;
top: 2058px;

/* Primary/White */

background: #FFFFFF;
/* White/Tints & Shades/Dark 1 */

border: 1px solid #F4F4F4;
box-sizing: border-box;
`;

const Label = styled.label`
position: absolute;
width: 80px;
height: 16px;
left: 0px;
top: 0px;

font-family: Open Sans;
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 16px;

display: flex;
align-items: center;
letter-spacing: 0.02em;

color: #545454;
`;

const Input = styled.input`
position: absolute;
height: 1px;
left: 1px;
right: -1px;
top: 23px;

background: #545454;
`;

const FormField = ({ label, type, name, placeholder, required }) => {
  return (
    <FormFieldContainer>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} required />
    </FormFieldContainer>
  );
};

export default FormField;