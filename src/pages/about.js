import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


export default () => (
  <Layout>
    <div>
      <h1> My name is Ranson </h1>
      <h2>I am a fullstack Javascript developer from Honolulu, Hawaii</h2>
      <p>I am primarily looking for remote work however, I am open to any and all opportunities. I started developing about 5 years ago since I have always been attracted towards technology and constantly learning.
      Learning to program has been one of the most challenging things of my life, and has taught me many things about myself such as learning to fail and deal with it. I have always been able to pick things up with relative ease until I started programming, and remaining focused on bettering myself has helped me grow as an individual.
      I have worked within the tech field for the past 5 years in varying roles from Independant contracting, freelancing, and a CTO role of a startup (which ended terribly and is a story in itself for another time). 
      I had some time to re-examine my goals and have chosen to start working on my development skills once more.</p>
      <h2>Hobbies</h2>
      <p>In my spare time I am an avid martial artist and hold ranks in several different styles including Wing Chun, Brazillian Jujitsu, Danzan Ryu Jujitsu, Jeet Kune Do, and Muay Thai to name a few.
      I also enjoy working on cars and am currently restoring a 1987 Chevrolet Monte Carlo SS. On the programming side of things, I have been learning indie game development in GameMakerStudio2 using GameMakerLanguage which is a Javascriptesque language.
      Finally I enjoy tinkering with Raspberry Pis and have worked on WPA/WPA2 WiFi cracking using aircrack-ng and packet sniffing with ncap for fun.</p>
      <Link to="/">Home</Link>
    </div>
  </Layout>
)
