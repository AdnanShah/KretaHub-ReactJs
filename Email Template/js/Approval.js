(function() {
  var mydata = JSON.parse(data);
  document.getElementById("heading").innerHTML = mydata[2].heading;
  document.getElementById("subHeading").innerHTML = mydata[2].subHeading;
  document.getElementById("userName").innerHTML = mydata[2].userName;
  document.getElementById("userEmail").innerHTML = mydata[2].userEmail;
  document.getElementById("conformNote").innerHTML = mydata[2].conformNote;
  document.getElementById("followUs").innerHTML = mydata[2].followUs;
})();
