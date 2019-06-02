import path = require("path")
import { Pact, Interaction } from '@pact-foundation/pact'
import {performLogin} from "./apiClient";

describe('Login Pact', () => {
    const provider = new Pact({
        consumer: 'Http Quest Frontend',
        provider: 'Http Quest Backend',
        port: 3000,
        log: path.resolve(process.cwd(), 'logs', 'pact.log'),
        dir: path.resolve(process.cwd(), 'pacts'),
        logLevel: 'info',
        spec: 2,
    })
    describe('when a user is attempting login', () => {
        describe('the user enters correct login details', () => {
            beforeEach(done => {
                provider.setup()
                    .then(() => {
                        return provider.addInteraction({
                            state: 'A customer has not logged in',
                            uponReceiving: 'A request for login',
                            withRequest: {
                                method: 'POST',
                                path: '/login',
                                headers: {'Content-Type': 'application/json'},
                                body: {username: 'test1', password: 'password'},
                            },
                            willRespondWith: {
                                status: 200,
                                headers: {'Content-Type': 'application/json'},
                                body: {},
                            },
                        })
                    })
                    .then(() => done())
            })
            afterEach(() => {
                return provider.finalize()
            })
            it('should login successfully when correct login details are entered', done => {
                performLogin('test1', 'password')
                    .then(responseBody => {
                        // expect(provider.verify()).not.toThrowError()
                        expect(responseBody).toEqual({})
                    })
                    .then(() => done())
            });
        })
    })
})
