import request from 'browser-request'

export function getAllUsersService () {
  return new Promise((resolve, reject) => {
    request('http://localhost:3000/api/v1/user/getAllUsers', function (er, response, body) {
      if (er) {
        reject(er)
      }
      let list = JSON.parse(body)
      resolve(list)
    })
  })
}

export function checkPassword () {
  return new Promise((resolve, reject) => {
    // request({method:'POST', url:'/db', json:true}, on_response)
    // function on_response(er, response, body) {
    //   if(er)
    //     throw er
    //   if(result.ok)
    //     console.log('Server ok, id = ' + result.id)
    // }
  })
}

export function newUserService (user) {
  return new Promise((resolve, reject) => {
    request({method: 'POST', url: 'http://localhost:3000/api/v1/user/newUser', json: user}, onResponse)
    function onResponse (er, response, body) {
      if (er) {
        throw er
      }
      if (response.ok) {
        console.log('Server ok, id = ' + response.id)
      }
    }
  })
}
