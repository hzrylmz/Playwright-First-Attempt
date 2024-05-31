export class LoginPage{

    constructor(page){
        this.page = page

        this.username_field = page.locator('[data-test="username"]')

        this.password_field = page.locator('[data-test="password"]')
        
        this.login_btn = page.getByRole('button', { name: 'LOGIN' })

    }

    gotoLoginPage = async() => {
        await this.page.goto('https://www.saucedemo.com/v1/')
    }

    async login(username, password){

        await this.username_field.fill(username);
        await this.password_field.fill(password);
        await this.login_btn.click()
    }

}