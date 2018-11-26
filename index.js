const url = "http://numbersapi.com/";

let justNumber = document.querySelector("#justNumber");
let displayNumberFactDiv = document.querySelector("#displayNumberFactDiv");
let displayNumberFact = document.querySelector("#displayNumberFact");

let mathFact = document.querySelector("#mathFact");
let displayMathFactDiv = document.querySelector("#displayMathFactDiv");
let displayMathFact = document.querySelector("#displayMathFact");

let yearFact = document.querySelector("#yearFact");
let displayYearFactDiv = document.querySelector("#displayYearFactDiv");
let displayYearFact = document.querySelector("#displayYearFact");

justNumber.addEventListener("input", fetchNumberFact);
mathFact.addEventListener("input", fetchMathFact);
yearFact.addEventListener("input", fetchYearFact);


function fetchNumberFact () {
    let number = justNumber.value;

    if (number !== "") {
        fetch(url + number)
        .then(response => response.text())
        .then(data => {
            displayNumberFactDiv.style.display = "block";
            displayNumberFact.innerText = data;
        }) 
        .catch(err => console.log(err)); 
    }
}


function fetchMathFact () {
    let mathNo = mathFact.value;

    if (mathNo !== "") {
        fetch(url + mathNo + "/math")
        .then(response => response.text())
        .then(data => {
            displayMathFactDiv.style.display = "block";
            displayMathFact.innerText = data;
        }) 
        .catch(err => console.log(err)); 
    }
}

function fetchYearFact() {
    let yearNo = yearFact.value;

    if (yearNo !== "") {
        fetch(url + yearNo + "/year")
        .then(response => response.text())
        .then(data => {
            displayYearFactDiv.style.display = "block";
            displayYearFact.innerText = data;
        }) 
        .catch(err => console.log(err)); 
    }
}
