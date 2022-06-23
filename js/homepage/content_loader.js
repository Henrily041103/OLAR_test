import { fetchHTML } from "../utils.js";

export class content_manager {
    constructor() {

    }

    loadContent(element) {
        switch(element.id) {
            case "tutor_content":
                var start_button = document.getElementById("tutor_start");
                loadTutor(element, start_button);
                break;
        }
    }
}

function loadTutor(main, start) {
    start.addEventListener("click", async function(){
        for (var child of main.children) child.style.display = "none";
        var page = document.createElement("div");
        document.getElementById("tutor_content").parentElement.appendChild(page);
        var content = await fetchHTML("../html/tutor_input.html");
        page.id = "page_tutor";
        page.innerHTML = content;
        var tutor_form = document.getElementById("tutor_form");
        main.appendChild(page);
        
        tutor_form.addEventListener('submit', async function(event) {
            // submit event detected
            console.log("O")
            event.preventDefault();
            var content = await fetchHTML("../html/tutor_output.html");
            main.innerHTML = content;
        })
    })
}
