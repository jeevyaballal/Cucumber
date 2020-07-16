package pages;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

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

    @FindBy(how= How.XPATH,using = "//*[@id=\'main-view\']/div/div[2]/div[1]/div/button")
    WebElement btn_login;


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
        Alert alt=driver.switchTo().alert();
        alt.accept();
    }

}

