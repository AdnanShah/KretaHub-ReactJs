



function loadUser() {
  var template = $("#template").html();
  Mustache.parse(template); // optional, speeds up future uses
  var rendered = Mustache.render(template,
    {
        "main": {
          "heading": " Your Shipper Signup Request is Being Processed",
          "userName": "PT. Indotech",
          "subHeading": "Thank you for signing up as a shipper on KretaHub.",
          "subHeading2": "We will send you a follow-up email when your request has been approved.",
          "followUs": "In the mean time, you can follow us on:",
          "companyName": "KretaHub"
      }});
  $("#target").html(rendered);
}
