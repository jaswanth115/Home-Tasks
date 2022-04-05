function tagchange(){
    var b=" News";
    var x=document.getElementById("select").value;
    console.log(b);
    document.getElementById("tag").innerHTML = x+b;  
}
function date(){
    const d = new Date();
    document.getElementById("date1").innerHTML = d;
    document.getElementById("date2").innerHTML = d;
    document.getElementById("date3").innerHTML = d;
}
function paragraph(){
    const d = "Delhi is a crowded city. There are very few rich people who travel by their own vehicles.";
    document.getElementById("para1").innerHTML = d;
    document.getElementById("para2").innerHTML = d;
    document.getElementById("para3").innerHTML = d;
}