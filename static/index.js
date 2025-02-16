document.querySelector("form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let institute = document.getElementById("institute").value.trim();
    let education = document.getElementById("education").value.trim();
    let city = document.getElementById("city").value.trim();

    let nameRegex = /^[A-Za-z\s\u0900-\u097F]+$/;
    if (!nameRegex.test(name)) {
        alert("Invalid Name! Only letters and spaces are allowed.");
        event.preventDefault();
        return;
    }

    let mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
        alert("Invalid Mobile Number! It should be a 10-digit number starting with 6-9.");
        event.preventDefault();
        return;
    }

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Invalid Email! Enter a valid email address.");
        event.preventDefault();
        return;
    }

    // let textRegex = /^[A-Za-z\s\u0900-\u097F]+$/;
    // if (!textRegex.test(institute)) {
    //     alert("Invalid Institute Name! Only letters and spaces are allowed.");
    //     event.preventDefault();
    //     return;
    // }
    // if (!textRegex.test(education)) {
    //     alert("Invalid Education Level! Only letters and spaces are allowed.");
    //     event.preventDefault();
    //     return;
    // }
    // if (!textRegex.test(city)) {
    //     alert("Invalid City Name! Only letters and spaces are allowed.");
    //     event.preventDefault();
    //     return;
    // }

});
