import React, { Fragment } from 'react';
import { contact } from '../data';
import '../styles/components/Header.scss';
const [ { Icon }, ...info ] = contact;

export const Header = () => (
    <header className='header'>
        <div className='header__head'>
            <h1 className='header__heading'><span className='header__heading_bold'>Cho Yin</span> Yong</h1>
            <p className='header__head-text'>
                Toronto, ON, Canada
            </p>
            <p className='header__head-text bottom'>
                i@choy.in | Github: @choyiny | https://choy.in/
            </p>
        </div>
        <div className='header__line'/>
    </header>
);
