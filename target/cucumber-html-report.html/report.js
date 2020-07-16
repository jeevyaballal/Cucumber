$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/stepdefs/facebook.feature");
formatter.feature({
  "name": "Test Facebook smoke scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test Login eith valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open Firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter valid \"\u003cusername\u003e\" and valid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "name": "The browser will close",
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
        "password"
      ]
    },
    {
      "cells": [
        "jeevya",
        "jeevya"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test Login eith valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open Firefox and start application",
  "keyword": "Given "
});
formatter.match({
  "location": "facebookSteps_POM_PagefACT.open_firefox_and_start_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"jeevya\" and valid \"jeevya\"",
  "keyword": "When "
});
formatter.match({
  "location": "facebookSteps_POM_PagefACT.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "facebookSteps_POM_PagefACT.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The browser will close",
  "keyword": "Then "
});
formatter.match({
  "location": "facebookSteps_POM_PagefACT.theBrowserWillClose()"
});
formatter.result({
  "status": "passed"
});
});