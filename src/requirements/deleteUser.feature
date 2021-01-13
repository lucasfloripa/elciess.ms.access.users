Feature: Delete user
Like a authenticated user
I want delete my account in the elciess system

Scenario: User is authenticated
Given user try delete his account
When system check user id
And get the user
Then system delete the user 

Scenario: User is not authenticated
Given user try delete his account
When system check user id
Then system inform the user is not valid
And not delete the user