let deleteId;
init();

function init() {
  let employeeData;
  const url="http://localhost:8080/get-employees";
  let tableBody = document.querySelector("tbody");
  tableBody.innerHTML=null;
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
      employeeId.innerHTML=`${employee.empId}`;
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
  };
  xhr.open("GET", url);
  xhr.send();
}

function deleteEmployee() {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", `http://localhost:8080/delete-employee/${deleteId}`);
    xhr.send();
    xhr.onload=function () {
      console.log(this);
      init();
    }
}
function editEmployee(id) {
  location.href="edit-employee.html?id="+id;
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

function deleteInit(id) {
  deleteId=id;
}