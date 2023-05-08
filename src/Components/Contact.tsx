import React from "react";
import NavBarComp from "./NavBarComp";

function Contact (){
    return (
        <React.Fragment>
            <NavBarComp/>
            <div className="container"  style={containerStyles}>
                <p style={{textAlign: 'center'}}>For support, feedback or suggestions</p>
                <p style={{textAlign: 'center'}}>please drop a mail at</p>
                <p style={{textAlign: 'center'}}><strong>maitreyi.paweria@jci.com</strong></p>
            </div>
        </React.Fragment>
    )
}
const containerStyles = {
    width: '30rem',
    marginTop: '3rem',
    backgroundColor: '#f5f5f5',
    border: '1px solid lightgray',
    borderRadius: '1rem',
    padding: '1rem'
}
export default Contact;