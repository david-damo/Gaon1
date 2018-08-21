$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1-Page-Title.feature");
formatter.feature({
  "id": "access-ebay",
  "description": "Use selenium java with cucumber-jvm and navigate to website",
  "name": "Access ebay",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 33016980266,
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
  "duration": 6175135160,
  "status": "passed"
});
formatter.match({
  "location": "ProjectStepDefs.i_print_title_and_URL()"
});
formatter.result({
  "duration": 22067,
  "status": "passed"
});
formatter.write("Scenario is Passed");
formatter.after({
  "duration": 338702,
  "status": "passed"
});
formatter.before({
  "duration": 42082,
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
  "duration": 4784603936,
  "status": "passed"
});
formatter.match({
  "location": "ProjectStepDefs.clickMyEbayLink()"
});
formatter.result({
  "duration": 46983863924,
  "status": "passed"
});
formatter.match({
  "location": "ProjectStepDefs.loginAtEbay()"
});
formatter.result({
  "duration": 60720028841,
  "status": "passed"
});
formatter.match({
  "location": "ProjectStepDefs.loginAtEbayUncheck()"
});
formatter.result({
  "duration": 5268867375,
  "status": "passed"
});
formatter.match({
  "location": "ProjectStepDefs.loginAtEbaySubmit()"
});
formatter.result({
  "duration": 27086066770,
  "status": "passed"
});
formatter.write("Scenario is Passed");
formatter.after({
  "duration": 398231,
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
  "duration": 231960,
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
  "duration": 5298037323,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with xpath \u003d\u003d //button[@id\u003d\u0027gh-ug\u0027] (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 5.21 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027DESKTOP-PI3LFR0\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.7.0_79\u0027\n*** Element info: {Using\u003dxpath, value\u003d//button[@id\u003d\u0027gh-ug\u0027]}\nSession ID: 339553db-770e-4cb4-8c37-c59219c43af0\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities [{platform\u003dWINDOWS, javascriptEnabled\u003dtrue, elementScrollBehavior\u003d0, ignoreZoomSetting\u003dtrue, enablePersistentHover\u003dtrue, ie.ensureCleanSession\u003dfalse, browserName\u003dinternet explorer, enableElementCacheCleanup\u003dtrue, ie.enableFullPageScreenshot\u003dtrue, unexpectedAlertBehaviour\u003ddismiss, ie.fileUploadDialogTimeout\u003d3000, ie.forceShellWindowsApi\u003dfalse, version\u003d11, pageLoadStrategy\u003dnormal, ignoreProtectedModeSettings\u003dtrue, requireWindowFocus\u003dfalse, initialBrowserUrl\u003dhttps://www.ebay.com, ie.forceCreateProcessApi\u003dfalse, nativeEvents\u003dtrue, browserAttachTimeout\u003d0, ie.browserCommandLineSwitches\u003d}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:37)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat modules.homePageSignOut.UserProfile(homePageSignOut.java:14)\r\n\tat com.cucumber.automation.stefdefs.ProjectStepDefs.userProfLink(ProjectStepDefs.java:54)\r\n\tat ✽.When I will click Hi Username dropdown(2-eBayLogout.feature:5)\r\n"
});
formatter.match({
  "location": "ProjectStepDefs.toBeDeleted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectStepDefs.userLogoutLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 786008010,
  "status": "passed"
});
});