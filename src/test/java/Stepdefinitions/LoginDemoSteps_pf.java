package Stepdefinitions;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import PageFactory.HomePage_PF;
import PageFactory.LoginPage_PF;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class LoginDemoSteps_pf{ 

	WebDriver driver=null; 
	LoginPage_PF login;
	
	HomePage_PF home;
	@Given("browser is open")
	public void browser_is_open() {
		driver=new ChromeDriver();
		
		System.out.println("Inside Login Demo Steps Page Factory");
	System.out.println("Inside step-browser is open");
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(40));
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(40));
		driver.manage().window().maximize();
	}

@And("user is on login page")
public void user_is_on_login_page() {
	driver.get("https://practicetestautomation.com/practice-test-login/");
	}

@When("^user enters (.*) and (.*)$")
public void user_enters_username_and_password(String username,String password) throws InterruptedException {
	login=new LoginPage_PF(driver);
		login.enterUsername(username);
		Thread.sleep(3000);
		login.enterPassword(password);
		Thread.sleep(3000);

}
@When("user clicks on login button")
public void user_clicks_on_login_button() throws InterruptedException {
	login.click_loginButton();

	}

	@Then("user is navigated to home page")
public void user_is_navigated_to_home_page() {

	home.verifyhomepage();

if(driver!=null)
{
		driver.close();
		driver.quit();
	}

}
}
