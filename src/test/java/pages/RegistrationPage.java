package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class RegistrationPage {


    // configure WebdriverWait
    private static final int TIMEOUT = 2;
    private static final int POOLING_TIME = 100;
    private final WebDriver webDriver;


    private final WebDriverWait wait;
    // Web Elements
//    By usernameField = By.xpath("//*[@id=\'main-view\']/div/div/div[2]/div/div[5]/div[2]/div/div/input[1]");
//    By phoneField= By.xpath("//*[@id=\'main-view\']/div/div/div[2]/div/div[5]/div[2]/div/div/input[2]");
//    By passwordField = By.xpath("//*[@id=\'main-view\']/div/div/div[2]/div/div[5]/div[2]/div/div/input[3]");
//    //By locationField = By.xpath("//*[@id=\'main-view\']/div/div/div[2]/div/div[5]/div[2]/div/div/select");
//    By Registerbtn = By.xpath("//*[@id=\'main-view\']/div/div/div[2]/div/div[5]/div[2]/div/div/button");
//    By alertSuccess = By.xpath("//*[@id=\'main-view\']/div/div/div[2]/div/div[4]/div/div");
//    By alertDanger= By.xpath("//*[@id=\'main-view\']/div/div/div[2]/div/div[3]/div/div");
//    //Select dropdown= new Select((WebElement) locationField);


    //private final By usernameField = By.name("username");
    //private final By passwordField = By.name("password") ;
    private final By usernameField = By.xpath("//*[@id=\'root\']/div/div[2]/div/div[2]/div/div[4]/div[2]/div/div/input[1]");
    private final By phoneField= By.name("phone") ;
    private final By passwordField =By.xpath("//*[@id=\'root\']/div/div[2]/div/div[2]/div/div[4]/div[2]/div/div/input[3]");
    private final By Registerbtn = By.xpath("//button[contains(text(),'Register')]");
    private final By alertSuccess = By.xpath("//*[@id=\'root\']/div/div[2]/div/div[2]/div/div[3]/div/div");
    private final By alertDanger= By.xpath("//*[@id=\'root\']/div/div[2]/div/div[2]/div/div[2]/div/div") ;

    public RegistrationPage(String url, boolean headless) {

        ChromeOptions options = new ChromeOptions();
        if (headless)
            options.addArguments("headless");

        webDriver = new ChromeDriver(options);
        wait = new WebDriverWait(webDriver, TIMEOUT, POOLING_TIME);

        loadURL(url);
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void setUsernameField(String username) {
        String tit=webDriver.getTitle();
        System.out.println("++++++++++++++++++++++++++++++++++++++++++"+tit+"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        webDriver.findElement(usernameField).sendKeys(username);
    }

    public void setPasswordField(String password) {


        webDriver.findElement(passwordField).sendKeys(password);
    }


    public void setPhoneField(String phone) {
        webDriver.findElement(phoneField).sendKeys(phone);
    }

    public void setLocation()
    {

        WebElement loc=webDriver.findElement(By.name("location"));
        Select dropdown=new Select(loc);
        dropdown.selectByIndex(2);
        //dropdown.selectByValue("Vesu");
    }
    public void register() {
        wait.until(ExpectedConditions.elementToBeClickable(Registerbtn));
        webDriver.findElement(Registerbtn).click();
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void isRegistered() {
        String expectedMessage = "Registration Success";
        wait.until(ExpectedConditions.visibilityOfElementLocated(alertSuccess));

        String displayedMessage = webDriver.findElement(alertSuccess).getText().replaceAll("[^a-zA-Z0-9\\s+]", "");
        if (!displayedMessage.contains(expectedMessage)) {
            Assert.fail("Success Message not displayed");
        }

        closeBrowser();
    }

    public void RegistrationFailed()  {
        String expectedMessage = "Registration failed";
        wait.until(ExpectedConditions.visibilityOfElementLocated(alertDanger));
        String displayedMessage = webDriver.findElement(alertDanger).getText().replaceAll("[^a-zA-Z0-9\\s+]", "");

        if (!displayedMessage.contains(expectedMessage)) {
            Assert.fail("Error message not displayed");
        }
        closeBrowser();
    }

    public void loadURL(String url) {
        webDriver.get(url);
    }

    public String getURL() {
        return webDriver.getCurrentUrl();
    }

    public String getTitle() {
        return webDriver.getTitle();
    }

    public void closeBrowser() {
        webDriver.quit();
    }
}
