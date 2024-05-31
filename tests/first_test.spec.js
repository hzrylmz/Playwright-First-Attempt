import { test, expect } from "@playwright/test";



test('Logging',async({page})=>{
    await page.goto('https://www.saucedemo.com/v1/')
    // await page.pause()

    await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await page.getByRole('button', { name: 'LOGIN' }).click()
    await page.locator('#header_container div').nth(1).waitFor() // waits elements
    await page.locator('#header_container div').nth(1).isVisible()
    // await page.pause()
    await expect(page.getByText('Products')).toHaveText('Products')
})