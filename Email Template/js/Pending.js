(function() {
  var mydata = JSON.parse(data);
  document.getElementById("heading").innerHTML = mydata[1].heading;
  document.getElementById("subHeading").innerHTML = mydata[1].subHeading;
  document.getElementById("subHeading2").innerHTML = mydata[1].subHeading2;
  document.getElementById("userName").innerHTML = mydata[1].userName;
  document.getElementById("userEmail").innerHTML = mydata[1].userEmail;
  document.getElementById("conformNote").innerHTML = mydata[1].conformNote;
  document.getElementById("followUs").innerHTML = mydata[1].followUs;
})();
