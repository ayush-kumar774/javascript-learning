const User = {
      _email : "a@ak.com",
      _password : "abc",

      get email () {
            return this._email.toUpperCase();
      },

      set email (value) {
            this._email = value;
      },

      get password () {
            return this._password.toLowerCase();
      },

      set password (value) {
            this._password = value;
      }
}

console.log(User.email);