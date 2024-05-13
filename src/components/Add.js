import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Add.css";
import image1 from "./image/1.jpg";

const Add = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    thumbnailFile: null,
    videoFile: null,
    dpFile: null,
    title: "",
    channel: "",
    views: "",
    time: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ytData = new FormData();
    ytData.append("thumbnail", formData.thumbnailFile);
    ytData.append("video", formData.videoFile);
    ytData.append("dp", formData.dpFile);
    ytData.append("title", formData.title);
    ytData.append("channel", formData.channel);
    ytData.append("views", formData.views);
    ytData.append("time", formData.time);

    try {
      const response = await axios.post(
        "http://localhost:1011/insert",
        ytData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      navigate("/");

      setFormData({
        thumbnailFile: null,
        videoFile: null,
        dpFile: null,
        title: "",
        channel: "",
        views: "",
        time: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      name === "thumbnailFile" || name === "videoFile" || name === "dpFile"
        ? e.target.files[0]
        : e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="tablediv">
        <h1>
          <img src={image1} className="logo1" alt="" />
        </h1>
        <form onSubmit={handleSubmit}>
          <table className="tablediv1">
            <tbody>
              <tr>
                <td className="td1">
                  <label htmlFor="title" className="label1">
                    Title
                  </label>
                </td>
                <td className="td1">
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="td1">
                  <label htmlFor="channel" className="label1">
                    Channel Name
                  </label>
                </td>
                <td className="td1">
                  <input
                    type="text"
                    name="channel"
                    value={formData.channel}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="td1">
                  <label htmlFor="views" className="label1">
                    Views
                  </label>
                </td>
                <td className="td1">
                  <input
                    type="text"
                    name="views"
                    value={formData.views}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="td1">
                  <label htmlFor="time" className="label1">
                    Time
                  </label>
                </td>
                <td className="td1">
                  <input
                    type="text"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="td1">
                  <label htmlFor="thumbnail" className="label1">
                    Thumbnail
                  </label>
                </td>
                <td className="td1">
                  <input
                    type="file"
                    id="thumbnail"
                    name="thumbnailFile"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="td1">
                  <label htmlFor="video" className="label1">
                    Video
                  </label>
                </td>
                <td className="td1">
                  <input
                    type="file"
                    id="video"
                    name="videoFile"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="td1">
                  <label htmlFor="dp" className="label1">
                    DP
                  </label>
                </td>
                <td className="td1">
                  <input
                    type="file"
                    id="dp"
                    name="dpFile"
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <button type="submit" className="btn1">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
