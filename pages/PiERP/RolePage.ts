import { Locator , Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class RolePage extends BasePage{

    private continueButton : Locator;
    private backToSignIn : Locator;

    constructor (page: Page){
        super(page);
        this.continueButton = page.locator('//button[text()="Continue"]');
        this.backToSignIn = page.locator(' //button[text()="Back to sign in"]');
    }

    async selectRole(): Promise<void>
    {
        await this.clickElement(this.continueButton);
        await this.clickElement(this.backToSignIn);

    }

}