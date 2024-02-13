console.log('application is ready to go!');

document.getElementById("img-html").addEventListener("click", imageClick);
document.getElementById("img-css").addEventListener("click", imageClick);
document.getElementById("img-js").addEventListener("click", imageClick);
document.getElementById("img-node").addEventListener("click", imageClick);
document.getElementById("img-sass").addEventListener("click", imageClick);
document.getElementById("img-vue").addEventListener("click", imageClick);

function imageClick(event) {
    console.log("click:", event);
    let parentCard = event.srcElement.parentElement;
    let progressBar = parentCard.querySelector(".progress-bar");

    if(progressBar !== null)
    {
        let text = progressBar.innerHTML;
        let progress = parseInt(text);

        progressBar.classList.remove("w-25");
        progressBar.classList.remove("w-50");
        progressBar.classList.remove("w-75");
        progressBar.classList.remove("w-100");

        progressBar.classList.remove("bg-danger");
        progressBar.classList.remove("bg-warning");
        progressBar.classList.remove("bg-info");
        progressBar.classList.remove("bg-succes");

        progress += 25;

        if (progress > 100)
        {
            progress = 0;
        }

        progressBar.innerHTML = progress;

        switch(progress)
        {
            case 25:
                progressBar.classList.add("w-25");
                progressBar.classList.add("bg-danger");
                break;
            case 50:
                progressBar.classList.add("w-50");
                progressBar.classList.add("bg-warning");
                break;
            case 75:
                progressBar.classList.add("w-75");
                progressBar.classList.add("bg-info");
                break;
            case 100:
                progressBar.classList.add("w-100");
                progressBar.classList.add("bg-succes");
                break;
        }
    }
}

// Junior => bg-danger w-25
// Medior => bg-warning w-50
// Senior => bg-info w-75
// Expert => bg-succes w-100
