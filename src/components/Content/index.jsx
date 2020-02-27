import React from 'react';
import '../../styles/components/Content.scss';
import Work from './Work';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';

export const Content = () => (
    <section className='content'>
        <Skills/>
        <Work/>
        <Education/>
        <Projects/>
    </section>
);
