document.addEventListener('DOMContentLoaded',function(){
  //the dom has been loaded
  //get a reference to our form
  var contactForm = document.querySelector('.q-form');
  //a collection of input ids
  var inputs = ['#email','#subject','#message'];
  validateData(inputs,contactForm);

})
