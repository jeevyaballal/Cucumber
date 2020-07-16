package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class loginPage {

    WebDriver driver;
    By txt_username=By.id("email");
    By txt_password=By.id("pass");
    By btn_login=By.id("loginbutton");
    //By btn_logout=By.id("");


    public loginPage(WebDriver driver){

        this.driver=driver;
    }

    public void enterusername(String uname)
    {

        driver.findElement(txt_username).sendKeys(uname);
    }

    public void enterpassword(String pass)
    {

        driver.findElement(txt_password).sendKeys(pass);
    }

    public void clicklogin()
    {

        driver.findElement(btn_login).click();
    }

}

