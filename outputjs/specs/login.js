"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var log4jsconfig_1 = require("../config/log4jsconfig");
describe("Login test", function () {
    beforeEach(function () {
        protractor_1.browser.get("https:newui.practiz.xyz");
    });
    it("Launch url check", function () {
        expect(protractor_1.browser.getTitle()).toContain("Perfectice");
        //console.log("browser Title :-" + browser.getTitle());
        var browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            console.log("browser Title :-" + txt);
            log4jsconfig_1.log4jsconfig.Log().debug("Browser Title :- " + txt);
        });
    });
    it("Assessment Click", function () {
        protractor_1.element(protractor_1.by.name("email")).sendKeys("ks1762172@gmail.com");
        protractor_1.browser.sleep(2000);
        protractor_1.element(protractor_1.by.name("password")).sendKeys("summer2020");
        protractor_1.browser.sleep(2000);
        protractor_1.element(protractor_1.by.xpath('//*[@id="page-wrapper"]/app-signin/section/div/form/button')).click();
        protractor_1.browser.sleep(6000);
        protractor_1.element(protractor_1.by.xpath('//*[@id="navbarContent"]/ul/li[3]/a)')).click();
        protractor_1.browser.sleep(2000);
    });
});
