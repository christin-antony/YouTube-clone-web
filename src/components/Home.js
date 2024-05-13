import React from 'react'
import { useState } from "react"; 
import Main2 from './Main2';
import Main from './Main';
import Side from './Side';
import Side2 from './Side2';
import Header from './Header';



const Home = () => {
    const [currentComponent, setCurrentComponent] = useState("Side");
    const [isToggled, setIsToggled] = useState(false);

    const handleIconClick = () => {
        setCurrentComponent(currentComponent === "Side" ? "Side2" : "Side");
        setIsToggled(!isToggled);

    };

    return (
        <div>
            <Header onIconClick={handleIconClick} />

            <div style={{ display: "flex" }}>
                {currentComponent === "Side" ? <Side2 /> : <Side />}
                <div>

                    <Main isToggled={isToggled} />


                    <Main2 isToggled={isToggled} />


                </div>
            </div>

        </div>
    )
}

export default Home
