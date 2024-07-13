import data from "@/constants/data";

export function sendEmail(event) {
  // Collect form data
  const formData = new FormData(event.target);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  // Compose email body
  const emailBody = Object.entries(formObject)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  // Create mailto link
  const mailtoLink = `mailto:${data.profile.email}?subject=${encodeURIComponent(
    formObject.subject || "Contact Form Submission",
  )}&body=${encodeURIComponent(emailBody)}`;

  // Open user's email client
  window.location.href = mailtoLink;
}
