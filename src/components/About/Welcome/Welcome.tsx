import React from 'react';
import background from "../../../assets/base.svg";
import front from "../../../assets/front.svg";
import InputSearch from "./InputSearch/InputSearch";

const Welcome = () => {
    return (
        <div className="main-header">

            <div className="layers">

                <div style={{zIndex: 1}}>

                    <div className="layer__header">
                        {/*<div className="navBar">
                                        <p> О нас</p>
                                    </div>
                                    <div className="layers__caption">TRAVELANYWHEREKEY</div>*/}
                        <div className="layers__title">ДОБРО ПОЖАЛОВАТЬ<br/> В ОАЭ</div>
                    </div>



                </div>


                {/*<div className="layer layers__base" style={{backgroundImage: `url(${background})`}}></div>
                <div className="layer ">
                    <img src={front} className="layers__front"/></div>*/}
            </div>
        </div>
    );
};

export default Welcome;