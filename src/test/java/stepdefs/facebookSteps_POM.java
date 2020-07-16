package stepdefs;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pages.loginPage;

public class facebookSteps_POM {

/*
    WebDriver driver=null;
    loginPage login;

    @Given("Open Firefox and start application")
    public void open_firefox_and_start_application() {
        // Write code here that turns the phrase above into concrete actions

        System.out.println("-------I am inside LOginDemo_POM--------");
        driver=new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://www.facebook.com");

        //throw new io.cucumber.java.PendingException();
    }




    @When("I enter valid username and valid password")
    public void i_enter_valid_username_and_valid_password() {
        // Write code here that turns the phrase above into concrete actions



        //driver.findElement(By.id("email")).sendKeys("harshb44@gmail.com");
        //driver.findElement(By.id("pass")).sendKeys("harshb44");
        //throw new io.cucumber.java.PendingException();
    }

    @When("I enter valid {string} and valid {string}")
    public void i_enter_valid_and_valid(String uname, String pass) {
        // Write code here that turns the phrase above into concrete actions
        //throw new io.cucumber.java.PendingException();

        login= new loginPage(driver);
        login.enterusername(uname);
        login.enterpassword(pass);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Then("User should be able to login successfully")
    public void user_should_be_able_to_login_successfully() {
        // Write code here that turns the phrase above into concrete actions
    login.clicklogin();
        //driver.findElement(By.id("loginbutton")).click();

        //throw new io.cucumber.java.PendingException();
    }


    @Then("The browser will close")
    public void theBrowserWillClose() {
        driver.close();
        driver.quit();

    }

 */

}
