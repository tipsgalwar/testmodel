// document.querySelector("form").addEventListener("submit", function (event) {
//   let name = document.getElementById("name").value.trim();
//   let mobile = document.getElementById("mobile").value.trim();

//   let nameRegex = /^[A-Za-z\s\u0900-\u097F]+$/;
//   if (!nameRegex.test(name)) {
//     alert("Invalid Name! Name should contain only letters.");
//     event.preventDefault(); // Form को Submit होने से रोकें
//     return;
//   }

//   let mobileRegex = /^[6-9]\d{9}$/; // केवल भारतीय नंबर (6-9 से शुरू)
//   if (!mobileRegex.test(mobile)) {
//     alert(
//       "Invalid Mobile Number! It should be a 10-digit number starting with 6-9."
//     );
//     event.preventDefault();
//     return;
//   }

//   // अगर सभी वैलिड हैं तो फॉर्म सबमिट होगा
// });

// // Disable copy functionality
// document.addEventListener("copy", function (event) {
//   event.preventDefault();
//   alert("Copying is disabled.");
// });

// // Auto-submit the form when the window is switched
// window.addEventListener("blur", function () {
//   document.getElementById("testForm").submit(); // Automatically submit the form
// });

// let timeLeft = 10; // 10 मिनट

// function startTimer() {
//   const timerElement = document.createElement("div");
//   timerElement.id = "timer";
//   timerElement.style.position = "fixed";
//   timerElement.style.top = "10px";
//   timerElement.style.right = "10px";
//   timerElement.style.background = "#ff4d4d";
//   timerElement.style.color = "white";
//   timerElement.style.padding = "10px 15px";
//   timerElement.style.borderRadius = "5px";
//   timerElement.style.fontSize = "18px";
//   document.body.appendChild(timerElement);

//   const interval = setInterval(() => {
//     let minutes = Math.floor(timeLeft / 60);
//     let seconds = timeLeft % 60;
//     timerElement.innerText = `Time Left: ${minutes}:${
//       seconds < 10 ? "0" + seconds : seconds
//     }`;

//     if (timeLeft <= 0) {
//       clearInterval(interval);
//       document.querySelector("form").submit(); // फॉर्म ऑटो-सबमिट करें
//     }
//     timeLeft--;
//   }, 1000);
// }

// window.onload = startTimer;

// // Form submission validation
// document.querySelector("form").addEventListener("submit", function (event) {
//   let name = document.getElementById("name").value.trim();
//   let mobile = document.getElementById("mobile").value.trim();

//   // Name validation: Only allow letters (Hindi/English) and spaces
//   let nameRegex = /^[A-Za-z\s\u0900-\u097F]+$/;
//   if (!nameRegex.test(name)) {
//     alert("Invalid Name! Name should contain only letters.");
//     event.preventDefault(); // Prevent form submission
//     return;
//   }

//   // Mobile Number Validation: Only 10 digits and numbers (0-9)
//   let mobileRegex = /^[6-9]\d{9}$/; // Indian numbers (starts with 6-9)
//   if (!mobileRegex.test(mobile)) {
//     alert(
//       "Invalid Mobile Number! It should be a 10-digit number starting with 6-9."
//     );
//     event.preventDefault(); // Prevent form submission
//     return;
//   }

//   // If all are valid, the form will be submitted
// });

// // Disable copy functionality
// document.addEventListener("copy", function (event) {
//   event.preventDefault();
//   alert("Copying is disabled.");
// });

// // Auto-submit the form when the window is switched
// window.addEventListener("blur", function () {
//   document.getElementById("testForm").submit(); // Automatically submit the form
// });

// // Timer functionality
// let timeLeft = 20; // 10 minutes (in seconds)

// function startTimer() {
//   const timerElement = document.createElement("div");
//   timerElement.id = "timer";
//   timerElement.style.position = "fixed";
//   timerElement.style.top = "10px";
//   timerElement.style.right = "10px";
//   timerElement.style.background = "#ff4d4d";
//   timerElement.style.color = "white";
//   timerElement.style.padding = "10px 15px";
//   timerElement.style.borderRadius = "5px";
//   timerElement.style.fontSize = "18px";
//   document.body.appendChild(timerElement);

//   const interval = setInterval(() => {
//     let minutes = Math.floor(timeLeft / 60);
//     let seconds = timeLeft % 60;
//     timerElement.innerText = `Time Left: ${minutes}:${
//       seconds < 10 ? "0" + seconds : seconds
//     }`;

//     if (timeLeft <= 0) {
//       clearInterval(interval);
//       document.querySelector("form").submit(); // Auto-submit the form when time is up
//     }
//     timeLeft--;
//   }, 1000);
// }

// window.onload = startTimer;

// // Form submission validation
// document.querySelector("form").addEventListener("submit", function (event) {
//     let name = document.getElementById("name").value.trim();
//     let mobile = document.getElementById("mobile").value.trim();
  
//     // Check if the form is already submitted
//     if (sessionStorage.getItem("formSubmitted")) {
//       alert("Ye form pehle hi submit ho chuka hai.");
//       event.preventDefault(); // Prevent further submission
//       return;
//     }
  
//     // Name validation: Only allow letters (Hindi/English) and spaces
//     let nameRegex = /^[A-Za-z\s\u0900-\u097F]+$/;
//     if (!nameRegex.test(name)) {
//       alert("Invalid Name! Name should contain only letters.");
//       event.preventDefault(); // Prevent form submission
//       return;
//     }
  
//     // Mobile Number Validation: Only 10 digits and numbers (0-9)
//     let mobileRegex = /^[6-9]\d{9}$/; // Indian numbers (starts with 6-9)
//     if (!mobileRegex.test(mobile)) {
//       alert(
//         "Invalid Mobile Number! It should be a 10-digit number starting with 6-9."
//       );
//       event.preventDefault(); // Prevent form submission
//       return;
//     }
  
//     // Disable the submit button after form submission to prevent multiple submits
//     document.querySelector("button").disabled = true;
  
//     // Mark the form as submitted in sessionStorage
//     sessionStorage.setItem("formSubmitted", "true"); 
  
//     // Redirect to Thank You page
//     window.location.href = '/thankyou.html'; // Redirect to Thank You page after submission
//   });
  
//   // Disable copy functionality
//   document.addEventListener("copy", function (event) {
//     event.preventDefault();
//     alert("Copying is disabled.");
//   });
  
//   // Auto-submit the form when the window is switched
//   window.addEventListener("blur", function () {
//     if (!sessionStorage.getItem("formSubmitted")) {
//       document.getElementById("testForm").submit(); // Automatically submit the form if not already submitted
//     }
//   });
  
//   // Timer functionality
//   let timeLeft = 20; // 10 minutes (in seconds)
  
//   function startTimer() {
//     const timerElement = document.createElement("div");
//     timerElement.id = "timer";
//     timerElement.style.position = "fixed";
//     timerElement.style.top = "10px";
//     timerElement.style.right = "10px";
//     timerElement.style.background = "#ff4d4d";
//     timerElement.style.color = "white";
//     timerElement.style.padding = "10px 15px";
//     timerElement.style.borderRadius = "5px";
//     timerElement.style.fontSize = "18px";
//     document.body.appendChild(timerElement);
  
//     const interval = setInterval(() => {
//       let minutes = Math.floor(timeLeft / 60);
//       let seconds = timeLeft % 60;
//       timerElement.innerText = `Time Left: ${minutes}:${
//         seconds < 10 ? "0" + seconds : seconds
//       }`;
  
//       if (timeLeft <= 0) {
//         clearInterval(interval);
//         if (!sessionStorage.getItem("formSubmitted")) {
//           document.querySelector("form").submit(); // Auto-submit the form when time is up
//           sessionStorage.setItem("formSubmitted", "true"); // Mark form as submitted
//         }
//       }
//       timeLeft--;
//     }, 1000);
//   }
  
//   window.onload = startTimer;
  
//   // Check if the form has been submitted before and refresh the page if the user goes back from the Thank You page
//   if (sessionStorage.getItem("formSubmitted") && window.location.pathname === "/test.html") {
//     // If user navigates back to test.html, refresh the page to prevent resubmission
//     window.location.reload(); 
//   }
  







// // Form submission validation
// document.querySelector("form").addEventListener("submit", function (event) {
//     let name = document.getElementById("name").value.trim();
//     let mobile = document.getElementById("mobile").value.trim();
  
//     // Check if the form is already submitted
//     if (sessionStorage.getItem("formSubmitted")) {
//       alert("Ye form pehle hi submit ho chuka hai.");
//       event.preventDefault(); // Prevent further submission
//       return;
//     }
  
//     // Name validation: Only allow letters (Hindi/English) and spaces
//     let nameRegex = /^[A-Za-z\s\u0900-\u097F]+$/;
//     if (!nameRegex.test(name)) {
//       alert("Invalid Name! Name should contain only letters.");
//       event.preventDefault(); // Prevent form submission
//       return;
//     }
  
//     // Mobile Number Validation: Only 10 digits and numbers (0-9)
//     let mobileRegex = /^[6-9]\d{9}$/; // Indian numbers (starts with 6-9)
//     if (!mobileRegex.test(mobile)) {
//       alert(
//         "Invalid Mobile Number! It should be a 10-digit number starting with 6-9."
//       );
//       event.preventDefault(); // Prevent form submission
//       return;
//     }
  
//     // Disable the submit button after form submission to prevent multiple submits
//     document.querySelector("button").disabled = true;
  
//     // Mark the form as submitted in sessionStorage
//     sessionStorage.setItem("formSubmitted", "true"); 
  
//     // Stop the timer when form is submitted
//     clearInterval(timerInterval);  // Stop the timer when form is submitted
  
//     // Redirect to Thank You page
//     window.location.href = '/thankyou.html'; // Redirect to Thank You page after submission
//   });
  
//   // Disable copy functionality
//   document.addEventListener("copy", function (event) {
//     event.preventDefault();
//     alert("Copying is disabled.");
//   });
  
//   // Auto-submit the form when the window is switched
//   window.addEventListener("blur", function () {
//     if (!sessionStorage.getItem("formSubmitted")) {
//       document.getElementById("testForm").submit(); // Automatically submit the form if not already submitted
//     }
//   });
  
//   // Timer functionality
//   let timeLeft = 10 * 60; // 10 minutes (in seconds)
//   let timerInterval;
  
//   function startTimer() {
//     const timerElement = document.createElement("div");
//     timerElement.id = "timer";
//     timerElement.style.position = "fixed";
//     timerElement.style.top = "10px";
//     timerElement.style.right = "10px";
//     timerElement.style.background = "#ff4d4d";
//     timerElement.style.color = "white";
//     timerElement.style.padding = "10px 15px";
//     timerElement.style.borderRadius = "5px";
//     timerElement.style.fontSize = "18px";
//     document.body.appendChild(timerElement);
  
//     timerInterval = setInterval(() => {
//       let minutes = Math.floor(timeLeft / 60);
//       let seconds = timeLeft % 60;
//       timerElement.innerText = `Time Left: ${minutes}:${
//         seconds < 10 ? "0" + seconds : seconds
//       }`;
  
//       if (timeLeft <= 0) {
//         clearInterval(timerInterval);  // Stop the timer when time is up
//         if (!sessionStorage.getItem("formSubmitted")) {
//           document.querySelector("form").submit(); // Auto-submit the form when time is up
//           sessionStorage.setItem("formSubmitted", "true"); // Mark form as submitted
//         }
//       }
//       timeLeft--;
//     }, 1000);
//   }
  
//   window.onload = startTimer;
  
//   // Check if the form has been submitted before and refresh the page if the user goes back from the Thank You page
//   if (sessionStorage.getItem("formSubmitted") && window.location.pathname === "/test.html") {
//     // If user navigates back to test.html, refresh the page to prevent resubmission
//     window.location.reload(); 
//   }
  


// // Form submission validation
// document.querySelector("form").addEventListener("submit", function (event) {
//     let name = document.getElementById("name").value.trim();
//     let mobile = document.getElementById("mobile").value.trim();
  
//     // Check if the form is already submitted
//     if (sessionStorage.getItem("formSubmitted")) {
//       alert("Ye form pehle hi submit ho chuka hai.");
//       event.preventDefault(); // Prevent further submission
//       return;
//     }
  
//     // Name validation: Only allow letters (Hindi/English) and spaces
//     let nameRegex = /^[A-Za-z\s\u0900-\u097F]+$/;
//     if (!nameRegex.test(name)) {
//       alert("Invalid Name! Name should contain only letters.");
//       event.preventDefault(); // Prevent form submission
//       return;
//     }
  
//     // Mobile Number Validation: Only 10 digits and numbers (0-9)
//     let mobileRegex = /^[6-9]\d{9}$/; // Indian numbers (starts with 6-9)
//     if (!mobileRegex.test(mobile)) {
//       alert(
//         "Invalid Mobile Number! It should be a 10-digit number starting with 6-9."
//       );
//       event.preventDefault(); // Prevent form submission
//       return;
//     }
  
//     // Disable the submit button after form submission to prevent multiple submits
//     document.querySelector("button").disabled = true;
  
//     // Mark the form as submitted in sessionStorage
//     sessionStorage.setItem("formSubmitted", "true"); 
  
//     // Stop the timer when form is submitted
//     clearInterval(timerInterval);  // Stop the timer when form is submitted
  
//     // Redirect to Thank You page
//     window.location.href = '/thankyou.html'; // Redirect to Thank You page after submission
// });
  
// // Disable copy functionality
// document.addEventListener("copy", function (event) {
//     event.preventDefault();
//     alert("Copying is disabled.");
// });

// // Auto-submit the form when the window is switched
// window.addEventListener("blur", function () {
//     if (!sessionStorage.getItem("formSubmitted")) {
//       document.getElementById("testForm").submit(); // Automatically submit the form if not already submitted
//     }
// });
  
// // Timer functionality
// let timeLeft = 10 * 60; // 10 minutes (in seconds)
// let timerInterval;
  
// function startTimer() {
//     const timerElement = document.createElement("div");
//     timerElement.id = "timer";
//     timerElement.style.position = "fixed";
//     timerElement.style.top = "10px";
//     timerElement.style.right = "10px";
//     timerElement.style.background = "#ff4d4d";
//     timerElement.style.color = "white";
//     timerElement.style.padding = "10px 15px";
//     timerElement.style.borderRadius = "5px";
//     timerElement.style.fontSize = "18px";
//     document.body.appendChild(timerElement);
  
//     timerInterval = setInterval(() => {
//       let minutes = Math.floor(timeLeft / 60);
//       let seconds = timeLeft % 60;
//       timerElement.innerText = `Time Left: ${minutes}:${
//         seconds < 10 ? "0" + seconds : seconds
//       }`;
  
//       if (timeLeft <= 0) {
//         clearInterval(timerInterval);  // Stop the timer when time is up
//         if (!sessionStorage.getItem("formSubmitted")) {
//           document.querySelector("form").submit(); // Auto-submit the form when time is up
//           sessionStorage.setItem("formSubmitted", "true"); // Mark form as submitted
//         }
//       }
//       timeLeft--;
//     }, 1000);
// }
  
// window.onload = startTimer;
  
// // Check if the form has been submitted before and refresh the page if the user goes back from the Thank You page
// if (sessionStorage.getItem("formSubmitted") && window.location.pathname === "/test.html") {
//     // If user navigates back to test.html, refresh the page to prevent resubmission
//     window.location.reload(); 
// }



// Form submission validation
document.querySelector("form").addEventListener("submit", function (event) {
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
  
    // Check if the form is already submitted
    if (localStorage.getItem("formSubmitted")) {
      alert("already submited");
      event.preventDefault(); // Prevent further submission
      return;
    }
  
    // Name validation: Only allow letters (Hindi/English) and spaces
    let nameRegex = /^[A-Za-z\s\u0900-\u097F]+$/;
    if (!nameRegex.test(name)) {
      alert("Invalid Name! Name should contain only letters.");
      event.preventDefault(); // Prevent form submission
      return;
    }
  
    // Mobile Number Validation: Only 10 digits and numbers (0-9)
    let mobileRegex = /^[6-9]\d{9}$/; // Indian numbers (starts with 6-9)
    if (!mobileRegex.test(mobile)) {
      alert(
        "Invalid Mobile Number! It should be a 10-digit number starting with 6-9."
      );
      event.preventDefault(); // Prevent form submission
      return;
    }
  
    // Disable the submit button after form submission to prevent multiple submits
    document.querySelector("button").disabled = true;
  
    // Mark the form as submitted in localStorage
    localStorage.setItem("formSubmitted", "true"); 
  
    // Stop the timer when form is submitted
    clearInterval(timerInterval);  // Stop the timer when form is submitted
  
    // Redirect to Thank You page
    window.location.href = '/thankyou.html'; // Redirect to Thank You page after submission
  });
  
  // Disable the right-click menu (context menu) to prevent copy option
  document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    // alert("Right-click is disabled.");
  });
  
  // Disable text selection (so that text cannot be highlighted for copying)
  document.addEventListener('selectstart', function(event) {
    event.preventDefault();
    // alert("Text selection is disabled.");
  });
  
  // Disable copy functionality
  document.addEventListener("copy", function (event) {
    event.preventDefault();
    alert("Copying is disabled.");
  });
  
  // Auto-submit the form when the window is switched
  window.addEventListener("blur", function () {
    if (!localStorage.getItem("formSubmitted")) {
      document.getElementById("testForm").submit(); // Automatically submit the form if not already submitted
    }
  });
  
  // Timer functionality
  let timeLeft = parseInt(localStorage.getItem('timeLeft')) || 10 * 60; // Get saved time or default to 10 minutes
  let timerInterval;
  
  function startTimer() {
    const timerElement = document.createElement("div");
    timerElement.id = "timer";
    timerElement.style.position = "fixed";
    timerElement.style.top = "10px";
    timerElement.style.right = "10px";
    timerElement.style.background = "#ff4d4d";
    timerElement.style.color = "white";
    timerElement.style.padding = "10px 15px";
    timerElement.style.borderRadius = "5px";
    timerElement.style.fontSize = "18px";
    document.body.appendChild(timerElement);
  
    timerInterval = setInterval(() => {
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      timerElement.innerText = `Time Left: ${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  
      if (timeLeft <= 0) {
        clearInterval(timerInterval);  // Stop the timer when time is up
        if (!localStorage.getItem("formSubmitted")) {
          document.querySelector("form").submit(); // Auto-submit the form when time is up
          localStorage.setItem("formSubmitted", "true"); // Mark form as submitted
        }
      }
      timeLeft--;
  
      // Save the remaining time in localStorage to persist across page reloads
      localStorage.setItem('timeLeft', timeLeft);
    }, 1000);
  }
  
  window.onload = startTimer;
  
  // Check if the form has been submitted before and refresh the page if the user goes back from the Thank You page
  if (localStorage.getItem("formSubmitted") && window.location.pathname === "/test.html") {
    // If user navigates back to test.html, refresh the page to prevent resubmission
    window.location.reload(); 
  }
  