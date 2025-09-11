---
layout: default
title: Contact
description: Get in touch with Fjeldmann
---

<div class="page-header">
    <div class="container">
        <h1>Contact Us</h1>
        <p>Let's discuss how we can help you</p>
    </div>
</div>

<div class="content-section">
    <div class="container">
        <div class="contact-content">
            <div class="contact-info">
                <h2>Get In Touch</h2>
                <p>Ready to make today easier and better? We'd love to hear from you.</p>
                
                <div class="contact-details">
                    <div class="contact-item">
                        <h4>Email</h4>
                        <p>info@fjeldmann.dk</p>
                    </div>
                    
                    <div class="contact-item">
                        <h4>Website</h4>
                        <p>fjeldmann.dk</p>
                    </div>
                </div>
            </div>
            
            <div class="contact-form">
                <h3>Send us a message</h3>
                <form action="#" method="POST">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    
                    <button type="submit" class="btn-submit">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</div>

<style>
.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 2rem;
}

.contact-info h2 {
    color: #333;
    margin-bottom: 1rem;
}

.contact-details {
    margin-top: 2rem;
}

.contact-item {
    margin-bottom: 1.5rem;
}

.contact-item h4 {
    color: #667eea;
    margin-bottom: 0.5rem;
}

.contact-form {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 10px;
}

.contact-form h3 {
    color: #333;
    margin-bottom: 1.5rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 500;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #667eea;
}

.btn-submit {
    background: #667eea;
    color: white;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;
}

.btn-submit:hover {
    background: #5a6fd8;
}

@media screen and (max-width: 768px) {
    .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}
</style>