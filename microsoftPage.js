module.exports = {
    'Step one: Go to Microsoft page': function(browser){
        browser
        .url('microsoft.com/en-us/')
        .pause(10000);
    },
    'Step two: Navigate to the Windows page': function(browser){
        browser
        .useCss()
        //Wait for the nav to load
        .waitForElementPresent('#uhf-g-nav', 10000)
        //Click the windows tab
        .click('#shellmenu_1');
    },
    'Step three: Select Windows 10 tab': function(browser){
        browser
        //Wait for the windows page to load
        .waitForElementPresent('#mainContent',10000)
        //Select the Windows 10 dropdown menu
        .click('#c-shellmenu_43')
        //Verify elements prensent
        .assert.elementPresent('c-shellmenu_44',10000)
        .assert.elementPresent('c-shellmenu_45',10000) //changed element to other in the menu, the requiered is not there anymore
        .assert.elementPresent('c-shellmenu_45',10000)
        //Click get windows 10
        .click('c-shellmenu_44')
        //Verify Make the switch to a Windows 10 PC is displayed
        .assert.elementPresent('c-paragraph-1',1000);
    },
    'Step four: Searching': function(browser){
        browser
        //Select search bar
        .waitForElementPresent('#search',1000)
        //clicks on the search bar
        .click('#search')
        //Sets the value 
        .setValue('#cli_shellHeaderSearchInput','Visual Studio Community')
        //Takes the screenshot and saves it 
        .saveScreenshot('./reports/search.png')
        //Expect the results 
        .expect.elements('.f-result-item[data-grid=col-10]').count.to.equal(20)
        //Clicks to the next page and validates if the next page (element) is enabled 
        //Clicks to the next page, takes in count the active page
        .click('.m-pagination > .f-active+li')
        //waits for the page to load after clicked 
        .waitForElementPresent('#mainContent',10000)
        //Validates that the next page is able to click
        .assert.elementNotPresent('.m-pagination > .f-active+li',"The next page is not available")
        .click('.m-pagination > .f-active+li')
        .waitForElementPresent('#mainContent',10000)
        .assert.elementNotPresent('.m-pagination > .f-active+li',"The next page is not available")
        .click('.m-pagination > .f-active+li')
        .waitForElementPresent('#mainContent',10000)
        .assert.elementNotPresent('.m-pagination > .f-active+li',"The next page is not available")
    }    
    
};