$(document).ready(function () {
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
});