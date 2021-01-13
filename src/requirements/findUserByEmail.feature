Feature: Find user by email
Like a user
I want find users by email in the elciess system

Scenario: User informs valid email
Given user informs email
And submit the search
When system check field
Then system inform user 

Scenario: User informs invalid email
Given user informs email
And submit the register
When system check fields
Then system inform the invalid field
And dont search user

Scenario: User informs duplicate email
Given user informs email
And submit the register
When system check fields
And check if email is already used
Then system inform the duplicate email
And dont search user