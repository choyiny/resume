import React from 'react';
import {work} from "../../data/content";

const Education = () => (
    <div className='content__section'>
        <h3 className='content__item-heading2'>
            University of Toronto
        </h3>
        <div className='content__item'>
            <div className='content__item-subtext'>Candidate, Hons. Bachelor of Science, 4th year (Dean’s List Recipient)</div>
        </div>
        <div className='content__item'>
            <div className='content__item-subtext'>Computer Science Specialist (Co-op) – Software Engineering Stream</div>
        </div>
        <div className='content__item'>
            <div className='content__item-subtext'><span className="content__item-subtext-title">Average Computer Science Courses GPA:</span> 3.53/4.00</div>
        </div>
        <div className='content__item'>
            <div className='content__item-subtext'><span className="content__item-subtext-title">Teaching Assistant:</span> Introduction to Software Engineering (CSCC01), Introduction to Computer Science I (CSCA08),
                Programming on the Web (CSCC09), Engineering Large Software Systems (CSCD01)
            </div>
        </div>
        <div className='content__line'/>
    </div>
);

export default Education;
