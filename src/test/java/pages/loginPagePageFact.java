package pages;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.openqa.selenium.support.How.ID;

public class loginPagePageFact {

    WebDriver driver;
    //By txt_username=By.id("email");
    //By txt_password=By.id("pass");
    //By btn_login=By.id("loginbutton");
    //By btn_logout=By.id("");



    @FindBy(how= How.NAME,using = "username")
    WebElement txt_username;

    @FindBy(how= How.NAME,using = "password")
    WebElement txt_password;

    @FindBy(how= How.XPATH,using = "//*[@id=\'main-view\']/div/div/div[2]/div/div[5]/div[1]/div/div/button")
    WebElement btn_login;

    @FindBy(how= How.XPATH,using = "//*[@id=\'main-view\']/div/div/div[2]/div/div[2]/div/div")
    WebElement alert_login;

//*[@id="main-view"]/div/div/div[2]/div/div[1]/div/div


    public loginPagePageFact(WebDriver ddriver){

        this.driver=ddriver;
        PageFactory.initElements(ddriver,this);
    }

    public void enterusername(String uname)
    {

        //driver.findElement(txt_username).sendKeys(uname);
        txt_username.sendKeys(uname);
    }

    public void enterpassword(String pass)
    {

       // driver.findElement(txt_password).sendKeys(pass);
        txt_password.sendKeys(pass);
    }

    public void clicklogin()
    {

        //driver.findElement(btn_login).click();
        btn_login.click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        String actual_text=alert_login.getText();
        /*Alert alt=driver.switchTo().alert();
        String alerttext=alt.getText();
        String expected_text="login successful";
        Assert.assertEquals(alerttext,expected_text);

        alt.accept();

         */

        //String actual_text=alert_login.getText();
        String expected_text=" login successful";
        System.out.println("*******"+actual_text+"**********");
        System.out.println(expected_text);
        //Assert.assertEquals(actual_text,expected_text);
        assertTrue(actual_text.contains("login successful"));



        //Alert alt=driver.switchTo().alert();
        //alt.dismiss();




    }

}

