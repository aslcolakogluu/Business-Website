// Sayfa yüklendiğinde çalışır
document.addEventListener("DOMContentLoaded", function () {
  const showPassword = document.getElementById("showPassword");  // checkbox
  const passwordField = document.getElementById("password");     // şifre inputu

  // Checkbox durumu değişince şifre alanının türünü değiştir
  showPassword.addEventListener("change", function () {
    if (this.checked) {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  });
});

  function togglePassword() {
    const pwd = document.getElementById("password");
    const toggle = document.querySelector(".toggle-password");

    if (pwd.type === "password") {
      pwd.type = "text";
      toggle.textContent = "Şifreyi Gizle";
    } else {
      pwd.type = "password";
      toggle.textContent = "Şifreyi Göster";
    }
  }
