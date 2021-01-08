# Elciess Access Users
##### Tecnologies: Typescript, Node, Express, TypeORM, MongoDB, OracleDB, Heroku.

<br />

## What this project has to show you ?
Micro service with architecture based on SOLID principles, diversification of infrastructure implementations and package by feature approuch.

## So, what this micro service do ?
Controll CRUD operations of access users that can be used to access any other Elciess service.

## Fuctional Requirements
- [x] Create new user
- [x] The user can delete himself
- [x] The user can change your password

## Non-Fuctional Requirements
- [x] User cant register with same e-mail
- [x] User receive a welcome e-mail when is created
- [x] User receive a token when is created
- [x] Protected routes
- [x] MongoDB

## Routes 
#### https://elciess-ms-access-users.herokuapp.com/
- getUser => GET /"userId"
- createUser => POST /
- deleteUser => DELETE /
- changePassword => PUT /

## How to start localy this project ?
1. clone the project
2. npm install, to install all the dependencies.
3. npm run dev, to run de project.