

function fun1(){
    document.getElementById("videos1").innerHTML = "";
    document.getElementById("videos2").innerHTML = "";
    document.getElementById("videos3").innerHTML = "";
    document.getElementById("videos4").innerHTML = "";
    var API_KEY="AIzaSyCc1vWocCyY921yDvAQBiTwhDx5uKTskFU";
    var video="";
    var search_name = document.getElementById("search").value;
    const form = document.getElementById('myForm');
    form.addEventListener("submit", function(event){
        event.preventDefault(); // prevents form from submitting
      })
    
    videoSearch(API_KEY, search_name, 15)
        
    
}

/*
function videoSearch(key, search_name, maxResults){
    var Url="https://www.googleapis.com/youtube/v3/search?key=";
    var a="&type=video&part=snippet&maxResults=";
    var b="&q=";
    var total_url=Url.concat(key, a, maxResults, b, search_name);
    

    fetch(total_url)
    .then(data=>{return data.json()})
    //.then(res=>{console.log(res)})
    
    .then(res=>{res.items.forEach(item => {
        video=`
        <iframe width="300" height="200" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
        `
        
        document.getElementById("videos").innerHTML += video;
    })})
   
    
}
*/


function videoSearch(key, search_name, maxResults){
    var Url="https://www.googleapis.com/youtube/v3/search?key=";
    var a="&type=video&part=snippet&maxResults=";
    var b="&q=";
    var total_url=Url.concat(key, a, maxResults, b, search_name);
    

    
    
    fetch(total_url)
    .then(data=>{return data.json()})
    //.then(res=>{console.log(res)})
    .then(res=>{
        var count=0;
        res.items.forEach(item => {
        if (count == 0||count == 1||count == 2||count == 3){
        video=`
        <iframe width="300" height="200" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
        `
        
        document.getElementById("videos1").innerHTML += video;
        count +=1;
        }
        
        if (count == 4||count == 5||count == 6||count == 7){
            video=`
            <iframe width="300" height="200" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
            `
            
            document.getElementById("videos2").innerHTML += video;
            count +=1;
        }
        if (count == 8||count == 9||count == 10||count == 11){
            video=`
            <iframe width="300" height="200" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
            `
            
            document.getElementById("videos3").innerHTML += video;
            count +=1;
        }
        if (count == 12||count == 13||count == 14){
            video=`
            <iframe width="300" height="200" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
            `
            
            document.getElementById("videos4").innerHTML += video;
            count +=1;
        }
        
    })})
    


}

function f1(){
    var x1=document.getElementById("videos1");
    var x2=document.getElementById("videos2");
    var x3=document.getElementById("videos3");
    var x4=document.getElementById("videos4");
    x1.style.display = "block";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
}

function f2(){
    var x1=document.getElementById("videos1");
    var x2=document.getElementById("videos2");
    var x3=document.getElementById("videos3");
    var x4=document.getElementById("videos4");
    x1.style.display = "none";
    if (x2.style.display === "none") {
        x2.style.display = "block";
      }
    x3.style.display = "none";
    x4.style.display = "none";
}

function f3(){
    var x1=document.getElementById("videos1");
    var x2=document.getElementById("videos2");
    var x3=document.getElementById("videos3");
    var x4=document.getElementById("videos4");
    x1.style.display = "none";
    if (x3.style.display === "none") {
        x3.style.display = "block";
      }
    x2.style.display = "none";
    x4.style.display = "none";
}

function f4(){
    var x1=document.getElementById("videos1");
    var x2=document.getElementById("videos2");
    var x3=document.getElementById("videos3");
    var x4=document.getElementById("videos4");
    x1.style.display = "none";
    if (x4.style.display === "none") {
        x4.style.display = "block";
      }
    x3.style.display = "none";
    x2.style.display = "none";
}