Feature: Login Action
 
Scenario: Successful Login with Valid Credentials
 Given User is on Home Page
 When User Navigate to LogIn Page
 #data driven by using scenario without example keyword below to pass data
 #And User enters "vijayalakshmiraja88@gmail.com" and "jesus@123"
 # data Driven by using Data Table concept below
 And User enters username and password
 | vijayalakshmiraja88@gmail.com | jesus@123 |
 Then User moves to new contact page
 Then user enters contact details "Viji" and "Raja" and "Tester"
 
 #Examples:
 #| username| password | firstname  | lastname  | position |
#| vijayalakshmiraja88@gmail.com | jesus@123 | viji | Raja | Tester |
# | username2 | password2 |

Scenario: Successful LogOut
 When User LogOut from the Application
 Then Message displayed LogOut Successfully
 