var getUser=(id, callback)=>{
user={
    id:id,
    name:'Awanish'
}
setTimeout(()=>{
    callback(user);
},3000);

};
getUser(26,(user)=>{
console.log(user);
});