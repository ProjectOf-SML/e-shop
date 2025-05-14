const myIntercativeBox1 = document.querySelector("#interactive-box1")
const myIntercativeBox2 = document.querySelector("#interactive-box2")
const myIntercativeBox3 = document.querySelector("#interactive-box3")

const myCommonClass = document.getElementsByClassName("common-class");
const myCommonClassLength = myCommonClass.length;

const myInteractiveBox1PairPrice = document.querySelector("#interactive-box1-pair-price")
const myInteractiveBox2PairPrice = document.querySelector("#interactive-box2-pair-price")
const myInteractiveBox3PairPrice = document.querySelector("#interactive-box3-pair-price")

const myInteractiveBox1SizeColour = document.querySelector("#interactive-box1-size-colour")
const myInteractiveBox2SizeColour = document.querySelector("#interactive-box2-size-colour")
const myInteractiveBox3SizeColour = document.querySelector("#interactive-box3-size-colour")

const myInteractiveBox1RadioButton = document.querySelector("#interactive-box1-radio-button")
const myInteractiveBox2RadioButton = document.querySelector("#interactive-box2-radio-button")
const myInteractiveBox3RadioButton = document.querySelector("#interactive-box3-radio-button")

const myInteractiveBox1Price = document.querySelector("#interactive-box1-price")
const myInteractiveBox2Price = document.querySelector("#interactive-box2-price")
const myInteractiveBox3Price = document.querySelector("#interactive-box3-price")

const myTotalPrice = document.querySelector("#total-price")

myIntercativeBox1.addEventListener("click", function () {
    ExpandTheClickedInteractiveBoxAndShrinkTheRemainingInteractiveBoxes(1);
})

myIntercativeBox2.addEventListener("click", function () {
    ExpandTheClickedInteractiveBoxAndShrinkTheRemainingInteractiveBoxes(2);
})

myIntercativeBox3.addEventListener("click", function () {
    ExpandTheClickedInteractiveBoxAndShrinkTheRemainingInteractiveBoxes(3);
})

function ExpandTheClickedInteractiveBoxAndShrinkTheRemainingInteractiveBoxes(clickedBoxNumber) {
    let i;
    for (i = 1; i <= myCommonClassLength; i++) {
        if (i == clickedBoxNumber) {
            myCommonClass[i-1].style.height = "50%";
            myCommonClass[i-1].style.borderColor = "rgb(10, 90, 65)";
            myCommonClass[i-1].style.backgroundColor = "rgb(10, 90, 65, 0.08)";
            eval(`myInteractiveBox${i}`.concat("", "PairPrice")).style.height = "35%";
            eval(`myInteractiveBox${i}`.concat("", "SizeColour")).style.display = "flex";
            eval(`myInteractiveBox${i}`.concat("", "RadioButton")).checked = true;
            myTotalPrice.textContent = eval(`myInteractiveBox${i}`.concat("", "Price")).textContent;
        }
        else {
            myCommonClass[i - 1].style.height = "20%";
            myCommonClass[i - 1].style.borderColor = "gray";
            myCommonClass[i - 1].style.backgroundColor = "white";
            eval(`myInteractiveBox${i}`.concat("", "PairPrice")).style.height = "90%";
            eval(`myInteractiveBox${i}`.concat("", "SizeColour")).style.display = "none";
            eval(`myInteractiveBox${i}`.concat("", "RadioButton")).checked = false;
        }
    }
}