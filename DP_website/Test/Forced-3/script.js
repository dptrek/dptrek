document.addEventListener("DOMContentLoaded", function() {
    const signUpButton = document.getElementById("signup-btn");

    signUpButton.addEventListener('click', function(event){
        event.preventDefault(); // Prevent default form submission
        //alert("Sign Up successfully and will receive discount news.");
        recordAction(1, "signup");
        localStorage.setItem("forced_record", 1);
        window.open("../../Training_home.html","_self");
    });

});
