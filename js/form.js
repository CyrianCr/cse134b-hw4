let form = document.querySelector("form");

let fullname = document.getElementById("fullname");
let fullnameerror = document.getElementById("fullname-error");

let email = document.getElementById("mail");
let mailerror = document.getElementById("mail-error");

let comment = document.getElementById("comment");
let commenterror = document.getElementById("comment-error");

let namedetails = document.getElementById("spandetailsname");
let emaildetails = document.getElementById("spandetailsemail");
let commentdetails = document.getElementById("spandetailscomment");

const correctname = /^[A-Za-z \-]+$/;   // Validation input
const correctmail = /^[a-z0-9.]+@[a-z0-9]+(?:\.[a-z]{2,})$/;   // Validation input
const correctcomment = /^[A-Za-z0-9 ?!,.\-]+$/;   // Validation input
const notallowed = /[!#%&'=_{}~]/;    // Masking
const notallowed2 = /[#%&'=_{}~]/;

let counttextarea = document.getElementById("comment");
let charCount = document.getElementById("comment-info");

let form_errors= [];         // Form info reporting
let errorform = document.getElementById("form-error");

// add no validate to the form if js active

form.setAttribute("novalidate", true);

fullname.addEventListener("input", () => {
const isnameValid = correctname.test(fullname.value);  // Validation input
const hasError = notallowed.test(fullname.value);    // Masking
let lastChar = fullname.value; 

// To improve the readability of the code, I can use the following method to return the last character entered by the user.
// let lastChar = fullname.value.charAt(fullname.value.length - 1);
// The purpose create a problem : if the user enter a wrong character at the start of at the middle of the input,
// it will return the last character of the input which can be a correct character.

    if (isnameValid) {   // Validation input
        // fullname.className = "valid";
        fullnameerror.textContent = "";
        fullnameerror.className = "error";
        namedetails.className = "valid";
    }
    else if (hasError) {    // Masking
        // fullname.className = "wrong";
        fullnameerror.textContent = "You're not allowed to use these characters : !#%&'=_{}~";
        fullnameerror.className = "error active";
        namedetails.className = "wrong";
        form_errors.push(lastChar + " is not allowed.");        // Form info reporting
        errorform.value = JSON.stringify(form_errors);
    }  
    else {
        namedetails.className = "invalid";
    }
});

email.addEventListener("input", () => {
const isValid = correctmail.test(email.value);   // Validation input
const hasError2 = notallowed.test(email.value);    // Masking
let lastChar = email.value;

    if (isValid) {   // Validation input
        emaildetails.className = "valid";
        mailerror.textContent = "";
        mailerror.className = "error";
    }
    else if (hasError2) {    // Masking
        emaildetails.className = "wrong";
        mailerror.textContent = "You're not allowed to use these characters : !#%&'=_{}~";
        mailerror.className = "error active";
        form_errors.push(lastChar + " is not allowed.");        // Form info reporting
        errorform.value = JSON.stringify(form_errors);
    }  
    else {
        emaildetails.className = "invalid";
    }
});

comment.addEventListener("input", () => {
const iscommentValid = correctcomment.test(comment.value);   // Validation input
const hasError3 = notallowed2.test(comment.value);    // Masking
let lastChar = comment.value;

    if (iscommentValid) {   // Validation input
        commentdetails.className = "valid";
        commenterror.textContent = "";
        commenterror.className = "error";
    }
    else if (hasError3) {    // Masking
        commentdetails.className = "wrong";
        commenterror.textContent = "You're not allowed to use these characters : #%&'=_{}~";
        commenterror.className = "error active";
        form_errors.push(lastChar + " is not allowed.");        // Form info reporting
        errorform.value = JSON.stringify(form_errors);
    }
    else {
        commentdetails.className = "invalid";
    }
});

// Validation submit
form.addEventListener("submit", (event) => {
event.preventDefault();

const isnameValid = correctname.test(fullname.value);
const isValid = correctmail.test(email.value);
const iscommentValid = correctcomment.test(comment.value);

const isFormValid = form.checkValidity(); // Using checkValidity() method
if (!isFormValid) {
    alert("Please fill in all the fields correctly.");
} else {
    alert("Thank you for your comment, your message has been sent.");
}


    if (!isnameValid) {
        namedetails.className = "invalid";
        fullnameerror.setCustomValidity("Please enter a valid name.");
        fullnameerror.className = "error";
    }

    else if (!isValid) {
        emaildetails.className = "invalid";
        mailerror.setCustomValidity("Please enter a valid email address.");
        mailerror.className = "error";
    }

    else if (!iscommentValid) {
        commentdetails.className = "invalid";
        commenterror.setCustomValidity("Your comment contains non-typical characters.");
        commenterror.className = "error";
    }    
    else {
        fullname.className = "valid";
        email.className = "valid";
        comment.className = "valid";
        fullnameerror.textContent = "";
        fullnameerror.className = "error";
        mailerror.textContent = "";
        mailerror.className = "error";
        commenterror.textContent = "";
        commenterror.className = "error";
        form.submit();
    }
});

// Length reporting 

counttextarea.addEventListener("input", () => {
const maxLength = 150;
let currentLength = counttextarea.value.length;
let charsLeft = maxLength - currentLength;

charCount.textContent = `Characters left: ${charsLeft}`;
    if (charsLeft <=50 && charsLeft > 30) {
        charCount.style.color = "orange";
    }

    else if (charsLeft <= 30) {
        charCount.style.color = "red";
    }

    else {
        charCount.style.color = "black";
    }

    if (charsLeft === 0) {
        charCount.textContent = "You've reached the character limit.";
    }
});