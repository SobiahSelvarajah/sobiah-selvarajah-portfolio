import React from 'react';
import HeroLabel from '../heroLabel/HeroLabel';
import HeroHeading from '../heroHeading/HeroHeading';
import './HeroText.scss';

export default function HeroText() {
  return (
    <section className='heroText__container'>
        <HeroLabel />
        <HeroHeading />
    </section>
  )
}