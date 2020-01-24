if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
    
}
else{
    ready()
}
function ready(){
    var removeCartItemButton=document.getElementsByClassName('btn-button')
    for (var i=0;i<removeCartItemButton.length;++) {
        var button= removeCartItemButton[i]
        button.addEventListener('click',removeCartItem)
        
        
        }
    
        var quantityInputs =document.getElementsByClassName('cart-quant-input')
        for (var i=0;i<quantityInputs.length;i++){
            var input= quantityInputs[i]
            input.addEventListener('change',quantityChanged)
            
        }
    
      var addToCartButton =document.getElementsByClassName(' shop-item-button')
   for (var i=0;i<addToCartButton .length;i++){
       var button=addToCartButton[i]
       button.addEventListener('click',addToCartClicked)
   }
       
}

function removeCartItem(event){
    var buttonClicked= event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
    
    
    
}
function quantityChanged(event){
    var input=event.target
    if(isNaN(input.value)||input.value<=0){
        input.value=1
        
    }

updateCartTotal()
    
}
    function updateCartTotal(){
        var cartItemConyainer =document.getElementsByClassName('cart-item')[0]
        var CartRows =cartItemConyainer.getElementsByClassName('cart-row')
        var total=0
        for (var i=0;i<CartRows.length;i++){
            var cartRow =CartRows[i]
            var priceElement=CartRow.getElementsByClassName('cart-price')[0]
            var quantityElement=cartRow.getElementsByClassName('cart-quant-input')[0]
            var price =parseFloat(priceElement.innerText.replace('$',''))
            var quantity=quantityElement.value
            total=total+(price*quantity)
            
            
        }
        
       total=math.round(total*100/100)
        document.getElementsByClassName('vart-total-price')[0].innerText='$'+total
        
    }