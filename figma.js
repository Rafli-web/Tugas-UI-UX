document
.getElementById("loginform")
.addEventListener("submit",function(event){
  event.preventDefault();

  var username=document.getElementById("username").value;

  var password=document.getElementById("password").value;

  //contoh sederhana:username dan password yanng benar
  
  var correctPassword="flii";
  //periksa akun
  if(username&&password===correctPassword){
    window.location.href="figma.html";
    username.addpendChild(newItem);
    input.value='correctPassword'
  }else{
    alert("username atau password salah");
  }
})
  