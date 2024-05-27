// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');
    const ticketForm = document.getElementById('ticket-form');
    const validateTicketForm = document.getElementById('validate-ticket-form');

    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const email = e.target.email.value;
            registerUser(name, email);
        });
    }

    if (ticketForm) {
        ticketForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            checkTicket(email);
        });
    }

    if (validateTicketForm) {
        validateTicketForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            validateTicket(email);
        });
    }
});

let users = []; // This will store our user data

function registerUser(name, email) {
    users.push({ name, email, validated: false });
    alert('Inscription réussie !');
}

function checkTicket(email) {
    const user = users.find(user => user.email === email);
    const ticketStatus = document.getElementById('ticket-status');
    if (user) {
        ticketStatus.textContent = user.validated ? 'Ticket Validé' : 'Ticket Non Validé';
    } else {
        ticketStatus.textContent = 'Utilisateur non trouvé';
    }
}

function validateTicket(email) {
    const user = users.find(user => user.email === email);
    const validationStatus = document.getElementById('validation-status');
    if (user) {
        user.validated = true;
        validationStatus.textContent = 'Ticket validé pour ' + email;
    } else {
        validationStatus.textContent = 'Utilisateur non trouvé';
    }
}