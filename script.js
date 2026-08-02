const perfumes = [
    { name: "Ramza", price: "3,299", desc: "A masterful synergy of vibrant citrus notes and warm oriental depth. Designed for the visionary who leads with quiet confidence." },
    { name: "Pink Janan", price: "2,199", desc: "An elegant floral odyssey featuring hand-picked rose and ylang-ylang. A soft, velvety finish that lingers like a sweet memory." },
    { name: "Zargay 332", price: "6,000", desc: "A prestigious composition evoking power and heritage. Rich spicy accords meet amber for a scent that commands the room." },
    { name: "Sauvage", price: "8,500", desc: "Raw, noble, and untamed. Radiant top notes of Calabrian bergamot collide with a powerful, woody trail of ambroxan." },
    { name: "Malaika", price: "6,000", desc: "Divine and ethereal. A celestial white floral bouquet that captures the essence of grace and timeless sophistication." },
    { name: "Babli Musk", price: "4,000", desc: "The ultimate clean luxury. A smooth, powdery musk that acts as a transparent veil of elegance for your everyday presence." },
    { name: "Attraction", price: "3,500", desc: "Magnetic and mysterious. A compelling fusion of dark berries and rich leather notes tailored for the evening elite." },
    { name: "Dakhoon Labbaik", price: "6,000", desc: "Our signature artisan incense. Deeply grounding notes of agarwood and resins create a spiritual and smokey aura." },
    { name: "Danger", price: "8,500", desc: "Provocative and intense. A high-stakes spicy-oriental blend designed for those who dare to be different." },
    { name: "Creed 7K", price: "6,000", desc: "Inspired by global success. A sophisticated fruity-chypre masterpiece that represents strength, vision, and victory." },
    { name: "E M", price: "3,300", desc: "Extreme Modernity. A sharp, crisp metallic scent designed for the urban pioneer. Refreshing mint meets heavy cedarwood." },
    { name: "Marriage Night", price: "3,300", desc: "Romance in liquid form. A seductive, honeyed blend of night-blooming florals and deep amber warmth." },
    { name: "PD+", price: "3,300", desc: "The ultimate daily companion. An aquatic explosion of lime and sea salt that provides everlasting freshness through the day." },
    { name: "Musk Al Jadeed", price: "3,300", desc: "A futuristic evolution of musk. This transparent scent brings an airy, modern quality to a traditional foundation." },
    { name: "Al Fareed", price: "5,000", desc: "The Unique One. A niche fragrance combining rare oud with wild honey for an unparalleled olfactory experience." }
];

const grid = document.getElementById('perfumeGrid');
const search = document.getElementById('perfumeSearch');
const empty = document.getElementById('emptyState');
const counter = document.getElementById('counter');

function render(list) {
    grid.innerHTML = '';
    if (list.length === 0) {
        empty.classList.remove('hidden');
        counter.textContent = "No matches found";
    } else {
        empty.classList.add('hidden');
        counter.textContent = `Displaying ${list.length} masterpieces`;
        list.forEach(p => {
            const item = document.createElement('div');
            item.className = 'card';
            item.innerHTML = `
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <div class="price-tag">Rs. ${p.price}</div>
            `;
            grid.appendChild(item);
        });
    }
}

search.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    const filtered = perfumes.filter(p => p.name.toLowerCase().includes(term));
    render(filtered);
});

// Initial Load
render(perfumes);