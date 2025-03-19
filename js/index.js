//Write your Javascript code here
console.log("Shoppinglist")
let listener = document.getElementById("addButton")

listener.addEventListener("click", addGoods)

listener.addEventListener("click", hideli)

//listener.addEventListener("click", () =>{
//    addGoods()
//})

let getUl = document.getElementById("list")
let getunhealthyUl = document.getElementById("listUnhealthy")



function addGoods(){
    //let optionInput = document.getElementById('category').value
    let elementInput = document.getElementById("newGoods").value

    let optionInput = document.getElementById("healthoption").value
    
    let intputText = elementInput

    let optionText = optionInput
    
    //let optiontext = optionInput
    
    let li = createLi(intputText, optionText)

    if(optionInput == "unhealthy"){
        addUnhealthyLi(li)
    }
    else{
    addHealthyLi(li)
}

}

function hideli(){
    let hidehealthy = document.getElementById("list");
    let hideunhealthy = document.getElementById("unhealthylist");

    if(hidehealthy.getAttribute("hidden", false)){
        hidehealthy.setAttribute("hidden", true)
    }
    if(hideunhealthy.getAttribute("hidden", false)){
        hideunhealthy.setAttribute("hidden", true)
    }

    hidehealthy.setAttribute("hidden", true)
}
function createLi(item, typeOfClass){
    
    let ulcount = getUl.childElementCount
    let newLi = document.createElement("li")

    newLi.setAttribute("id", ulcount)
    newLi.setAttribute("class", typeOfClass)
    
    let newItem = createaTextNode(item)
    newLi.append(newItem)

    return newLi
    
}
function createaTextNode(text){
    return document.createTextNode(text)
}
function addclassAttribute(newLi){
    hasClass(getUl, newLi)
}
function addHealthyLi(newLi){
    getUl.append(newLi)
}
function addUnhealthyLi(newLi){
    getunhealthyUl.append(newLi)
}
function hasClass(getUl, newLi){
    if(getUl.hasAttribute("class")){
        if(newLi.getAttribute("class") == "unhealthy"){
            newLi.setAttribute("class", "healthy")
        }
        else{
            newLi.setAttribute("class", "unhealthy")
        }
    //newLi.setAttribute("class", newclass)
    }
}
function deleteLi(litodelete){
    let li = document.getElementById(litodelete)
    getUl.removeChild(li)
}
