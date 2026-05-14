document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const btn = document.getElementById("submitBtn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    btn.innerText = "Verifying...";
    btn.disabled = true;

    const username = document.getElementById("username").value;

    setTimeout(() => {
      alert(`Welcome back, ${username}!`);

      btn.innerText = "Sign In";
      btn.disabled = false;
      form.reset();
    }, 1200);
  });
});