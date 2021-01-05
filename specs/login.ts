import { browser, by, element } from "protractor"
import { log4jsconfig } from '../config/log4jsconfig'

describe("Login test", function(){

    beforeEach(function(){
        browser.get("https:newui.practiz.xyz");
    })

    it("Launch url check", function(){
        expect(browser.getTitle()).toContain("Perfectice");
        //console.log("browser Title :-" + browser.getTitle());
        let browserTitle = browser.getTitle();
        browserTitle.then(function(txt){
            console.log("browser Title :-" + txt);
            log4jsconfig.Log().debug("Browser Title :- " + txt);
        });
    })
    
    it("Assessment Click", function(){
        element(by.name("email")).sendKeys("ks1762172@gmail.com");
        browser.sleep(2000);
        element(by.name("password")).sendKeys("summer2020");
        browser.sleep(2000);
        element(by.xpath('//*[@id="page-wrapper"]/app-signin/section/div/form/button')).click();
        browser.sleep(6000);
        element(by.xpath('//*[@id="navbarContent"]/ul/li[3]/a)')).click();
        browser.sleep(2000);

    })
})
