const SendMail = () => {
  event.preventDefault(); // Prevent form submission
  const form = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const setLoading = (isLoading) => {
    // Implement setLoading function if needed
  };

  const templateParams = {
    from_name: form.name,
    to_name: "Anand Gautam",
    from_email: form.email,
    to_email: "anandgautam062003@gmail.com",
    message: form.message,
  };

  setLoading(true);

  emailjs
    .send("service_dy88ep7", "template_m1rn0xj", templateParams)
    .then(() => {
      setLoading(false);
      alert("Thank You, I will get back to you soon");
    })
    .catch((err) => {
      setLoading(false);
      console.log("Email error:", err);
      alert("Something went wrong! Please try again.");
    });
};

// Add more functions or code if needed
