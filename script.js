function checkConsent(e) {
  const box = document.getElementById("consent-checkbox");
  if (!box.checked) {
    e.preventDefault();
    alert("Please confirm your consent before continuing.");
    return false;
  }
  return true;
}
