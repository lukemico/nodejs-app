# LevelUp Watch Edition App Development Environment

This application is a project developed via ThoughtWorks Levelup - Sydney program. The concept of the app is a Patient/Carer relationship alert system that notifies either user of upcoming appointments, health & medicine and emergency alert alarms in the case of a health emergency. 

Using NodeJS as a framework, the app features testing with Jest, continuous integration with Cicle CI to deliver an application 


## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


## Prerequisites
Ensure that you have the following installed on your local machine:

Before you can setup your Proto Watch development environment, you need to have Git, NodeJS and CCTray or CCMenu installed and working.


### Windows Setup Instructions

1. Install [Git](https://git-scm.com/downloads)
2. Install [Node](https://nodejs.org/en/) version 9
3. Install [CCTray](http://en.freedownloadmanager.org/Windows-PC/CruiseControl-NET-CCTray-FREE.html)
4. Git clone your teams repo - further instructions on cloning a repository can be found [here](https://help.github.com/articles/cloning-a-repository/)

**Now run the initial setup and start the app!**

```shell
cd path_to_team_repo
npm install
npm start
```

You should now be able to view the demo Proto Watch app in your browser at [http://localhost:8080](http://localhost:8080)


### OS X Setup Instructions

The links below will help you get Git, Node, NPM and CCMenu installed using Homebrew (preferred way of installing dev tools on OS X)

1. Install [Git](https://git-scm.com/downloads)
2. [Installing Node.js and npm using Homebrew on OS X](https://www.dyclassroom.com/howto-mac/how-to-install-nodejs-and-npm-on-mac-using-homebrew)
3. Install [CCMenu](http://ccmenu.org/)
4. Git clone your teams repo - further instructions on cloning a repository can be found [here](https://help.github.com/articles/cloning-a-repository/)


## Installation 
Clone the repo:

```
git clone https://github.com/lukemico/nodejs-app.git

cd nodejs-app
```

then follow instructions in the Starting Local Server section.


## Steps for starting a Local Server
To start the server, run the following via the Command Line:

**To run the initial setup and start the app!**

```shell
cd nodejs-app
./go start

```

The script should run your initial setup, then start your app. You should now be able to view the demo Proto Watch app in your browser at [http://localhost:8080](http://localhost:8080)


## Usage / Features
* 


## Deployment
View the [Live Demo]() here.


## Built With
- [Node.js](https://nodejs.org/en/) - Node.js
- [SCSS](http://sass-lang.com/) - CSS Styling
- [Jest](https://facebook.github.io/jest/) - Testing Framework
- [JQuery](https://jquery.com/) - JavaScript Library

These are the infrastructure tools used to automate various tasks in the development environment and deploy automatically to the Heroku staging environment.

- [webpack](https://webpack.js.org/) - Module bundler
- [CircleCI](https://circleci.com/) - Continuous Integration and Delivery
- [Heroku](https://www.heroku.com/) - Staging environment


# Continuous Integration
This project is continuously deployed to GitHub Pages by [Circle CI](https://circleci.com).
You can view this app at [https://twlevelup.github.io/syd-2018-sem1-jupiter/](https://twlevelup.github.io/syd-2018-sem1-jupiter/)

[![CircleCI](https://circleci.com/gh/twlevelup/syd-2018-sem1-jupiter.svg?style=svg)](https://circleci.com/gh/twlevelup/syd-2018-sem1-jupiter)


### Checking the build status
You can access the CI server and view the status of the build here [Circle CI](https://circleci.com/gh/twlevelup/syd-2018-sem1-jupiter)


## Versioning
GitHub used for versioning. For the versions available, see the tags on this repository.


## Authors
Luke Mico, Maddi Milasa, Kevin Lau, 


## License
n/a


## Acknowledgments
[Heroku](https://devcenter.heroku.com/articles) Devcenter



