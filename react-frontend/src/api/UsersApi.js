class UsersApi {
  static getUser() {
    fetch('http://localhost:3000/users/1')
      .then(response => {
        console.log('hello', response.json())
        response.json()
      })
      .catch(error => error)
  }
}

export default UsersApi;
