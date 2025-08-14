//package Stepdefinitions;
//
//import java.time.Duration;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;
//
//import Pages.LoginPage;
//import io.cucumber.java.en.And;
//import io.cucumber.java.en.Given;
//import io.cucumber.java.en.Then;
//import io.cucumber.java.en.When;
//
//
//public class LoginDemoSteps2_POM {
//	
//	
//
//	WebDriver driver=null; 
//	
//	LoginPage login;
//
//	@Given("browser is open")
//	public void browser_is_open() {
//		
//		System.out.println("=====I am inside loginDemoSteps-POM======");
//		driver=new FirefoxDriver();
//		System.out.println("Inside step-browser is open");
//		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(40));
//		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(40));
//		driver.manage().window().maximize();
//	}
//
//	@And("user is on login page")
//	public void user_is_on_login_page() {
//		driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//	}
//
//	@When("^user enters (.*) and (.*)$")
//	public void user_enters_username_and_password(String username,String password) throws InterruptedException {
//		
//		login=new LoginPage(driver);
//		login.enterusername(username);
//		Thread.sleep(2000);
//		login.enterpassword(password);
//		
//
//		//driver.findElement(By.name("username")).sendKeys(username);
//
//		//driver.findElement(By.name("password")).sendKeys(password);
//
//		Thread.sleep(2000);
//	}
//	@When("user clicks on login button")
//	public void user_clicks_on_login_button() throws InterruptedException {
//		
//		login.click_loginButton();
//
//		//driver.findElement(By.xpath("//*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button")).click();
//		Thread.sleep(3000);
//
//	}
//
//	@Then("user is navigated to home page")
//	public void user_is_navigated_to_home_page() {
//
//		WebElement dashboard=driver.findElement(By.xpath("//*[@id=\"app\"]/div[1]/div[1]/header/div[1]/div[2]/a/button"));
//		//System.out.println(dashboard.isDisplayed());
//
//		//System.out.println("Successfully navigated");
//		login.verifyhomepage();
//
//		driver.close();
//		driver.quit();
//	}
//
//}
