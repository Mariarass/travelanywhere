import React  from 'react';
import Welcome from "./Welcome/Welcome";
import Services from "./Services/Services";
import Reviews from "./Reviews/Reviews";



const About = () => {

    return (



        <div className="App">
            <div className="wrapper">
                <div className="content">


                    <Welcome/>
                    <Services/>


                </div>
            </div>


        </div>


    );
};

export default About;