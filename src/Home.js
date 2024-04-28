import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "./components/Navbar/Navbar";
import Translate from "./components/Translate/Translate";
import Learn from "./components/Learn/Learn";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import TypeIt from "typeit-react";
import About from "./components/About/About";
import Test from "./components/test/Test";
import Signup from "./Signup";
import Login from "./Login";
import Tourism from "./components/Tourism/Tourism";

// Import your images
import i1 from "./images/sanchi-1.jpg";
import i0 from "./images/mahakal.jpg";
import p2 from "./images/tiger.jpg";
import p3 from "./images/t1.jpg"
import i2 from "./images/t2.jpg";
import i3 from "./images/fort.avif";
import i4 from "./images/bhedaghat.jpg";

// import i5 from "./images/";
// import i6 from "./images/Bundel.jpg";

const Home = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loggedInPressed, setLoggedInPressed] = useState(false);
  const [signUpPressed, setSignUpPressed] = useState(false);
  const [backgroundImages] = useState([i1,i0,p2,p3,i2,i3,i4]); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const loggedIn = localStorage.getItem("userLoggedIn");
    if (loggedIn) {
      setUserLoggedIn(true);
    }

    const timeout = setTimeout(() => {
      handleLogout();
    }, 15 * 60 * 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages]);

  const handleLogon = () => {
    setLoggedInPressed(true);
    setSignUpPressed(false);
  };

  const handleSignUp = () => {
    setUserLoggedIn(false);
    setLoggedInPressed(false);
    setSignUpPressed(true);
  };

  const handleLogout = () => {
    setUserLoggedIn(false);
    setLoggedInPressed(false);
    localStorage.removeItem("userLoggedIn");
  };

  const handleUserLoggedIn = () => {
    setUserLoggedIn(true);
    setLoggedInPressed(false);
    setSignUpPressed(false);
    localStorage.setItem("userLoggedIn", "true");
  };

  return (
    <>
      <Navbar LoggedOut={handleLogout} />
      <div
        id="home"
        className="home-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImages[currentImageIndex]}')`,
        }}
      >
        <div className="home-banner-text">
          <p id="hdesc">
            <TypeIt
              options={{
                strings: [
                  "बुन्देलखण्डी मध्य भारत के बुन्देलखण्ड क्षेत्र में बोली जाने वाली एक इंडो-आर्यन भाषा है। यह पश्चिमी हिंदी उपसमूह का हिस्सा है और मध्य इंडो-आर्यन भाषाओं से संबंधित है। बुंदेली देवनागरी लिपि में लिखी जाती है मध्य प्रदेश के बुन्देलखण्डी क्षेत्र की लोकप्रियता उसकी प्राचीन सांस्कृतिक विरासत और प्राकृतिक सौंदर्य के कारण बढ़ी है। यहां के ऐतिहासिक स्थल, प्राचीन मंदिर, विविध रसोईय विविधता, और प्राकृतिक विविधता लोगों को आकर्षित करते हैं। साथ ही, बुन्देलखण्डी क्षेत्र की आर्थिक विकास और पर्यटन सुविधाएँ भी लोगों को आकर्षित करती हैं।",
                ],
                speed: 10,
                waitUntilVisible: true,
              }}
            />
          </p>
        </div>
      </div>
      <About />
      <Test />
      <Translate />
      <Learn />
      <Tourism />
      <Contact />
      <Footer />
      {!userLoggedIn && !loggedInPressed && <Signup onClose={handleLogon} />}
      {!userLoggedIn && !signUpPressed && loggedInPressed && (
        <Login onClose={handleSignUp} LoggedIn={handleUserLoggedIn} />
      )}
    </>
  );
};

export default Home;
