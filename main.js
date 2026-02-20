document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const messageDiv = document.getElementById("message");

  try {
    // demo data: username: "emilys", password: "emilyspass"
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("userData", JSON.stringify(data));
      window.location.href = "profile.html";
    } else {
      messageDiv.textContent = "Login failed: " + data.message;
      messageDiv.className = "error";
    }
  } catch (error) {
    messageDiv.textContent = "Error: " + error.message;
    messageDiv.className = "error";
  }
});
