$(document).ready(function () {
    console.log('kuku');

    var $employeeForm = $('#employee_form');
    $employeeForm.submit(function(event) {
        event.preventDefault();

        var inputs = [
            {
                element: 'input',
                name: 'firstName',
                restrictedValue: ''
            },
            {
                element: 'input',
                name: 'lastName',
                restrictedValue: ''
            },
            {
                element: 'input',
                name: 'birthDate',
                restrictedValue: ''
            },
            {
                element: 'select',
                name: 'position',
                restrictedValue: 0
            }
        ];

        inputs.forEach(function (input) {
            var $currentInput = getInput(input);
            $($currentInput).focus(function(){
                $currentInput.parent().next().hide();
            });
        });

        if (!isFormValid(inputs))
            return;

        $.ajax({
            url: "/employee",
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify($employeeForm.serializeToJSON()),
            success: function(data) {
                alert("New employee created!!! Id=" + data);
                $('#id').val(data);
            },
            error: function() {
                alert("Creating new employee failed");
            }
        });
    });

    var mapPosition;

    $.ajax({
        url: "/position",
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data) {
            console.log(data);
            mapPosition = createPositionMapper(data);
        },
        error: function() {
            alert("Can't download employees");
        }
    });

    $.ajax({
        url: "/employee",
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data) {
            console.log(data);
            $('table#employees tbody').html(createEmployeeTable(data, mapPosition));
        },
        error: function() {
            alert("Can't download employees");
        }
    });

    $('select#position').html(createSelectOptions(employeePositions, 'Please select employee role'));

    $('table#employees button[name=edit]').each(function () {
        $(this).click(function (event) {
            console.log(event.target.id.split("_")[1]);
        })
    });

});