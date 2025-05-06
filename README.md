# Lab 5 - Starter
Aldrin Ilagan

[Expose Section]("https://ai-aurum.github.io/CSE110_Lab5_Starter/expose.html")

## Explore Section

### Check Your Understanding 
1. I would not use a unit test to test a messaging feature, since properly testing this would require that the receiver in fact received the message. This would be impossible with unit testing, since the feature would be isolated from other moving parts such as a receiver.

2. I would use a unit to test to test the "max message length" feature, since data such as this can easily be handled on the unit side and has no dependencies on other components of the program. 