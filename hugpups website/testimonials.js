function previewTestimonial() {
    // Get the values from the input fields
    const name = document.getElementById('name-input').value;
    const title = document.getElementById('title-input').value;
    const message = document.getElementById('message-input').value;
   
    // Update the preview fields
    document.getElementById('name-field').textContent = name ? `Full Name: ${name}` : ' Full Name:';
    document.getElementById('title-field').textContent = title ? `Title: ${title}` : 'Title:';
    document.getElementById('message-field').textContent = message ? `Message: ${message}` : 'Message:';
  }
   
  document.getElementById('name-input').addEventListener("input", previewTestimonial);
  document.getElementById('title-input').addEventListener("input", previewTestimonial);
  document.getElementById('message-input').addEventListener("input", previewTestimonial);
   
  previewTestimonial()