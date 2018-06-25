



function loadUser() {
    var template = $("#template").html();
    Mustache.parse(template); // optional, speeds up future uses
    var rendered = Mustache.render(template,
      {
          "main": {         
            "subHeading1": "Thank you for full payment for order #0001.",       
            "subHeading2": "We hope you are satisfied with our service."
          }});
    $("#target").html(rendered);
  }
  