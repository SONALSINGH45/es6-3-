// function getusers(){
//     return[
// { username:"sonal" ,email: "sonal@gmail.com"},
// { username:"sonal",email:"sona@gmail.com"}
//     ]
// }
// function finduser(email){
// const users=getusers()
// const user = users.find((user) => user.email=== email);
// return user;
// }
// console.log (finduser("sonal@gmail.com"))
///using call back
function getuser(callback){
    setTimeout(() => {
        callback([
{username:"sonal",email:"sonalsingh@gmail,com"},
{username: "sona",email:"sona@gmail.com"}
        ])
        
    }, 1000);
}
function finduser(username,callback){
    getuser((users=>{
        const user = users.find((user) => user.username === username);
        callback(user);
    }))
}
finduser('sonal', console.log);