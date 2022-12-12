// $(document).ready(function() {
// $(".my-4").hover(function(){
//     $(this).css(".thumbnail")
//   });
// });

function loadRepo(){
   const xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        results = JSON.parse(this.responseText);
        document.getElementById("repo1").innerHTML = results[0].name;
    }
  }
  xhttp.open("GET","https://api.github.com/users/AAlex74/repos", true);
  xhttp.send();
}