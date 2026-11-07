import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class LoginPage extends BasePage{

    private userNameField : Locator;
    private passwordField : Locator;
    private loginButton : Locator;

    constructor(page:Page){
        super(page);
        this.userNameField = page.locator('//input[@autocomplete="username"]');
        this.passwordField = page.locator('//input[@autocomplete="current-password"]');
        this.loginButton = page.locator('//button[text()="Login"]');
    }

    async loginToApplication(userName:string , password:string):Promise<void>
    {
        
        // await this.enterText(this.userNameField , userName);
        await this.enterText('//input[@autocomplete="username"]', userName);
        await this.enterText('//input[@autocomplete="current-password"]', password);
        await this.clickElement(this.loginButton);
        await this.page.getByRole('button', {name:"Continue"}).click();
       
    }










async preparingChair(cho:number, gla:number):Promise<void>{
//getWood
//cuttingWood
//cutting cho height
//cutting gla width
//Applying gum
//complete the chair
}



























}
