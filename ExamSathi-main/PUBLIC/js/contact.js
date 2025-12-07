// Contact form handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simulate form submission (replace with actual backend API call)
        setTimeout(() => {
            // Show success message
            formMessage.className = 'form-message success';
            formMessage.textContent = `Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`;
            
            // Reset form
            contactForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.className = 'form-message';
            }, 5000);
        }, 500);
        
        // For actual implementation, you would make an API call:
        // 
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ name, email, message })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     formMessage.className = 'form-message success';
        //     formMessage.textContent = 'Message sent successfully!';
        //     contactForm.reset();
        // })
        // .catch(error => {
        //     formMessage.className = 'form-message error';
        //     formMessage.textContent = 'Error sending message. Please try again.';
        // });
    });
});
