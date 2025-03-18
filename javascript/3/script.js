function validateForm() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    if (username === "") {
      alert("Username must be filled out");
      return false;
    }
  
    if (email === "") {
      alert("Email must be filled out");
      return false;
    }
  
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return false;
    }
  
    return true;
  }