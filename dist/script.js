document.getElementById('connectButton').addEventListener('click', function (event) {
  // Fetch data from backend
  fetch('https://api-erp-dev.azurewebsites.net/api/hello') // Change this URL to match your backend endpoint
  .then(response => response.text()).then(data => {
    const responseText = document.getElementById('responseText');
    responseText.textContent = 'Response: ' + data;
    responseText.style.color = 'white'; // ตั้งสีข้อความเป็นสีขาวหลังจากโหลดข้อมูล
  }).catch(error => {
    console.error('Error:', error);
    const responseText = document.getElementById('responseText');
    responseText.textContent = 'Failed to fetch data';
    responseText.style.color = 'white'; // ตั้งสีข้อความเป็นสีขาวหากมีข้อผิดพลาด
  });

  // Create fireworks
  const rect = this.getBoundingClientRect();
  for (let i = 0; i < 100; i++) {
    createFirework(rect);
  }
});
function createFirework(rect) {
  const firework = document.createElement('div');
  firework.className = 'firework';
  firework.style.left = rect.left + rect.width / 2 + 'px';
  firework.style.top = rect.top + rect.height / 2 + 'px';
  firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  const angle = Math.random() * Math.PI * 2;
  const radius = Math.random() * 100 + 100; // Random radius between 100 and 200 pixels
  firework.style.setProperty('--translateX', `${Math.cos(angle) * radius}px`);
  firework.style.setProperty('--translateY', `${Math.sin(angle) * radius}px`);
  document.body.appendChild(firework);
  setTimeout(() => {
    firework.remove();
  }, 1200);
}