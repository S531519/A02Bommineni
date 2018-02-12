function calculateArea() {
    var Length = document.getElementById("length").value;
    var Breadth = document.getElementById("breadth").value;
    if (isNaN(length)) { alert("please enter the number");}
    if (isNaN(breadth)) { alert("please enter the number");}
    document.getElementById("area").value = Area;
    var area = Length * Breadth;
    
}
