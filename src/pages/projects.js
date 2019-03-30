import React from 'react';
// import { Link } from 'gatsby';
import { Container, Col, Row, Card, CardImg, CardTitle, CardText, CardGroup, CardLink, CardBody } from 'reactstrap';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ProjectCard from '../components/projectCards';
import pdf from '../images/resume.pdf';

export default () => (
  <Layout>
    <h1 className="justifyCenter">Projects</h1>
    <Container>
      <CardGroup>
       <Row className="cardRow">
          <Col sm={{ size: 12}} md={{ size: 4 }}>
            <a href="https://waimeavalley.net/"> <CardImg  className="cardImage" href="https://waimeavalley.net" top width="100%" src="https://res.cloudinary.com/drgess24j/image/upload/v1553899100/waimeavalleycropped.png" alt="waimeaValleysite" /> </a>
          </Col>
          <Col sm={{ size: 12}} md={{ size: 8}}>
            <Card className="projectCard">
              <CardBody>
                <CardTitle>Waimea Valley Website</CardTitle>
                <CardText>
                  <ul>
                    <li>Airship CMS</li>
                    <li>Foundation</li>
                    <li>IG/Calendar Widgets</li>
                    <li>Managed development/Client interactions/Developed alongside my team</li>
                  </ul>
                </CardText>
                <CardLink href="https://waimeavalley.net/">Website</CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="cardRow">
          <Col sm={{ size: 12}} md={{ size: 4 }}>
            <a href="https://www.crosscurrenthi.org/"><CardImg className="cardImage" top width="100%" src="https://res.cloudinary.com/drgess24j/image/upload/v1539768039/crossCurrent-min.png" alt="CrossCurrentFellowship" /></a>
          </Col>
          <Col sm={{ size: 12}} md={{ size: 8}}>
            <Card className="projectCard">
              <CardBody>
                <CardTitle>CrossCurrentFellowship Hawaii</CardTitle>
                <CardText>
                  <ul>
                    <li>Single Page App</li>
                    <li>JAMstack</li>
                    <li>MD Bootstrap 4</li>
                    <li>Hosted on Netlify</li>
                  </ul>
                </CardText>
                <CardLink href="https://www.crosscurrenthi.org/">Website</CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>

       <Row className="cardRow">
          <Col sm={{ size: 12}} md={{ size: 4 }}>
            <a href="https://dmeowmixer.github.io/voiceTrainer"> <CardImg  className="cardImage" href="https://dmeowmixer.github.io/voiceTrainer" top width="100%" src="https://res.cloudinary.com/drgess24j/image/upload/v1553898422/voicetrainer.png" alt="voiceTrainerapp" /> </a>
          </Col>
          <Col sm={{ size: 12}} md={{ size: 8}}>
            <Card className="projectCard">
              <CardBody>
                <CardTitle>Voice Trainer 2.0</CardTitle>
                <CardText>
                  <ul>
                    <li>VanillaJS & D3.js for visualizations</li>
                    <li>Bower Modules</li>
                    <li>CSS</li>
                    <li>Hosted on Github Pages</li>
                  </ul>
                </CardText>
                <CardLink href="https://dmeowmixer.github.io/voiceTrainer/">Project Hosted on GithubPages</CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>

       <Row className="cardRow">
         <Col sm={{ size: 12}} md={{ size: 4 }}>
            <a href="https://dmeowsmartbrain.herokuapp.com/"> <CardImg className="cardImage" href="https://dmeowsmartbrain.herokuapp.com/" top width="100%" src="https://res.cloudinary.com/drgess24j/image/upload/v1539768252/facialRecognition-min.png" alt="facialRecognition" /> </a>
         </Col>
          <Col sm={{ size: 12}} md={{ size: 8}}>
            <Card className="projectCard">
              <CardBody>
                <CardTitle>Facial Image Recgonition</CardTitle>
                <CardText>
                  <ul>
                    <li>React frontend with state management</li>
                    <li>Clarifai API for facial recognition component</li>
                    <li>Express API server built on NodeJS (Hosted on Heroku)</li>
                    <li>Full user registration/authentication powered by a PostreSQL server on Heroku</li>
                  </ul>
                </CardText>
                <CardLink href="https://dmeowsmartbrain.herokuapp.com/">Project Hosted on Heroku</CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>


        <Row className="cardRow">
          <Col sm={{ size: 12}} md={{ size: 4 }}>
            <a href="https://dmeowmixer.github.io/simpleReact/"><CardImg className="cardImage" top width="100%" src="https://res.cloudinary.com/drgess24j/image/upload/v1539768039/simpleReact-min.png" alt="reactApp" /></a>
          </Col>
          <Col sm={{ size: 12}} md={{ size: 8}}>
            <Card className="projectCard">
              <CardBody>
                <CardTitle>React/Redux Async API call App</CardTitle>
                <CardText><ul>
                  <li>React/Redux</li>
                  <li>Fetch API</li>
                  <li>Asynchrounous GET Requests</li>
                  <li>Real Time Query Responses</li>
                </ul></CardText>
                <CardLink href="https://dmeowmixer.github.io/simpleReact/">Project Site on GH Pages</CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardGroup>
     </Container>
    <div>
      <ul>
        <li><h3>Listed Below are a few more projects, feel free to browse my<a href="https://github.com/Dmeowmixer"> GitHub </a>for a complete list of public repositories I can share.</h3></li>
        <li>Personal Portfolio Site : Built with GatsbyJS, React and Reactstrap</li>
        <li><a href="https://github.com/Dmeowmixer/HPDScraper/blob/master/app/app.js">NodeJS Cheer.io HPD iFrame Web Scraper Component For Semi Real Time Traffic Accident Reporting App</a></li>
        <li><a href="https://codepen.io/dmeowmixer/pen/BPXjVj">Simple HTML/CSS Questionaire form</a></li>
      </ul>
      <h2 className="justifyCenter">Certifications</h2>
      <ul>
        <li><a href="https://www.freecodecamp.org/certification/ransonikuo/responsive-web-design">FreeCodeCamp Responsive Web Design</a></li>
        <li><a href="https://www.freecodecamp.org/certification/ransonikuo/javascript-algorithms-and-data-structures">FreeCodeCamp Javascript Algorithms and Data Structures</a></li>
        <li>DevLeague Fullstack Javascript Bootcamp Certificate of completion 2015</li>
      </ul>
      <h3 className="justifyCenter">Ongoing projects</h3>
      <ul>
        <li><p>Social Media site built in Angular with FirestoreDB full oAuth integration. Hosted on Firebase</p></li>
        <li><p>Indie GameMaker Language (Javascriptesque)game</p></li>
        <li><a href="https://github.com/Dmeowmixer/SekainoShigoDakimakura">SideScrolling Javascript OOP RPG</a></li>
        <li><p>Unity VR Martial arts project</p></li>
      </ul>
      <h2 className="justifyCenter"><a href={pdf} target="_blank">My Resume</a></h2>
    </div>
  </Layout>
)
