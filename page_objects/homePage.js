import { expect } from "@playwright/test";

export class HomePage {

    constructor(page) {
        this.page = page;
        this.products = page.locator('.inventory_item_name');
        this.addToCartButtons = page.locator("//div[@class='inventory_list']/div//button[@class='btn_primary btn_inventory']"); // "Sepete ekle" 
        this.cartBadge = page.locator('.shopping_cart_badge')
        this.shoppingCart = page.locator('#shopping_cart_container').getByRole('link')
        this.sortDropdown = page.locator('.product_sort_container')

    }

    async addProductToCart(productName) {
        
        const productsCount = await this.products.count();
        for (let i = 0; i < productsCount; i++) {
            const product = await this.products.nth(i);
            const productNameText = await product.textContent();
            if (productNameText.trim() === productName) {
                await this.addToCartButtons.nth(i).click(); // İlgili butona tıklayın
                break;
            }
            await expect(this.addToCartButtons.nth(i)).toHaveText('REMOVE'); // add to cart'ın remove donmesi kontrolu  
        }    
    }


    async gotoShoppingCart() {
        await this.shoppingCart.click()
        await this.page.waitForURL("https://www.saucedemo.com/v1/cart.html", {timeout:30000})
    }

ß
    async sortByPriceLowToHigh() {
        await this.sortDropdown.waitFor()
        await this.sortDropdown.selectOption('Price (low to high)')

    }






}
