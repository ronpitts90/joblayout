# Unit 10 OOP Homework: Template Engine - Employee Summary


## Description 
This application allows programmers to, after insatlling npm, enter needed information in order to generate an html file so the user can quikcly create an html file of their current employees. 

## Installation
In order to use this read me generator you must install npm and run node.js in your terminal. 

## Usage 
This application can be used when you are trying to create a quick and reliable yet simple webpage displaying your current employment roster and provide the user with info to contact said employeees. 

## User Story 
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles


## Steps
1. First I install npm and create a file named output with team.html inside
2. I create my questions for the read me to prompt and ask
3. I import emplooyee, manager, intern, and engineer.js 
4. I make sure I require fs, path, and inquirer and Make sure I import my htmlRender file
5. I create a function to start the program by passing questions through the terminal that will later populate inside team.html
6. I call the function that starts the program
7. Then the data is passed through and fills the html page accordingly 


## About
This app uses node.js in order to gather information about employees (Engineer,Intern, or Manager) through their answers to predetermined questions based on their employment type. Then the app will organize this data into html to present as a webpage and work through the console. 

## Directions

Install using "npm i" and continue through the questions by initiallizing the start of them by typing "node app.js".

## Video Demo 
https://drive.google.com/file/d/1e5bh2sy1HgrUBGfVz7FTzWzseukDutfS/view
