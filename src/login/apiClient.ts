import fetch from 'node-fetch'

export const performLogin = (username: string, password: string): Promise<object> => {
    return fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: username, password: password})
        })
        .then(response => {
            return response.json()
        })
}
