# Change Password Use Case Requirement

> ## Success Case
1. User inform new password
2. Domain check if user id is valid
3. Domain check has no empty field
4. Domain send a get user request to the repository
5. Repository try get the user
6. Domain check if user is valid
7. Domain hash new the password
8. Domain send change password request to the repository
9. Repository update user password
10. Domain send response success with the updated user
