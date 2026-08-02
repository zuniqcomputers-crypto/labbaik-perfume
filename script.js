const perfumes = [
    { name: "Ramza", price: "3,299", desc: "A masterful synergy of vibrant citrus and warm oriental depth. Engineered for the visionary." },
    { name: "Pink Janan", price: "2,199", desc: "Elegant floral hand-picked roses with a velvety finish. A sensory odyssey of grace." },
    { name: "Zargay 332", price: "6,000", desc: "Prestigious composition of power and deep heritage. For those who command the room." },
    { name: "Sauvage", price: "8,500", desc: "Raw, noble and untamed. A woody trail of powerful ambroxan molecules." },
    { name: "Malaika", price: "6,000", desc: "Divine white floral bouquet capturing timeless grace and ethereal beauty." },
    { name: "Babli Musk", price: "4,000", desc: "Velvety smooth white musk. A transparent layer of everyday luxury presence." },
    { name: "Attraction", price: "3,500", desc: "Magnetic fusion of dark berries and rich leather notes. Tailored for nocturnal elites." },
    { name: "Dakhoon Labbaik", price: "6,000", desc: "Traditional artisan incense reimagined. Smokey agarwood meets spiritual resonance." },
    { name: "Danger", price: "8,500", desc: "Provocative spicy-oriental blend. A high-risk, high-reward olfactory statement." },
    { name: "Creed 7K", price: "6,000", desc: "Sophisticated fruity-chypre representing global victory and supreme vision." },
    { name: "E M", price: "3,300", desc: "Sharp crisp metallic scent designed for the urban pioneer and modern professional." },
    { name: "Marriage Night", price: "3,300", desc: "Seductive honeyed blend of night-blooming florals and deep golden amber." },
    { name: "PD+", price: "3,300", desc: "Aquatic explosion of lime and sea salt. Unending freshness through the modern day." },
    { name: "Musk Al Jadeed", price: "3,300", desc: "A futuristic evolution of musk. Minimalist, airy, and hyper-modern." },
    { name: "Al Fareed", price: "5,000", desc: "The Unique One. A niche fragrance combining rare desert oud and wild mountain honey." }
];

const grid = document.getElementById('perfumeGrid');
const search = document.getElementById('perfumeSearch');
const empty = document.getElementById('emptyState');
const counter = document.getElementById('counter');

function render(data) {
    grid.innerHTML = '';
    if (data.length === 0) {
        empty.classList.remove('hidden');
        counter.textContent = "Data Link Severed - No Matches";
    } else {
        empty.classList.add('hidden');
        counter.textContent = `Scent Analysis: ${data.length} Masterpieces Active`;
        data.forEach((p, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            // Staggered animation effect
            card.style.animationDelay = `${index * 0.1}s`;
            card.innerHTML = `
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <div class="price">Rs. ${p.price}</div>
            `;
            grid.appendChild(card);
        });
    }
}

search.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    const filtered = perfumes.filter(p => p.name.toLowerCase().includes(term));
    render(filtered);
});

// Booting up the UI
window.onload = () => {
    render(perfumes);
};
