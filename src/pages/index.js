import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello!</h1>
    <p>Welcome to my personal portfolio.</p>
    <p>Here you will find some information about me and a few of the projects I am working on.</p>
    <p>This site was created as an SPA, using Gatsby JS, React and Reactstrap (Bootstrap 4)</p>
  </Layout>
)

export default IndexPage
