import { Locator , Page } from "@playwright/test";

export class BasePage{

    protected page : Page;


    constructor(page:Page){

        this.page = page;
    }


    async goToURL(url:string){
        console.log(`Navigating to URL ${url}`);
        try {
          await this.page.goto(url);
        } catch (error) {
            throw new Error(`Failed to load URL :${url}`);
        }
    }
    
    async clickElement(element:Locator){
        await element.click();
    }

   
    async enterText(xpath:string , value:string):Promise<void>{
        await this.page.fill(xpath,'')
        await this.page.fill(xpath,value);
    }
    
    async verifyTitle(expectedTitle : string):Promise<void>
    {
       const actualTitle = await this.page.title();
       if (expectedTitle==actualTitle){
        console.log(`Expected Title is matching with Actual Title`);
       }
       else
        {
         throw new Error(`Actual title is not matching with expected title.Actual Title: ${actualTitle} but Expected Title: ${expectedTitle}`);
        }

    }

    async searchWindow(searchWindow:string):Promise<void>
    {  
       const searchLocator = await this.page.locator('//input[@placeholder="Search"]');
       await this.clickElement(searchLocator);
       await searchLocator.fill(searchWindow);
       await this.sleep(1);
       const searchValue =await this.page.locator(`(//div[text()=" ${searchWindow}"])[1]` );
       await this.clickElement(searchValue);

    }

    async sleep(seconds:number):Promise<void>{
        console.log(`Waiting for ${seconds} seconds `)
        await this.page.waitForTimeout(seconds * 1000);
    }

    async pressKey(key:string):Promise<void>{
        await this.page.keyboard.press(key);
    }
    


}

