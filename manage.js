let employeeData;
loadEmployeeTable();

function loadEmployeeTable() {
  let tableBody = document.querySelector("tbody");
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    // console.log(this.responseText);
    employeeData = JSON.parse(this.responseText);
    employeeData.forEach((employee) => {
      let row = document.createElement("tr");
      let employeeId=document.createElement("td");
      let employeeName = document.createElement("td");
      let employeeProject = document.createElement("td");
      let employeePhone = document.createElement("td");
      let action = document.createElement("td");
      employeeId.innerHTML=`${employee.id}`;
      employeeName.innerHTML = `${employee.name}`;
      employeeProject.innerHTML = `${employee.project}`;
      employeePhone.innerHTML = `${employee.phone}`;
      action.innerHTML = `<td> 
   <a onClick=viewEmployee(${employee.id}) data-toggle="tooltip" title="view"><img src="https://img.icons8.com/ios-glyphs/20/FFFFFF/view-file.png"/></a>
  <a class="edit" title="Edit" data-bs-toggle="modal" data-bs-target="#employeeEdit" data-toggle="tooltip" onClick="editEmployee(${employee.id})"><img src="https://img.icons8.com/sf-black-filled/20/FFFFFF/edit.png"/></a>
  <a onclick="deleteEmployee(${employee.id})" class="delete" title="Delete" data-toggle="tooltip"><i
      class="material-icons"><img src="https://img.icons8.com/material-rounded/20/FFFFFF/trash.png"/></i></a></td>`;
      row.append(employeeId);
      row.append(employeeName);
      row.append(employeeProject);
      row.append(employeePhone);
      row.append(action);
      tableBody.append(row);
    });
  };
  xhr.open("GET", "./employee.json");
  xhr.send();
}


function addEmployee() {
  let employee = {
    name: "",
    email: "",
    project: "",
    phone: ""
  }
  // let inputs = document.querySelectorAll("input");
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  var project = document.querySelector("#project");
  var option = project.options[project.selectedIndex];
  var url = "https://api/post"
  console.log(name.value, email.value, phone.value)
  employee.name = name.value
  employee.email = email.value
  employee.project = option.value
  employee.phone = phone.value

  const xhr = new XMLHttpRequest();
  xhr.open('POST', "http://localhost:8080/employee", true)
  xhr.setRequestHeader('content-type', 'application/json; charset=UTF-8')
  xhr.send(JSON.stringify(employee))
  xhr.onload = function () {
    if (xhr.status === 201) {
      console.log('post successfully created')
    }
  }
}

function deleteEmployee(id) {
  
}
function editEmployee(id) {
  console.log(id)
}
// function edit(event) {
//   let coloum = event.path[3].cells;
//   let editArr = [document.getElementById('edit_name'), document.getElementById('edit_project'), document.getElementById('edit_phone')]
//   for (let i = 0; i < coloum.length - 1; i++) {
//     console.log(coloum[i].innerText)
//     editArr[i].value = coloum[i+1].innerText;
//   }

// }
function viewEmployee(id){
  location.href="viewEmployee.html?id="+id;
}