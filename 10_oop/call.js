function setUsername(username) {
        // complex DB calls
        this.username = username
        console.log("Called");
};

function createUser (username, email, password) {
        setUsername.call(this,username) 
        this.email = email
        this.password  = password
};

const user = new createUser("Aayush", "aayush.kumar@acko.tech", "123");
console.log(user);