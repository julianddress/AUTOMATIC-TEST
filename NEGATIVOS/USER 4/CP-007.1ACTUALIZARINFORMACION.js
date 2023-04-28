// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CP007.1 - ACTUALIZAR INFORMACION', function() {
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
  it('CP007.1 - ACTUALIZAR INFORMACION', async function() {
    // Test name: CP007.1 - ACTUALIZAR INFORMACION
    // Step # | name | target | value
    // 1 | open | /home.php | 
    await driver.get("https://tucan.toolsincloud.net/home.php")
    // 2 | setWindowSize | 697x720 | 
    await driver.manage().window().setRect({ width: 697, height: 720 })
    // 3 | click | css=.grid-sidebar:nth-child(7) strong | 
    await driver.findElement(By.css(".grid-sidebar:nth-child(7) strong")).click()
    // 4 | click | css=.home-edit-button | 
    await driver.findElement(By.css(".home-edit-button")).click()
    // 5 | click | id=exampleInputEmail1 | 
    await driver.findElement(By.id("exampleInputEmail1")).click()
    // 6 | type | id=exampleInputEmail1 | FERNAN FERNAN FERNAN FERNAN FERNAN
    // NAME
    await driver.findElement(By.id("exampleInputEmail1")).sendKeys("FERNAN FERNAN FERNAN FERNAN FERNAN")
    // 7 | click | name=bio | 
    await driver.findElement(By.name("bio")).click()
    // 8 | type | name=bio | HALA MADRID xd
    // BIO
    await driver.findElement(By.name("bio")).sendKeys("HALA MADRID xd")
    // 9 | click | name=website | 
    await driver.findElement(By.name("website")).click()
    // 10 | type | name=website | none
    // WEB-SITE
    await driver.findElement(By.name("website")).sendKeys("none")
    // 11 | click | id=exampleInputPassword1 | 
    await driver.findElement(By.id("exampleInputPassword1")).click()
    // 12 | type | id=exampleInputPassword1 | Arabia saudita
    // ADDRESS
    await driver.findElement(By.id("exampleInputPassword1")).sendKeys("Arabia saudita")
    // 13 | assertElementPresent | css=.image-upload:nth-child(2) .far | 
    // PROFILE IMAGE
    {
      const elements = await driver.findElements(By.css(".image-upload:nth-child(2) .far"))
      assert(elements.length)
    }
    // 14 | assertElementPresent | css=.image-upload:nth-child(1) .far | 
    // FRONT IMAGE
    {
      const elements = await driver.findElements(By.css(".image-upload:nth-child(1) .far"))
      assert(elements.length)
    }
    // 15 | click | name=update | 
    // UPDATE
    await driver.findElement(By.name("update")).click()
  })
})
