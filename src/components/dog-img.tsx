import * as React from "react"
import { useState, useEffect } from "react";
import { Button, Paragraph, Page, Image_div, Input_field } from "./styled_components"


var img_name = process.env.STATIC_DOG;
var five_or_six = 5;

function DogForm() {

    const [dog_number, set_dog_number] = useState();

    const handle_input = (event: any) => { 
        set_dog_number(event.target.value);
      };

    if (dog_number) {
        if (check_binary(dog_number) !== null) {
            img_name = "special_dog.jpg"

        } else if (dog_number < 0) {
            img_name = "dog1.jpg";

        } else if (dog_number > 100) {
            img_name = "dog10.jpg";

        } else if (is_prime(dog_number) === true) {
            const random_int = Math.floor(Math.random() * 3 + 2); // random int between 2 and 4
            img_name = `dog${random_int}.jpg`;

        } else if (dog_number != 0 && dog_number % 5 === 0) {
            if (five_or_six === 5) {
                img_name = "dog5.jpg";
                five_or_six = 6;
            } else if (five_or_six === 6) {
                img_name = "dog6.jpg";
                five_or_six = 5;
            }
            
        } else {
            img_name = process.env.STATIC_DOG;
        }
    }

    return (
        <div>
            <Input_field type="number" name="number_input" id="number_input" onChange={handle_input}/>
        </div>
    )
}


export default function DogImg() {

    const[update_image, set_update_image] = useState(""); // To reload the component and update the image.

    return (
    <Page>
    <Image_div>
    <img src={`../images/${img_name}`}/>  
    </Image_div>
    <DogForm/>
    <br></br>
    <Button onClick={(e) => {
            e.preventDefault();
            if (update_image == img_name) {
                set_update_image("force_update") // If it randomized the same image twice (on divisible by 5) it would not reload component because useState wouldnt be updated.
            } else if (img_name) {
                set_update_image(img_name)
            }    
        }}>Generate Dog Picture</Button>
    </Page> 
    )
}


// Functions

function is_prime(number: number) {

    for (let i = 2, s = Math.sqrt(number); i <= s; i++) { 
        if(number % i === 0) {
            return false; 
    }
}
    return number >= 1;
}

function check_binary(number: number) {

    const binary_string = (number >>> 0).toString(2) //this will also include "-1" for negative numbers which is all "1"s in binary.
    var all_ones = null;

    if (binary_string.length > 3) {
        all_ones = binary_string.match("^[1]+$") // returns null if string isn't all "1"s
    } 
    return all_ones;
}