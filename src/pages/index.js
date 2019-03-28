import React from 'react';
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Progress } from 'reactstrap';
import pdf from '../images/resume.pdf';
import Layout from '../components/layout';


export default () => (
  <Layout>
    <div>
      <h1 className="justifyCenter">Hello, i'm Ranson </h1>
      <img src="https://res.cloudinary.com/drgess24j/image/upload/v1539769697/yellingRanson.jpg"/>
      <h2 className="justifyCenter">I am a fullstack Javascript developer from Honolulu, Hawaii</h2>
      <p>I started programming in JS about 5 years ago, and have been constantly learning and trying new things.
      Learning to program has been one of the most challenging things of my life, and has taught me many valuable lessons such as overcoming failure. I have always been able to pick things up with relative ease and overcoming the constant feelings of failure programmers feel has helped me grow as an individual.</p>
      <h2 className="justifyCenter"><a href={pdf} target="_blank">My Resume</a></h2>      
      <h2 className="justifyCenter">Main Programming Languages</h2>
        <div className="text-center progressBar">HTML</div>
        <Progress value="90" />
        <div className="text-center progressBar">CSS</div>
        <Progress value="70" />
        <div className="text-center progressBar">Javascript</div>
        <Progress value='65' />
        <div className="text-center progressBar">Node.JS</div>
        <Progress value='45' />
        <div className="text-center progressBar">NoSQL</div>
        <Progress value="78" />
        <div className="text-center progressBar">React</div>
        <Progress value="35" />
        <div className="text-center progressBar">SQL</div>
        <Progress value="25" />
        <div className="text-center progressBar">Python</div>
        <Progress value="15" />
    </div>
  </Layout>
)
