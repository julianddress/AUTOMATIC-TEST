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
    // 2 | setWindowSize | 697x720 | 
    await driver.manage().window().setRect({ width: 697, height: 720 })
    // 3 | assertText | css=h2 | Home
    // HOME TAB
    assert(await driver.findElement(By.css("h2")).getText() == "Home")
    // 4 | assertElementPresent | css=.fa | Image
    // INSERT IMAGE
    {
      const elements = await driver.findElements(By.css(".fa"))
      assert(elements.length)
    }
    // 5 | assertElementPresent | id=tweet-input | Squawk
    // SQUAWK OPTION
    {
      const elements = await driver.findElements(By.id("tweet-input"))
      assert(elements.length)
    }
  })
})