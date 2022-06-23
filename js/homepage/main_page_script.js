import { getSiblings, fetchJSON } from "../utils.js";
import {content_manager } from "./content_loader.js";

if (document.readyState !== "loading"){
    var mode_buttons = document.getElementsByClassName("modes");
    var main_content = document.getElementsByClassName("main_content");
    document.addEventListener("DOMContentLoaded", () => {
        mode_buttons[0].click();
        mode_buttons[0].focus();
    })
    var user_email = document.getElementById("user_email");
    var user_type = document.getElementById("user_type");
    
    var manager = new content_manager();
    var siblings = [];

    for(let i = 0; i < mode_buttons.length; i++) {
        mode_buttons[i].addEventListener("click", () => {
            main_content[i].style.display = "block";
            
            siblings = getSiblings(main_content[i]);
            for (var other of siblings) {
                other.style.display = "none";
            }
            manager.loadContent(main_content[i]);
        })
    }

    var cookie = JSON.parse(document.cookie);
    user_email.innerHTML = cookie.username;
    user_type.innerHTML = cookie.type;

}
