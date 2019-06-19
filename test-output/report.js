$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vraja/workspace/FreeCRMBDD/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#data driven by using scenario without example keyword below to pass data"
    },
    {
      "line": 7,
      "value": "#And User enters \"vijayalakshmiraja88@gmail.com\" and \"jesus@123\""
    },
    {
      "line": 8,
      "value": "# data Driven by using Data Table concept below"
    }
  ],
  "line": 9,
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "vijayalakshmiraja88@gmail.com",
        "jesus@123"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters contact details \"Viji\" and \"Raja\" and \"Tester\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepfile.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 14191487820,
  "status": "passed"
});
formatter.match({
  "location": "stepfile.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 9018146595,
  "status": "passed"
});
formatter.match({
  "location": "stepfile.user_enters_and(DataTable)"
});
formatter.result({
  "duration": 2640649953,
  "status": "passed"
});
formatter.match({
  "location": "stepfile.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 5144898144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Viji",
      "offset": 29
    },
    {
      "val": "Raja",
      "offset": 40
    },
    {
      "val": "Tester",
      "offset": 51
    }
  ],
  "location": "stepfile.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 37389457633,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 14,
      "value": "#Examples:"
    },
    {
      "line": 15,
      "value": "#| username| password | firstname  | lastname  | position |"
    },
    {
      "line": 16,
      "value": "#| vijayalakshmiraja88@gmail.com | jesus@123 | viji | Raja | Tester |"
    },
    {
      "line": 17,
      "value": "# | username2 | password2 |"
    }
  ],
  "line": 19,
  "name": "Successful LogOut",
  "description": "",
  "id": "login-action;successful-logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "User LogOut from the Application",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Message displayed LogOut Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepfile.user_LogOut_from_the_Application()"
});
formatter.result({
  "duration": 46962,
  "status": "passed"
});
formatter.match({
  "location": "stepfile.message_displayed_LogOut_Successfully()"
});
formatter.result({
  "duration": 24881,
  "status": "passed"
});
});