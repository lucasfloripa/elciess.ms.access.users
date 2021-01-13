Feature: Create user
Like a new user
I want register my new account in the elciess system
So that I can authenticate myself and use other elciess services

Scenario: User informs valid data
Given user informs email and password
And submit the register
When system check fields
And check if email is already used
And hash the password
Then system create new user 
And send a token

Scenario: User informs invalid data
Given user informs email and password
And submit the register
When system check fields
Then system inform the invalid field(s)
And dont create the new user

Scenario: User inform duplicate email
Given user informs email and password
And submit the register
When system check fields
And check if email is already used
Then system inform the duplicate email
And dont create the new user