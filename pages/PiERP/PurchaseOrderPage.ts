import { Locator , Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class PurchaseOrderPage extends BasePage{

    private plusButton : Locator;
    private Organization : Locator;
    private businessParterField : Locator;
    private vendorInputField : Locator;
    private refreshButton : Locator;
    private okButton : Locator;
    private saveButton : Locator;
    private detailRecordButton : Locator;
    private poLine : Locator;
    private productSelection : Locator;
    private itemSelection : Locator
    private quantityField : string;
    private purchaseNav: Locator;
    private docAction : Locator;
   


    constructor(page:Page){

        super(page);
        
        this.plusButton = page.locator('//a[@title="New    Alt+N"]');
        this.Organization = page.locator('(//span[@title="Organizational entity within tenant"])[last()]//a');
        this.businessParterField = page.locator('((//span[text()="Business Partner"])[last()]//following::button)[1]');
        this.vendorInputField =page.locator('//span[@instancename="IsVendor"]//input');
        this.refreshButton = page.locator('(//i[@class="z-icon-Refresh"])[last()]');
        this.okButton = page.locator('//button[@title="OK"]');
        this.saveButton = page.locator('(//i[@class="z-icon-Save"])[1]');
        this.detailRecordButton = page.locator('(//div[@role="button"])[last()]')
        this.poLine = page.locator('//span[text()="PO Line"]');
        this.productSelection = page.locator('((//span[text()="Product"])[last()]//following::i)[2]');
        this.itemSelection = page.locator('//div[text()="Mulch"]');
        // this.quantity = page.localStorage('((//span[text()="Quantity"])//following::input)[1]');
        this.quantityField = '((//span[text()="Quantity"])//following::input)[1]';
        this.purchaseNav = page.locator('(//a[text()="Purchase Order"])[1]');
        this.docAction = page.locator('//button[text()=" Document Action"]');
        this.okButton = page.locator('//button[@title="OK"]');
        }

    async selectOrganization(selectValue:string):Promise<void>{
        await this.clickElement(this.plusButton);
        await this.clickElement(this.Organization);
        await this.sleep(0.5);
        const organizationList = `(//span[text()="${selectValue}"])[last()]`;
        const organizationValue = await this.page.locator(organizationList);
        await this.clickElement(organizationValue);


    }

    async businessPartner(vendorValue:string , selectVendorOption : string ):Promise<void>{
        await this.clickElement(this.businessParterField);
        await this.enterText('//span[@instancename="IsVendor"]//input' , vendorValue);
        await this.clickElement(this.refreshButton);
        const vendorSelection = `(((//div[text()="${selectVendorOption}"])[1])//preceding::span)[last()]`;
        const selectVendor = await this.page.locator(vendorSelection);
        await this.clickElement(selectVendor);
        await this.clickElement(this.okButton);    
        await this.clickElement(this.saveButton);

    }
    
    async lineItems(quantity : number):Promise<void>{
        await this.clickElement(this.detailRecordButton);
        await this.clickElement(this.poLine);
        await this.clickElement(this.productSelection);
        await this.clickElement(this.refreshButton);
        await this.clickElement(this.itemSelection);
        await this.clickElement(this.okButton);
        let quantityValue = String(quantity);
        await this.enterText(this.quantityField, quantityValue);
        await this.clickElement(this.saveButton);
        await this.clickElement(this.purchaseNav);
        await this.clickElement(this.docAction);
        await this.clickElement(this.okButton);
        
    }


   
}