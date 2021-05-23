
import { Builder, By} from "selenium-webdriver";

async function btn(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/#login");
    await driver.findElement(By.className("logInBtn")).click();
    await driver.sleep(100);
}

btn();
