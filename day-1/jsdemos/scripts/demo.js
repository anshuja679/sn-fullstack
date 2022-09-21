// console.log("welcome");
// document.write("hello");
// alert("hii");

function callme(){
    console.log("welcome");
document.write("hello");
alert("hii");

}

function myfirst(){
document.getElementById('show').innerHTML='welcome to JS'
}

function showData(){
    document.getElementById("show").innerHTML='welcome to form'
}
function shownReplace(){
    let newdata=document.data.uname.value
    document.getElementById("show").innerHTML=newdata
    alert(newdata)
    console.log(newdata);
}