# Micro Service for Access Users
##### Tecnologies: Typescript, Node, Express, TypeORM, MongoDB, OracleDB, Heroku.

<br />

## What this project has to show you ?
Architecture based on SOLID principles. Diversification of infrastructure implementations. Package by feature approuch.

## So, what this micro service do ?
Controll CRUD operations of access users that can be used to access any other service that I make.

## Fuctional Requirements
- [x] Create new user
- [x] The user can delete himself
- [x] The user can change your password

## Non-Fuctional Requirements
- [x] User cant register with same e-mail
- [x] User receive a welcome e-mail when is created
- [x] Protected routes

## Routes https://elciess-ms-access-users.herokuapp.com/
- newUser:         POST    /
- getUser:         GET     /userId
- deleteUser:      DELETE  /userId
- changePassword:  PUT     /userId

## How to start localy this project ?
1. clone the project
2. npm install, to install all the dependencies.
3. npm run dev, to run de project.