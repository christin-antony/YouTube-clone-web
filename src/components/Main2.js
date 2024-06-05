import React from "react";
import "./Mainsecond.css";

const Main2 = ({ isToggled, data }) => {
  return (
    <div className="Maindiv">
      <div className={isToggled ? "part1" : "Lpart1"}>
        {data.map((item, index) => (
          <div className={isToggled ? "Mdiv4" : "LMdiv4"} key={index}>
            <div className={isToggled ? "video-card" : "Lvideo-card"}>
              <img
                src={item.thumbnail}
                alt={`Thumbnail for ${item.title}`}
                className="V-1"
              />
              <video className="Video" autoPlay muted loop controls>
                <source src={item.v1} type="video/mp4" />
              </video>
              <p className={isToggled ? "MMp1" : "LMMp1"}>{item.time}</p>
            </div>

            <div className={isToggled ? "Mdiv5" : "LMdiv5"}>
              <div className={isToggled ? "Mdiv6" : "LMdiv6"}>
                <img
                  src={item.dp}
                  className={isToggled ? "pic" : "Lpic"}
                  alt={`Profile picture for ${item.channel}`}
                />
                <div>
                  <h4 className={isToggled ? "title" : "Ltitle"}>
                    {item.title}
                  </h4>
                </div>
                <button className={isToggled ? "Mbtn" : "LMbtn"} aria-label="More options">
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
