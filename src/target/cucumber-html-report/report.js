$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1-Page-Title.feature");
formatter.feature({
  "line": 1,
  "name": "Access ebay",
  "description": "Use selenium java with cucumber-jvm and navigate to website",
  "id": "access-ebay",
  "keyword": "Feature"
});
formatter.before({
  "duration": 47711348,
  "error_message": "java.lang.NullPointerException\r\n\tat com.cucumber.automation.stefdefs.Hooks.setUp(Hooks.java:57)\r\n\tat com.cucumber.automation.stefdefs.Hooks.browserLauncher(Hooks.java:35)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 3,
  "name": "Print title, url",
  "description": "",
  "id": "access-ebay;print-title,-url",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I open ebay website",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I validate title and URL",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectStepDefs.i_open_seleniumframework_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectStepDefs.i_print_title_and_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4233778,
  "error_message": "java.lang.NullPointerException\r\n\tat com.cucumber.automation.stefdefs.Hooks.embedScreenShotsAndCloseBrowser(Hooks.java:45)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:204)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:50)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 83649,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User will login",
  "description": "",
  "id": "access-ebay;user-will-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I check my link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click My eBay",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I will uncheck Stay signed in",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I will click on Sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectStepDefs.checkMyLink()"
});
formatter.result({
  "duration": 391539833,
  "error_message": "java.lang.ExceptionInInitializerError\r\n\tat org.sikuli.basics.Debug.log(Debug.java:697)\r\n\tat org.sikuli.basics.Debug.logx(Debug.java:675)\r\n\tat org.sikuli.script.RunTime.log(RunTime.java:99)\r\n\tat org.sikuli.script.RunTime.get(RunTime.java:184)\r\n\tat org.sikuli.script.RunTime.get(RunTime.java:126)\r\n\tat org.sikuli.script.RunTime.get(RunTime.java:316)\r\n\tat org.sikuli.script.Region.\u003cclinit\u003e(Region.java:31)\r\n\tat modules.homePageSignIn.chkMyLink(homePageSignIn.java:41)\r\n\tat com.cucumber.automation.stefdefs.ProjectStepDefs.checkMyLink(ProjectStepDefs.java:49)\r\n\tat ✽.When I check my link(1-Page-Title.feature:7)\r\nCaused by: java.lang.NumberFormatException: For input string: \".\"\r\n\tat java.base/java.lang.NumberFormatException.forInputString(NumberFormatException.java:65)\r\n\tat java.base/java.lang.Integer.parseInt(Integer.java:638)\r\n\tat java.base/java.lang.Integer.parseInt(Integer.java:770)\r\n\tat org.sikuli.basics.Settings.\u003cclinit\u003e(Settings.java:123)\r\n\tat org.sikuli.basics.Debug.log(Debug.java:697)\r\n\tat org.sikuli.basics.Debug.logx(Debug.java:675)\r\n\tat org.sikuli.script.RunTime.log(RunTime.java:99)\r\n\tat org.sikuli.script.RunTime.get(RunTime.java:184)\r\n\tat org.sikuli.script.RunTime.get(RunTime.java:126)\r\n\tat org.sikuli.script.RunTime.get(RunTime.java:316)\r\n\tat org.sikuli.script.Region.\u003cclinit\u003e(Region.java:31)\r\n\tat modules.homePageSignIn.chkMyLink(homePageSignIn.java:41)\r\n\tat com.cucumber.automation.stefdefs.ProjectStepDefs.checkMyLink(ProjectStepDefs.java:49)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ProjectStepDefs.clickMyEbayLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectStepDefs.loginAtEbay()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectStepDefs.loginAtEbayUncheck()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectStepDefs.loginAtEbaySubmit()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 127270,
  "error_message": "java.lang.NullPointerException\r\n\tat com.cucumber.automation.stefdefs.Hooks.embedScreenShotsAndCloseBrowser(Hooks.java:45)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:204)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:50)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.uri("2-eBayLogout.feature");
formatter.feature({
  "line": 1,
  "name": "Access seleniumframework.com website",
  "description": "Use selenium java with cucumber-jvm and navigate to website",
  "id": "access-seleniumframework.com-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 62095,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User will logout from eBay",
  "description": "",
  "id": "access-seleniumframework.com-website;user-will-logout-from-ebay",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I will click Hi Username dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click to be deleted",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click logout link",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectStepDefs.userProfLink()"
});
formatter.result({
  "duration": 54828201,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:37)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat modules.homePageSignOut.UserProfile(homePageSignOut.java:14)\r\n\tat com.cucumber.automation.stefdefs.ProjectStepDefs.userProfLink(ProjectStepDefs.java:54)\r\n\tat ✽.When I will click Hi Username dropdown(2-eBayLogout.feature:5)\r\n",
  "status": "failed"
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
  "duration": 212972,
  "error_message": "java.lang.NullPointerException\r\n\tat com.cucumber.automation.stefdefs.Hooks.embedScreenShotsAndCloseBrowser(Hooks.java:45)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:204)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:50)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:107)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:77)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:53)\r\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:144)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
});