package Stepdefinitions;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/LoginDemo.feature",
	    glue = {"Stepdefinitions"}, // Update based on your package
	    monochrome = true,

//plugin= {"pretty","html:target/HtmlReports"}
//plugin= {"pretty","json:target/JSONReports/json.report"}

		plugin = { "pretty", "junit:target/JUNITReports/report.xml", 
				"html:target/HtmlReports",
				"json:target/JSONReports/json.report"})

public class TestRunner {

}
