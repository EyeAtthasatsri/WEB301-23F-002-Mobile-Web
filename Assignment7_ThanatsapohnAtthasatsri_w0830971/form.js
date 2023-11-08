
        // Initialize Swiper
        var swiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // 'vertical' for vertical slider
            loop: true, // Loop the slides
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });


        // ----------------------------------------


        $(document).ready(function () {

            // For;  The error placement for specific fields, 
            var commonErrorPlacement = function (error, element) {
                
                if ($(element).is("#school-name, #date-of-joining, #email, #phone-number, #zip-code, #credit-card, #expiration-date, #cvv")) {
                    error.insertAfter(element);
                } else {
                    error.insertAfter(element); // Use the default placement for other fields
                }
            };

            // Validate the school form
            $("#school-form").validate({
                errorElement: "div",
                rules: {
                    "school-name": "required",
                    "date-of-joining": "required",
                },
                messages: {
                    "school-name": "Please enter your school name",
                    "date-of-joining": "Please enter the date of joining",
                },
                
                errorPlacement: commonErrorPlacement // Use the common errorPlacement function
                
            });
        

            // Validate the personal form
            $("#personal-form").validate({
                errorElement: "div",
                rules: {
                    "email": {
                        required: true,
                        email: true
                    },
                    "phone-number": {
                        required: true,
                        digits: true,
                        minlength: 10,
                        maxlength: 10
                    },
                    "zip-code": {
                        required: true,
                        pattern: /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d/
                    },
                },
                messages: {
                    "email": {
                        required: "Please enter your email",
                        email: "Please enter a valid email address"
                    },
                    "phone-number": {
                        required: "Please enter a phone number",
                        digits: "Please enter a valid 10-digit phone number (e.g., 000 000 0000)",
                        minlength: "Please enter a valid 10-digit phone number (e.g., 000 000 0000)",
                        maxlength: "Please enter a valid 10-digit phone number (e.g., 000 000 0000)"
                    },
                    "zip-code": {
                        required: "Please enter a valid Canadian zip code",
                        pattern: "Please enter a valid Canadian zip code (e.g., A1B 2C3)"
                    },
                },

                errorPlacement: commonErrorPlacement
                
            });


        
            // Validate the payment form
            $("#payment-form").validate({
                errorElement: "div",
                rules: {
                    "credit-card": {
                        required: true,
                        digits: true,
                        minlength: 10,
                        maxlength: 10
                    },
                    "expiration-date": "required",
                    "cvv": {
                        required: true,
                        digits: true,
                        minlength: 3,
                        maxlength: 3
                    },
                },
                messages: {
                    "credit-card": {
                        required: "Please enter a valid 10-digit credit card number",
                        digits: "Please enter a valid 10-digit credit card number",
                        minlength: "Please enter a valid 10-digit credit card number",
                        maxlength: "Please enter a valid 10-digit credit card number",
                    },
                    "expiration-date": "Please enter the expiration date",
                    "cvv": {
                        required: "Please enter a valid 3-digit CVV",
                        digits: "Please enter a valid 3-digit CVV",
                        minlength: "Please enter a valid 3-digit CVV",
                        maxlength: "Please enter a valid 3-digit CVV",
                    }
                },

                errorPlacement: commonErrorPlacement
                
            });
        });