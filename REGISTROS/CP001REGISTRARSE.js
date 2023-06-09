// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CP001 - REGISTRARSE', function() {
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
  it('CP001 - REGISTRARSE', async function() {
    // Test name: CP001 - REGISTRARSE
    // Step # | name | target | value
    // 1 | open | /index.php | 
    await driver.get("https://tucan.toolsincloud.net/index.php")
    // 2 | setWindowSize | 1280x720 | 
    await driver.manage().window().setRect({ width: 1280, height: 720 })
    // 3 | click | id=auto | 
    await driver.wait(until.elementLocated(By.id('auto')), 10000);
    await driver.findElement(By.id('auto')).click();
    // 4 | click | id=exampleInputEmail1 | 
    await driver.findElement(By.name("name")).click()
    // 5 | type | id=exampleInputEmail1 | javier Malagon
    // NAME
    await driver.findElement(By.name("name")).sendKeys("javier Malagon")
    // 6 | click | name=username | 
    await driver.findElement(By.name("username")).click()
    // 7 | type | name=username | JaviM02
    // USERNAME
    await driver.findElement(By.name("username")).sendKeys("JaviM02")
    // 8 | click | css=.form-group:nth-child(4) > #exampleInputEmail1 | 
    await driver.findElement(By.name("email")).click()
    // 9 | type | css=.form-group:nth-child(4) > #exampleInputEmail1 | javi@gmail.com
    // EMAIL
    await driver.findElement(By.name("email")).sendKeys("javi@gmail.com")
    // 10 | click | id=exampleInputPassword1 | 
    await driver.findElement(By.name("password")).click()
    // 11 | type | id=exampleInputPassword1 | javier2023
    // PASSWORD
    await driver.findElement(By.name("password")).sendKeys("javier2023")
    // Wait for the signup button to become clickable
    const signupButton = await driver.wait(until.elementLocated(By.name("signup")), 10000);
    await driver.wait(until.elementIsEnabled(signupButton), 10000);
    // 12 | click | name=signup | 
    await signupButton.click();
  })
})
