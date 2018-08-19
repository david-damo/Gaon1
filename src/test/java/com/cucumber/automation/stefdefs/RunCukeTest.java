package com.cucumber.automation.stefdefs;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * Created by Sanjeev on 8/19/2018.
 */


@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/com/cucumber/automation/features/",
        //glue = "com.cucumber.automation.stepdefs",
        /*glue = "src/test/com/cucumber/automation/stepdefs/ProjectStepDefs",
        plugin = {
                "pretty",
                "html:target/cucumber",
        },*/
        plugin = {"pretty", "html:src/target/cucumber-html-report",
                "json:src/target/cucumber.json",
                "junit:src/target/cucumber.xml"},
        tags = {}

)
public class RunCukeTest {
}
