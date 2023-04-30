import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  accenture = {tasks: []};
  citius = { tasks: []};
  capgemini = { tasks: []};
  tcs = { tasks: []};

  constructor() { }

  ngOnInit() {
    this.accenture.tasks = [
    'Built entire backend from scratch having REST API’s for consumption by angular frontend and with Snowflake as database.',
    'Participated in requirement gathering calls with clients and converted their expectations to designs',
      'Integrated the app with Microsoft Active Directory LDAP server for authentication',
      'Implemented JWT token mechanism for securing the application.',
'Used Java Message Service (JMS) for messaging and for asynchronous functionality. Used IBM MQ as JMS provider',
'Created React Components like Notification and Alert Modal using React Hooks, TypeScript and Redux ',
'Tested created web services using Postman and created documentation using Swagger.',
'Integrated with 3rd party APIs to fetch and transform JSON data to a suitable format for use by the frontend',
'Took part in setting up code coverage reports using SonarQube.'];

    // tslint:disable-next-line:max-line-length
    this.citius.tasks =
      ['Reduced costs by implementing features of a licensed library using OpenSource ReactJS libraries to perform functions like showing nested hierarchy of projects as a table with functionality display context menu on right click, toggle on click',
  'Customized Material-UI autocomplete library in ReactJS to add features like click to show more results, make matching characters of input to bold in the list of results and minimum length of input',
  'Created Jenkins pipeline to run on git push to build code and deploy war to central nexus repository. Added option to select branch and type of release as options while running pipeline',
  'Upgraded Spring Boot backend application from Java 8 to Java 11 and utilized new features'];

    this.capgemini.tasks = ['Built Java Microservice API endpoints using Spring Web flux which were deployed on Azure',
    'Implemented end to end reactive stack using Azure Cosmos DB with Spring Reactive database repositories',
    'Unit and Integration testing of developed code using jUnit and Mockito',
    'Implemented caching in application using Redis'];

    this.tcs.tasks = ['Enhancement of front and back end of Java, jQuery web application',
    'Code and SQL(IBM DB2) Optimizations and Unit Testing of the developed code',
    'Worked on UNIX environments and its commands. Created Bash scripts for activities such as automation.',
    'Using Spring Batch to create reports and Maven for build',
    'Management of client deliveries and client correspondence'];


  }

}
