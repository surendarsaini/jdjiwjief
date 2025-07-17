document.getElementById("form").addEventListener("submit",function(e)
{
    e.preventDefault();

     const name=document.getElementById("name").value;
     const email=document.getElementById("email").value;
     const tel=document.getElementById("tel").value;
     const date=document.getElementById("date").value;
     const time=document.getElementById("time").value;
     const select1=document.getElementById("select1").value;
     const select2=document.getElementById("select2").value;



     
     localStorage.setItem("userdata", JSON.stringify({name,email,tel}));

    
    document.getElementById("table").style.display="none";
    document.getElementById("backend").style.display="block";

    document.getElementById("p1").textContent= "NAME :"+ name;
    document.getElementById("p2").textContent= "EMAIL :"+ email;
    document.getElementById("p3").textContent= "PHONE NO. :"+tel;
    document.getElementById("p4").textContent=  "NAME :"+  date;
    document.getElementById("p5").textContent= "TIME :"+ time;
    document.getElementById("p6").textContent= "TOTAL GUEST :"+ select1;
    document.getElementById("p7").textContent= "CHILD :"+ select2;

}
)