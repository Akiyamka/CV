import { html, render } from 'lit-html';
import './style.styl';

const jobs = [
  {
    date: '08.2018',
    org: 'ObjectStyle',
    project: 'Varios GIS systems',
    responsibilities: 'Architecture Design, API Design, Tooling, Estimation and Implementation, UX/UI Design',
    stack: ['React', 'Redux', 'Unistore', 'GraphQl', 'Apollo', 'MapBoxGL', 'DeckGL', 'Ava', 'ReactVis',  'Docker', 'Ansible', 'GitLab CI', 'Node.js' ]
  },
  {
    date: '06.2017',
    org: 'Ultralab',
    project: 'Platform.io - Open Real-Time Bidding Platform',
    responsibilities: 'Implement new features, support existing codebase, API design, deploy releases, estimation and planning sprint', 
    stack: ['Aurelia', 'CommonJS', 'Webpack', 'Babel', 'Sass', 'Jenkins']
  },
  {
    date: '06.2016',
    org: 'NT Technology',
    project: 'Prorgammatic AD platform',
    responsibilities: 'Frontend development, UX/UI Design',
    stack: ['VUEjs', 'Vuex', 'Chart.js', 'Laravel Elixir', 'Pug', 'Stylus']
  }
];

const jobTemplate = jobs => 
     jobs.map(job => html`<li>
      <div class="date">${job.date}</div>
      <div class="org"><span class="dimm">Employer</span>: ${job.org}</div>
      <div class="project"><span class="dimm">Project</span>: ${job.project}</div>
      <div class="responsibilities"><span class="dimm">Responsibilities</span>: ${job.responsibilities}</div>
      <ul class="techs">
        ${job.stack.map(tech =>  html`<li>${tech}</li>`)}
      </ul>
    </li>`
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
     cont.map(c => html`<li>
      <span class="title">${c.title}:</span>
      <a href="${c.link}" noreferer noopener target="_blank">${c.text}</a></li>
    </li>`
  );


render(contactsTemplate(contacts), document.getElementById('contacts'));