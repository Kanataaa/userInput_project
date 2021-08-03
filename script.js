let inputOne = document.querySelector("#username");
let inputTwo = document.querySelector("#password");

let submitButton = document.querySelector("#submit-button");


submitButton.onclick = function(event) {
    event.preventDefault();

    let success = document.querySelector("#success");
    let failure = document.querySelector("#error");

    success.style.display = "none";
    failure.style.display = "none";


        if (inputOne.value == "Baby Yoda" && inputTwo.value == "Squirtle") { 
            success.style.display = "block";
            document.body.style.backgroundColor = "lightblue";
            inputOne.value = "";
            inputTwo.value = "";
        } else {
            failure.style.display = "block";
            document.body.style.backgroundColor = "rgb(50, 50, 50)";
            inputOne.value = "";
            inputTwo.value = "";
        }

}


