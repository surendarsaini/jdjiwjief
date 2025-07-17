document.getElementById("form").addEventListener("submit",function(e)

  {
    e.preventDefault();

    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    let arr=["surendar123@gmail.com","jay12@gmail.com"];

    if(arr.includes(email))
    {
        window.location.href="index.html";
    }
    else{
        alert("invalid details");
    }
  }
    
)