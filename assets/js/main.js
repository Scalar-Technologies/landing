// Keep the copyright year current.
document.querySelectorAll("[data-year]").forEach(function (el) {
  el.textContent = String(new Date().getFullYear());
});

// Contact form: GitHub Pages is static, so the form opens the visitor's
// mail client with the message pre-filled instead of posting to a server.
// Texts come from data-* attributes so each language version sets its own.
var form = document.querySelector("[data-mailto-form]");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;

    var to = form.getAttribute("data-mailto-form");
    var from = form.elements.email.value.trim();
    var message = form.elements.message.value.trim();
    var subject = (form.getAttribute("data-subject") || "Website enquiry from") + " " + from;
    var body = message + "\n\n—\n" + (form.getAttribute("data-reply") || "Reply to:") + " " + from;

    window.location.href =
      "mailto:" + to +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    var note = form.querySelector("[data-form-note]");
    if (note) {
      note.textContent = (form.getAttribute("data-note") ||
        "Your email app should open now. If it doesn't, write to us directly at") + " " + to + ".";
    }
  });
}
