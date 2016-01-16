var Register = (function ($) {
    var my = {};

    my.validateForm = function () {
        return $("#register-form").validate({

            // Specify the validation rules
            rules: {
                firstname: "required",
                lastname: "required",
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 5
                }
            },

            // Specify the validation error messages
            messages: {
                firstname: "Please enter your first name",
                lastname: "Please enter your last name",
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long"
                },
                email: "Please enter a valid email address"
            },

            submitHandler: function(form) {
                $.ajax({
                    type: "POST",
                    url: 'http://example.com/register/',
                    data: $(form).serialize(),
                    success: function(data) {
                        alert(data.message);
                    },
                    error: function() {
                        alert('An error occurred');
                    }
                });
            }
        });

    };

    return my;
}(jQuery));

