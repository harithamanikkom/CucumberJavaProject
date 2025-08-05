package Stepdefinitions;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Features", 
glue = { "Stepdefinitions" }, 
monochrome = true,
//plugin= {"pretty","html:target/HtmlReports"}
//plugin= {"pretty","json:target/JSONReports/json.report"}

		plugin = { "pretty", "junit:target/JUNITReports/report.xml", "html:target/HtmlReports",
				"json:target/JSONReports/json.report"},

		tags = "@smoketest")

public class TestRunner {

}
