// wag mong gagalawinn lahatt
function addToCart(productName) {
    alert(`${productName} 
Thankyou sa pagbili sana di ka mamatay!`);
}

// wag mong gagalawin tooo
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    if (searchQuery) {
        alert(`You searched for: ${searchQuery}`);
    } else {
        alert('Please enter a search term.');
    }
});