class User {
      constructor(email, password) {
            this.email = email ;
            this.password = password ;
      }

      get email () {
            return this._email.toUpperCase(); 
      };

      set email(value) {
            this._email = value
      }

      get password () {
            return `Encrypted password = abc${this._password}abc`;
      }
      
      set password (value) {
            this._password = value;
      }
}



const user = new User("aayush.kumar@acko.tech", "123");
console.log(user.email);