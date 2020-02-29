import React from 'react';
import { work } from '../../data/content';

const Work = () => (
    <div className='content__section'>
        <div className='content__item-heading'>Work Experience</div>
        <ul className='content__list content__list--head'>
            { work.map(({ title, role, date, details }, i) => (
                <li className='content__item content__item--head' key={ i }>
                    <h3 className='content__item-heading project'>
                        { title }
                    </h3>
                    <div className='content__item-subtext'>
                        <span className='content__item-span'>{ role } | </span>
                        <span className='content__item-span'>{ date }</span>
                    </div>
                    <ul className='content__list'>
                        { details.map((item, j) => (
                            <li className='content__list-item' key={ j }>{ item }</li>
                        )) }
                    </ul>
                </li>
            )) }
        </ul>
    </div>
);

export default Work;
