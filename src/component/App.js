import React from "react";
import Logo from './img/scrollimg.png';
import img1a from './img/img1a.jpg'
import card1img from './img/cardimg1.png';
import card2img from './img/cardimg2.png'
import card3img from './img/cardimg3.png'
import './App.css';
 import './Appmedia.css';
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

function App() {
  return (
    <div className="App">

      <nav className="navbar">
        <h2 className="nameof">Supriya <br />Gahoi</h2>
        <ul className="navula">
          <li><a className="navlia" href="#home">Home</a></li>
          <li><a className="navlia" href="#abouts">About</a></li>
          <li><a className="navlia" href="#works">Work</a></li>
          <li><a className="navlia" href="#contacts" >Contacts</a></li>
        </ul>
      </nav>

      <header className="App-header">
        <h1
          className="headercontain">
          DETERMINED TO<br />
             DO MY VERY BEST
        </h1>

        <div className="container">
          
        <img src={img1a}
            className="frontImg" alt="ImageOfObject" />
          <img src={Logo} className="App-logo" alt="logo" />
          
        </div>
        <h2 className="bottomcontain">FEATURED PROJECTS</h2>
      </header>


      <div className="bigcontainer">
        <div className="aboutContainer " id="abouts">
        <div className="writtencontain">
          <h1 className="about"  >ABOUT </h1>
          <h1 className="about boldid" >ABOUT </h1>
          <h1 className="about">ABOUT</h1>
          </div>

          <div className="card1">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img className="cardimg" src={card1img} alt="AboutPhoto" />
                </div>
                <div class="flip-card-back">
                  <div className="contant">
                    {/* <h1>Supriya Gahoi</h1> */}
                    <h2> SOFTWARE DEVELOPER</h2>
                    <p>Hello! I'm Supriya,
                    passionate, creative, and Self
                    taught  Web Developer with experience
                    in creating a highly polished Website,
                    Graphic Design and front-end development.I have worked with
                    some great client and delivered amazing products which users enjoy.
                </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="workContainer" id="works">
          <div className="writtencontain">
          <h1 className="work">WORK </h1>
          <h1 className="work  boldid">WORK </h1>
          <h1 className="work">WORK </h1>
          </div>

          <div className="card2">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img className="cardimg" src={card2img} alt="AboutPhoto" />
                </div>
                <div class="flip-card-back">
                  <div className="contant">
                    {/* <h1>Supriya Gahoi</h1> */}
                    <h2> MY PROCESS</h2>
                    {/* Currently I am working as a contact basis with Design agency,But in past  */}
                    <p>
                      I have 2 years of experience as developer and also have the ability to bring concepts to life though creative
                      front-end development for a small projects.I love everything that has to do with product and visual design as well
                      as Java Work.
                </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="contContainer" id="contacts">
        <div className="writtencontain">
          <h1 className="contact"> CONTACT</h1>
          <h1 className="contact boldid"> CONTACT </h1>
          <h1 className="contact"> CONTACT</h1>
          </div>
          <div className="card3">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img className="cardimg" src={card3img} alt="AboutPhoto" />
                </div>
                <div class="flip-card-back">
                  <div className="contant">
                    <h2>Get In Touch</h2>
                    <p>
                      Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a
                       question or just want to say hi, I'll try my best to get back to you!
                  </p>
                    {/* <hr style={{ color: "#BD081C"   }} /> */}

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>



      <div className="btn">

        <a href="https://github.com/supriyagahoi" className="icon"><FaGithub size="2em" /></a>
        <a href="https://www.linkedin.com/in/supriya-gahoi-825b661b0/" className="icon"><FaLinkedin size="2em" /></a>
        <a href="https://www.instagram.com/supranvi/" className="icon"><FaInstagram size="2em" /></a>
        <a href="https://twitter.com/supranvi" className="icon"><FaTwitter size="2em" /></a>
        {/* target="_blank"  rel="noopener" */}
      </div>

      

      <div>
        <footer>
          <h3 className="footer">Designed and developed by Supriya Gahoi<br /> &#169; 2021 All rights reserved.</h3>
        </footer>
      </div>
    </div>

  );
}


export default App;
