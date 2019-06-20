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
      "value": "# data Driven by using Data Table(List) concept below"
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
  "comments": [
    {
      "line": 12,
      "value": "#data driven by using scenario without example keyword below to pass data"
    },
    {
      "line": 13,
      "value": "#Then user enters contact details \"Viji\" and \"Raja\" and \"Tester\""
    },
    {
      "line": 14,
      "value": "#data Driven by using Data Table(Map) concept below"
    }
  ],
  "line": 15,
  "name": "user enters contact details",
  "rows": [
    {
      "cells": [
        "First Name",
        "Last Name",
        "Position"
      ],
      "line": 16
    },
    {
      "cells": [
        "Vijayalakshmi",
        "Raja",
        "QA"
      ],
      "line": 17
    },
    {
      "cells": [
        "Neelam",
        "Verma",
        "QA"
      ],
      "line": 18
    },
    {
      "cells": [
        "Mani",
        "Mohan",
        "Developer"
      ],
      "line": 19
    },
    {
      "cells": [
        "Divya",
        "selva",
        "API Tester"
      ],
      "line": 20
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepfile.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 7542235433,
  "status": "passed"
});
formatter.match({
  "location": "stepfile.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 13440885323,
  "status": "passed"
});
formatter.match({
  "location": "stepfile.user_enters_and(DataTable)"
});
formatter.result({
  "duration": 2362268840,
  "status": "passed"
});
formatter.match({
  "location": "stepfile.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 4949621024,
  "status": "passed"
});
formatter.match({
  "location": "stepfile.user_enters_contact_details(DataTable)"
});
formatter.result({
  "duration": 83904312694,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Successful LogOut",
  "description": "",
  "id": "login-action;successful-logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "User LogOut from the Application",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Message displayed LogOut Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepfile.user_LogOut_from_the_Application()"
});
formatter.result({
  "duration": 57225,
  "status": "passed"
});
formatter.match({
  "location": "stepfile.message_displayed_LogOut_Successfully()"
});
formatter.result({
  "duration": 27991,
  "status": "passed"
});
});