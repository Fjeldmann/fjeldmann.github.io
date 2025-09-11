---
layout: default
title: Kontakt
description: Kom i kontakt med Fjeldmann
lang: da
---

<div class="page-header">
    <div class="container">
        <h1>Kontakt Os</h1>
        <p>Lad os diskutere hvordan vi kan hjælpe dig</p>
    </div>
</div>

<div class="content-section">
    <div class="container">
        <div class="contact-content">
            <div class="contact-info">
                <h2>Kom I Kontakt</h2>
                <p>Klar til at gøre i dag nemmere og bedre? Vi vil gerne høre fra dig.</p>
                
                <div class="contact-details">
                    <div class="contact-item">
                        <h4>E-mail</h4>
                        <p>contact@fjeldmann.dk</p>
                    </div>
                    
                    <div class="contact-item">
                        <h4>Hjemmeside</h4>
                        <p>fjeldmann.dk</p>
                    </div>
                </div>
            </div>
            
            <div class="contact-form">
                <h3>Send os en besked</h3>
                <form action="#" method="POST">
                    <div class="form-group">
                        <label for="name">Navn</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Emne</label>
                        <input type="text" id="subject" name="subject" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Besked</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    
                    <button type="submit" class="btn-submit">Send Besked</button>
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