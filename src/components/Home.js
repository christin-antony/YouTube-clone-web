import React, { useState } from 'react';
import Main2 from './Main2';
import Main from './Main';
import Side from './Side';
import Side2 from './Side2';
import Header from './Header';
import './Home.css';
import v1 from "./videos/v1.mp4";
import ima1 from './image/adu.jpg';
import ima2 from './image/messi.jpg';
import ima3 from './image/spa.jpg';
import ima4 from './image/bi.jpg';
import ima5 from './image/chep.jpg';
import ima6 from './image/santho.jpg';
import dp1 from './image/moviewood.png';
import dp2 from './image/mls.png';
import dp3 from './image/matinee.png';
import dp4 from './image/safari.png';
import dp5 from './image/Screenshot 2024-05-10 052419.png';
import dp6 from './image/safari.png';

const Home = () => {
    const [currentComponent, setCurrentComponent] = useState("Side");
    const [isToggled, setIsToggled] = useState(false);

    const handleIconClick = () => {
        setCurrentComponent(currentComponent === "Side" ? "Side2" : "Side");
        setIsToggled(!isToggled);
    };

    const data = [
        {thumbnail: ima1, dp: dp1, v1: v1, title: "Aadujeevitham |The GoatLife Official Trailer | A R Rahman| Prithviraj …", channel: "Visual Romance", views: "5M . 1 month ago", time: "1.31"},
        {thumbnail: ima2, dp: dp2, v1: v1, title: "Inter Miami vs LA Galaxy 2-1 - All Goals & Highlights - 2024", channel: "Major League Soccer", views: "6M . 1 weeks ago", time: "8.55"},
        {thumbnail: ima3, dp: dp3, v1: v1, title: "Spadikam 4K Remastered Malayalam Full Movie | Mohanlal | Bhadran | Thi…", channel: "Matinee Now", views: "896k . 1 year ago", time: "2.45.33"},
        {thumbnail: ima4, dp: dp4, v1: v1, title: "നമ്മുടെ പ്രിയ വാഹനമായ Mahindra Thar- ന്റെ,മണ്ണിന്റെ മണമുള്ള സ്‌പെഷ്യൽ …", channel: "Baiju N Nair", views: "2M . 1 month ago", time: "22.45"},
        {thumbnail: ima5, dp: dp5, v1: v1, title: "Malayalam Comedy Movie | Cheppu Kilukkana Changathi | Super Hit Full M…", channel: "mollywood movies", views: "450k . 3 year ago", time: "2.34.16"},
        {thumbnail: ima6, dp: dp6, v1: v1, title: "Oru Sanchariyude Diary Kurippukal | EPI 531 | BY SANTHOSH GEORGE KULAN…", channel: "Safari", views: "150k . 1 weeks ago", time: "28.46"}
    ];

    return (
        <div className="main">
            <Header onIconClick={handleIconClick} />
            <div className="one">
                <div className={isToggled ? "two" : "two1"}>
                    {currentComponent === "Side" ? <Side2 /> : <Side />}
                </div>
                <div className="three">
                    <Main isToggled={isToggled} />
                    <Main2 isToggled={isToggled} data={data} />
                </div>
            </div>
        </div>
    );
};

export default Home;
