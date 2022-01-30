import * as React from "react"
import { useState, useEffect } from "react";
import {Button, Paragraph, Page} from "./styled_components";





export default function CatFacts() {

    function fetch_cat_fact() {
        fetch("https://catfact.ninja/fact").then(
            (response) => response.json()
            ).then((json) => {
            set_current_fact(json.fact)      
        }) 
    }

    useEffect(() => {
        fetch_cat_fact() //To generate a starting fact on component mount (page load)
    }, []); // dependancy array to stop useEffect from firing repeatedly

    const [current_fact, set_current_fact] = useState("");

    return(
        <Page>
            <Paragraph>{current_fact}</Paragraph>
            <Button onClick= {(e) => {
            e.preventDefault(); // Prevents button from being pressed on component mount
            fetch_cat_fact();
            }} >Generate Cat Fact</Button>
        </Page>
        
    )
}
