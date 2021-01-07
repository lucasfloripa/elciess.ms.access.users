# Micro Service for Access Users
##### Tecnologies: Typescript, Node, Express, TypeORM, MongoDB, OracleDB, Heroku.

<br />

## What this project has to show you ?
Architecture based on SOLID principles. Diversification of infrastructure implementations. Package by feature approuch.

## So, what this micro service do ?
Controll CRUD operations of access users that can be used to access any other Elciess service.

## Fuctional Requirements
- [x] Create new user
- [x] The user can delete himself
- [x] The user can change your password

## Non-Fuctional Requirements
- [x] User cant register with same e-mail
- [x] User receive a welcome e-mail when is created
- [x] Protected routes
- [x] MongoDB

## Routes 
#### https://elciess-ms-access-users.herokuapp.com/
- POST /
- GET /"userId"
- DELETE /"userId"
- PUT /"userId"

## How to start localy this project ?
1. clone the project
2. npm install, to install all the dependencies.
3. npm run dev, to run de project.