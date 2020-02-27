import React, { Fragment } from 'react';
import { Header, Footer, Content } from './components';

export const App = () => (
    <Fragment>
        <Header/>
        <main className='res__main'>
            <Content/>
        </main>
    </Fragment>
)
