import React, { Fragment } from 'react';
import { skills } from '../../data/content';

const Skills = () => (
    <div className='content__section'>
        <div className='content__line'/>
        { skills.map(({title, items}, i) => (
            <div className="content__item" key={i}>
                <div className="content__item-subtext">
                    { title }: { items.map(({name, years}, i) => (
                        <Fragment key={i}>
                            <span className="content__item-bold"> { name }</span>
                            { years ? ' ' + years : '' }{i === items.length - 1 ? '' : ', '}
                        </Fragment>
                )) }
                </div>
            </div>
        )) }
        <div className='content__line'/>
    </div>
);

export default Skills;
