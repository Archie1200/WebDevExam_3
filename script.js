var content;
document.getElementById("p").addEventListener("click",function(){
    content=document.getElementById("text").value;
    if(document.getElementById("sec").style.visibility=="hidden"){
       document.getElementById("sec").style.visibility="visible";
    }
    else{
        document.getElementById("sec").style.visibility="hidden";
    }
})
document.getElementById("del").addEventListener("click",function(){
    document.getElementById("sec").style.display="none";
    document.getElementById("pink").style.display="none";
    document.getElementById("blue").style.display="none";
    document.getElementById("green").style.display="none";
    document.getElementById("black").style.display="none";
    //content=document.getElementById("text").value;
})
document.getElementById("select1").addEventListener("click",function(){
    document.getElementById("select1").style.border="2px solid grey";
    document.getElementById("sec").style.display="none";
    document.getElementById("pink").style.display="block";
    //document.getElementsByClassName("main").style.display="inline";
    document.getElementById("pink").value=content;
})
document.getElementById("select2").addEventListener("click",function(){
    document.getElementById("select2").style.border="2px solid grey";
    document.getElementById("sec").style.display="none";
    document.getElementById("blue").style.display="block";
    //document.getElementsByClassName("main").style.display="inline";
    document.getElementById("blue").value=content;
})
document.getElementById("select3").addEventListener("click",function(){
    document.getElementById("select3").style.border="2px solid grey";
    document.getElementById("sec").style.display="none";
    document.getElementById("green").style.display="block";
   // document.getElementsByClassName("main").style.display="inline";
   document.getElementById("green").value=content;
})
document.getElementById("select4").addEventListener("click",function(){
    document.getElementById("select4").style.border="2px solid grey";
    document.getElementById("sec").style.display="none";
    document.getElementById("black").style.display="block";
   // document.getElementsByClassName("main").value="inline";
   document.getElementById("blue").value=content;
   
})