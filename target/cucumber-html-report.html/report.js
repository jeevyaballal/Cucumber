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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027main-view\u0027]/div/div/div[2]/div/div[5]/div[2]/div/div/input[1]\"}\n  (Session info: chrome\u003d84.0.4147.89)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PUN-LAP-DEV10.local\u0027, ip: \u0027fe80:0:0:0:1882:c122:8bac:37d1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/lr/5hgn8qss1cb...}, goog:chromeOptions: {debuggerAddress: localhost:57165}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3330a292180ca12c68478077d4eca39d\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027main-view\u0027]/div/div/div[2]/div/div[5]/div[2]/div/div/input[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat pages.RegistrationPage.setUsernameField(RegistrationPage.java:52)\n\tat stepdefs.RegistrationFeatureDefinitions.user_inputs_username_as(RegistrationFeatureDefinitions.java:22)\n\tat ✽.User inputs username as \"a\"(file:src/test/resources/stepdefs/Registerfeature.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "User inputs phone number as \"9898989898\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationFeatureDefinitions.user_inputs_phone_number_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User inputs location",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationFeatureDefinitions.user_inputs_location()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User inputs password as \"a\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationFeatureDefinitions.user_inputs_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Press Register button",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationFeatureDefinitions.press_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Username should load on page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationFeatureDefinitions.usernameShouldLoadOnPage()"
});
formatter.result({
  "status": "skipped"
});
});