import { test, expect } from "@playwright/test";
import { LoginPage } from "../page_objects/loginPage";
import { HomePage } from "../page_objects/homePage";
import { fs } from "fs";
import path from "path";
import { fixtures } from "../fixtures/properties";

// // JSON dosyasının yolunu belirleyin
// const propertiesPath = path.resolve(__dirname, '../fixtures/properties.json');

// // JSON dosyasını okuyun ve parse edin
// const properties = JSON.parse(fs.readFileSync(propertiesPath, 'utf-8'));

test.describe.configure({ retries:2, timeout:20000 },'E2E Test Suite',()=>{

    //When called in the scope of a test file, runs after each test in the file.
    //When called inside a test.describe() group, runs after each test in the group.
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        //const fixtures = new properties(page)

        await loginPage.gotoLoginPage();
        //await loginPage.login(fixtures.acceptedUsernames[0],fixtures.passwordForAllUsers)
        await loginPage.login('standard_user','secret_sauce')
    });
    
    
    test('Sepete ürün eklenmesi ve Sepet kontrolü',{
        annotation : {
            type : 'basic',
            description : ' Good Code '
        }
    }, async({page}) => {
        const homePage = new HomePage(page)
        await homePage.addProductToCart('Sauce Labs Backpack')
        await homePage.gotoShoppingCart()
        //await page.pause()
    });
    
    test('Dropdowns', {
        tag : '@smoke'

    }, async ({page}) => {
        const homePage = new HomePage(page)
        await homePage.sortByPriceLowToHigh()
        //await page.pause()
    });
})