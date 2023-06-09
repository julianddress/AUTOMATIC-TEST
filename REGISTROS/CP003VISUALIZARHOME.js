// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CP003 - VISUALIZAR HOME ', function() {
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
  it('CP003 - VISUALIZAR HOME ', async function() {
    // Test name: CP003 - VISUALIZAR HOME 
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("https://tucan.toolsincloud.net/")
    // 2 | setWindowSize | 1280x720 | 
    await driver.manage().window().setRect({ width: 1280, height: 720 })
    // 3 | click | name=email | 
    await driver.findElement(By.name("email")).click()
    // 4 | type | name=email | javi@gmail.com
    // EMAIL
    await driver.findElement(By.name("email")).sendKeys("javi@gmail.com")
    // 5 | click | name=password | 
    await driver.findElement(By.name("password")).click()
    // 6 | type | name=password | javier2023
    // PASSWORD
    await driver.findElement(By.name("password")).sendKeys("javier2023")
    // 7 | click | name=login | 
    await driver.findElement(By.name("login")).click()
    // 8 | assertElementPresent | css=.fa | Image
    // INSERT IMAGE
    {
      const elements = await driver.findElements(By.css(".fa"))
      assert(elements.length)
    }
    // 9 | click | id=tweet-input | Squawk
    // SQUAWK OPTION
    await driver.findElement(By.id("tweet-input")).click()
  })
})
