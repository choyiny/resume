import React from 'react';
import {projects, work} from '../../data/content';

const Projects = () => (
    <div className='content__section'>
        <div className='content__item-heading'>Projects</div>
        <ul className='content__list content__list--head'>
            { projects.map(({ title, subtitle, url, details }, i) => (
                <li className='content__item content__item--head' key={ i }>
                    <h3 className='content__item-heading project'>
                        { title } <span className='content__item-span small'>{ subtitle }</span>
                        <span className='content__item-span extrasmall'> ({ url })</span>
                    </h3>
                    <div className='content__item-subtext'>

                    </div>
                    <ul className='content__list'>
                        { details.map((item, j) => (
                            <li className='content__list-item' key={ j }>{ item }</li>
                        )) }
                    </ul>
                </li>
            )) }
        </ul>
        <div className='content__line' />
    </div>
);

export default Projects;
