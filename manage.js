let deleteId;
init();

function init() {
  const url = "http://localhost:8080/get-employees";

  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    // console.log(this.responseText);
    loadEmployeesHTML(JSON.parse(this.responseText));

  };
  xhr.open("GET", url);
  xhr.send();
}

function deleteEmployee() {
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `http://localhost:8080/delete-employee/${deleteId}`);
  xhr.send();
  xhr.onload = function () {
    console.log(this);
    init();
  }
}
function editEmployee(id) {
  location.href = "edit-employee.html?id=" + id;
}
3
function viewEmployee(id) {
  location.href = "viewEmployee.html?id=" + id;
}

function deleteInit(id) {
  deleteId = id;
}
function loadEmployeesHTML(employeeData) {
  let tableBody = document.querySelector("tbody");
  tableBody.innerHTML = null;
  employeeData.forEach((employee) => {

    let row = document.createElement("tr");
    let employeeId = document.createElement("td");
    let employeeName = document.createElement("td");
    let employeeProject = document.createElement("td");
    let employeePhone = document.createElement("td");
    let action = document.createElement("td");
    employeeId.innerHTML = `${employee.empId}`;
    employeeName.innerHTML = `${employee.name}`;
    employeeProject.innerHTML = `${employee.project}`;
    employeePhone.innerHTML = `${employee.phoneNumber}`;
    action.innerHTML = `<td> 
 <a onClick=viewEmployee(${employee.empId}) data-toggle="tooltip" title="view"><img src="https://img.icons8.com/ios-glyphs/20/FFFFFF/view-file.png"/></a>
<a class="edit" title="Edit" data-toggle="tooltip" onClick="editEmployee(${employee.empId})"><img src="https://img.icons8.com/sf-black-filled/20/FFFFFF/edit.png"/></a>
<a onclick="deleteInit(${employee.empId})" class="delete" title="Delete" data-toggle="tooltip" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
    class="material-icons"><img src="https://img.icons8.com/material-rounded/20/FFFFFF/trash.png"/></i></a></td>`;
    row.append(employeeId);
    row.append(employeeName);
    row.append(employeeProject);
    row.append(employeePhone);
    row.append(action);
    tableBody.append(row);
  });
}

const theadName = document.querySelector('.name');
const theadProject = document.querySelector('.project');
theadName.addEventListener('click', (e) => {

  let sortedEmployeeData;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:8080/get-employees");
  xhr.send();
  xhr.onload = function () {
    if (e.target.innerHTML === "Name <sup>↑</sup>") {
      e.target.innerHTML = "Name <sup>&#8595</sup>";
      sortedEmployeeData = JSON.parse(xhr.responseText).sort((a, b) => {
        return a.name.localeCompare(b.name)
      });
      loadEmployeesHTML(sortedEmployeeData);
    } else {
      e.target.innerHTML = "Name <sup>&#8593</sup>"
      console.log(e.target.innerHTML)
      loadEmployeesHTML(JSON.parse(this.responseText));
    }


  }
})
theadProject.addEventListener('click', (e) => {

  let sortedEmployeeData;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:8080/get-employees");
  xhr.send();
  xhr.onload = function () {
    if (e.target.innerHTML === "project <sup>↑</sup>") {
      e.target.innerHTML = "project <sup>&#8595</sup>";
      sortedEmployeeData = JSON.parse(xhr.responseText).sort((a, b) => {
        return a.project.localeCompare(b.project)
      });
      loadEmployeesHTML(sortedEmployeeData);
    } else {


      e.target.innerHTML = "project <sup>&#8593</sup>"
      console.log(e.target.innerHTML)
      loadEmployeesHTML(JSON.parse(this.responseText));
    }


  }
})