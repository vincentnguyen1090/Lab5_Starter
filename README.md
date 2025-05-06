# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Vincent Nguyen

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I would use a unit test to test the "message" feature on a messaging application because I can make it easier to debug on a small scale compared to debugging the entire message application. For the test, I can test to check if text is there, if the message is being sent, and checking the correct location of where the message is sent. Unit tests are effective are core logic in isolation.


2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

I would use a unit test to test the "max message length" feature of a messaging application because checking a specific condition for a messaging featur is a good example of feature that is small, isoalted, and logic-based. I think this can be checked by ensuring messages are no longer than 80 characters, vertify exactly 80 characters are still allowed, and ensuring short messages or empty is meeting expectations.