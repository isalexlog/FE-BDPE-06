$(document).ready(function () {
    $('#employee_form').submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: "/employee",
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({
                firstName: $('#firstName').val(),
                lastName: $('#lastName').val(),
                birthDate: $('#birthDate').val(),
                position: $('#position').val()
            }),
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