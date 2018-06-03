
function loadUser() {
    var template = $("#template").html();
    Mustache.parse(template); // optional, speeds up future uses
    var rendered = Mustache.render(template,
      {
  
          "main": {         
         "mainHeading": "Booking #0001 Confirmed",
          "subHeading1": "We are happy to inform you that your freight has arrived at the destination, Kalimas Station, Surabaya.",
          "subHeading2": "Dear PT. Indotech",       
          "subHeading3": "You will receive another email shortly in order to complete your full payment.",       
           "shipper": "PT. Indotech",
           "carrier": "PT. Bumi Wijaya Indorail",
            "line1": "Sungai Lagoa - Jakarta",
            "line4": "KA. Maju Cepat",
            "line5": "Kalimas - Surabaya",
            "line6": "18 hours",
            "line8": "107",
            "line9": "Pemilik / pengirim baru",
            "line10": "Station-to-Station",
            "field1": "#0001",
            "field2": "IDR 8.700.000",
            "field3": "IDR 1.740.000",
            "field4": "BCA",
            "field5": "PT KretaHub Logistik Internasional",
            "field6": "000-123-4567",
            "field7": "Senayan",
            "companyName": "KretaHub",      
            "price":'IDR 100,000',         
            "total":'IDR 8,700,000',   
            "closingTime": "02:00",
            "closingDate": "Mar 20, 2018",
            "departureTime": "06:00",
            "departureDate": "Mar 20, 2018",
            "arrivalTime": "00:00",
            "arrivalDate": "Mar 21, 2018"
              
          },
          "row": [{
            "field1": "20RF",
            "field2": "IDR 2,200,000",
            "field6": "2200000",
            "field3": "2",
            "field4": "of 10",
            "field5": ""
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
            "field5": ""
          }
      ]});
    $("#target").html(rendered);
  }
  