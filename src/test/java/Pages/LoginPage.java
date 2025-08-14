package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

	protected WebDriver driver;
	private By txt_username=By.name("username");
	private By txt_password=By.name("password");
	private By login_Button=By.xpath("//*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button");
	private By dashboard=By.xpath("//*[@id=\"app\"]/div[1]/div[1]/header/div[1]/div[2]/a/button");
	
	

	
	
	
	public LoginPage(WebDriver driver)
	{
		
		if(!driver.getTitle().equals("OrangeHRM"))
		{
			throw new IllegalStateException("This is not Login Page.The Current page is :" +driver.getCurrentUrl());
		}
	}

public void enterusername(String username)
{
	driver.findElement(txt_username).sendKeys(username);	
}

public void enterpassword(String pass)
{
	driver.findElement(txt_password).sendKeys(pass);	
}

public void click_loginButton()
{
	driver.findElement(login_Button).click();
}

public void verifyhomepage()
{
	driver.findElement(dashboard).isDisplayed();
}
}