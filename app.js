console.log('application is ready to go!');

document.getElementById("img-html").addEventListener("click", imageClick);
// TODO: add eventlisteners

function imageClick(event) {
    console.log("click:", event);
    
    // TODO: Verhoog bijhorende progress-bar met 25% wanneer er op een afbeelding geklikt wordt

    // Junior => bg-danger w-25
    // Medior => bg-warning w-50
    // Senior => bg-info w-75
    // Expert => bg-succes w-100
}


