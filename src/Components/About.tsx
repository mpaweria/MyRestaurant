import React from "react";
import NavBarComp from "./NavBarComp";

function About (){
    return (
        <React.Fragment>
            <NavBarComp/>
            <h1 style={{marginTop: '30px'}}>About Us</h1>
            <div className="container" style={{textAlign: "justify", marginTop: '30px'}}>
            <p>At our restaurant, we are passionate about creating delicious and memorable dining experiences for our guests. Our commitment to quality starts with our ingredients, as we carefully select the freshest and highest quality ingredients to use in our dishes. We believe that great food is the result of a combination of exceptional ingredients, expert preparation, and a commitment to serving our customers with warmth and hospitality.</p>

            <p>Our team of talented chefs have years of experience and are dedicated to creating dishes that are not only delicious, but also visually stunning. We take great pride in presenting our food in a way that is both pleasing to the eye and tantalizing to the taste buds.</p>

            <p>In addition to our food, we offer a wide selection of drinks, including a variety of cocktails, beer, wine, and non-alcoholic beverages. Our knowledgeable and friendly staff are always happy to recommend the perfect drink to accompany your meal.</p>

            <p>At our restaurant, we believe that dining should be an experience that engages all of your senses. From the moment you enter our doors, you'll be transported to a world of delectable flavors and inviting aromas. We take great care to create an ambiance that is both welcoming and sophisticated, with attention to every detail.</p>

            <p>We look forward to serving you and creating a dining experience that will be unforgettable. Thank you for choosing our restaurant, and we hope to see you soon!</p>
            </div>
        </React.Fragment>
    )
}

export default About;