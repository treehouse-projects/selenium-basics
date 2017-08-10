const By = require("selenium-webdriver").By;

class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            inviteeForm: By.id("registrar"),
            inviteeNameField: By.css("#registrar input[name='name']"),
            toggleNonRespondersVisiblity: By.css(".main  > div input"),
            removeButtonForInvitee: invitee => By.xpath(`//span[text() = "${invitee}"]/../button[last()]`)  
        };
    }

    open() {
        this.driver.get(process.env.URL);
    }

    addInvitee(name) {
        this.driver.findElement(this.locators.inviteeNameField)
            .sendKeys(name);
        
        this.driver.findElement(this.locators.inviteeForm).submit();
    }
    
    removeInvitee(invitee) {
        this.driver.findElement(this.locators.removeButtonForInvitee(invitee))
            .click();
    }
    
    toggleNonRespondersVisiblity() {
        this.driver.findElement(this.locators.toggleNonRespondersVisiblity)
            .click();
    }



}

module.exports = HomePage;