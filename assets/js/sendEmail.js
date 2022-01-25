function sendMail(contactForm) { 
    emailjs.send("service_6h0vrgk", "template_hpbpw4d", { 
        "from_name" : contactForm.name.value,
        "from-email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) { 
            console.log("SUCCESS", response);
        },
        function(error) { 
            console.log("FAILED", error);
        });
}