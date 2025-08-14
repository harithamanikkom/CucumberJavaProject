package PageFactory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage_PF {
	
 
WebDriver driver;
	@FindBy(xpath="//*[@id=\"loop-container\"]/div/article/div[2]/div/div/div/a")
	WebElement logout;
	
	public HomePage_PF(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver,this);
	}
	
	public void verifyhomepage()
	{
		logout.isDisplayed();
	}
}
