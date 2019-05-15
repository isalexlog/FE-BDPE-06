var getInput = function(input) {
    var currentInput = '#employee_form ' + input['element'] + '[name=' + input['name'] + ']';
    return $(currentInput);
};

var isFormValid = function(inputs) {
    var isFormValid = true;
    inputs.forEach(function(input) {
        var $currentInput = getInput(input);
        if ($currentInput.val() == input['restrictedValue']) {
            isFormValid = false;
            $currentInput.parent().next().show();
        }
    });
    return isFormValid;
};

var createEmployeeTable = function(employees, mapPosition) {
    var html = '';

    employees.forEach(function(employee) {
        html += '<tr>';
        html += '<th scope="row">' + employee.id + '</th>';
        html += '<td>' + employee.firstName + '</td>';
        html += '<td>' + employee.lastName + '</td>';
        html += '<td>' + employee.birthDate + '</td>';

        var position = mapPosition[employee.position];
        html += '<td>' + position + '</td>';
        html += '<td><button type="button" name="edit" id="editEmployee_'+ employee.id +'">Edit</button></td> ';

        html += '</tr>'
    });

    return html;
};



var createSelectOptions = function(options, placeholder) {
    var html = '';
    if (placeholder) {
        html += '<option value="0">' + placeholder + '</option>';
    }
    options.forEach(function (option) {
        html += '<option value="' + option.value + '">'
            + option.display
            + '</option>';
    });
    return html;
};

var createPositionMapper = function(employeePositions) {
    var mapPosition = {};
    employeePositions.forEach(function(employeePosition) {
       mapPosition[employeePosition.value] = employeePosition.display;
    });
    return mapPosition;
};