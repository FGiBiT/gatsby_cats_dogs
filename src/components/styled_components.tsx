import styled from "styled-components"; 

const Button = styled.button`
    border-radius: 8px;
    color: rebeccapurple; 
    margin-bottom: 20px;
    margin-top: 20px;
`

const Paragraph = styled.p`
    height: 120px; // I want to use a set height so the button to generate doesn't jump up and down depending on fact length
    border-style: groove;
    border-radius: 8px;
    justify-content: center;
`

const Page = styled.div`
    justify-content: center;
`

const Image_div = styled.div`
    height: 300px; //to stop the "generate button" from jumping up and down when the picture changes
`

const Input_field = styled.input`
    border-radius: 8px;
`

const Site_header = styled.h1`
    font-family: "Lucida Console", "Courier New", monospace;
`

export { Button, Paragraph, Page, Image_div, Input_field, Site_header };