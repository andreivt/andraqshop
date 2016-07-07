// function validateForm() {
//     var username = document.getElementById('username').value;
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
//     var passconf = document.getElementById('confirm-password').value;
//     var spans = document.querySelectorAll('.form-group');
//     if (!username) {
//         spans[0].querySelector('span').style.visibility = "visible";
//     } else {
//         spans[0].querySelector('span').style.visibility = "hidden";
//     }
//     if (!email) {
//         spans[1].querySelector('span').innerHTML = "Empty email";
//         spans[1].querySelector('span').style.visibility = "visible";
//     } else {
//       if(email.indexOf('@') === -1){
//         spans[1].querySelector('span').innerHTML = "Invalid email";
//         spans[1].querySelector('span').style.visibility = "visible";
//       }else{
//         spans[1].querySelector('span').style.visibility = "hidden";
//       }
//     }
//     if (!password) {
//         spans[2].querySelector('span').style.visibility = "visible";
//     } else {
//         spans[2].querySelector('span').style.visibility = "hidden";
//     }
//     if (!passconf) {
//         spans[3].querySelector('span').style.visibility = "visible";
//     } else {
//         spans[3].querySelector('span').style.visibility = "hidden";
//     }
// }
//
// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelector('form').addEventListener('submit', function(event) {
//         var username = document.getElementById('username').value;
//         var email = document.getElementById('email').value;
//         var password = document.getElementById('password').value;
//         var passconf = document.getElementById('confirm-password').value;
//         if (!username || !email || !password || !passconf) {
//             event.preventDefault();
//             validateForm();
//         }
//     })
// })

document.addEventListener('DOMContentLoaded',function(){
    //the dom has been loaded
    //get a reference to our form
    var registerForm = document.querySelector('#register');
    //a collection of input ids
    var inputs = ['#username','#email','#password','#confirm-password'];
    //attach to each input an event listener so we can check for events
    for(var i=0;i<inputs.length;i++) {
      document.querySelector(inputs[i]).addEventListener("keyup",function() {
        onchangeElem('#' + this.id)
      })
    }
    //listen to the submit event
    registerForm.addEventListener('submit', function(event){
        var hasError = false;
        for(var i=0;i<inputs.length;i++) {
          if(isEmptyInput(inputs[i])) {
             hasError = true;
             showError(inputs[i])
          } else {
            hideError(inputs[i])
          }
        }
        //if at least one element had errors prevent default submit action
        if(hasError) {
          event.preventDefault();
        }
    })
})
