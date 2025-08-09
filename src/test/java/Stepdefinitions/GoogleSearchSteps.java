//package Stepdefinitions;
//
//import java.time.Duration;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.Keys;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;
//
//import io.cucumber.java.en.And;
//import io.cucumber.java.en.Given;
//import io.cucumber.java.en.Then;
//import io.cucumber.java.en.When;
//
//public class GoogleSearchSteps {
//
//	WebDriver driver;
//	@Given("browser is open")
//	public void browser_is_open() {
//		
//		driver=new FirefoxDriver();
//		System.out.println("Inside step-browser is open");
//		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
//		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(30));
//		driver.manage().window().maximize();
//	}
//
//	@And("user is on Google search page")
//	public void user_is_on_Google_search_page() {
//		System.out.println("Inside step-user is on Google search page");
//		
//		driver.navigate().to("https://google.com");
//	}
//
//	@When("user enters a text in search box")
//	public void user_enters_a_text_in_search_box() throws InterruptedException {
//		driver.findElement(By.id("APjFqb")).sendKeys("Automation Step by Step");
//		Thread.sleep(3000);
//		System.out.println("Inside step-user enters a text in search box");
//		
//	}
//
//	@And("user hits enter")
//	public void user_hits_enter() throws InterruptedException {
//		driver.findElement(By.id("APjFqb")).sendKeys(Keys.ENTER);
//		Thread.sleep(3000);
//		System.out.println("Inside Step-user hits enter button");
//
//	}
//
//	@Then("user is navigated to search results")
//	public void user_is_navigated_to_search_results() throws InterruptedException {
//
//		System.out.println("Inside Step -user is navigated to search results");
//		//driver.getPageSource().contains("Online Courses");
//		//driver.close();
//		//driver.quit();
//		
//
//		        
//		    }
//		
//
//	}
//
//
//
//
