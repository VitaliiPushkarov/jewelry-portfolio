// Contact Form
document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
  
            var email = document.getElementById('email').value;
  
            // Regular expression for email validation
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
            } else {
                // Redirect to the thank you page
                window.location.href = "thankyou.html";
            }
        });
    }
  });