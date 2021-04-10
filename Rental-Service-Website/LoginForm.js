// Const vlaue allows us too asign objects with properties
// document.querySelector identifies and locates the variable or objects its being assigned too
const pass_field = document.querySelector('.password');
const show_btn = document.querySelector('.show');

// addEventListener is a method that attaches a script too the const value, in this instance show_btn
show_btn.addEventListener('click', function() { // Placing a click function so user has too click the event
    if(pass_field.type === "password") { // if statement for password 
        pass_field.type = "text";        // if the event click function is activated then the password which is hidden will show
        show_btn.style.color = "#3498db";
    } else {
        pass_field.type = "password"; // if the if statement is not prompt then it will leave the password too be hidden
        show_btn.style.color = "#222";
    }
})