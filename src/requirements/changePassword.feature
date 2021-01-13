Feature: Change user password
Like authenticated user
I want change my password in the elciess system

Scenario: User is authenticated and informs valid new password
Given user informs new password
And user submit the change
When system check user id
And check if new password is valid
And get the user
And hash the new password
Then system change user password 

Scenario: User is authenticated and informs invalid new password
Given user informs new password
And user submit the change
When system check user id
And check if new password is valid
Then system inform the invalid field
And dont change user password 

Scenario: User is not authenticated
Given user informs new password
And user submit the change
When system check user id
Then system inform user is not authenticated
And dont change user password