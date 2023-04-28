// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CP002.1 - INICAR SESION', function() {
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
  it('CP002.1 - INICAR SESION', async function() {
    // Test name: CP002.1 - INICAR SESION
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("https://tucan.toolsincloud.net/")
    // 2 | setWindowSize | 697x720 | 
    await driver.manage().window().setRect({ width: 697, height: 720 })
    // 3 | click | name=email | 
    await driver.findElement(By.name("email")).click()
    // 4 | type | name=email | camirojitas@gmail.com
    // EMAIL
    await driver.findElement(By.name("email")).sendKeys("camirojitas@gmail.com")
    // 5 | click | name=password | 
    await driver.findElement(By.name("password")).click()
    // 6 | type | name=password | wrongpassword
    // PASSWORD
    await driver.findElement(By.name("password")).sendKeys("wrongpassword")
    // 7 | click | name=login | 
    await driver.findElement(By.name("login")).click()
  })
})
