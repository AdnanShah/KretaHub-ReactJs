


function loadUser() {
    var template = $("#template").html();
    Mustache.parse(template); // optional, speeds up future uses
    var rendered = Mustache.render(template,
      {
          "main": {         
            "subHeading1": "Thank you for paying down payment for order #0001.",       
            "subHeading2": "We will send you complete details of your order confirmation shortly."
          }});
    $("#target").html(rendered);
  }
  