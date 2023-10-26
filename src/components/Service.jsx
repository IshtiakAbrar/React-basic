import React from 'react';

const Service = () => {
    let car=["oil change","Engine checkup","Overhaul","Scanning"];
    let home=["clothes wash","dish wash","floor wash","interior clean"];
    let option =car;
    //conditional rendering

    if(option === car) {
        return (
            <div>
                <h2>This is service section.</h2>

                <p>Our car service includes.............</p>
                {/*loops to iterate services*/}
                <ul>
                    {car.map((service) => {
                        return (<li>{service}</li>)
                    })
                    }
                </ul>
                <button>Contact us</button>
            </div>
        );
    }

    else{
        return (
            <div>
                <h2>This is service section.</h2>

                <p>Our home service includes.............</p>
                {/* loops to iterate services*/}
                <ul>
                    {home.map((service) => {
                        return (<li>{service}</li>)
                    })
                    }
                </ul>

            </div>
        );
    }
};

export default Service;