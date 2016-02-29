module.exports = {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.accessToken) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    pretendRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.accessToken = res.accessToken
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken() {
    return localStorage.accessToken
  },

  logout(cb) {
    delete localStorage.accessToken
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.accessToken
  },

  onChange() {}
}

function pretendRequest(email, pass, cb) {
  setTimeout(() => {
    if (email === 'joe@example.com' && pass === 'password1') {
      cb({
        authenticated: true,
        accessToken: Math.random().toString(36).substring(7)
      })
    } else {
      cb({ authenticated: false })
    }
  }, 0)
}
