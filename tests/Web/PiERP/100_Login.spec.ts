import { test } from "@playwright/test";
import { BasePage } from "../../../pages/BasePage";
import { LoginPage } from "../../../pages/PiERP/LoginPage";
import { RolePage } from "../../../pages/PiERP/RolePage";

let basePage : BasePage;
let loginPage : LoginPage;
let rolePage  : RolePage;

test.describe('Login To Application', ()=>{

    test.beforeEach(async({page})=>{
        basePage = new BasePage(page);
        loginPage = new LoginPage(page);
        rolePage = new RolePage(page);
    })

    test('Login in to PiERP application with valid credentials @login', async ({ page }) => {

     await page.goto('https://192.168.1.10/', {
        waitUntil: 'domcontentloaded'
    });

    // await basePage.goToURL("https://pione.pipra.solutions/webui/");

    await basePage.verifyTitle("PIPRA One");
    await loginPage.loginToApplication("GardenAdmin", "GardenAdmin");
    await basePage.verifyTitle("PIPRA One");


});

})
