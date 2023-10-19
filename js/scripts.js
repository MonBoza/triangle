function hideResults() {
    document.getElementById("not").setAttribute("class", "hidden");
    document.getElementById("Equilateral").setAttribute("class", "hidden");
    document.getElementById("Isosceles").setAttribute("class", "hidden");
    document.getElementById("Scalene").setAttribute("class", "hidden");
}


function calculateTri(event) {
    hideResults();
    event.preventDefault();
    const side1 = parseInt(document.querySelector("input#side1").value);
    const side2 = parseInt(document.querySelector("input#side2").value);
    const side3 = parseInt(document.querySelector("input#side3").value);
    if ((side1 + side2 <= side3) || (side1 + side3 <= side2) || (side3 + side2 <= side1)) {
        document.getElementById("not").removeAttribute("class");
    } else if (side1 === side2 && side2 === side3) {
        document.getElementById("Equilateral").removeAttribute("class");
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        document.getElementById("Isosceles").removeAttribute("class")
    } else if ((side1 != side2) && (side2 != side3)) {
        document.getElementById("Scalene").removeAttribute("class");
    } else {
        document.getElementById("not").removeAttribute("class");
    }

}


window.addEventListener("load", function () {
    const form = document.getElementById("triCalc");
    form.addEventListener("submit", calculateTri);
});