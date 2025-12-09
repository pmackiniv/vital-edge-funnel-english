function checkConsent(event) {
  const box = document.getElementById("consent-checkbox");
  if (!box.checked) {
    event.preventDefault();
    alert("Please confirm your consent before continuing.");
    return false;
  }
}