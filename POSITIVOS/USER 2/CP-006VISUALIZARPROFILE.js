// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CP006 - VISUALIZAR PROFILE', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('CP006 - VISUALIZAR PROFILE', async function() {
    // Test name: CP006 - VISUALIZAR PROFILE
    // Step # | name | target | value
    // 1 | open | /home.php | 
    await driver.get("https://tucan.toolsincloud.net/home.php")
    // 2 | setWindowSize | 697x720 | 
    await driver.manage().window().setRect({ width: 697, height: 720 })
    // 3 | click | css=.grid-sidebar:nth-child(7) strong | 
    await driver.findElement(By.css(".grid-sidebar:nth-child(7) strong")).click()
    // 4 | click | id=home-tab | 
    // HOME
    await driver.findElement(By.id("home-tab")).click()
    // 5 | click | id=profile-tab | 
    // PROFILE
    await driver.findElement(By.id("profile-tab")).click()
    // 6 | click | id=contact-tab | 
    // CONTACT
    await driver.findElement(By.id("contact-tab")).click()
    // 7 | click | css=.count-following-i | 
    // FOLLOWING
    await driver.findElement(By.css(".count-following-i")).click()
    // 8 | click | css=.fa-times:nth-child(1) | 
    await driver.findElement(By.css(".fa-times:nth-child(1)")).click()
    // 9 | click | css=.count-followers-i | 
    // FOLLOWERS
    await driver.findElement(By.css(".count-followers-i")).click()
    // 10 | click | css=.fa-times:nth-child(1) | 
    await driver.findElement(By.css(".fa-times:nth-child(1)")).click()
    // 11 | assertText | css=.user-handle | @HernanPapu
    // USERNAME
    assert(await driver.findElement(By.css(".user-handle")).getText() == "@HernanPapu")
    // 12 | assertText | css=h4 | Hernan Dario
    // NAME
    assert(await driver.findElement(By.css("h4")).getText() == "Hernan Dario")
  })
})