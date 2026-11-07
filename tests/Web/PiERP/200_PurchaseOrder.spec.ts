import { BasePage } from "../../../pages/BasePage";
import { LoginPage } from "../../../pages/PiERP/LoginPage";
import { PurchaseOrderPage } from "../../../pages/PiERP/PurchaseOrderPage";
import {test} from "@playwright/test";


let basePage : BasePage;
let loginPage : LoginPage;
let purchaseOrderWindow : PurchaseOrderPage;


test.describe("Purchase Order Creation",()=>{

    test.beforeEach(async({page})=>{
        basePage = new BasePage(page);
        loginPage = new LoginPage(page);
        purchaseOrderWindow = new PurchaseOrderPage(page); 
       
    })

    test("Create Purchase Order for mulch product @purchase"  , async({page})=>{
        //  test.setTimeout(10 * 60 * 1000); // Increase session timeout for specific test case 
         await page.goto('https://192.168.1.10/webui/',{
        // await page.goto('https://pione.pipra.solutions/webui/index.zul', 
        waitUntil: 'domcontentloaded'
         });
        // await basePage.goToURL("https://pione.pipra.solutions/webui/");
        
        await basePage.verifyTitle("PIPRA One");
        await loginPage.loginToApplication("GardenAdmin", "GardenAdmin");
        await basePage.verifyTitle("PIPRA One");
        await basePage.searchWindow("Purchase Order");
        await purchaseOrderWindow.selectOrganization("HQ");
        await purchaseOrderWindow.businessPartner("Yes" , "Chemical Product, inc");
        await purchaseOrderWindow.lineItems(2);

        
        
    })

})