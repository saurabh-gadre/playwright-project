import { APIRequestContext, request } from "@playwright/test";
import { randomInt } from "crypto";

class APIController {

    private fakerApi: APIRequestContext;

    async init() {
        this.fakerApi = await request.newContext({
            baseURL: 'https://jsonplaceholder.typicode.com/'
        });
    }

    async getUser() {
        const response = await this.fakerApi.get('users');
        const resBody = await response.json();
        const randomIndex = randomInt(4);
        return await resBody[randomIndex];
    }

    async createUserTodo() {
        const response = await this.fakerApi.post('/users/1/todos', {
            data: {
                'title': 'Learn Playwright',
                'completed': 'false'
            }
        });
        return await response.json();
    }
}

export default new APIController();