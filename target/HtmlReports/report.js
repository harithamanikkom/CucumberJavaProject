$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/LoginDemo.feature");
formatter.feature({
  "name": "Test Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "check login is sucessfull with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on login page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user is navigated to home page",
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
        "Admin",
        "admin123"
      ]
    },
    {
      "cells": [
        "add",
        "pass"
      ]
    },
    {
      "cells": [
        "admin234",
        "Admin34"
      ]
    }
  ]
});
formatter.scenario({
  "name": "check login is sucessfull with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinitions.LoginDemoSteps.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.LoginDemoSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Admin and admin123",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinitions.LoginDemoSteps.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [user enters (.*) and (.*)] is defined with 2 parameters at \u0027Stepdefinitions.LoginDemoSteps.user_enters_username_and_password(java.lang.String,java.lang.String)\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: user enters Admin and admin123\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:134)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.LoginDemoSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinitions.LoginDemoSteps.user_is_navigated_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "check login is sucessfull with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinitions.LoginDemoSteps.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.LoginDemoSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters add and pass",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinitions.LoginDemoSteps.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [user enters (.*) and (.*)] is defined with 2 parameters at \u0027Stepdefinitions.LoginDemoSteps.user_enters_username_and_password(java.lang.String,java.lang.String)\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: user enters add and pass\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:134)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.LoginDemoSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinitions.LoginDemoSteps.user_is_navigated_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "check login is sucessfull with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinitions.LoginDemoSteps.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.LoginDemoSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin234 and Admin34",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinitions.LoginDemoSteps.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [user enters (.*) and (.*)] is defined with 2 parameters at \u0027Stepdefinitions.LoginDemoSteps.user_enters_username_and_password(java.lang.String,java.lang.String)\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: user enters admin234 and Admin34\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:134)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.LoginDemoSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinitions.LoginDemoSteps.user_is_navigated_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
});