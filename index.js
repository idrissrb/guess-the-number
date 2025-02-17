// Ensure the difficulty selection is visible when the page loads
document.querySelector(".start").classList.add("hidden"); // hide start button initially

// Event listener for difficulty selection
const dropdownItems = document.querySelectorAll('.dropdown-item');
let difficulte;
let nb, nbguess, urguess;

dropdownItems.forEach(item => {
    item.addEventListener('click', function (event) {
        difficulte = event.target.textContent;
        document.querySelector("p").innerHTML = `Press Start game`
        
        document.querySelector(".start").classList.remove("hidden");

        
        if (difficulte == "Easy (1-10)") {
            nb = Math.floor(Math.random() * 10) + 1;
            nbguess = 5;
        } else if (difficulte == "Medium (1-20)") {
            nb = Math.floor(Math.random() * 20) + 1;
            nbguess = 3;
        } else if (difficulte == "Hard (1-100)") {
            nb = Math.floor(Math.random() * 100) + 1;
            nbguess = 1;
        } else {
            alert("Please select a valid difficulty.");
            return;
        }
    });
});

document.querySelector(".start").addEventListener('click', function() {
    document.querySelector(".start").classList.add("hidden"); 
    document.querySelector(".submit").classList.remove("hidden");
    document.querySelector(".form-floating").classList.remove("hidden"); 
    document.querySelector(".dropdown").classList.add("hidden"); 
    document.querySelector("p").innerHTML = "Game started";
    
    // Event listener when the user clicks the "submit guess" button
    document.querySelector(".submit").addEventListener('click', function () {
        urguess = parseInt(document.querySelector(".guess").value, 10);

        // Check if the input is a valid number
        if (Number.isInteger(urguess)) {
            verification(nb, urguess, nbguess);
            nbguess--; 
            if (nbguess === 0) {
                document.querySelector("p").innerHTML = "Game over! You've run out of guesses.";
                resetgame();
            }
        } else {
            alert("Please enter a valid number!");
        }
    });
});

function verification(nb, urguess, nbguess) {
    if (nb == urguess) {
        document.querySelector("p").innerHTML = "Your guess is correct!";
        document.querySelector(".start").classList.remove("hidden");
        resetgame();
    } else {
        document.querySelector("p").innerHTML = `Wrong guess! You have ${nbguess - 1} guesses left.`;
    }
}

function resetgame() {
    setTimeout(function() {
        location.reload(); 
    }, 300);
}
