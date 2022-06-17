import {acc_manager} from "../js/account_validator.js";

document.addEventListener("DOMContentLoaded", 
    function (event) 
    {
        var validator = new acc_manager();

        var login_window = document.getElementById('login_window');
        var login_button = document.getElementById("login");
        var login_close = document.getElementById("close1");
        var login_email = document.getElementById("email_login");
        var login_password = document.getElementById("password_login");
        var login_confirm = document.getElementById("confirm1");
        
        var signup_window = document.getElementById('signup_window');
        var signup_button = document.getElementById("signup");
        var signup_close = document.getElementById("close2");
        var signup_email = document.getElementById("email_signup");
        var signup_password = document.getElementById("password_signup");
        var signup_reenter = document.getElementById("re_enter")
        var signup_confirm = document.getElementById("confirm2");
        
        function closeLogin() {
            login_window.style.display = "none";
        }

        function displayLogin() {
            login_window.style.display = "flex";
        }
        function closeSignup() {
            signup_window.style.display = "none";
        }

        function displaySignup() {
            signup_window.style.display = "flex";
        }

        function confirmLogin() {
            var u = login_email.value;
            var p = login_password.value;
            console.log("u: " + u + ", p: " + p);

            if (validator.isValidAccount(u, p)) {
                console.log("YES");
            }
            else {
                console.log("NO");
            }
        }
        function confirmSignup() {
            var u = signup_email.value;
            var p = signup_password.value;
            var r = signup_reenter.value;
            
            if (p == r) {
                if (!validator.checkDuplicate(u, p)) {
                    validator.addNewAccount(u, p);
                }
            }
        }

        window.onclick = function(event) {
            if (event.target.closest("#login_window")== null && event.target != login_button) 
            {
                closeLogin();
            }

            if (event.target.closest("#signup_window")== null && event.target != signup_button) 
            {
                closeSignup();
            }
        }
        login_button.addEventListener("click", displayLogin);
        login_close.addEventListener("click", closeLogin);
        signup_button.addEventListener("click", displaySignup);
        signup_close.addEventListener("click", closeSignup);

        login_confirm.addEventListener("click", confirmLogin);
        signup_confirm.addEventListener("click", confirmSignup);
    })

    

    