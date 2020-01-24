# _Beep-Boop_

#### _Arrays & looping independent project for Epicodus_, _17 January 2020_

#### By _**Michelle Morin**_

## Description

_This project is a webpage that accepts user input of a number and optionally thier name. The webpage returns a range of numbers from 0 to the user's inputted number when the user selects the "count up button," and returns a range of numbers from the user's inputted number to 0 when the user selects the "count down" button. The list of numbers includes the following exceptions, ordered from least to most important. For numbers in the list that contain a 1, all digits are replaced with "Beep!" For numbers that contain a 2, all digits are replaced with "Boop!" For numbers that contain a 3, all digits are replaced with "I'm sorry, Dave. I'm afraid I can't do that." In instances that the user enters a name, the aforementioned "Dave" is replaced with the user's name for all numbers that both contain a 3 and are divisible by 3. Bootstrap version 3.3.7 and a custom stylesheet both style the webpage._

## Specifications:


| Specification | Example Input | Example Output |
| ------------- |:-------------:| --------------:|
| The program returns returns an error message when the user does not enter a number | "hello" | "Please enter a number." |
| The program returns a range of numbers from 0 to the user's inputted number | 4 | 0, 1, 2, 3, 4 |
| The program returns a range of numbers from the user's inputted number to 0 | 4 | 4, 3, 2, 1, 0 |
| The program replaces the number 3 with "I'm sorry, Dave. I'm afraid I can't do that." | 3 |   0, 1, 2, "I'm sorry, Dave. I'm afraid I can't do that." |
| The program replaces the number 2 with "Boop!" | 2 | 0, 1, "Boop!" |
| The program replaces the number 1 with "Beep!" | 1 | 0, "Beep!" |
| The program replaces a multi-digit number containing a 3 with "I'm sorry, Dave. I'm afraid I can't do that." | 13 | 0, "Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, 6, 7, 8, 9, 10, 11, 12, "I'm sorry, Dave. I'm afraid I can't do that." |
| The program replaces a multi-digit number containing a 2 with "Boop!" | 12 | 0, "Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, 6, 7, 8, 9, 10, 11, "Boop!" |
| The program replaces a multi-digit number containing a 1 with "Beep!" | 10 | 0, "Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, 6, 7, 8, 9, "Beep!" |
| For all numbers containing a 3 that are also divisible by 3, the program replaces "Dave" with the user's inputted name | "Michelle", 3 | 0, "Beep!", "Boop!", "I'm sorry, Michelle. I'm afraid I can't do that." |


## Setup/Installation Requirements

* _First, clone this repository to your desktop by navigating to the desktop in the Terminal (entering "cd desktop" in the Terminal) and then entering "git clone" followed by the URL for this GitHub repository._
* _Once the project directory is cloned to your desktop, navigate to the directory in the terminal by entering "cd beepboop" in the Terminal._
* _Confirm that you have navigated to the project directory by entering "pwd" in the Terminal. Once you have navigated to the beepboop directory in the terminal, open the contents of the directory in a text editor or IDE of your choice (e.g., to open the contents of the directory in Visual Studio Code, enter the command "code ." in the Terminal)._
* _Open index.html in a browser of your choice (e.g., Google Chrome)._

## Technologies Used

_Git, HTML, CSS, JavaScript, jQuery_

### License

*This webpage is licensed under the MIT license.*

Copyright (c) 2020 **_Michelle Morin_**