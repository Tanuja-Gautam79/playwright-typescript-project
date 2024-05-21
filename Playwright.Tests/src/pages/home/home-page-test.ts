import { Locator, Page } from "@playwright/test";

export default class HomePageTest {

    readonly dealsLink: Locator;
    readonly dashboardLink: Locator;
    readonly propertiesLink: Locator;
    readonly unitsLink: Locator;
    readonly licencesLink: Locator;
    readonly negotiationsLink: Locator;
    readonly userInfoTitle: Locator;
    readonly userInfoSubtitle: Locator;

    constructor(public page: Page) {
        this.dealsLink = this.page.getByTestId('deals-nav-item');
        this.dashboardLink = this.page.getByTestId('home-nav-item');
        this.propertiesLink = this.page.getByTestId('properties-nav-item');
        this.unitsLink = this.page.getByTestId('units-nav-item');
        this.licencesLink = this.page.getByTestId('licences-nav-item');
        this.negotiationsLink = this.page.getByTestId('negotiations-nav-item');
        this.userInfoTitle = this.page.locator('//span[@class="user-info-title"]');
        this.userInfoSubtitle = this.page.locator('//span[@class="user-info-subtitle"]//a');
    }

    public async getUserInfo() {
        const userTitleText = await this.userInfoTitle.innerText();
        return userTitleText;
    }
    
    public async getUserSubtitle() {
        const subtitleText = await this.userInfoSubtitle.innerText();
        return subtitleText;
    }
}