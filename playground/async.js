console.log('starting app');

setTimeout(()=>{
console.log('Inside the callback');
},2000);

setTimeout(()=>{
console.log('Second callback works');
},0);

console.log('finishing app');