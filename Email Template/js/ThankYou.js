(function() {
  var mydata = JSON.parse(data);
  document.getElementById("heading").innerHTML = mydata[0].heading;
  document.getElementById("subHeading").innerHTML = mydata[0].subHeading;
  document.getElementById("subHeading2").innerHTML = mydata[0].subHeading2;
  document.getElementById("userName").innerHTML = mydata[0].userName;
  document.getElementById("userEmail").innerHTML = mydata[0].userEmail;
  document.getElementById("conformNote").innerHTML = mydata[0].conformNote;
  document.getElementById("followUs").innerHTML = mydata[0].followUs;
})();
