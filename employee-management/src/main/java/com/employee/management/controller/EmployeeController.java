package com.employee.management.controller;

import com.employee.management.model.EmployeeModel;
import com.employee.management.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployeeController {
//    @Autowired
    EmployeeService employeeService=new EmployeeService();
    @GetMapping("get-employees")
    public List<EmployeeModel> getAllEmployees(){
        return employeeService.getAllEmployees();
    }
}
