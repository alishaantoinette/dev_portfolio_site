import React, { Component } from 'react';

import Navigation from './Navigation';

import '../styles/css/intro.css';

export default class Intro extends Component {
  
  render() {

    return (
      <section className='landing-page-pic' id='intro'>
        <Navigation />

        <p className='intro-tagline'>Detail oriented, problem solving, creative thinking</p>
        <h1 className='intro-title'>Full-Stack Developer</h1>
      </section>
    )

  }
}