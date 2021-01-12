# Delete User Use Case Requirement

> ## Success Case
1. User try delete himself
2. Domain check if user id is valid
3. Domain send a get user request to the repository
4. Repository try get the user
5. Domain check if user is valid
6. Domain send a delete user request to the repository
7. Repository delete the user
8. Domain send response success with a message
