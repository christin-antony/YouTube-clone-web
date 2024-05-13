import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Mainsecond.css";

const Main2 = ({ isToggled }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1011/get");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again.");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="Maindiv">
      <div className={isToggled ? "part1" : "Lpart1"}>
        {data.map((item, index) => (
          
          <div className={isToggled ? "Mdiv4" : "LMdiv4"} key={index}>
            <div className={isToggled ? "video-card" : "Lvideo-card"}>
              <img
                src={`http://localhost:1011/${item.thumbnail}`}
                alt="Video Thumbnail"
                className="V-1"
              />
              <video className="Video" autoPlay muted loop controls>
                <source
                  src={`http://localhost:1011/${item.video}`}
                  type="video/mp4"
                  alt="Video Thumbnail"
                />
              </video>
              <p className={isToggled ? "MMp1" : "LMMp1"}>{item.time}</p>
            </div>

            <div className={isToggled ? "Mdiv5" : "LMdiv5"}>
              <div className={isToggled ? "Mdiv6" : "LMdiv6"}>
                <img
                  src={`http://localhost:1011/${item.dp}`}
                  className={isToggled ? "pic" : "Lpic"}
                  alt=""
                />
                <div>
                  <h4 className={isToggled ? "title" : "Ltitle"}>
                    {item.title}
                  </h4>
                </div>
                <button className={isToggled ? "Mbtn" : "LMbtn"}>
                  <i className="fa-solid fa-ellipsis-vertical Mi3"></i>
                </button>
              </div>
              <p className={isToggled ? "channel" : "Lchannel"}>
                {item.channel}
              </p>
              <p className={isToggled ? "views" : "Lviews"}>{item.views}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main2;
