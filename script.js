let dept ;
let regulation;
let semes;
let fin_grade=[];
let total_creadit=0;
let cerdit_arr=[]

document.getElementById('dep').addEventListener('change', depselect);
document.getElementById('reg').addEventListener('change', regselect);
document.getElementById('sem').addEventListener('change', semselect);
document.getElementById('submit').addEventListener('click', checkselect);
document.getElementById('calbtn').addEventListener('click',calculate)

            


let dep = ["ECE","EEE","CSE","IT","MECH","CIVIL"]
dep.forEach(val => {
    const opt = document.createElement('option')
    opt.textContent=val
    opt.value=val
    document.getElementById('dep').appendChild(opt)

 });


 let reg =[2008,2013,2017,2021]
reg.forEach(val =>{
    const opt = document.createElement('option')
    opt.textContent=val
    opt.value=val
    document.getElementById('reg').appendChild(opt)

});

let sem = [1,2,3,4,5,6,7,8,]

sem.forEach(val =>{
    const opt=document.createElement('option')
    opt.textContent=val
    opt.value=val
    document.getElementById('sem').appendChild(opt)

});


function depselect()
{
 let _dep = document.getElementById('dep').value
 dept = _dep;
}

function regselect()
{
    let _reg = document.getElementById('reg')
    regulation = _reg.value;
    
}

function semselect()
{
    let _sem =document.getElementById('sem')
    semes = _sem.value;
    

}
function _addtable(arr)
        {
                fin_grade=[];

                total_creadit=0
  
                let tablebody = document.getElementById('tbody')

                tbody.innerHTML=""

                let i=1,j=0,x=0

                arr.forEach(function(items){


                    let row = document.createElement('tr');
            

                    let s_no = document.createElement('td')
                    s_no.textContent=i

                    let  sub_code = document.createElement('td')
                    sub_code.textContent=items.code;

                    let sub_tit = document.createElement('td')
                    sub_tit.textContent=items.sub;

                    let credit_pnt = document.createElement('td')
                    credit_pnt.textContent=items.credit;
                    total_creadit += items.credit;
                    cerdit_arr[j]=items.credit;
                    j++

                    let grade = document.createElement('td')
                    let input_grade = document.createElement('select')
                    let grt = ["Select","O","A+","A","B+","B","U"]
                    let grt_val =[0,10,9,8,7,6,0]
                    for(let i=0;i<grt.length;i++)
                    {
                        let opt_val = document.createElement('option')
                        opt_val.textContent=grt[i]
                        opt_val.value=grt_val[i]
                        input_grade.appendChild(opt_val)
        
                    }
                    input_grade.style ='display:flex;'
                    input_grade.style ='justify-content:centre'
                    input_grade.style ='margin-top:0px'
                       
                
                    
                    input_grade.addEventListener('input', function () {
                        let selectedValue = parseInt(input_grade.value);
                        let subjectIndex = row.rowIndex - 1
                        fin_grade[subjectIndex] = selectedValue; 

                    // fin_grade.push(selectedValue);                
                    // You can use the selectedValue here for further manipulation or processing
                        


                    });



                    



                    row.appendChild(s_no)
                    row.appendChild(sub_code)
                    row.appendChild(sub_tit)
                    row.appendChild(credit_pnt)
                    row.appendChild(input_grade)

                

                    tablebody.appendChild(row)
                    
                    i++;
                    

                });
                
                
            
                
        }

function calculate()
{
    

    console.log(cerdit_arr)
    console.log(fin_grade)

    if(fin_grade == 0)
    {
        alert("Select the proper grade")
    }
    else
    {  
        let fin_cal=0
        let mul_val=0          // [1,2,3,4,5]
                               //[2,3,4,5,6]
        
    
    
        for(let i=0;i<cerdit_arr.length;i++)
        {
            
               mul_val = cerdit_arr[i]*fin_grade[i]
               fin_cal += mul_val
        }
        console.log(fin_cal)
        console.log(total_creadit)
        let gpa =fin_cal/total_creadit
        let display = document.getElementById('result')
        display.innerHTML=`Your final GPA is ${gpa.toFixed(3)}`
    
        display.style.display='block'
    
        display.style.margin='10px'
        display.style.backgroundColor='black'
        display.style.borderRadius='5px'
        display.style.color='#ffff'
        display.style.padding="10px"
        display.style.width="80%"
    
    
    
        // my_score=0;
    

    }

}



           

function checkselect()
{

    console.log("Sumbit executed")

    let fin = document.getElementById('result')
    fin.style.display='none'
    
    console.log(dept)
    if(dept!=null && regulation!=null && semes!=null)
    {
        let visible = document.getElementById('subjects')
        visible.style.display='block'
    }
    else
    {
        alert("please select the valid info")
    }
     
    

    if(regulation == 2017 && semes == 1)
    {
             
            // ECE Subjects reg 2017   (sem 1 to sem 8)

            let re17_sem1_sub = [{sub:"Communicative English",code:"HS8151",credit:4},{sub:"Engineering Mathematics 1" ,code:"MA8151",credit:4},{sub:"Engineering Physics",code:"PH8151",credit:3},{sub:"Engineering Chemistry",code:"CY8151",credit:3},
            {sub:"Problem Solving and Python Programming",code:"GE8151",credit:3},{sub:"Engineering Graphics",code:"GE8152",credit:4},
            {sub:"probelm Solving and python programming Laboratory",code:"GE8161",credit:2},{sub:"Pysics and chemistry laboratory",code:"BS8161",credit:2}];

            console.log("sem 1 ECE department regulation 2017")

            _addtable(re17_sem1_sub)

            


    }
    if(dept == 'ECE' && regulation == 2017 && semes == 2)
    {
        ECE_re17_sem2 =
        [
            {sub:"Technical English",code:"HS8251",credit:4},
            {sub:"Engineering Mathematics 2",code:"MA8251",credit:4},
            {sub:"Physics For Electronics",code:"PH8253",credit:3},
            {sub:"Basic electrical and instrumentation engineering",code:"BE8254",credit:3},
            {sub:"Circuit analysis",code:"EC8251",credit:4},
            {sub:"Electronic devices",code:"EC8252",credit:3},
            {sub:"Circuit and Devices Laboratory",code:"EC8261",credit:2},
            {sub:"Engineering practices laboratory",code:"GE8261",credit:2},

        ];

        _addtable(ECE_re17_sem2)
    }
    if(dept == 'ECE' && regulation == 2017 && semes == 3)
    {
        ECE_re17_sem3 =
        [
            {sub:"Linear Algebra and Partial Differential Equations",code:"MA8352",credit:4},
            {sub:"Fundamentals of Data Structures In C ",code:"EC8393",credit:3},
            {sub:"Electronic Circuits- I ",code:"EC8351",credit:3},
            {sub:"Signals and Systems",code:"EC8352",credit:4},
            {sub:"Circuit analysis",code:"EC8251",credit:4},
            {sub:"Digital Electronics",code:"EC8392",credit:3},
            {sub:"Control System Engineering",code:"EC8391",credit:3},
            {sub:"Fundamentals of Data Structures in C Laboratory",code:"EC8381",credit:2},
            {sub:"Analog and Digital Circuits Laboratory" , code:"EC8361",credit:2}
            ,{sub:"Interpersonal Skills/Listening &Speaking",code:"HS8381",credit:1}

        ];

        _addtable(ECE_re17_sem3)
    }
    if(dept == 'ECE' && regulation == 2017 && semes == 4)
    {
        ECE_re17_sem4 =
        [
            {sub:"Probability and Random Processes",code:"MA8451",credit:4},
            {sub:"Electronic Circuits II",code:"EC8452",credit:3},
            {sub:"Communication Theory",code:"EC8491",credit:3},
            {sub:"Electromagnetic Fields",code:"EC8451",credit:4},
            {sub:"Linear Integrated Circuits",code:"EC8453",credit:4},
            {sub:"Environmental Science and Engineering",code:"GE8291",credit:3},
            {sub:"Circuits Design and Simulation Laboratory",code:"EC8461",credit:3},
            {sub:"Linear Integrated Circuits Laboratory",code:"EC8462",credit:2}
            
        ];

        _addtable(ECE_re17_sem4)
    }
    if (dept == 'ECE' && regulation == 2017 && (semes == 5 || semes == 6 || semes == 7 || semes == 8)) {
        let subjectsArray =[]
    
        if (semes == 5) {
            subjectsArray = [
                { sub: "Digital Communication", code: "EC8501", credit: 3 },
                { sub: "Discrete-Time Signal Processing", code: "EC8553", credit: 4 },
                { sub: "Computer Architecture and Organization", code: "EC8552", credit: 3 },
                { sub: "Communication Networks", code: "EC8551", credit: 3 },
                { sub: "Professional Elective I", code: "PE", credit: 3 },
                { sub: "Open Elective I", code: "OE", credit: 3 },
                { sub: "Digital Signal Processing Laboratory", code: "EC8562", credit: 4 },
                { sub: "Communication Systems Laboratory", code: "EC8561", credit: 4 },
                { sub: "Communication Networks Laboratory", code: "EC8563", credit: 4 }
            ];
        } 
        else if (semes == 6) {
            subjectsArray = [
                    { sub: "Microprocessors and Microcontrollers", code: "EC8691", credit: 3 },
                    { sub: "VLSI Design", code: "EC8095", credit: 3 },
                    { sub: "Wireless Communication", code: "EC8652", credit: 3 },
                    { sub: "Principles of Management", code: "MG8591", credit: 3 },
                    { sub: "Transmission Lines and RF Systems", code: "EC8651", credit: 3 },
                    { sub: "Professional Elective -II", code: "PE", credit: 3 },
                    { sub: "Microprocessors and Microcontrollers Laboratory", code: "EC8681", credit: 2 },
                    { sub: "VLSI Design Laboratory", code: "EC8661", credit: 2 },
                    { sub: "Technical Seminar", code: "EC8611", credit: 1 },
                    { sub: "Professional Communication", code: "HS8581", credit: 1 }
                // Define subjects for the 6th semester here
            ];
        } else if (semes == 7) {
            subjectsArray = 
            [
                { sub: "Antennas and Microwave Engineering", code: "EC8701", credit: 3 },
                { sub: "Optical Communication", code: "EC8751", credit: 3 },
                { sub: "Embedded and Real Time Systems", code: "EC8791", credit: 3 },
                { sub: "Ad hoc and Wireless Sensor Networks", code: "EC8702", credit: 3 },
                { sub: "Professional Elective -III", code: "PE", credit: 3 },
                { sub: "Open Elective - II", code: "OE", credit: 3 },
                { sub: "Embedded Laboratory", code: "EC8711", credit: 2 },
                { sub: "Advanced Communication Laboratory", code: "EC8761", credit: 2 }
            ];
        } else if (semes == 8) {
            subjectsArray = 
            [
                { sub: "Professional Elective IV", code: "PE", credit: 3 },
                { sub: "Professional Elective V", code: "PE", credit: 3 },
                { sub: "Project Work", code: "EC8811", credit: 20 }
            ];
        }
    
        _addtable(subjectsArray);
    }
    if (dept == 'EEE' && regulation == 2017 && (semes >= 2 && semes <= 8)) {
        let subjectsArray = [];
    
        if (semes == 2) {
            subjectsArray = [
                { sub: "Technical English", code: "HS8251", credit: 4 },
                { sub: "Engineering Mathematics - II", code: "MA8251", credit: 4 },
                { sub: "Physics for Electronics Engineering", code: "PH8253", credit: 3 },
                { sub: "Basic Civil and Mechanical Engineering", code: "BE8252", credit: 4 },
                { sub: "Circuit Theory", code: "EE8251", credit: 3 },
                { sub: "Environmental Science and Engineering", code: "GE8291", credit: 3 },
                { sub: "Engineering Practices Laboratory", code: "GE8261", credit: 2 },
                { sub: "Electric Circuits Laboratory", code: "EE8261", credit: 2 }
            ];
        } else if (semes == 3) {
            subjectsArray = [
                { sub: "Transforms and Partial Differential Equations", code: "MA8353", credit: 4 },
                { sub: "Digital Logic Circuits", code: "EE8351", credit: 3 },
                { sub: "Electromagnetic Theory", code: "EE8391", credit: 3 },
                { sub: "Electrical Machines - I", code: "EE8301", credit: 3 },
                { sub: "Electron Devices and Circuits", code: "EC8353", credit: 3 },
                { sub: "Power Plant Engineering", code: "ME8792", credit: 3 },
                { sub: "Electronics Laboratory", code: "EC8311", credit: 2 },
                { sub: "Electrical Machines Laboratory - I", code: "EE8311", credit: 2 }
            ];
        } else if (semes == 4) {
            subjectsArray = [
                { sub: "Numerical Methods", code: "MA8491", credit: 4 },
                { sub: "Electrical Machines - II", code: "EE8401", credit: 3 },
                { sub: "Power Electronics", code: "EE8402", credit: 3 },
                { sub: "Measurements and Instrumentation", code: "EE8403", credit: 3 },
                { sub: "Linear Integrated Circuits and Applications", code: "EE8451", credit: 3 },
                { sub: "Control Systems", code: "IC8451", credit: 4 },
                { sub: "Electrical Machines Laboratory - II", code: "EE8411", credit: 2 },
                { sub: "Linear and Digital Integrated Circuits Laboratory", code: "EE8461", credit: 2 },
                { sub: "Technical Seminar", code: "EE8412", credit: 1 }
            ];
        } else if (semes == 5) {
            subjectsArray = [
                { sub: "Power System Analysis", code: "EE8501", credit: 3 },
                { sub: "Microprocessors and Microcontrollers", code: "EE8551", credit: 3 },
                { sub: "Power Electronics", code: "EE8552", credit: 3 },
                { sub: "Digital Signal Processing", code: "EE8591", credit: 3 },
                { sub: "Object Oriented Programming", code: "CS8392", credit: 3 },
                { sub: "Open Elective I", code: "OE", credit: 3 },
                { sub: "Control and Instrumentation Laboratory", code: "EE8511", credit: 2 },
                { sub: "Professional Communication", code: "HS8581", credit: 1 },
                { sub: "Object Oriented Programming Laboratory", code: "CS8383", credit: 2 }
            ];
        } else if (semes == 6) {
            subjectsArray = [
                { sub: "Solid State Drives", code: "EE8601", credit: 3 },
                { sub: "Protection and Switchgear", code: "EE8602", credit: 3 },
                { sub: "Embedded Systems", code: "EE8691", credit: 3 },
                { sub: "Professional Elective I", code: "PE", credit: 3 },
                { sub: "Professional Elective II", code: "PE", credit: 3 },
                { sub: "Power Electronics and Drives Laboratory", code: "EE8661", credit: 2 },
                { sub: "Microprocessors and Microcontrollers Laboratory", code: "EE8681", credit: 2 },
                { sub: "Mini Project", code: "EE8611", credit: 2 }
            ];
        } else if (semes == 7) {
            subjectsArray = [
                { sub: "High Voltage Engineering", code: "EE8701", credit: 3 },
                { sub: "Power System Operation and Control", code: "EE8702", credit: 3 },
                { sub: "Renewable Energy Systems", code: "EE8703", credit: 3 },
                { sub: "Open Elective II", code: "OE", credit: 3 },
                { sub: "Professional Elective III", code: "PE", credit: 3 },
                { sub: "Professional Elective IV", code: "PE", credit: 3 },
                { sub: "Power System Simulation Laboratory", code: "EE8711", credit: 2 },
                { sub: "Renewable Energy Systems Laboratory", code: "EE8712", credit: 2 }
            ];
        } else if (semes == 8) {
            subjectsArray = [
                { sub: "Professional Elective V", code: "PE", credit: 3 },
                { sub: "Professional Elective VI", code: "PE", credit: 3 },
                { sub: "Project Work", code: "EE8811", credit: 20 }
            ];
        }
    
        _addtable(subjectsArray);
    }
    if (dept == 'CSE' && regulation == 2017 && (semes >= 2 && semes <= 8)) {
        let subjectsArray = [];
        
        if (semes == 2) {
            subjectsArray = [
                { sub: "Technical English", code: "HS8251", credit: 4 },
                { sub: "Engineering Mathematics - II", code: "MA8251", credit: 4 },
                { sub: "Physics for Information Science", code: "PH8252", credit: 3 },
                { sub: "Basic Electrical, Electronics and Measurement Engineering", code: "BE8255", credit: 3 },
                { sub: "Environmental Science and Engineering", code: "GE8291", credit: 3 },
                { sub: "Programming in C", code: "CS8251", credit: 3 },
                { sub: "Engineering Practices Laboratory", code: "GE8261", credit: 2 },
                { sub: "C Programming Laboratory", code: "CS8261", credit: 2 },
            ];
        } else if (semes == 3) {
            subjectsArray = [
                { sub: "Discrete Mathematics", code: "MA8351", credit: 4 },
                { sub: "Digital Principles and System Design", code: "CS8351", credit: 4 },
                { sub: "Data Structures", code: "CS8391", credit: 3 },
                { sub: "Object Oriented Programming", code: "CS8392", credit: 3 },
                { sub: "Communication Engineering", code: "EC8395", credit: 3 },
                { sub: "Data Structures Laboratory", code: "CS8381", credit: 2 },
                { sub: "Object Oriented Programming Laboratory", code: "CS8383", credit: 2 },
                { sub: "Digital Systems Laboratory", code: "CS8382", credit: 2 },
                { sub: "Interpersonal Skills/Listening & Speaking", code: "HS8381", credit: 1 },
            ];
        } else if (semes == 4) {
            subjectsArray = [
                { sub: "Probability and Queueing Theory", code: "MA8402", credit: 4 },
                { sub: "Computer Architecture", code: "CS8491", credit: 3 },
                { sub: "Database Management Systems", code: "CS8492", credit: 3 },
                { sub: "Design and Analysis of Algorithms", code: "CS8451", credit: 3 },
                { sub: "Operating Systems", code: "CS8493", credit: 3 },
                { sub: "Software Engineering", code: "CS8494", credit: 3 },
                { sub: "Database Management Systems Laboratory", code: "CS8481", credit: 2 },
                { sub: "Operating Systems Laboratory", code: "CS8461", credit: 2 },
                { sub: "Advanced Reading and Writing", code: "HS8461", credit: 1 },
            ];
        } else if (semes == 5) {
            subjectsArray = [
                { sub: "Algebra and Number Theory", code: "MA8551", credit: 4 },
                { sub: "Computer Networks", code: "CS8591", credit: 3 },
                { sub: "Microprocessors and Microcontrollers", code: "EC8691", credit: 3 },
                { sub: "Theory of Computation", code: "CS8501", credit: 3 },
                { sub: "Object Oriented Analysis and Design", code: "CS8592", credit: 3 },
                { sub: "Open Elective I", code: "OE", credit: 3 },
                { sub: "Microprocessors and Microcontrollers Laboratory", code: "EC8681", credit: 2 },
                { sub: "Object Oriented Analysis and Design Laboratory", code: "CS8582", credit: 2 },
                { sub: "Networks Laboratory", code: "CS8581", credit: 2 },
            ];
        } else if (semes == 6) {
            subjectsArray = [
                { sub: "Internet Programming", code: "CS8651", credit: 3 },
                { sub: "Artificial Intelligence", code: "CS8691", credit: 3 },
                { sub: "Mobile Computing", code: "CS8601", credit: 3 },
                { sub: "Compiler Design", code: "CS8602", credit: 4 },
                { sub: "Distributed Systems", code: "CS8603", credit: 3 },
                { sub: "Professional Elective I", code: "PE", credit: 3 },
                { sub: "Internet Programming Laboratory", code: "CS8661", credit: 2 },
                { sub: "Mobile Application Development Laboratory", code: "CS8662", credit: 2 },
                { sub: "Mini Project", code: "CS8611", credit: 1 },
                { sub: "Professional Communication", code: "HS8581", credit: 1 },
            ];
        } else if (semes == 7) {
            subjectsArray = [
                { sub: "Principles of Management", code: "MG8591", credit: 3 },
                { sub: "Cryptography and Network Security", code: "CS8792", credit: 3 },
                { sub: "Cloud Computing", code: "CS8791", credit: 3 },
                { sub: "Open Elective II", code: "OE", credit: 3 },
                { sub: "Professional Elective II", code: "PE", credit: 3 },
                { sub: "Professional Elective III", code: "PE", credit: 3 },
                { sub: "Cloud Computing Laboratory", code: "CS8711", credit: 2 },
                { sub: "Security Laboratory", code: "IT8761", credit: 2 },
            ];
        } else if (semes == 8) {
            subjectsArray = [
                { sub: "Professional Elective IV", code: "PE", credit: 3 },
                { sub: "Professional Elective V", code: "PE", credit: 3 },
                { sub: "Project Work", code: "CS8811", credit: 20 },
            ];
        }
        
        _addtable(subjectsArray);
    }
    if (dept == 'IT' && regulation == 2017 && (semes >= 2 && semes <= 8)) {
        let subjectsArray = [];
        
        if (semes == 2) {
            subjectsArray = [
                { sub: "Technical English", code: "HS8251", credit: 4 },
                { sub: "Engineering Mathematics - II", code: "MA8251", credit: 4 },
                { sub: "Physics for Information Science", code: "PH8252", credit: 3 },
                { sub: "Basic Electrical, Electronics and Measurement Engineering", code: "BE8255", credit: 3 },
                { sub: "Information Technology Essentials", code: "IT8201", credit: 3 },
                { sub: "Programming in C", code: "CS8251", credit: 3 },
                { sub: "Engineering Practices Laboratory", code: "GE8261", credit: 2 },
                { sub: "C Programming Laboratory", code: "CS8261", credit: 2 },
                { sub: "Information Technology Essentials Laboratory", code: "IT8211", credit: 1 },
            ];
        } else if (semes == 3) {
            subjectsArray = [
                { sub: "Discrete Mathematics", code: "MA8351", credit: 4 },
                { sub: "Digital Principles and System Design", code: "CS8351", credit: 4 },
                { sub: "Data Structures", code: "CS8391", credit: 3 },
                { sub: "Object Oriented Programming", code: "CS8392", credit: 3 },
                { sub: "Analog and Digital Communication", code: "EC8394", credit: 3 },
                { sub: "Data Structures Laboratory", code: "CS8381", credit: 2 },
                { sub: "Object Oriented Programming Laboratory", code: "CS8383", credit: 2 },
                { sub: "Digital Systems Laboratory", code: "CS8382", credit: 2 },
                { sub: "Interpersonal Skills/Listening & Speaking", code: "HS8381", credit: 1 },
            ];
        } else if (semes == 4) {
            subjectsArray = [
                { sub: "Probability and Statistics", code: "MA8391", credit: 4 },
                { sub: "Computer Architecture", code: "CS8491", credit: 3 },
                { sub: "Database Management Systems", code: "CS8492", credit: 3 },
                { sub: "Design and Analysis of Algorithms", code: "CS8451", credit: 3 },
                { sub: "Operating Systems", code: "CS8493", credit: 3 },
                { sub: "Environmental Science and Engineering", code: "GE8291", credit: 3 },
                { sub: "Database Management Systems Laboratory", code: "CS8481", credit: 2 },
                { sub: "Operating Systems Laboratory", code: "CS8461", credit: 2 },
                { sub: "Advanced Reading and Writing", code: "HS8461", credit: 1 },
            ];
        } else if (semes == 5) {
            subjectsArray = [
                { sub: "Algebra and Number Theory", code: "MA8551", credit: 4 },
                { sub: "Computer Networks", code: "CS8591", credit: 3 },
                { sub: "Microprocessors and Microcontrollers", code: "EC8691", credit: 3 },
                { sub: "Web Technology", code: "IT8501", credit: 3 },
                { sub: "Software Engineering", code: "CS8494", credit: 3 },
                { sub: "Open Elective I", code: "OE", credit: 3 },
                { sub: "Microprocessors and Microcontrollers Laboratory", code: "EC8681", credit: 2 },
                { sub: "Networks Laboratory", code: "CS8581", credit: 2 },
                { sub: "Web Technology Laboratory", code: "IT8511", credit: 2 },
            ];
        } else if (semes == 6) {
            subjectsArray = [
                { sub: "Computational Intelligence", code: "IT8601", credit: 3 },
                { sub: "Object Oriented Analysis and Design", code: "CS8592", credit: 3 },
                { sub: "Mobile Communication", code: "IT8602", credit: 3 },
                { sub: "Big Data Analytics", code: "CS8091", credit: 3 },
                { sub: "Computer Graphics and Multimedia", code: "CS8092", credit: 3 },
                { sub: "Professional Elective I", code: "PE", credit: 3 },
                { sub: "Mobile Application Development Laboratory", code: "CS8662", credit: 2 },
                { sub: "Object Oriented Analysis and Design Laboratory", code: "CS8582", credit: 2 },
                { sub: "Mini Project", code: "IT8611", credit: 1 },
                { sub: "Professional Communication", code: "HS8581", credit: 1 },
            ];
        } else if (semes == 7) {
            subjectsArray = [
                { sub: "Principles of Management", code: "MG8591", credit: 3 },
                { sub: "Cryptography and Network Security", code: "CS8792", credit: 3 },
                { sub: "Cloud Computing", code: "CS8791", credit: 3 },
                { sub: "Open Elective II", code: "OE", credit: 3 },
                { sub: "Professional Elective II", code: "PE", credit: 3 },
                { sub: "Professional Elective III", code: "PE", credit: 3 },
                { sub: "FOSS and Cloud Computing Laboratory", code: "IT8711", credit: 2 },
                { sub: "Security Laboratory", code: "IT8761", credit: 2 },
            ];
        } else if (semes == 8) {
            subjectsArray = [
                { sub: "Professional Elective IV", code: "PE", credit: 3 },
                { sub: "Professional Elective V", code: "PE", credit: 3 },
                { sub: "Project Work", code: "IT8811", credit: 20 },
            ];
        }
        
        _addtable(subjectsArray);
    }
    if (dept == 'MECH' && regulation == 2017 && (semes >= 2 && semes <= 8)) {
        let subjectsArray = [];
        
        if (semes == 2) {
            subjectsArray = [
                { sub: "Technical English", code: "HS8251", credit: 4 },
                { sub: "Engineering Mathematics - II", code: "MA8251", credit: 4 },
                { sub: "Materials Science", code: "PH8251", credit: 3 },
                { sub: "Basic Electrical, Electronics and Instrumentation Engineering", code: "BE8253", credit: 3 },
                { sub: "Environmental Science and Engineering", code: "GE8291", credit: 3 },
                { sub: "Engineering Mechanics", code: "GE8292", credit: 4 },
                { sub: "Engineering Practices Laboratory", code: "GE8261", credit: 2 },
                { sub: "Basic Electrical, Electronics and Instrumentation Engineering Laboratory", code: "BE8261", credit: 2 },
            ];
        } else if (semes == 3) {
            subjectsArray = [
                { sub: "Transforms and Partial Differential Equations", code: "MA8353", credit: 4 },
                { sub: "Engineering Thermodynamics", code: "ME8391", credit: 4 },
                { sub: "Fluid Mechanics and Machinery", code: "CE8394", credit: 4 },
                { sub: "Manufacturing Technology - I", code: "ME8351", credit: 3 },
                { sub: "Electrical Drives and Controls", code: "EE8353", credit: 3 },
                { sub: "Manufacturing Technology Laboratory - I", code: "ME8361", credit: 2 },
                { sub: "Computer Aided Machine Drawing", code: "ME8381", credit: 2 },
                { sub: "Electrical Engineering Laboratory", code: "EE8361", credit: 2 },
                { sub: "Interpersonal Skills / Listening & Speaking", code: "HS8381", credit: 1 },
            ];
        } else if (semes == 4) {
            subjectsArray = [
                { sub: "Statistics and Numerical Methods", code: "MA8452", credit: 4 },
                { sub: "Kinematics of Machinery", code: "ME8492", credit: 3 },
                { sub: "Manufacturing Technology – II", code: "ME8451", credit: 3 },
                { sub: "Engineering Metallurgy", code: "ME8491", credit: 3 },
                { sub: "Strength of Materials for Mechanical Engineers", code: "CE8395", credit: 3 },
                { sub: "Thermal Engineering- I", code: "ME8493", credit: 3 },
                { sub: "Manufacturing Technology Laboratory – II", code: "ME8462", credit: 2 },
                { sub: "Strength of Materials and Fluid Mechanics and Machinery Laboratory", code: "CE8381", credit: 2 },
                { sub: "Advanced Reading and Writing", code: "HS8461", credit: 1 },
            ];
        } else if (semes == 5) {
            subjectsArray = [
                { sub: "Thermal Engineering- II", code: "ME8595", credit: 3 },
                { sub: "Design of Machine Elements", code: "ME8593", credit: 3 },
                { sub: "Metrology and Measurements", code: "ME8501", credit: 3 },
                { sub: "Dynamics of Machines", code: "ME8594", credit: 4 },
                { sub: "Open Elective I", code: "OE", credit: 3 },
                { sub: "Kinematics and Dynamics Laboratory", code: "ME8511", credit: 2 },
                { sub: "Thermal Engineering Laboratory", code: "ME8512", credit: 2 },
                { sub: "Metrology and Measurements Laboratory", code: "ME8513", credit: 2 },
            ];
        } else if (semes == 6) {
            subjectsArray = [
                { sub: "Design of Transmission Systems", code: "ME8651", credit: 3 },
                { sub: "Computer Aided Design and Manufacturing", code: "ME8691", credit: 3 },
                { sub: "Heat and Mass Transfer", code: "ME8693", credit: 4 },
                { sub: "Finite Element Analysis", code: "ME8692", credit: 3 },
                { sub: "Hydraulics and Pneumatics", code: "ME8694", credit: 3 },
                { sub: "Professional Elective - I", code: "PE", credit: 3 },
                { sub: "CAD / CAM Laboratory", code: "ME8681", credit: 2 },
                { sub: "Design and Fabrication Project", code: "ME8682", credit: 2 },
                { sub: "Professional Communication", code: "HS8581", credit: 1 },
            ];
        } else if (semes == 7) {
            subjectsArray = [
                { sub: "Power Plant Engineering", code: "ME8792", credit: 3 },
                { sub: "Process Planning and Cost Estimation", code: "ME8793", credit: 3 },
                { sub: "Mechatronics", code: "ME8791", credit: 3 },
                { sub: "Open Elective - II", code: "OE", credit: 3 },
                { sub: "Professional Elective – II", code: "PE", credit: 3 },
                { sub: "Professional Elective – III", code: "PE", credit: 3 },
                { sub: "Simulation and Analysis Laboratory", code: "ME8711", credit: 2 },
                { sub: "Mechatronics Laboratory", code: "ME8781", credit: 2 },
                { sub: "Technical Seminar", code: "ME8712", credit: 1 },
            ];
        } else if (semes == 8) {
            subjectsArray = [
                { sub: "Principles of Management", code: "MG8591", credit: 3 },
                { sub: "Professional Elective– IV", code: "PE", credit: 3 },
                { sub: "Project Work", code: "ME8811", credit: 20 },
            ];
        }
        
        _addtable(subjectsArray);
    }
    if (dept == 'CIVIL' && regulation == 2017 && (semes >= 2 && semes <= 8)) {
        let subjectsArray = [];
        
        if (semes == 2) {
            subjectsArray = [
                { sub: "Technical English", code: "HS8251", credit: 4 },
                { sub: "Engineering Mathematics – II", code: "MA8251", credit: 4 },
                { sub: "Physics For Civil Engineering", code: "PH8201", credit: 3 },
                { sub: "Basic Electrical and Electronics Engineering", code: "BE8251", credit: 3 },
                { sub: "Environmental Science and Engineering", code: "GE8291", credit: 3 },
                { sub: "Engineering Mechanics", code: "GE8292", credit: 4 },
                { sub: "Engineering Practices Laboratory", code: "GE8261", credit: 2 },
                { sub: "Computer Aided Building Drawing", code: "CE8211", credit: 2 },
            ];
        } else if (semes == 3) {
            subjectsArray = [
                { sub: "Transforms and Partial Differential Equations", code: "MA8353", credit: 4 },
                { sub: "Strength of Materials I", code: "CE8301", credit: 3 },
                { sub: "Fluid Mechanics", code: "CE8302", credit: 3 },
                { sub: "Surveying", code: "CE8351", credit: 3 },
                { sub: "Construction Materials", code: "CE8391", credit: 3 },
                { sub: "Engineering Geology", code: "CE8392", credit: 3 },
                { sub: "Construction Materials Laboratory", code: "CE8311", credit: 2 },
                { sub: "Surveying Laboratory", code: "CE8361", credit: 2 },
                { sub: "Interpersonal Skills / Listening and Speaking", code: "HS8381", credit: 1 },
            ];
        } else if (semes == 4) {
            subjectsArray = [
                { sub: "Numerical Methods", code: "MA8491", credit: 4 },
                { sub: "Construction Techniques and Practices", code: "CE8401", credit: 3 },
                { sub: "Strength of Materials II", code: "CE8402", credit: 3 },
                { sub: "Applied Hydraulic Engineering", code: "CE8403", credit: 3 },
                { sub: "Concrete Technology", code: "CE8404", credit: 3 },
                { sub: "Soil Mechanics", code: "CE8491", credit: 3 },
                { sub: "Strength of Materials Laboratory", code: "CE8481", credit: 2 },
                { sub: "Hydraulic Engineering Laboratory", code: "CE8461", credit: 2 },
                { sub: "Advanced Reading and Writing", code: "HS8461", credit: 1 },
            ];
        } else if (semes == 5) {
            subjectsArray = [
                { sub: "Design of Reinforced Cement Concrete Elements", code: "CE8501", credit: 4 },
                { sub: "Structural Analysis I", code: "CE8502", credit: 3 },
                { sub: "Water Supply Engineering", code: "EN8491", credit: 3 },
                { sub: "Foundation Engineering", code: "CE8591", credit: 3 },
                { sub: "Professional Elective I", code: "PE", credit: 3 },
                { sub: "Open Elective I", code: "OE", credit: 3 },
                { sub: "Soil Mechanics Laboratory", code: "CE8511", credit: 2 },
                { sub: "Water and Waste Water Analysis Laboratory", code: "CE8512", credit: 2 },
                { sub: "Survey Camp (2 weeks –During IV Semester)", code: "EEC", credit: 2 },
            ];
        } else if (semes == 6) {
            subjectsArray = [
                { sub: "Design of Steel Structural Elements", code: "CE8601", credit: 4 },
                { sub: "Structural Analysis II", code: "CE8602", credit: 3 },
                { sub: "Irrigation Engineering", code: "CE8603", credit: 3 },
                { sub: "Highway Engineering", code: "CE8604", credit: 3 },
                { sub: "Wastewater Engineering", code: "EN8592", credit: 3 },
                { sub: "Professional Elective II", code: "PE", credit: 3 },
                { sub: "Highway Engineering Laboratory", code: "CE8611", credit: 2 },
                { sub: "Irrigation and Environmental Engineering Drawing", code: "CE8612", credit: 2 },
                { sub: "Professional Communication", code: "HS8581", credit: 1 },
            ];
        } else if (semes == 7) {
            subjectsArray = [
                { sub: "Estimation, Costing and Valuation", code: "CE8701", credit: 3 },
                { sub: "Railways, Airports, Docks and Harbour Engineering", code: "CE8702", credit: 3 },
                { sub: "Structural Design and Drawing", code: "CE8703", credit: 4 },
                { sub: "Professional Elective III", code: "PE", credit: 3 },
                { sub: "Open Elective II", code: "OE", credit: 3 },
                { sub: "Creative and Innovative Project (Activity Based - Subject Related)", code: "EEC", credit: 2 },
                { sub: "Industrial Training (4 weeks During VI Semester – Summer)", code: "EEC", credit: 2 },
            ];
        } else if (semes == 8) {
            subjectsArray = [
                { sub: "Professional Elective IV", code: "PE", credit: 3 },
                { sub: "Professional Elective V", code: "PE", credit: 3 },
                { sub: "Project Work", code: "CE8811", credit: 20 },
            ];
        }
        
        _addtable(subjectsArray);
    }
    
    
    
    
    
    
}



