import React from 'react';
import { Link } from 'gatsby';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardLink,
 CardSubtitle, CardBody } from 'reactstrap';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from '../components/projectCards';

export default () => (
  <Layout>
    <h1 className="justifyCenter">Here are a few of my finished projects and certifications I hold</h1>
    <h2 className="justifyCenter">Projects</h2>
    <CardGroup>
      <Card className="projectCard">
        <a href="https://dmeowsmartbrain.herokuapp.com/"> <CardImg  href="https://dmeowsmartbrain.herokuapp.com/" top width="100%" src="https://res.cloudinary.com/drgess24j/image/upload/v1539768252/facialRecognition-min.png" alt="facialRecognition" /> </a>
        <CardBody>
          <CardTitle>Facial Image Recgonition</CardTitle>
          <CardText>
            <ul>
              <li>Clarifai API Integration</li>
              <li>NodeJS Server Hosted on Heroku</li>
              <li>Express API</li>
              <li>PostgreSQL Hosted on Heroku</li>
              <li>React frontend with state management</li>
              <li>Full user Authentication and registration</li>
            </ul>
          </CardText>
          <CardLink href="https://dmeowsmartbrain.herokuapp.com/">Project Hosted on Heroku</CardLink>
        </CardBody>
      </Card>
      <Card className="projectCard">
        <a href="https://www.crosscurrenthi.org/"><CardImg top width="100%" src="https://res.cloudinary.com/drgess24j/image/upload/v1539768039/crossCurrent-min.png" alt="CrossCurrentFellowship" /></a>
        <CardBody>
          <CardTitle>CrossCurrentFellowship Hawaii</CardTitle>
          <CardText>
            <ul>
              <li>Single Page App</li>
              <li>JAMstack</li>
              <li>MD Bootstrap 4</li>
              <li>Hosted on Netlify</li>
              <li>Built with Widgets and Apis</li>
            </ul>
          </CardText>
          <CardLink href="https://www.crosscurrenthi.org/">Website</CardLink>
        </CardBody>
      </Card>
      <Card className="projectCard">
        <a href="https://dmeowmixer.github.io/simpleReact/"><CardImg top width="100%" src="https://res.cloudinary.com/drgess24j/image/upload/v1539768039/simpleReact-min.png" alt="reactApp" /></a>
        <CardBody>
          <CardTitle>React/Redux Async API call App</CardTitle>
          <CardText><ul>
            <li>React/Redux</li>
            <li>Fetch API</li>
            <li>Asynchrounous GET Requests</li>
            <li>Real Time Query Responses</li>
          </ul></CardText>
          <CardLink href="https://dmeowmixer.github.io/simpleReact//">Project Site on GH Pages</CardLink>
        </CardBody>
      </Card>
    </CardGroup>
    <div>
      <ul>
        <li><h3>Listed Below are a few more projects, feel free to browse my<a href="https://github.com/Dmeowmixer"> GitHub </a>for a complete list of public repositories I can share.</h3></li>
        <li><a href='https://github.com/Dmeowmixer/simpleReact/tree/master/src/'>React/Redux with Tachyons styling.</a></li>
        <li><a href="https://github.com/Dmeowmixer/HPDScraper/blob/master/app/app.js">NodeJS HPD iFrame Web Scraper Component For Traffic Accident App</a></li>
        <li><a href="https://codepen.io/dmeowmixer/pen/BPXjVj">Simple HTML/CSS Questionaire form</a></li>
      </ul>
      <h2 className="justifyCenter">Certifications</h2>
      <ul>
        <li><a href="https://www.freecodecamp.org/certification/ransonikuo/responsive-web-design">FreeCodeCamp Responsive Web Design</a></li>
        <li><a href="https://www.freecodecamp.org/certification/ransonikuo/javascript-algorithms-and-data-structures">FreeCodeCamp Javascript Algorithms and Data Structures</a></li>
        <li><a href="https://www.udemy.com/understand-javascript/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email">Javascript The Weird Parts Completion Udemy</a></li>
        <li><a href="https://www.udemy.com/certificate/UC-93UTQ7WQ/">Complete Web Developer 2018 Completion Udemy</a></li>
        <li>DevLeague Developer Fullstack Javascript Bootcamp Certificate of completion 2015</li>
      </ul>
      <h3 className="justifyCenter">Ongoing projects</h3>
      <ul>
        <li><p>Social Media site built in Angular with FirestoreDB full oAuth integration. Hosted on Firebase</p></li>
        <li><p>Indie GameMaker Language (Javascriptesque) multiplayer game</p></li>
        <li><a href="https://github.com/Dmeowmixer/SekainoShigoDakimakura">SideScrolling Javascript OOP RPG</a></li>
        <li><p>WPA/WPA2 Cracking with airmon-ng</p></li>
        <li><p>NCAP WiFi Packet Sniffing</p></li>
      </ul>
      <h2 className="justifyCenter"><a href="https://docs.google.com/document/d/e/2PACX-1vQrLQQk7uu1OGoHf4D2u8ez5xYzS62c9oAHxZHBBxJxvIFnpsLLOi37vYRdPQeUBmjJ1Wj2oGmCQPk3/pub" target="_blank">My Resume</a></h2>
    </div>
  </Layout>
)
