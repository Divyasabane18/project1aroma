// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example dynamic interaction: Show alert on button click
document.querySelector('.btn-light').addEventListener('click', function () {
    alert('Contact us clicked!');
});

// Example: Handle form submission (if you have a form)
const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // Example: Send form data to server
    fetch('http://your-server-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};

// Add form event listener (if you have a form)
document.querySelector('#contact-form').addEventListener('submit', handleSubmit);
