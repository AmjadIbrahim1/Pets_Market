var login = document.getElementById("flexSwitchCheckDefault")
var flag = 0
function on(){
    if(!flag){
    login.style.backgroundColor="#fa406b"
    flag=1
    }
    else{
        login.style.backgroundColor="white"
        flag=0 
    }
}
login.addEventListener("click",on)
var Popover= document.querySelectorAll(".Popover")
Popover.forEach( function (item){
    item.onclick = function Popoverclick(){
    alert("تم نسخ النص")
    }
})
