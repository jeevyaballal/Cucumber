$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/stepdefs/Registerfeature.feature");
formatter.feature({
  "name": "Register",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User provided valid data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Browser is opened and site is loaded",
  "keyword": "When "
});
formatter.step({
  "name": "User inputs username as \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User inputs phone number as \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User inputs location",
  "keyword": "And "
});
formatter.step({
  "name": "User inputs password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Press Register button",
  "keyword": "Then "
});
formatter.step({
  "name": "Username should load on page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "phone"
      ]
    },
    {
      "cells": [
        "a",
        "a",
        "9898989898"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User provided valid data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Browser is opened and site is loaded",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationFeatureDefinitions.init()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs username as \"a\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationFeatureDefinitions.user_inputs_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs phone number as \"9898989898\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationFeatureDefinitions.user_inputs_phone_number_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs location",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationFeatureDefinitions.user_inputs_location()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs password as \"a\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationFeatureDefinitions.user_inputs_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Press Register button",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationFeatureDefinitions.press_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Username should load on page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationFeatureDefinitions.usernameShouldLoadOnPage()"
});
formatter.result({
  "status": "passed"
});
});