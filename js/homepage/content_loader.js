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
        var content = await fetchHTML("../html/tutor_input.html");
        page.id = "page1_tutor";
        page.innerHTML = content;
        main.appendChild(page);
    })
}
