document.getElementById("revealBtn").addEventListener("click", function () {
  const secret = document.getElementById("secret");
  secret.classList.toggle("hidden");

  if (!secret.classList.contains("hidden")) {
    this.textContent = "🙈 Sembunyikan lagi";
  } else {
    this.textContent = "Klik kalau kamu penasaran 👀";
  }
});