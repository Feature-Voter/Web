import { createMocks } from 'node-mocks-http'
import login from '../../pages/api/login'

describe('/api/login', () => {
    it("should get 200", async () => {
        const { req, res } = createMocks({
            method: 'POST',
            body: {
                userName: 'demo',
                password: 'demo'
            },
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
        const { req, res } = createMocks({
            method: 'POST',
            body: {
                userName: 'demo',
                password: 'demo1'
            },
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
        const { req, res } = createMocks({
            method: 'GET',
            body: {
                userName: 'demo',
                password: 'demo1'
            },
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