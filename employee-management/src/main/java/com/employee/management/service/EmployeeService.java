package com.employee.management.service;

import com.employee.management.model.EmployeeModel;

import java.util.ArrayList;
import java.util.List;

public class EmployeeService implements IEmployeeService{

    @Override
    public List<EmployeeModel> getAllEmployees() {
        List<EmployeeModel>employees = new ArrayList<EmployeeModel>();
        EmployeeModel employee=new EmployeeModel();
        employee.setName("ajay");
        employee.setEmpId(2222);
        employee.setProject("delivery");
        employee.setPhoneNumber("9895774705");
        employees.add(employee);
        return employees;
    }

    @Override
    public String toString() {
        return "nothing";
    }
}
