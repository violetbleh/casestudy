
        
var user= document.getElementById("field1");
var err1= document.getElementById("err1");
var pwd= document.getElementById("field2");
var err2= document.getElementById("err2");
var regex = "^([ADMIN admin])*$"
var pegex = "^([12345])*$"
function validateUser(){
    if(user.value.trim()==''){
    err1.innerText="Field cannot be empty";
    user.style.border='2px solid red';
    return false
    }
    else if(!user.value.match(regex)){
        err1.innerText="Username is not in correct format";
        user.style.border="2px solid red";
        return false
    }
    else if(user.value.length>5){
        user.style.border='2px solid red';
        err1.innerText="Password must be less than 5";
        return false
    } 
    else{
        err1.innerText="";
        user.style.border='2px solid green';

        return true
    }
}
function validatePass(){
    if(pwd.value.trim()==''){
        err2.innerText="Field cannot be empty";
        pwd.style.border='2px solid red';
        return false
        }
    else if(pwd.value.length<5){
        pwd.style.border='2px solid red';
        err2.innerText="Password must be more than 5";
        return false
    } 
    else if(!pwd.value.match(pegex)){
        err2.innerText="Password is not in correct format";
        pwd.style.border="2px solid red";
        return false
    }
    else{
            err2.innerText="";
            pwd.style.border='2px solid green';
    
            return true
        }
}
function verify(callback){
    if(!validateUser()||!validatePass()){
        return false
    }
    else 
       
        callback()
        return true
}


function  nextPage(){
    window.location.href='login.html'
}