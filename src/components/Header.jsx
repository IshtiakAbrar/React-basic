import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h2>
                {props.text}
            </h2>
            <p> Navbar <br/>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>Logout</li>
            </ul>
            </p>
        </div>
    );
};

export default Header;