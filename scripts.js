/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function(){

    var button = document.querySelector('button');
    
    var  message = document.querySelector('.message');

    var email = document.getElementById('email');


    button.addEventListener('click', function(){
        event.preventDefault();

        var space = email.value;
        
        if(space == ''){
            event.preventDefault();
             message.textContent = ("Please enter a valid email address.");
        }
        
        else{
             message.innerHTML = `Thank you! Your email address ${space} has been added to our mailing list!`;
        }
        
        email.value = '';
    });









    
});