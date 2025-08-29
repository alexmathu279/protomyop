let isOtpStage = false; // Tracks if we are at OTP input stage

function handleButtonClick() {
  const inputField = document.getElementById("inputField");
  const button = document.getElementById("actionButton");

  if (!isOtpStage) {
    const phone = inputField.value.trim();
    if (!phone || phone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    // Save phone number temporarily
    localStorage.setItem("phone", phone);

    // Simulate sending OTP...
    inputField.value = "";
    inputField.placeholder = "Enter OTP";
    button.textContent = "Login";
    isOtpStage = true;
  } else {
    const otp = inputField.value.trim();
    if (!otp || otp.length < 4) {
      alert("Please enter the OTP.");
      return;
    }

    // Simulate OTP check success
    console.log("OTP entered:", otp);
    goToPage2();
  }
}

function goToPage2() {
  window.location.href = "page2.html";
}
