let data = JSON.parse(
    `{
  "employees": [
    {
      "EmpId": "9500096",
      "Name": "Aklish Mourya",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "GRINDING & POLISHING",
      "Contacts" : ["9500012","9001892","9500082","1000169"]
    },
    {
      "EmpId": "9500012",
      "Name": "Bhupesh Kumar",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "QUALITY",
      "quarantineDays" : "3"
    },
    {
      "EmpId": "1000228",
      "Name": "Sahab Singh",
      "Location": "Bhiwadi",
      "Designation": "Trainee",
      "Department": "MACHINE SHOP",
      "Contacts" : ["9500270","9500201","9500135","9500127"]
    },
    {
      "EmpId": "9001892",
      "Name": "Amit Kumar",
      "Location": "Bhiwadi",
      "Designation": "Executive",
      "Department": "STORES",
      "quarantineDays" : "4"
    },
    {
      "EmpId": "9500082",
      "Name": "Md. Harun",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "CASTING",
      "quarantineDays" : "5"
    },
    {
      "EmpId": "1000169",
      "Name": "Sanyasi Kumar",
      "Location": "Bhiwadi",
      "Designation": "Trainee",
      "Department": "CASTING",
      "quarantineDays" : "6"
    },
    {
      "EmpId": "9500270",
      "Name": "Sakil Khan",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "CASTING",
      "quarantineDays" : "3"
    },
    {
      "EmpId": "9500201",
      "Name": "Harender Patel",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "CASTING",
      "quarantineDays" : "4"
    },
    {
      "EmpId": "9500135",
      "Name": "Sohan singh",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "QUALITY",
      "quarantineDays" : "5"
    },
    {
      "EmpId": "9500127",
      "Name": "Ram Niwas Chouhan",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "CASTING",
      "quarantineDays" : "6"
    },
    {
      "EmpId": "9001873",
      "Name": "Ankur Tyagi",
      "Location": "Bhiwadi",
      "Designation": "Executive",
      "Department": "ELECTROPLATING"
    },
    {
      "EmpId": "9001419",
      "Name": "Mustafa Ansari",
      "Location": "Bhiwadi",
      "Designation": "Executive",
      "Department": "MAINTENANCE"
    },
    {
      "EmpId": "9500282",
      "Name": "Om Prakash",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "CASTING"
    },
    {
      "EmpId": "1000087",
      "Name": "Devender Kumar",
      "Location": "Bhiwadi",
      "Designation": "Trainee",
      "Department": "MACHINE SHOP"
    },
    {
      "EmpId": "9002141",
      "Name": "Dinesh Kumar",
      "Location": "Bhiwadi",
      "Designation": "Executive",
      "Department": "Customer Interface"
    },
    {
      "EmpId": "1000114",
      "Name": "Shekhar",
      "Location": "Bhiwadi",
      "Designation": "Trainee",
      "Department": "QUALITY"
    },
    {
      "EmpId": "9500141",
      "Name": "Ram Surat Prashad",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "CASTING"
    },
    {
      "EmpId": "1000220",
      "Name": "Dabloo Kumar",
      "Location": "Bhiwadi",
      "Designation": "Trainee",
      "Department": "MACHINE SHOP"
    },
    {
      "EmpId": "9500271",
      "Name": "Avadhesh Kumar",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "CASTING"
    },
    {
      "EmpId": "9500073",
      "Name": "Deendayal",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "ASSEMBLY"
    },
    {
      "EmpId": "1000109",
      "Name": "Pankaj Kumar",
      "Location": "Bhiwadi",
      "Designation": "Trainee",
      "Department": "CASTING"
    },
    {
      "EmpId": "9001658",
      "Name": "Debasish Mondal",
      "Location": "Bhiwadi",
      "Designation": "Executive",
      "Department": "Customer Interface"
    },
    {
      "EmpId": "9500181",
      "Name": "Jitender Verma",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "CASTING"
    },
    {
      "EmpId": "9002098",
      "Name": "Bhupender",
      "Location": "Bhiwadi",
      "Designation": "Dy.Manager",
      "Department": "HR"
    },
    {
      "EmpId": "9500143",
      "Name": "Biresh Kumar",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "MAINTENANCE"
    },
    {
      "EmpId": "9500010",
      "Name": "Babudhan Tiwari",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "TOOL ROOMS"
    },
    {
      "EmpId": "9500231",
      "Name": "Rakesh Kumar",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "MACHINE SHOP"
    },
    {
      "EmpId": "9500110",
      "Name": "Jawahar Lal das",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "GRINDING & POLISHING"
    },
    {
      "EmpId": "9500167",
      "Name": "Satyavir Prajapat",
      "Location": "Bhiwadi",
      "Designation": "Executive",
      "Department": "ASSEMBLY"
    },
    {
      "EmpId": "9002058",
      "Name": "Avanish Kumar Singh",
      "Location": "Bhiwadi",
      "Designation": "Manager",
      "Department": "HR"
    },
    {
      "EmpId": "9500032",
      "Name": "Satyender Kumar",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "MACHINE SHOP"
    },
    {
      "EmpId": "9000938",
      "Name": "Ramanand Sharma",
      "Location": "Bhiwadi",
      "Designation": "Asst.Manager",
      "Department": "ASSEMBLY"
    },
    {
      "EmpId": "10045",
      "Name": "DROR-Tester"
    },
    {
      "EmpId": "9001045",
      "Name": "Amit Kumar",
      "Location": "Bhiwadi",
      "Designation": "Manager",
      "Department": "DESIGN"
    },
    {
      "EmpId": "9500236",
      "Name": "Harish Swami",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "PACKING"
    },
    {
      "EmpId": "9500013",
      "Name": "Binit Kumar",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "MAINTENANCE"
    },
    {
      "EmpId": "9002297",
      "Name": "Varun Goenka",
      "Location": "Bhiwadi",
      "Designation": "Dy.Manager",
      "Department": "METHODS & PROCESS"
    },
    {
      "EmpId": "9500091",
      "Name": "Parvez",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "ASSEMBLY"
    },
    {
      "EmpId": "9500075",
      "Name": "Radhay Shyam",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "ASSEMBLY"
    },
    {
      "EmpId": "9500044",
      "Name": "Manoj Kumar",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "PACKING"
    },
    {
      "EmpId": "1000125",
      "Name": "Shubham",
      "Location": "Bhiwadi",
      "Designation": "Trainee",
      "Department": "MACHINE SHOP"
    },
    {
      "EmpId": "9500175",
      "Name": "Surya Bhan Pandey",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "ELECTROPLATING"
    },
    {
      "EmpId": "1000124",
      "Name": "Amaresh Chaturabedi",
      "Location": "Bhiwadi",
      "Designation": "Trainee",
      "Department": "TOOL ROOMS"
    },
    {
      "EmpId": "9500019",
      "Name": "Ananta Ku. Pradhan",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "MACHINE SHOP"
    },
    {
      "EmpId": "1000223",
      "Name": "Vinod Kumar",
      "Location": "Bhiwadi",
      "Designation": "Trainee",
      "Department": "CASTING"
    },
    {
      "EmpId": "1000131",
      "Name": "Sonu Kumar",
      "Location": "Bhiwadi",
      "Designation": "Trainee",
      "Department": "MACHINE SHOP"
    },
    {
      "EmpId": "1000227",
      "Name": "Sonu",
      "Location": "Bhiwadi",
      "Designation": "Trainee",
      "Department": "CASTING"
    },
    {
      "EmpId": "9500254",
      "Name": "Lallan Kumar",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "CASTING"
    },
    {
      "EmpId": "9500136",
      "Name": "Santosh Kumar",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "CASTING"
    },
    {
      "EmpId": "9500217",
      "Name": "Ramzan Mohammad",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "CASTING"
    },
    {
      "EmpId": "9500300",
      "Name": "Dhanraj",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "MACHINE SHOP"
    },
    {
      "EmpId": "9500072",
      "Name": "Sanjay Yadav",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "ELECTROPLATING"
    },
    {
      "EmpId": "9500158",
      "Name": "Anil kumar Yadav",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "MACHINE SHOP"
    },
    {
      "EmpId": "1000120",
      "Name": "Mahesh Kumar",
      "Location": "Bhiwadi",
      "Designation": "Trainee",
      "Department": "ELECTROPLATING"
    },
    {
      "EmpId": "9500196",
      "Name": "Rajeev Kumar",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "CASTING"
    },
    {
      "EmpId": "9500203",
      "Name": "Subhas Chand",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "ELECTROPLATING"
    },
    {
      "EmpId": "1000167",
      "Name": "Lalbabu Singh",
      "Location": "Bhiwadi",
      "Designation": "Trainee",
      "Department": "MACHINE SHOP"
    },
    {
      "EmpId": "9500097",
      "Name": "Devi Prasad",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "GRINDING & POLISHING"
    },
    {
      "EmpId": "9500207",
      "Name": "Dayanand Prajapat",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "ASSEMBLY"
    },
    {
      "EmpId": "1000222",
      "Name": "Vikash Kumar Sharma",
      "Location": "Bhiwadi",
      "Designation": "Trainee",
      "Department": "ASSEMBLY"
    },
    {
      "EmpId": "9001657",
      "Name": "Vijay Kumar Sharma",
      "Location": "Bhiwadi",
      "Designation": "Dy.Manager",
      "Department": "Customer Interface"
    },
    {
      "EmpId": "9500250",
      "Name": "Heera Lal",
      "Location": "Bhiwadi",
      "Designation": "FL",
      "Department": "ASSEMBLY"
    }
  ]
}`)

module.exports = data.employees