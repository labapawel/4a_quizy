let myID = window.localStorage.getItem('myid');
if(!myID){
    myID = Math.floor(Math.random()*1000000000)+"_"+(new Date()).getTime();
    window.localStorage.setItem('myid', myID);
}