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
  <a onclick="deleteEmployee(event)" class="delete" title="Delete" data-toggle="tooltip"><i
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
    email:"",
    project:"",
    phone:""
  }
  // let inputs = document.querySelectorAll("input");
  let name=document.getElementById('name');
  let email=document.getElementById('email');
  let phone=document.getElementById('phone');
  var project = document.querySelector("#project");
  var option = project.options[project.selectedIndex];
  var url="https://api/post"
  console.log(name.value,email.value,phone.value)
   employee.name=name.value
   employee.email=email.value
   employee.project=option.value
   employee.phone=phone.value

  const xhr=new XMLHttpRequest();
  xhr.open('POST',url,true)
  xhr.setRequestHeader('content-type','application/json; charset=UTF-8')
  xhr.send(JSON.stringify(employee))
  xhr.onload=function(){
    if(xhr.status===201){
      console.log('post successfully created')
    }
  }
}

function deleteEmployee(event){
  console.log(event.path[3])
  event.path[3].innerHTML=null;
}