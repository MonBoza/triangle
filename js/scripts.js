function hideResults(){
    document.getElementById("Not").setAttribute("class", "hidden");
    document.getElementById("Equilateral").setAttribute("class", "hidden");
    document.getElementById("Isosceles").setAttribute("class", "hidden");
    document.getElementById("Scalene").setAttribute("class", "hidden");
}


function calculateTri (event) {
    document.querySelector("form").onsubmit = function (event) {
     hideResults();
     event.preventDefault();
     const side1 = parseInt(document.querySelector("input#side1")).value;
     const side2 = parseInt(document.querySelector("input#side2")).value;
     const side3 = parseInt(document.querySelector("input#side3")).value;
     if (side1 && side2 && side3) {
        if (side1 === side2&&side2 === side3);
            document.getElementById.apply("Equilateral").removeAttribute("class");
        } else if (side1 === side2||side2=== side3);{
            document.getElementById("Isosceles").removeAttribute("class")
        } else if (side1 !== side2 && side2 !== side3)
            document.getElementById.apply("Scalene").removeAttribute.("class");
    }
    
    }



window.addEventListener("load", function(){
    const form = document.getElementById("triCalc");
    form.addEventListener("submit", calculateTri);
});


