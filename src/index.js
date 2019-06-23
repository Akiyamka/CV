import { html, render } from 'lit-html';
import './style.styl';

const jobs = [
  {
    date: '08.2018',
    org: 'ObjectStyle',
    project: 'Various GIS systems',
    responsibilities: 'Architecture Design, API Design, Tooling, Estimation and Implementation, UX/UI Design',
    description: `Involved in the design and development of many GIS systems.
Our tools are designed to assist organizations related to the elimination and prevention of disasters. Among them HOTOSM, Pacific Disaster Center.
Our tasks include aggregation of data from various sources, their processing and providing an interface for further work with samples.
In addition to developing UI design drawn and implement by me.`,
    stack: ['React', 'Redux', 'Unistore', 'GraphQl', 'React-Apollo', 'MapBoxGL', 'DeckGL', 'Ava', 'ReactVis', 'Docker', 'Ansible', 'GitLab CI', 'Node.js', 'S3' ]
  },
  {
    date: '06.2017',
    org: 'Ultralab',
    project: 'Platform.io - Open Real-Time Bidding Platform',
    description: `One of the most powerful in terms of technical capabilities of the bidding platform.
From the front-end point of view, it is an application with a complex interface that includes dozens of forms, interactive tables and graphs with complex interconnections.`,
    responsibilities: 'Implement new features, support existing codebase, API design, deploy releases, estimation and planning sprint', 
    stack: ['Aurelia', 'CommonJS', 'Webpack', 'Babel', 'Sass', 'Jenkins', 'AngularJS']
  },
  {
    date: '06.2016',
    org: 'NT Technology',
    project: 'Prorgammatic AD platform',
    description: 'Back-office software for platform with a lot of charts and forms. RAD Development.',
    responsibilities: 'Front-end development, UX/UI Design',
    stack: ['VUEjs', 'Vuex', 'Chart.js', 'Laravel Elixir', 'Pug', 'Stylus']
  }
];

const jobTemplate = jobs => 
     jobs.map(job => html`<div class="step">
      <h3 class="date">${job.date}</h3>
      <div class="org"><span class="dimm">Employer</span>: ${job.org}</div>
      <div class="project"><span class="dimm">Project</span>: ${job.project}</div>
      <div class="responsibilities"><span class="dimm">Responsibilities</span>: ${job.responsibilities}</div>
      <div class="description"><span class="dimm">Description:</span> ${job.description} </div>
      <ul class="techs">
        ${job.stack.map(tech =>  html`<li>${tech}</li>`)}
      </ul>
    </div>`
  );

render(jobTemplate(jobs), document.getElementById('jobs'));

const contacts = [
  {
    title: 'Github',
    link: 'https://github.com/Akiyamka',
    text: 'github.com/akiyamka'
  },
  {
    title: 'Telegram',
    link: 'https://t.me/Akiyamka',
    text: 't.me/akiyamka'
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/alxdubinin/',
    text: 'linkedin.com/in/alxdubinin/'
  },
]

const contactsTemplate = cont => 
     cont.map(c => html`<div>
      <span class="title">${c.title}:</span>
      <a href="${c.link}" noreferer noopener target="_blank">${c.text}</a></li>
    </div>`
  );
render(contactsTemplate(contacts), document.getElementById('contacts'));

const Old = birthday => html`${Math.abs(new Date(Date.now() - birthday.getTime()).getUTCFullYear() - 1970)} old, `;
render(Old(new Date('April 23, 1991')), document.getElementById('born'));

