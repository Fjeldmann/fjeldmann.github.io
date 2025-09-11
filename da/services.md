---
layout: default
title: Tjenester
description: Vores software udviklings tjenester
lang: da
---

<div class="page-header">
    <div class="container">
        <h1>Vores Tjenester</h1>
        <p>Gøre teknologi arbejde bedre for dig</p>
    </div>
</div>

<div class="content-section">
    <div class="container">
        <div class="services-grid">
            <div class="service">
                <h3>Specialsyet Software Udvikling</h3>
                <p>Skræddersyede løsninger designet specifikt til dine forretningsbehov og krav.</p>
            </div>
            
            <div class="service">
                <h3>Web Applikation Udvikling</h3>
                <p>Moderne, responsive web applikationer der fungerer problemfrit på tværs af alle enheder.</p>
            </div>
            
            <div class="service">
                <h3>Software Rådgivning</h3>
                <p>Ekspert rådgivning om teknologi valg, arkitektur beslutninger og projekt planlægning.</p>
            </div>
            
            <div class="service">
                <h3>Vedligeholdelse & Support</h3>
                <p>Løbende support og vedligeholdelse for at holde din software kørende problemfrit.</p>
            </div>
        </div>
    </div>
</div>

<style>
.page-header {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%), url('{{ "/assets/images/slide2.jpg" | relative_url }}');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: white;
    padding: 8rem 2rem 4rem;
    text-align: center;
    margin-top: 70px;
}

.page-header h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.page-header p {
    font-size: 1.2rem;
    opacity: 0.9;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.service {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-left: 4px solid #667eea;
}

.service h3 {
    color: #333;
    margin-bottom: 1rem;
}

.service p {
    color: #666;
    line-height: 1.6;
}
</style>