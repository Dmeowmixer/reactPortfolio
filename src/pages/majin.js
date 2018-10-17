import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/layout'

export default class Example extends React.Component {
  render() {
    return (
      <Layout>
        <h1 id ="majinHeader">Meet my cat Majin! He knows 9 tricks!</h1>
        <img className="justifyCenter" src='https://res.cloudinary.com/drgess24j/image/upload/v1539770945/majinLickCropped-min.jpg'/>
      </Layout>
    );
  }
}