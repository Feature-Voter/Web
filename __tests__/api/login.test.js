import { createMocks } from 'node-mocks-http'
import login from '../../pages/api/login'

describe('/api/login', () => {
    it("should get 200", async () => {
        const data = JSON.stringify({
            userName: 'demo',
            password: 'demo'
        })
        const { req, res } = createMocks({
            method: 'POST',
            body: data,
        })

        await login(req, res)

        expect(res._getStatusCode()).toBe(200)
        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining({
                message: 'ok',
            }),
        )
    })

    it("should get 403", async () => {
        const data = JSON.stringify({
            userName: 'demo',
            password: 'demo1'
        })

        const { req, res } = createMocks({
            method: 'POST',
            body: data,
        })

        await login(req, res)

        expect(res._getStatusCode()).toBe(403)
        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining({
                message: 'not registered',
            }),
        )
    })

    it("should get 400", async () => {
        const data = JSON.stringify({
            userName: 'demo',
            password: 'demo1'
        })
        const { req, res } = createMocks({
            method: 'GET',
            body: data,
        })

        await login(req, res)

        expect(res._getStatusCode()).toBe(400)
        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining({
                message: 'nope only post',
            }),
        )
    })
})