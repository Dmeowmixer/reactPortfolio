import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello!</h1>
    <p>Welcome to my personal portfolio.</p>
    <p>Here you will find some information about me and a few of the projects I am working on.</p>
    <p>This site was created as a SPA, using Gatsby JS, React and TypographyJS along with HTML/CSS</p>
    <Link to="/majin/">Meet my cat</Link>
    <Link to="/about/">About Me</Link>
    <Link to="/projects/">Projects</Link>
  </Layout>
)

export default IndexPage
