// Set starting value of counter to 0

if (!localStorage.getItem('prodList')){
    localStorage.setItem('prodList',JSON.stringify([]));
}

function renderHTML(data){
    var catList=document.getElementById("catlist")
    var htmlString=``

    console.log(data)
    console.log(data.length)
    for (var i=0;i<data.length;i++){
        var image=data[i].image

        var temp_img=image.split("\\")

        temp_img=temp_img[temp_img.length-1]

        console.log(temp_img)

        let temp=`
        <div class="card" style="width: 18rem;">
        <img src=${temp_img} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Name</h5>
          <p class="card-text">${data[i].name}</p>
          <h5 class="card-title">Description</h5>
          <p class="card-text">${data[i].desc}</p>
          <h5 class="card-title">Price</h5>
          <p class="card-text">${data[i].Price}</p>
          <h5 class="card-title">MFD</h5>
          <p class="card-text">${data[i].mfd}</p>
          <h5 class="card-title">Expiry Date</h5>
          <p class="card-text">${data[i].exp}</p>
        </div>
      </div>
      `
      htmlString=htmlString+temp
    }

    catList.insertAdjacentHTML('beforeend',htmlString)

}
console.log(JSON.parse(localStorage.getItem('prodList')))
prodList=JSON.stringify(localStorage.getItem('prodList'))
// Load current value of  counter
document.addEventListener('DOMContentLoaded', () => {

let prodList=JSON.parse(localStorage.getItem('prodList'))
renderHTML(prodList)
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
    //document.querySelector('#counter').innerHTML = prodList.toString();
    //renderHTML(prodList)
    //renderHTML(new_prod)
    console.log("hello "+ prodList.length)
    localStorage.setItem('prodList', JSON.stringify(prodList));
}
});