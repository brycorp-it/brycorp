document.getElementById('enquiries-email').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = `mailto:enquiries@brycorp.co.za?${new URLSearchParams({
        subject: "Enquiry"
    }).toString()}`;
});

document.getElementById('compliance-email').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = `mailto:<a href="#" id="enquiries-email">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>compliance@brycorp.co.za</a>?${new URLSearchParams({
        subject: "Compliance"
    }).toString()}`;
});

document.getElementById('enquiries-phone').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'tel:+27671063764'; 
});

document.getElementById('location-link').addEventListener('click', (e) => {
  e.preventDefault();
  window.open('https://www.google.com/maps/search/?api=1&query=293+The+Avenue,+Henley+on+Klip,+Meyerton,+1961', '_blank');
});