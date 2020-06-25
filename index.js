// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "200px";
dodger.style.bottom = "0px";

function moveDodgerLeft() {
    // console.log(dodger.style.left)
    let leftNumbers = dodger.style.left.replace("px", "");
    // console.log(leftNumbers)
    let left = parseInt(leftNumbers, 10);
    // console.log(left)

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace('px', '');
    let parsedright = parseInt(rightNumbers, 10);

    if (parsedright > 0) {
        dodger.style.left = `${parsedright + 1}px`
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});