var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var handleDateChange = date => {
  let newdate = new Date(date);
  newdate.setDate(newdate.getDate());
  let dd = newdate.getDate();
  let mm = month[newdate.getMonth()];
  let y = newdate.getFullYear();
  let someFormattedDate = mm + " " + dd + "  " + y;
  return someFormattedDate;
};

export const searchData = (start, end) => {
  let startDate = handleDateChange(start);
  let endDate = handleDateChange(end);
  console.log("startDate", startDate);
  console.log("endDate", endDate);
  return data.filter((item, i) => {
    if (item.field1 == startDate && item.field3 == endDate) {
      return item;
    }
  });
  let i = data.findIndex(item => item.field1 == startDate);
  console.log("i", i);
};

export const data = [
  {
    field1: "March 20  2018",
    field2: "",
    field3: "March 21  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "06:00 WIB 00:00 WIB",
    field2: "",
    field3: "00:00 WIB",
    field6: "40RF/40GP: 5 40RF/40GP: 5",
    field4: "",
    field5: "107",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 20  2018",
    field2: "",
    field3: "March 21  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "09:45 WIB 03:45 WIB",
    field2: "",
    field3: "108 40RF/40GP: 5",
    field4: "",
    field6: "40RF/40GP: 5",
    field5: "108",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 20  2018",
    field2: "",
    field3: "March 21  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 8",
    field7: "IDR 3,100,000",
    field8: "",
    field9: ""
  },
  {
    field1: "13:00 WIB",
    field2: "",
    field3: "07:00 WIB",
    field4: "",
    field6: "40RF/40GP: 4",
    field5: "201",
    field7: "",
    field8: "",
    field9: "IDR 5,150,000"
  },
  {
    field1: "March 23  2018",
    field2: "",
    field3: "March 24  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "06:00 WIB",
    field2: "",
    field3: " 00:00 WIB",
    field6: "40RF/40GP: 5",
    field4: "",
    field5: "107",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 23  2018",
    field2: "",
    field3: "March 24  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "09:45 WIB",
    field2: "",
    field3: "03:45 WIB",
    field5: "108",
    field6: "40RF/40GP: 5",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 23  2018",
    field2: "",
    field3: "March 24  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 8",
    field7: "IDR 3,100,000",
    field8: "",
    field9: ""
  },
  {
    field1: "13:00 WIB",
    field2: "",
    field3: " 07:00 WIB",
    field4: "",
    field6: "40RF/40GP: 4",
    field5: "210",
    field7: "",
    field8: "",
    field9: "IDR 5,150,000"
  },
  {
    field1: "March 23  2018",
    field2: "",
    field3: "March 24  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "06:00 WIB 00:00 WIB",
    field2: "",
    field3: "00:00 WIB",
    field6: "40RF/40GP: 5 40RF/40GP: 5",
    field4: "",
    field5: "107",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 23  2018",
    field2: "",
    field3: "March 24  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "09:45 WIB 03:45 WIB",
    field2: "",
    field3: "108 40RF/40GP: 5",
    field4: "",
    field6: "40RF/40GP: 5",
    field5: "108",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 23  2018",
    field2: "",
    field3: "March 24  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 8",
    field7: "IDR 3,100,000",
    field8: "",
    field9: ""
  },
  {
    field1: "13:00 WIB",
    field2: "",
    field3: "07:00 WIB",
    field4: "",
    field6: "40RF/40GP: 4",
    field5: "201",
    field7: "",
    field8: "",
    field9: "IDR 5,150,000"
  },
  {
    field1: "March 25  2018",
    field2: "",
    field3: "March 26  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "06:00 WIB",
    field2: "",
    field3: " 00:00 WIB",
    field6: "40RF/40GP: 5",
    field4: "",
    field5: "107",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 25  2018",
    field2: "",
    field3: "March 26  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "09:45 WIB",
    field2: "",
    field3: "03:45 WIB",
    field5: "108",
    field6: "40RF/40GP: 5",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 25  2018",
    field2: "",
    field3: "March 26  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 8",
    field7: "IDR 3,100,000",
    field8: "",
    field9: ""
  },
  {
    field1: "13:00 WIB",
    field2: "",
    field3: " 07:00 WIB",
    field4: "",
    field6: "40RF/40GP: 4",
    field5: "210",
    field7: "",
    field8: "",
    field9: "IDR 5,150,000"
  },
  {
    field1: "March 25  2018",
    field2: "",
    field3: "March 26  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "06:00 WIB 00:00 WIB",
    field2: "",
    field3: "00:00 WIB",
    field6: "40RF/40GP: 5 40RF/40GP: 5",
    field4: "",
    field5: "107",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 25  2018",
    field2: "",
    field3: "March 26  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "09:45 WIB 03:45 WIB",
    field2: "",
    field3: "108 40RF/40GP: 5",
    field4: "",
    field6: "40RF/40GP: 5",
    field5: "108",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 25  2018",
    field2: "",
    field3: "March 26  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 8",
    field7: "IDR 3,100,000",
    field8: "",
    field9: ""
  },
  {
    field1: "13:00 WIB",
    field2: "",
    field3: "07:00 WIB",
    field4: "",
    field6: "40RF/40GP: 4",
    field5: "201",
    field7: "",
    field8: "",
    field9: "IDR 5,150,000"
  },
  {
    field1: "March 26  2018",
    field2: "",
    field3: "March 27  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "06:00 WIB",
    field2: "",
    field3: " 00:00 WIB",
    field6: "40RF/40GP: 5",
    field4: "",
    field5: "107",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 26  2018",
    field2: "",
    field3: "March 27  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "09:45 WIB",
    field2: "",
    field3: "03:45 WIB",
    field5: "108",
    field6: "40RF/40GP: 5",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 26  2018",
    field2: "",
    field3: "March 27  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 8",
    field7: "IDR 3,100,000",
    field8: "",
    field9: ""
  },
  {
    field1: "13:00 WIB",
    field2: "",
    field3: " 07:00 WIB",
    field4: "",
    field6: "40RF/40GP: 4",
    field5: "210",
    field7: "",
    field8: "",
    field9: "IDR 5,150,000"
  },
  {
    field1: "March 26  2018",
    field2: "",
    field3: "March 27  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "06:00 WIB 00:00 WIB",
    field2: "",
    field3: "00:00 WIB",
    field6: "40RF/40GP: 5 40RF/40GP: 5",
    field4: "",
    field5: "107",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 26  2018",
    field2: "",
    field3: "March 27  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "09:45 WIB 03:45 WIB",
    field2: "",
    field3: "108 40RF/40GP: 5",
    field4: "",
    field6: "40RF/40GP: 5",
    field5: "108",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 26  2018",
    field2: "",
    field3: "March 27  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 8",
    field7: "IDR 3,100,000",
    field8: "",
    field9: ""
  },
  {
    field1: "13:00 WIB",
    field2: "",
    field3: "07:00 WIB",
    field4: "",
    field6: "40RF/40GP: 4",
    field5: "201",
    field7: "",
    field8: "",
    field9: "IDR 5,150,000"
  },
  {
    field1: "March 28  2018",
    field2: "",
    field3: "March 29  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "06:00 WIB",
    field2: "",
    field3: " 00:00 WIB",
    field6: "40RF/40GP: 5",
    field4: "",
    field5: "107",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 28  2018",
    field2: "",
    field3: "March 29  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "09:45 WIB",
    field2: "",
    field3: "03:45 WIB",
    field5: "108",
    field6: "40RF/40GP: 5",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 28  2018",
    field2: "",
    field3: "March 29  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 8",
    field7: "IDR 3,100,000",
    field8: "",
    field9: ""
  },
  {
    field1: "13:00 WIB",
    field2: "",
    field3: " 07:00 WIB",
    field4: "",
    field6: "40RF/40GP: 4",
    field5: "210",
    field7: "",
    field8: "",
    field9: "IDR 5,150,000"
  },
  {
    field1: "March 28  2018",
    field2: "",
    field3: "March 29  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "06:00 WIB 00:00 WIB",
    field2: "",
    field3: "00:00 WIB",
    field6: "40RF/40GP: 5 40RF/40GP: 5",
    field4: "",
    field5: "107",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 28  2018",
    field2: "",
    field3: "March 29  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "09:45 WIB 03:45 WIB",
    field2: "",
    field3: "108 40RF/40GP: 5",
    field4: "",
    field6: "40RF/40GP: 5",
    field5: "108",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 28  2018",
    field2: "",
    field3: "March 29  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 8",
    field7: "IDR 3,100,000",
    field8: "",
    field9: ""
  },
  {
    field1: "13:00 WIB",
    field2: "",
    field3: "07:00 WIB",
    field4: "",
    field6: "40RF/40GP: 4",
    field5: "201",
    field7: "",
    field8: "",
    field9: "IDR 5,150,000"
  },
  {
    field1: "March 28  2018",
    field2: "",
    field3: "March 29  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "06:00 WIB",
    field2: "",
    field3: " 00:00 WIB",
    field6: "40RF/40GP: 5",
    field4: "",
    field5: "107",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 30  2018",
    field2: "",
    field3: "April 1  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 10",
    field7: "IDR 2,200,000",
    field8: "IDR 3,740,000",
    field9: "IDR 4,840,000"
  },
  {
    field1: "09:45 WIB",
    field2: "",
    field3: "03:45 WIB",
    field5: "108",
    field6: "40RF/40GP: 5",
    field7: "IDR 4,200,000",
    field8: "IDR 6,150,000",
    field9: "IDR 7,350,000"
  },
  {
    field1: "March 30  2018",
    field2: "",
    field3: "April 1  2018",
    field4: "",
    field5: "KA Maju Cepat",
    field6: "20RF/20TK/20GP: 8",
    field7: "IDR 3,100,000",
    field8: "",
    field9: ""
  },
  {
    field1: "13:00 WIB",
    field2: "",
    field3: " 07:00 WIB",
    field4: "",
    field6: "40RF/40GP: 4",
    field5: "210",
    field7: "",
    field8: "",
    field9: "IDR 5,150,000"
  }
];
