



function loadUser() {
  var template = $("#template").html();
  Mustache.parse(template); // optional, speeds up future uses
  var rendered = Mustache.render(template,
    {
        "main": {
          "heading": " Your Shipper Signup Request is Being Processed",
          "userName": "PT. Indotech",
          "subHeading": "Your Shipper Signup request has been approved. You can now get freight quotes and book your freight conveniently.",
          "subHeading2": "Go to https://shipper.kretahub.com/ and login using your email address and password, or click the button below.",
          "followUs": "In the mean time, you can follow us on:",
          "companyName": "KretaHub"
      }});
  $("#target").html(rendered);
}
