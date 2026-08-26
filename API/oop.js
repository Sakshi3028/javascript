const user = {
    username: "sakshi",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log(`username: ${this.username}`);
    }
};

// console.log(user.username);
// console.log(user.getUserDetails());

// const promiseOne = new promiseone()
// const date= new Date()

function User(username,logincount,isLoggedIn){
    this.username=username;
    this.logincount=logincount;
    this.isLoggedIn=isLoggedIn;

    return this
}
const userOne=User("sakshi",12,true)
console.log(userOne);