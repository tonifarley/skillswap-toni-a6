document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.skill-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            const provider = this.querySelector('.provider').textContent;
            const price = this.querySelector('.price').textContent;
            
            alert(`${title}\n${provider}\nRate: ${price}\n\nClick to learn more and book a session!`);
        });
    });
});