import React from 'react';

const Hero = () => {
    let salary=8;
    return (
        <div>
            <h2>This is hero section.</h2><p>(if/else)</p>

            {salary>=10?(<p>Rich people !</p>):(<p>poor like us ! :p</p>)}
        </div>
    );
};

export default Hero;