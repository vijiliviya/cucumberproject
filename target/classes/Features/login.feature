Feature: Login Action
 
Scenario: Successful Login with Valid Credentials
 Given User is on Home Page
 When User Navigate to LogIn Page
 #data driven by using scenario without example keyword below to pass data
 #And User enters "vijayalakshmiraja88@gmail.com" and "jesus@123"
 # data Driven by using Data Table(List) concept below
 And User enters username and password
 | vijayalakshmiraja88@gmail.com | jesus@123 |
 Then User moves to new contact page
 #data driven by using scenario without example keyword below to pass data
 #Then user enters contact details "Viji" and "Raja" and "Tester"
 #data Driven by using Data Table(Map) concept below
 Then user enters contact details
 | First Name | Last Name | Position |
 | Vijayalakshmi | Raja | QA |
 | Neelam | Verma | QA |
 | Mani | Mohan | Developer |
 | Divya | selva |API Tester  |
     
 

Scenario: Successful LogOut
 When User LogOut from the Application
 Then Message displayed LogOut Successfully
 