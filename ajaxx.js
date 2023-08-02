function getData(){
    console.log("get data clicked")


//create XHR object
var xhttp = new XMLHttpRequest();

//create an event listener
xhttp.onreadystatechange = function(){
    if (xhttp.readyState == 4 && xhttp.status == 200){
        var data = JSON.parse(this.responseText);
        console.log(data)
        var output = `<table>
        <tr><th>No</th>
                         <th>Todo</th></tr>`;
        for (let i=0; i<data.length; i++){
            var checked = ''
            if(data[i].completed) {
                checked = 'checked'
                
            }else{
                checked=''
            }
            output += `<tr>
                        <td>${data[i].id}</td>
                        <td>${data[i].title}</td>
                         <td><input type="checkbox" ${checked}  onclick="count()"/></td>
                        </tr>`
        }
        output += '</table>'
        document.getElementById('tbl').innerHTML=output
    }}


// request specification
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true)

// sending request
xhttp.send();
};
let n=0;
function count(){
    n++;
    new Promise((resolve,reject)=>{
        if(n===5){
            resolve("congrats,5 task have to be sucessfully completed");
        }   
     })
     .then((val)=>{
        alert(val);
     })
}