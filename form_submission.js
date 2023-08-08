document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("Form submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Send email using EmailJS
    emailjs.init("Anand Gautam");
    const templateParams = {
      to_email: email,
      from_name: name,
      message: message,
    };
    emailjs.send("service_dy88ep7", "template_m1rn0xj", templateParams).then(
      function (response) {
        console.log("Email sent:", response);
        alert("Message sent successfully!");
      },
      function (error) {
        console.error("Email error:", error);
        alert("An error occurred while sending the message. Please try again.");
      }
    );
  });
});
