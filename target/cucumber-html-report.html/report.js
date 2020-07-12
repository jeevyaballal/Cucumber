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
        "harshb@gmail.com",
        "harshb44@gmail"
      ]
    },
    {
      "cells": [
        "hello2323@rediffmail.com",
        "hehe"
      ]
    },
    {
      "cells": [
        "lolol232@",
        "lolol"
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
  "location": "facebookSteps.open_firefox_and_start_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"harshb@gmail.com\" and valid \"harshb44@gmail\"",
  "keyword": "When "
});
formatter.match({
  "location": "facebookSteps.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "facebookSteps.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The browser will close",
  "keyword": "Then "
});
formatter.match({
  "location": "facebookSteps.theBrowserWillClose()"
});
formatter.result({
  "status": "passed"
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
  "location": "facebookSteps.open_firefox_and_start_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"hello2323@rediffmail.com\" and valid \"hehe\"",
  "keyword": "When "
});
formatter.match({
  "location": "facebookSteps.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "facebookSteps.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The browser will close",
  "keyword": "Then "
});
formatter.match({
  "location": "facebookSteps.theBrowserWillClose()"
});
formatter.result({
  "status": "passed"
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
  "location": "facebookSteps.open_firefox_and_start_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"lolol232@\" and valid \"lolol\"",
  "keyword": "When "
});
formatter.match({
  "location": "facebookSteps.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "facebookSteps.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The browser will close",
  "keyword": "Then "
});
formatter.match({
  "location": "facebookSteps.theBrowserWillClose()"
});
formatter.result({
  "status": "passed"
});
});