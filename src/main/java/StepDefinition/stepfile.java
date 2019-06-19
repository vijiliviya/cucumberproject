package StepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class stepfile {
	public static WebDriver driver;

	@Given("^User is on Home Page$")
	public void user_is_on_Home_Page(){
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\vraja\\workspace\\FreeCRMBDD\\Driver\\chromedriver.exe");
		   driver = new ChromeDriver();
		   //implicit wait
		   driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	        driver.get("https://freecrm.com/");
	        driver.manage().window().maximize();
	        String title=driver.getTitle();
	        System.out.println(title);
	        //Assertion
	        Assert.assertEquals("Free CRM software for any Business", title);
	}

	@When("^User Navigate to LogIn Page$")
	public void user_Navigate_to_LogIn_Page() {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//span[text()='Log In']")).click();
		//explicit  wait
		WebDriverWait wait=new WebDriverWait(driver, 20);
		WebElement expwait= wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@name='email']")));
		expwait.click();
	
	}
//	#data driven by using scenario without example keyword below to pass data
//	@When("^User enters \"(.*?)\" and \"(.*?)\"$")
//	public void user_enters_and(String username, String password) throws InterruptedException  {
//	    // Write code here that turns the phrase above into concrete actions
//		driver.findElement(By.xpath("//input[@name='email']")).sendKeys(username);
//		Thread.sleep(2000);
//		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
//		//Javascriptexecutor for button
//		WebElement element = driver.findElement(By.xpath("//div[text()='Login']"));
//        JavascriptExecutor jse = ((JavascriptExecutor)driver);
//        jse.executeScript("arguments[0].click();",element );
//		
//	    
//	}
	
	// data Driven by using Data Table concept below
	@When("^User enters username and password$")
	public void user_enters_and(DataTable usercredentials) throws InterruptedException  {
	    // Write code here that turns the phrase above into concrete actions
		List<List<String>> datas=usercredentials.raw();
		driver.findElement(By.xpath("//input[@name='email']")).sendKeys(datas.get(0).get(0));
	Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(datas.get(0).get(1));
		//Javascriptexecutor for button
		WebElement element = driver.findElement(By.xpath("//div[text()='Login']"));
        JavascriptExecutor jse = ((JavascriptExecutor)driver);
       jse.executeScript("arguments[0].click();",element );
	}

	@Then("^User moves to new contact page$")
	public void user_moves_to_new_contact_page() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//span[text()='Contacts']")).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//button[@class='ui linkedin button']//i[@class='edit icon']")).click();
		
		
	  }
	@Then("^user enters contact details \"(.*?)\" and \"(.*?)\" and \"(.*?)\"$")
	public void user_enters_contact_details_and_and(String firstname, String lastname, String position) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@name='first_name']")).sendKeys(firstname);
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@name='last_name']")).sendKeys(lastname);
		driver.findElement(By.xpath("//div[@name='channel_type']")).click();
		//selection of element
		WebElement obj= driver.findElement(By.xpath("//div[@class='visible menu transition']"));
		List<WebElement> lisobj=obj.findElements(By.tagName("div")); 
		//System.out.println(lisobj);
		for(int i=0; i<lisobj.size();i++)
		{
			String textofdiv=lisobj.get(i).getText();
			System.out.println(textofdiv);
			Thread.sleep(3000);
			if(textofdiv.equalsIgnoreCase("LinkedIn"))
			{
				lisobj.get(i).findElement(By.tagName("span")).click();
				//driver.findElement(By.tagName("span")).click();
				break;
			}
			
		}
		driver.findElement(By.xpath("//input[@name='position']")).sendKeys(position);
		driver.findElement(By.xpath("//input[@name='day']")).sendKeys("78");
		//driver.findElement(By.xpath("//input[@name='day']")).sendKeys("78");
		driver.findElement(By.xpath("//input[@name='year']")).sendKeys("2016");
		driver.findElement(By.xpath("//div[@name='month']")).click();
		WebElement monthobj= driver.findElement(By.xpath("//div[@class='visible menu transition']"));
		List<WebElement> monthlisobj=monthobj.findElements(By.tagName("div")); 
		//System.out.println(lisobj);
		for(int i=0; i<monthlisobj.size();i++)
		{
			String textofdivmonth=monthlisobj.get(i).getText();
			System.out.println(textofdivmonth);
			Thread.sleep(3000);
			if(textofdivmonth.equalsIgnoreCase("May"))
			{
				monthlisobj.get(i).findElement(By.tagName("span")).click();
				//driver.findElement(By.tagName("span")).click();
				break;
			}
			
		}
Thread.sleep(3000);
		driver.findElement(By.xpath("//button[text()='Save']")).click();	
		
		WebElement ele = driver.findElement(By.xpath("//i[@class='trash icon']"));
		 // Using actions class to do mouse hover
		 Actions action = new Actions(driver);
		 action.moveToElement(ele).build().perform();
		 String toolTipEle = driver.findElement(By.xpath("//i[@class='trash icon']")).getAttribute("title");
		 // Get the Tool Tip Text
		 //String toolTipTxt = toolTipEle.getText();
		 System.out.println(toolTipEle);
	}

	@When("^User LogOut from the Application$")
	public void user_LogOut_from_the_Application()  {
	    // Write code here that turns the phrase above into concrete actions
	   
	}

	@Then("^Message displayed LogOut Successfully$")
	public void message_displayed_LogOut_Successfully() {
	    // Write code here that turns the phrase above into concrete actions
	   
	}
	
}
