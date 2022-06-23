import {acc_manager} from "./account_manager.js";
import { writeToJSON, fetchJSON} from "../utils.js";

var validator = new acc_manager();

if (document.readyState !== "loading") {

        var login_window = document.getElementById('login_window');
        var login_button = document.getElementById("login");
        var login_close = document.getElementById("close1");
        var login_email = document.getElementById("email_login");
        var login_password = document.getElementById("password_login");
        var login_form = document.getElementById("login_form")
        
        var signup_window = document.getElementById('signup_window');
        var signup_button = document.getElementById("signup");
        var signup_close = document.getElementById("close2");
        var signup_email = document.getElementById("email_signup");
        var signup_password = document.getElementById("password_signup");
        var signup_reenter = document.getElementById("re_enter")
        var signup_form = document.getElementById("signup_form");
        
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
                return true;
                //window.location.href("../homepage.html");
            }
            else {
                console.log("NO");
                var inp = {username: u, password: p, type: "user"};
                writeToJSON(inp, "../test_acc/current_acc.json");
                fetchJSON("../test_acc/current_acc.json")
                .then((res) => (console.log(res)));
                return false;
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

        login_form.onsubmit = confirmLogin;
        signup_form.onsubmit = confirmSignup;
}


    

    