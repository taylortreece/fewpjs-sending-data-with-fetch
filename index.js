const configurationObject = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Application': 'application/json'
    },
    body: JSON.stringify({
        name: "Taylor",
        email: "tayloratreece@gmail.com"
    })
}

const dogUrl = 'http://localhost:3000/dogs'
const catUrl = 'http://localhost:3000/cats'
const userUrl = 'http://localhost:3000/users'

function submitData(url, opts) {
    fetch(url, opts);
}

submitData(userUrl, configurationObject)