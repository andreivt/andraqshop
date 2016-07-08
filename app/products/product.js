document.addEventListener('DOMContentLoaded', function() {

    var productID = getParameterByName('id');
    var products = getProductList();
    var currentProduct = products[productID];
    if(localStorage['cart'] === undefined){
      localStorage['cart'] = JSON.stringify([]);
    }
    var title = document.querySelector('.product-summary>h2');
    title.innerHTML = currentProduct.name;

    var price = document.querySelector('p.price');
    price.innerHTML = '$' + currentProduct.price;

    var description = document.querySelector('p.description');
    description.innerHTML = currentProduct.description;

    var reviewsNumber = document.querySelector('.review-number span.review-count');
    var revCount = currentProduct.reviews.length;
    reviewsNumber.innerHTML = (revCount == 1 ? '1 review' : revCount + ' reviews');

    var olElement = document.querySelector('.carousel-indicators');
    var carouselInner = document.querySelector('.carousel-inner');

    for (var i = 0; i < currentProduct.pictures.length; i++) {
        var liELement = document.createElement('li');
        liELement.setAttribute('data-target', '#carousel-example-generic');
        liELement.setAttribute('data-slide-to', (i + 1));
        olElement.appendChild(liELement);
        var itemCarousel = document.createElement('div');
        // itemCarousel.className = "item active";
        if (i != 0) {
            itemCarousel.className = "item";
        } else {
            itemCarousel.className = "item active";
            liELement.className = "active";
        }
        itemCarousel.innerHTML = `<img src="` + currentProduct.pictures[i] + `" alt="product` + i + `">
                            <div class="carousel-caption">
                                Slide ` + (i + 1) + `
                            </div>`;
        carouselInner.appendChild(itemCarousel);
    }

    var tabDescription = document.querySelector('.tab-content #description');
    tabDescription.innerHTML = currentProduct.description;

    var tabSpecifications = document.querySelector('.tab-content #specifications .table tbody');
    for (var j = 0; j < currentProduct.specifications.length; j++) {
        tabSpecifications.innerHTML += `<tr>
      <th>` + currentProduct.specifications[j].label + `</th>
      <td>` + currentProduct.specifications[j].value + `</td>
  </tr>`;
    }

    var tabReviews = document.querySelector('.tab-content #reviews .table tbody');
    for (var k = 0; k < currentProduct.reviews.length; k++) {
        tabReviews.innerHTML += `<tr>
      <th>` + currentProduct.reviews[k].name + `</th>
      <td>` + currentProduct.reviews[k].text + `</td>
  </tr>`;
    }

    var addToCartBtn = document.querySelector('#add-to-cart-btn');
    addToCartBtn.addEventListener('click', function(){
      var curentCart = JSON.parse(window.localStorage['cart']);
      for(var i=0;i<curentCart.length;i++){
        if(curentCart[i].id == productID){
          curentCart[i].qty = parseInt(curentCart[i].qty);
          curentCart[i].qty += parseInt(document.querySelector('.qty').value);
          localStorage.cart = JSON.stringify(curentCart);
          return;
        }
      }
      var newProduct = {  id : productID,
                          qty: document.querySelector('.qty').value,
                          name: document.querySelector('.product-summary>h2').innerHTML,
                          price: price.innerHTML,
                          picture: currentProduct.picture
                        };

      curentCart.push(newProduct);
      localStorage.cart = JSON.stringify(curentCart);
    })

    var minus = document.querySelector('.minus');
    var plus = document.querySelector('.plus');
    var qty = document.querySelector('.qty');
    minus.addEventListener('click', function(){
      if(qty.value > 0)
        qty.value--;
    })
    plus.addEventListener('click', function(){
      qty.value++;
    })
})
