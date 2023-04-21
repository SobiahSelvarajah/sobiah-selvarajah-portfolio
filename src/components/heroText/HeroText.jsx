import React from 'react';
import WelcomeLabel from '../welcomeLabel/WelcomeLabel';
import './HeroText.scss';

export default function HeroText() {
  return (
    <section className='heroText__container'>
        <WelcomeLabel />
    </section>
  )
}