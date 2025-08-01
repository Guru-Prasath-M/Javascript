let employees = [
    {eid : 101,ename:"Guru",esal:55000},
    {eid : 102,ename:"Harish",esal:50000}
]

let createEmployee = (emp)=>{
    return  new Promise((resolve , reject)=>{
        setTimeout(()=>{
            let db_status = true;
            db_status === true ? resolve("Data Inserted") : reject("Failed");
            employees.push(emp);
        },3000)
    })
}
let getEmployee = ()=>{
    setTimeout(()=>{
        let rows=''
        for (let emp of employees){
            rows = rows +`<tr>
                            <td>${emp.eid}</td>
                            <td>${emp.ename}</td>
                            <td>${emp.esal}</td>
                        </tr>`
        }
        document.getElementById("table_data").innerHTML=rows;
    },2000)
}

let execute = async()=>{
    await createEmployee({"eid":103,ename:"Ravi",esal:40000})
    getEmployee();
}
execute()
