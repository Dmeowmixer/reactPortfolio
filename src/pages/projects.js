import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


export default () => (
  <Layout>
    <div>
      <h1>Here are a few of my finished projects and certifications I hold</h1>
      <h2>Projects</h2>
      <ul>
        <li><h3>Listed Below are just a few projects, feel free to browse my<a href="https://github.com/Dmeowmixer"> GitHub </a>for a complete list of public repositories I can share.</h3></li>
        <li><a href='https://dmeowsmartbrain.herokuapp.com/'>React Frontend/ NodeJS & Express + PostgreSQL DB. Full SPA with Login, API, DB integration</a></li>
        <li><a href='https://www.crosscurrenthi.org/'>SPA JAMstack with Materialize Bootstrap and API calls.</a></li>
        <li><a href='https://github.com/Dmeowmixer/simpleReact/tree/master/src/'>React/Redux with Tachyons styling.</a></li>
        <li><a href="https://github.com/Dmeowmixer/HPDScraper/blob/master/app/app.js">NodeJS HPD iFrame Web Scraper Component For Traffic Accident App</a></li>
        <li><a href="https://codepen.io/dmeowmixer/pen/BPXjVj">Simple HTML/CSS Questionaire form</a></li>
      </ul>
      <h2>Certifications</h2>
      <ul>
        <li><a href="https://www.freecodecamp.org/certification/ransonikuo/responsive-web-design">FreeCodeCamp Responsive Web Design</a></li>
        <li><a href="https://www.freecodecamp.org/certification/ransonikuo/javascript-algorithms-and-data-structures">FreeCodeCamp Javascript Algorithms and Data Structures</a></li>
        <li><a href="https://www.udemy.com/certificate/UC-93UTQ7WQ/">Complete Web Developer 2018 Completion Udemy</a></li>
        <li>DevLeague Certificate of completion 2015</li>
      </ul>
      <h3>Ongoing projects</h3>
      <ul>
        <li><p>Social Media site built in Angular with FirestoreDB full oAuth integration. Hosted on Firebase</p></li>
        <li><p>Indie GameMaker Language (Javascriptesque) multiplayer game</p></li>
        <li><a href="https://github.com/Dmeowmixer/SekainoShigoDakimakura">SideScrolling Javascript OOP RPG</a></li>
        <li><p>WPA/WPA2 Cracking with airmon-ng</p></li>
        <li><p>NCAP WiFi Packet Sniffing</p></li>
      </ul>
      <h3>Check Out My Resume!</h3>
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vTqv_Xr88rQAYxNHiGOtEXGhd-NoLEaKL726POLW3zDEW4OahLW1yV6AiTcSIAqKV74IlvIfPLd4Gb-/pub?embedded=true"></iframe>
      <Link to="/">Home</Link>
    </div>
  </Layout>
)
