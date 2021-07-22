// Set starting value of counter to 0

if (!localStorage.getItem('prodList')){
    localStorage.setItem('prodList',JSON.stringify([]));
}

function renderHTML(data){
    var catList=document.getElementById("catlist")
    var htmlString=``

    console.log(data)
    console.log(data.length)
    htmlString=`<div class="row">`
    for (var i=0;i<data.length;i++){
        var image=data[i].image

        var temp_img=image.split("\\")

        temp_img=temp_img[temp_img.length-1]

        console.log(temp_img)

        let temp=`
        <div class="card col-md-3" style="width: 18rem;">
        <img src=${temp_img} class="card-img-top" alt="...">
        <div class="card-body">
          
          <h5 class="card-title">Name:</h5>
          <p class="card-text">${data[i].name}</p>
          <h5 class="card-title">Description:</h5>
          <p class="card-text">${data[i].desc}</p>
          <h5 class="card-title">Price:</h5>
          <p class="card-text">${data[i].price}</p>
          <h5 class="card-title">MFD:</h5>
          <p class="card-text">${data[i].mfd}</p>
          <h5 class="card-title">Expiry Date:</h5>
          <p class="card-text">${data[i].exp}</p>
          <h5 class="card-title">Select:</h5>
          <input class="form-check-input" type="checkbox" value="on" id="prod_${i}">
        </div>
      </div>
      `
      if(i%4===0){
        htmlString=htmlString+`</div>`+`<div class="row">`
        
      }
      htmlString=htmlString+temp
    }
    htmlString=htmlString+`</div>`

    catList.insertAdjacentHTML('beforeend',htmlString)

}

function renderOrder(data){

  let prodList=document.querySelectorAll('.form-check-input')
  let order=""
  for(var i=0;i<prodList.length;i++){
    if(prodList[i].checked){

      order=order+data[i].name+","
    }
    
  }
  var orderlen=order.length

  order=order.slice(0,orderlen-1)
  console.log(order)
  var name=document.querySelector('#name')
  

  var address=document.getElementById('address')
  

  var number=document.getElementById('number')
  


  htmlString=`<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel">Order for ${name.value}</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
        
          <p>Order Details</p>
          <div>
            <h5>Order items: </h5>
            <div class="col-sm-6">
              <p>${order}</p>
            </div>
          </div>

          <div>
            <h5>Address: </h5>
            <div class="col-sm-6">
              <p>${address.value}</p>
            </div>
          </div>

          <div>
          <h5>Phone Number: </h5>
            <div class="col-sm-6">
              <p>${number.value}</p>
            </div>
          </div>
          
          <h4>Order Successful</h4>
            
          
          
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary">Close</button>
            </div>
          </div>
          </form>
      </div>
      
    </div>
  </div>
</div>
  
 </div>`

 let temp=document.querySelector('body')

 temp.insertAdjacentHTML('beforeend',htmlString)




}
console.log(JSON.parse(localStorage.getItem('prodList')))
prodList=JSON.stringify(localStorage.getItem('prodList'))
// Load current value of  counter
document.addEventListener('DOMContentLoaded', () => {

var ourRequest=new XMLHttpRequest();
ourRequest.open('GET',"catalog.json",true)
//console.log(ourRequest)
ourRequest.onload=function(){
  console.log(ourRequest.responseText)
  var ourData=JSON.parse(ourRequest.responseText);
  //console.log(ourData)
  renderHTML(ourData)
}
ourRequest.send();
//console.log(ourRequest)

//let prodList=JSON.parse(localStorage.getItem('prodList'))
//renderHTML(prodList)
// Count every time button is clicked
document.querySelector('button').onclick = () => {

  
var ourRequest=new XMLHttpRequest();
ourRequest.open('GET',"catalog.json",true)
//console.log(ourRequest)
ourRequest.onload=function(){
  console.log(ourRequest.responseText)
  var ourData=JSON.parse(ourRequest.responseText);
  //console.log(ourData)

  renderOrder(ourData)
  
  
}

ourRequest.send();





    // Increment current counter
    //let prodList = JSON.parse(localStorage.getItem('prodList'));
    //console.log(prodList)
    
    //console.log(prodList)
    //prodList.push(0)
    //console.log(prodList)
    //prodname=document.querySelector("#name")
    //proddesc=document.querySelector("#desc")
    //prodprice=document.querySelector("#price")
    //prodexp=document.querySelector("#exp")
    //prodmfd=document.querySelector("#mfd")
    //prodimg=document.querySelector("#image")

    //let new_prod={"name":prodname.value,"desc":proddesc.value,"price":prodprice.value,"exp":prodexp.value,"mfd":prodmfd.value,"image":prodimg.value}

    //console.log(new_prod)

    //prodList.push(new_prod)
    // Update counter
    //document.querySelector('#counter').innerHTML = prodList.toString();
    //renderHTML(prodList)
    //renderHTML(new_prod)
    //console.log("hello "+ prodList.length)
    //localStorage.setItem('prodList', JSON.stringify(prodList));
    //var fs = require('fs')
    //console.log(fs)
    //fs.writeFile('catalog.json', JSON.stringify(prodList), 'utf8', callback);


}
});