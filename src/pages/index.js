import React from 'react';
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Progress } from 'reactstrap';

import Layout from '../components/layout';


export default () => (
  <Layout>
    <div>
      <h1 className="justifyCenter"> My name is Ranson </h1>
      <img src="https://res.cloudinary.com/drgess24j/image/upload/v1539769697/yellingRanson.jpg"/>
      <h2 className="justifyCenter">I am a fullstack Javascript developer from Honolulu, Hawaii</h2>
      <p>I am primarily looking for remote work however, I am open to any and all opportunities. I started developing about 5 years ago since I have always been attracted towards technology and constantly learning.
      Learning to program has been one of the most challenging things of my life, and has taught me many valuable lessons such as overcoming failure. I have always been able to pick things up with relative ease and overcoming the constant feelings of failure programmers feel has helped me grow as an individual.
      I have worked within the tech field for the past 5 years in varying roles from Independant contractor, freelancer, and a CTO role of a startup (which ended terribly and is a story in itself for another time). 
      I had some time to re-examine my goals and have chosen to start working on my development skills once more.</p>
      <h2 className="justifyCenter">Hobbies</h2>
      <p>In my spare time I am an avid martial artist and hold ranks in several different styles including Wing Chun, Brazillian Jujitsu, Danzan Ryu Jujitsu, Jeet Kune Do, and Muay Thai to name a few.
      I also enjoy working on cars and am currently restoring a 1987 Chevrolet Monte Carlo SS. On the programming side of things, I have been learning indie game development in GameMakerStudio2 using GameMakerLanguage which is a Javascriptesque language.
      Lastly I enjoy tinkering with Raspberry Pis and have worked on WPA/WPA2 WiFi cracking using aircrack-ng and packet sniffing with ncap. I also hope to get a robotics kit to start utilizing the Johnny Five robotics library.</p>
      <h2 className="justifyCenter"><a href="https://docs.google.com/document/d/e/2PACX-1vQrLQQk7uu1OGoHf4D2u8ez5xYzS62c9oAHxZHBBxJxvIFnpsLLOi37vYRdPQeUBmjJ1Wj2oGmCQPk3/pub" target="_blank">My Resume</a></h2>
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
