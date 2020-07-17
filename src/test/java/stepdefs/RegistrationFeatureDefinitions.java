package stepdefs;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.RegistrationPage;

public class RegistrationFeatureDefinitions {

    RegistrationPage rp;

    @When("Browser is opened and site is loaded")
    public void init() {
        rp = new RegistrationPage("http://localhost:3000", false);
    }


    @Then("User inputs username as {string}")
    public void user_inputs_username_as(String uname) {
        // Write code here that turns the phrase above into concrete actions
        //throw new io.cucumber.java.PendingException();

        rp.setUsernameField(uname);

    }

    @Then("User inputs phone number as {string}")
    public void user_inputs_phone_number_as(String phonen) {
        // Write code here that turns the phrase above into concrete actions
        //throw new io.cucumber.java.PendingException();
        rp.setPhoneField(phonen);


    }

    @Then("User inputs location")
    public void user_inputs_location() {
        // Write code here that turns the phrase above into concrete actions
        //throw new io.cucumber.java.PendingException();
        rp.setLocation();
    }

    @Then("User inputs password as {string}")
    public void user_inputs_password_as(String pass) {
        // Write code here that turns the phrase above into concrete actions
        //throw new io.cucumber.java.PendingException();
        rp.setPasswordField(pass);

    }

    @Then("Press Register button")
    public void press_register_button() {
        // Write code here that turns the phrase above into concrete actions
        //throw new io.cucumber.java.PendingException();
        rp.register();

    }

    @Then("Username should load on page")
    public void usernameShouldLoadOnPage() {
        rp.isRegistered();
    }
}
