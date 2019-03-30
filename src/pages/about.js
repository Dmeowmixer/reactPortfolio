import React from 'react';
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Progress } from 'reactstrap';
import pdf from '../images/resume.pdf';
import Layout from '../components/layout';


export default () => (
  <Layout>
    <div>
      <h2 className="justifyCenter">Who I am</h2>
      <p>Born and raised in Hawaii, I have always had an insatiable curiousity and a hunger to learn. I can be found reading self-help, science fiction (Roberit Heinlein!), or martial arts books.
      I try to help others at every opportunity, and would love to impact lives with my work.</p>
      <h2 className="justifyCenter">Hobbies</h2>
      <p>In my spare time I am an avid martial artist and hold ranks in several different styles including Wing Chun, Brazillian Jujitsu, Danzan Ryu Jujitsu, Jeet Kune Do, and Muay Thai to name a few.
      I also enjoy working on cars and am currently restoring a 1987 Chevrolet Monte Carlo SS. On the programming side of things, I have been learning indie game development in GameMakerStudio2 using GameMakerLanguage which is a Javascriptesque language and Unity for VR games.
      </p>
    </div>
  </Layout>
)
