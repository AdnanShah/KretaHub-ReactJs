function loadUser() {
  var template = $("#template").html();
  Mustache.parse(template); // optional, speeds up future uses
  var rendered = Mustache.render(template,
    {
        "main": {
          "mainHeading": "Your Order is Being Verified",
          "subHeading1":
            "Your order has been received and is now being verified. Your order details are shown Below for your reference :",
          "subHeading2": "Thank you for your order.",
          "mainEmail": "PT. Indotech",
          "shipper": "PT. Indotech",
          "line1": "Sungai Lagoa - Jakarta",
          "line4": "KA. Maju Cepat",
          "line5": "Kalimas - Surabaya",
          "line6": "18 hours",
          "line8": "107",
          "line9": "Pemilik / pengirim baru",
          "line10": "Station-to-Station",
          "price":'IDR 100,000',         
          "total":'IDR 8,700,000',   
          "closingTime": "02:00",
          "closingDate": "'Mar 20, 2018",
          "departureTime": "06:00",
          "departureDate": "'Mar 20, 2018",
          "arrivalTime": "00:00",
          "arrivalDate": "'Mar 21, 2018"
            
        },
        "row": [{
          "field1": "20RF",
          "field2": "IDR 2,200,000",
          "field6": "2200000",
          "field3": "2",
          "field4": "of 10",
          "field5": "'IDR 4,400,000"
        },
         {
          "field1": "20TK",
          "field2": "IDR 2,200,000",
          "field6": "2200000",
          "field3": "",
          "field4": "of 10",
          "field5": ""
        },
         {
          "field1": "20GP",
          "field2": "IDR 2,200,000",
          "field6": "2200000",
          "field3": "",
          "field4": "of 10",
          "field5": ""
        },
         {
          "field1": "40RF",
          "field2": "IDR 4,200,000",
          "field6": "4200000",
          "field3": "",
          "field4": "of 5",
          "field5": ""
        },
        {
          "field1": "40GP",
          "field2": "IDR 4,200,000",
          "field6": "4200000",
          "field3": "1",
          "field4": "of 5",
          "field5": "'IDR 4,200,000"
        }
    ]});
  $("#target").html(rendered);
}
