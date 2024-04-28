import React from "react";
import ImageSlider from "./ImageSlider";
import './Tourism.css';
const Tourism = () => {
  const slides = [
    
    { url: "https://i.ibb.co/F3pLx7b/sanchi.jpg", title: "italy" },
    { url: "https://i.ibb.co/fMr9nCK/Bundel.jpg", title: "italy" },
    { url: "https://i.ibb.co/zV8XdKW/086927546-Orchha-Fort-Main.jpg", title: "city" },
    { url: "https://i.ibb.co/sHMFwZk/fsfsdfsdf.png", title: "italy" },
    { url: "https://i.ibb.co/ggNMQDK/Mansions.jpg", title: "italy" },
    { url: "https://i.ibb.co/VYVKRsK/pexels-robert-stokoe-105922-2668605.jpg", title: "italy" },
    
    { url: "https://i.ibb.co/XWkwk8v/khajuraho-temple-tour-2.jpg", title: "italy" },
    { url: "https://i.ibb.co/xqhhSYW/dundhwasehaotherangle.jpg", title: "italy" },

     
  ];
  const containerStyles = {
    width: "75%",
    height: "500px",
    margin: "0 auto",
  };
  return (
    <div id="tourism" className="tcontainer">
      <h2>Madhya Pradesh's Bundelkhand Tourist Places</h2>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Tourism;
