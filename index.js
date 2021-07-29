const dogUrl = 'http://localhost:3000/dogs'
const catUrl = 'http://localhost:3000/cats'

function submitData(name, email) {
    const userUrl = 'http://localhost:3000/users'

    const configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        })
    }

    return fetch(userUrl, configurationObject)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        console.log(object)
        appendTextToBody(object.id)
      })
      .catch(function(error) {
          alert("U aren't supposed to be here bruh");
          appendTextToBody(error.message);
      }); 
}

// function appendTextToBody(text) {
//     let newElement = document.createElement('p');
//     newElement.innerText = text
//     document.body.appendChild(newElement)
// }

function appendTextToBody(text) {
    document.body.innerHTML = text
}

submitData("taylor", "t@gmail.com")