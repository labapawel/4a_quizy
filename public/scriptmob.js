let myID = window.localStorage.getItem('myid');
const $=(name)=>document.querySelector(name);

let username = "";
if(!myID){
    myID = Math.floor(Math.random()*1000000000)+"_"+(new Date()).getTime();
    window.localStorage.setItem('myid', myID);
}

let socket = io("ws://10.40.50.206:3000");

socket.on('username', ()=>{
    if(username == "")
        username = prompt("Podaj imie:");
    socket.emit('sendname', myID, username);
})

socket.on('usercount', (count)=>{
    console.log('clientcount', count);
    $('.usercount').innerText = count;    
})