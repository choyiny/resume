import React, { Fragment } from 'react';

export const projects = [
    {
        title: 'DeployingReliable.Software',
        subtitle: 'Computer Science research project',
        url: 'https://github.com/choyiny/reliable_blog',
        details: [
            'An indepedent study to demonstrate Google’s Site Reliability Engineering Principles. (Supervised by Dr. Thierry Sans)',
            'Topics researched into includes: Monitoring Distributed Systems, Load Balancing, and Managing Overload',
            'Main Technologies Used: Google Cloud Stack, Kubernetes, Ansible, Elasticsearch, Kibana, Docker',
        ]
    },
    {
        title: 'Mobile Wizard',
        subtitle: '2 player dueling game with phone motion detection',
        url: 'https://github.com/choyiny/mobile-wizard',
        details: [
            'A game where players wave their phones to cast spells to damage the other player with WebRTC technology.',
            'Technologies used: Angular, Firebase, Docker, Flask, WebRTC',
        ]
    }
];
