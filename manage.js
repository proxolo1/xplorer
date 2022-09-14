let employeeData;

function loadData() {
  let tableBody = document.querySelector("tbody");
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    // console.log(this.responseText);
    employeeData = JSON.parse(this.responseText);
    employeeData.forEach((employee) => {
      let row = document.createElement("tr");
      let employeeName = document.createElement("td");
      let employeeProject = document.createElement("td");
      let employeePhone = document.createElement("td");
      let action = document.createElement("td");
      employeeName.innerHTML = `${employee.name}`;
      employeeProject.innerHTML = `${employee.project}`;
      employeePhone.innerHTML = `${employee.phone}`;
      action.innerHTML = `<td> <a class="add" title="Add" data-toggle="tooltip"><i
      class="material-icons">&#xE03B;</i></a>
  <a class="edit" title="Edit" data-toggle="tooltip"><i
      class="material-icons">&#xE254;</i></a>
  <a class="delete" title="Delete" data-toggle="tooltip"><i
      class="material-icons">&#xE872;</i></a></td>`;
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

loadData();
function addEmployee() {
  let employee={
    name:"",
    project:"",
    phone:""
  }
  let inputs = document.querySelectorAll("input");
  var project = document.querySelector("#project");
  var option = project.options[project.selectedIndex];
  const xhr=new XMLHttpRequest();
  xhr.open();
  xhr.send();
  inputs.forEach((data) => {
    if (!data.value) {
      alert("value should not be empty");
    } else {
      
      console.log(data.value, option.value);
    }
  });
}
