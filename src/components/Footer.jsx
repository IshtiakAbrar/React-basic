import React from 'react';

const Footer = () => {
    let name="Ishtiak";
    return (
        <div className='footer_div'>
            <h2>This is footer section.</h2>

            <p id='rights'>All rights reserved {name}</p>
            
        </div>
    );
};

export default Footer;