$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1-Page-Title.feature");
formatter.feature({
  "id": "access-ebay",
  "description": "Use selenium java with cucumber-jvm and navigate to website",
  "name": "Access ebay",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 10583556826,
  "status": "passed"
});
formatter.scenario({
  "id": "access-ebay;print-title,-url",
  "description": "",
  "name": "Print title, url",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I open ebay website",
  "keyword": "When ",
  "line": 4
});
formatter.step({
  "name": "I validate title and URL",
  "keyword": "Then ",
  "line": 5
});
formatter.match({
  "location": "ProjectStepDefs.i_open_seleniumframework_website()"
});
formatter.result({
  "duration": 5783751426,
  "status": "passed"
});
formatter.match({
  "location": "ProjectStepDefs.i_print_title_and_URL()"
});
formatter.result({
  "duration": 48239,
  "status": "passed"
});
formatter.write("Scenario is Passed");
formatter.after({
  "duration": 779015,
  "status": "passed"
});
formatter.before({
  "duration": 83136,
  "status": "passed"
});
formatter.scenario({
  "id": "access-ebay;user-will-login",
  "description": "",
  "name": "User will login",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "I check my link",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "I click My eBay",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "I enter username and password",
  "keyword": "Then ",
  "line": 9
});
formatter.step({
  "name": "I will uncheck Stay signed in",
  "keyword": "Then ",
  "line": 10
});
formatter.step({
  "name": "I will click on Sign in button",
  "keyword": "Then ",
  "line": 11
});
formatter.match({
  "location": "ProjectStepDefs.checkMyLink()"
});
formatter.result({
  "duration": 4978970181,
  "status": "passed"
});
formatter.match({
  "location": "ProjectStepDefs.clickMyEbayLink()"
});
formatter.result({
  "duration": 9527588840,
  "status": "passed"
});
formatter.match({
  "location": "ProjectStepDefs.loginAtEbay()"
});
formatter.result({
  "duration": 56466160563,
  "status": "passed"
});
formatter.match({
  "location": "ProjectStepDefs.loginAtEbayUncheck()"
});
formatter.result({
  "duration": 4807831617,
  "status": "passed"
});
formatter.match({
  "location": "ProjectStepDefs.loginAtEbaySubmit()"
});
formatter.result({
  "duration": 6756884124,
  "status": "passed"
});
formatter.write("Scenario is Passed");
formatter.after({
  "duration": 595808,
  "status": "passed"
});
formatter.uri("2-eBayLogout.feature");
formatter.feature({
  "id": "access-seleniumframework.com-website",
  "description": "Use selenium java with cucumber-jvm and navigate to website",
  "name": "Access seleniumframework.com website",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 54911,
  "status": "passed"
});
formatter.scenario({
  "id": "access-seleniumframework.com-website;user-will-logout-from-ebay",
  "description": "",
  "name": "User will logout from eBay",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "I will click Hi Username dropdown",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "I click to be deleted",
  "keyword": "Then ",
  "line": 6
});
formatter.step({
  "name": "I click logout link",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "ProjectStepDefs.userProfLink()"
});
formatter.result({
  "duration": 3825951163,
  "status": "passed"
});
formatter.match({
  "location": "ProjectStepDefs.toBeDeleted()"
});
formatter.result({
  "duration": 5069292328,
  "status": "passed"
});
formatter.match({
  "location": "ProjectStepDefs.userLogoutLink()"
});
formatter.result({
  "duration": 12229657079,
  "status": "passed"
});
formatter.write("Scenario is Passed");
formatter.after({
  "duration": 270962,
  "status": "passed"
});
});