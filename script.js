let dept ;
let regulation;
let semes;
let fin_grade=[];
let total_creadit=0;
let cerdit_arr=[]


            


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



           

function checkselect()
{

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
     
    

    if(dept == 'ECE' && regulation == 2017 && semes == 1)
    {
             
            // ECE Subjects reg 2017   (sem 1 to sem 8)

            let ECE_re17_sem1_sub = [{sub:"Communicative English",code:"HS8151",credit:4},{sub:"Engineering Mathematics 1" ,code:"MA8151",credit:4},{sub:"Engineering Physics",code:"PH8151",credit:3},{sub:"Engineering Chemistry",code:"CY8151",credit:3},
            {sub:"Problem Solving and Python Programming",code:"GE8151",credit:3},{sub:"Engineering Graphics",code:"GE8152",credit:4},
            {sub:"probelm Solving and python programming Laboratory",code:"GE8161",credit:2},{sub:"Pysics and chemistry laboratory",code:"BS8161",credit:2}];

            console.log("sem 1 ECE department regulation 2017")

            _addtable(ECE_re17_sem1_sub)

            


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
                { sub: "Embedded Laboratory", code: "EC8711", credit: 4 },
                { sub: "Advanced Communication Laboratory", code: "EC8761", credit: 4 }
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
    
}



