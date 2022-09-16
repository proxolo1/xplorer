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
   <a onClick=viewEmployee(${employee.id})><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/></svg></a>
  <a class="edit" title="Edit" data-bs-toggle="modal" data-bs-target="#employeeEdit" data-toggle="tooltip" onClick="editEmployee(${employee.id})"><i
      class="material-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></i></a>
  <a onclick="deleteEmployee(${employee.id})" class="delete" title="Delete" data-toggle="tooltip"><i
      class="material-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg></i></a></td>`;
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
  console.log(id)
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