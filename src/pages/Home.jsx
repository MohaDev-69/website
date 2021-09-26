import React from "react";
import { Navbar , Footer } from "../components";
import "animate.css";
import { Cycler } from "react-text-scrambler";
import prev from "../imgs/preview.png";
function Home() {
  const texts = [
    'safe',
    'chatting',
    'gaming',
    'studing'
  ]

    return (
    <>
      <div className="container">
        <div className="nav-container">
          <Navbar />
        </div>
        <br />
        <div className="banner">
        <img src={prev} className="mainImg mainImgAnimation" width="650" alt="mainIMG"/>
        <h2 className="MainTxt">Imagine your own &nbsp;</h2><h2 className="MainTxt2"><Cycler duration={ 4000 } strings={texts} renderIn={1000}/></h2><h2 className="MainTxt">&nbsp; Place</h2>
      </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="svgg">
				<path className="pathh" d="M0,64L120,90.7C240,117,480,171,720,170.7C960,171,1200,117,1320,90.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
			</svg>
      <center>
        <div className="F__area">
        <h2>what is diffrent in our platform & why you should use it ?!</h2>
      <div className="feautures animate__animated animate__jackInTheBox">Safe </div>&nbsp;
      <div className="feautures animate__animated animate__jackInTheBox animate__delay-1s">Easy to use</div>&nbsp;
      <div className="feautures animate__animated animate__jackInTheBox animate__delay-2s">100% free</div>&nbsp;
      <div className="feautures animate__animated animate__jackInTheBox animate__delay-3s">privacy respect</div>&nbsp;
      <div className="feautures animate__animated animate__jackInTheBox animate__delay-4s">open source </div>&nbsp;
      </div>
      </center>
        <br />
        <Footer />
    </>
  );
}

export default Home;
