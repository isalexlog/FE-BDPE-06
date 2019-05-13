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
        html += '<td>' + position + '</td></tr>';
    });

    return html;
};