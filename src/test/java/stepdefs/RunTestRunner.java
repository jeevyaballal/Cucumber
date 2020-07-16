package stepdefs;



import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/stepdefs",
        glue = {"stepdefs"},
        plugin = {"html:target/cucumber-html-report.html","json:target/Test-Report.json","com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"},
    tags = {"not @Sanity"}

)


public class RunTestRunner {
}
