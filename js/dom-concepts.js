// alert("Welcome to my portfolio");

// //Special function used to access a specific element by ID in javascript
// let cardDjango = document.getElementById("card-django");
// console.log(cardDjango)

//looking at the contents of the element above
// cardDjango.innerHTML = "<h1>I am Changed</h1>";

// cardDjango.addEventListener("click", function(){
//     cardDjango.innerHTML = "<h1>I am changed</h1>"
// })

//TODO: Add a mouseover and mouseout event to our
//my cv button, change the text inside the button to a text of your choice,for mouseover then when the mouse is out you can return the 
//default message 

//Method 1
// $(document).ready(function(){
//     let modalApplicationForm = $('#application-modal')  //has a # as it gets element by id
//     modalApplicationForm.show();

//     let modalBtnClosed = $(".btn-close");

//     modalBtnClosed.on('click', (e)=>{
//         modalApplicationForm.hide();
//     });
// });

    
    let forms = $('form');  //An action for all forms collectively

    forms.on("submit", function(e){ 
        e.preventDefault();
        // alert("Form has been submitted");

        //Validating input
        let nameInput = $('#input-name').val()        
        if(nameInput.length === 0){
            $("#name-error").addClass('d-block');
            $("#name-error").removeClass('d-none');
        }
        else{
            // alert(nameInput);
            $("#name-error").addClass('d-none');
            $("#name-error").addClass('d-block');
        }

        let emailInput = $('#inputEmail').val()
        if(emailInput.length === 0){
            $("#email-error").addClass('d-block');
            $("#email-error").removeClass('d-none');            
        }
        else{
            $("#email-error").addClass('d-none');
            $("#email-error").addClass('d-block');
        }

        let phoneInput = $('#Phone-Input').val();
        if(phoneInput.length === 0){
            $("#phone-number-error").addClass('d-block');
            $("#phone-number-error").removeClass('d-none');   
        }
        else{
            $("#phone-number-error").addClass('d-none');
            $("#phone-number-error").addClass('d-block');
        }
       
      function validateInputs(emailInput,phoneInput,nameInput){
        
      }
    })

    

    // let myImage = $('#beet-root');
    // let myImageSrc = myImage.attr("src")
    // myImage.on("mouseover",function(){
    //     $(this).attr("src","pictures/Makeup.jpeg");
    // });
    // myImage.on("mouseout",function(){
    //     $(this).attr("src",myImageSrc)
    // })

//TODO: Find out about the delay function
        //How to create a toggle for view website
        //How to validate inputs in a form
//     let cardDjango = $("#card-django")
//     cardDjango.click(function(){
//     $(this).html("<h1>I am changed</h1>");
//         alert($(this).html());
//     });
// });
// //Method 2
// let card2 = $("#card-2");
// card2.on("click",function(){
//    $(this).html("<h1>Django constant</h1>");
// })
//TODO: Add more functions to the 2nd method
        //delay function
        