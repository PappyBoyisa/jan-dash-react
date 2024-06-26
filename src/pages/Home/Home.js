import React from 'react';
import { RiProductHuntLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import './home.scss'
import heroImg from "../../asset/header2.jpg";


const Home = () => {
  return (
      <div className="home">
        <nav className="container --flex-between ">
          <div className="logo">
            <RiProductHuntLine size={50} />
          </div>
  
          <ul className="home-links">
           
              <li>
                <Link to="/register">Register</Link>
              </li>
             
            
              <li>
                <button className="--btn --btn-primary">
                  <Link to="/login">Login</Link>
                </button>
              </li>
            
           
         
              <li>
                <button className="--btn --btn-primary">
                  <Link to="/dashboard">Dashboard</Link>
                </button>
              </li>
            
          </ul>
        </nav>
        {/* HERO SECTION */}
        <section className="container hero">
          <div className="hero-text">
            <h2>Teachers  Dashboard</h2>
            <p>
              Student Inventory system to control and manage Day to day schedule and office duties.
            </p>
            <div className="hero-buttons">
              <button className="--btn --btn-secondary">
                <Link to="/dashboard">Free Trial 3 Month</Link>
              </button>
            </div>
          
          </div>
      
          <div className="hero-image">
            <img src={heroImg} alt="Inventory" />
          </div>
         
        </section>
      </div>
    );
  
}

export default Home