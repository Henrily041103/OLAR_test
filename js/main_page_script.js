import { getSiblings } from "./utils.js";

if (document.readyState === "complete"){}
    
    var mode_buttons = document.getElementsByClassName("modes");
    var main_content = document.getElementsByClassName("main_content");
    var siblings = [];
    
    

    for(let i = 0; i < mode_buttons.length; i++) {
        mode_buttons[i].addEventListener("click", () => {
            main_content[i].style.display = "block";
            
            siblings = getSiblings(main_content[i]);
            for (var other of siblings) {
                other.style.display = "none";
            }
        })
    }
