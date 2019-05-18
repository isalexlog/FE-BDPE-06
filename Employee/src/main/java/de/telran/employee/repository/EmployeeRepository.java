package de.telran.employee.repository;

import de.telran.employee.dto.EmployeeDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.*;

@Repository
public class EmployeeRepository extends AbstractRepository<EmployeeDto> {

    @PostConstruct
    public void init() {
        EmployeeDto employee1 = new EmployeeDto();
        employee1.setFirstName("Vasya");
        employee1.setLastName("Pupkin");
        employee1.setBirthDate("01.01.1980");
        employee1.setPosition(1);
        createRecord(employee1);
        logger.info("employee1 ", employee1.toString());

        EmployeeDto employee2 = new EmployeeDto();
        employee2.setFirstName("Petya");
        employee2.setLastName("Vaskin");
        employee2.setBirthDate("01.12.1981");
        employee2.setPosition(2);
        createRecord(employee2);
        logger.info("employee2 ", employee2.toString());
    }
}
