// Set starting value of counter to 0
if (!localStorage.getItem('prodList')){
    localStorage.setItem('prodList',JSON.stringify([]));
}
console.log(JSON.parse(localStorage.getItem('prodList')))
prodList=JSON.stringify(localStorage.getItem('prodList'))
// Load current value of  counter
document.addEventListener('DOMContentLoaded', () => {
document.querySelector('#counter').innerHTML = prodList

// Count every time button is clicked
document.querySelector('button').onclick = () => {
    // Increment current counter
    let prodList = JSON.parse(localStorage.getItem('prodList'));
    console.log(prodList)
    
    console.log(prodList)
    //prodList.push(0)
    console.log(prodList)
    prodname=document.querySelector("#name")
    proddesc=document.querySelector("#desc")
    prodprice=document.querySelector("#price")
    prodexp=document.querySelector("#exp")
    prodmfd=document.querySelector("#mfd")
    prodimg=document.querySelector("#image")

    let new_prod={"name":prodname.value,"desc":proddesc.value,"price":prodprice.value,"exp":prodexp.value,"mfd":prodmfd.value,"image":prodimg.value}

    console.log(new_prod)

    prodList.push(new_prod)
    // Update counter
    document.querySelector('#counter').innerHTML = prodList.toString();
    localStorage.setItem('prodList', JSON.stringify(prodList));
}
});