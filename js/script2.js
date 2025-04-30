const container = document.getElementById('iconContainer');
const infoBox = document.getElementById('infoBox');

const chairs = [
  { image: '7.png', title: 'Eames Lounge', description: 'A classic lounge chair designed by Charles and Ray Eames.' },
  { image: 'chair2.png', title: 'Wassily Chair', description: 'Designed by Marcel Breuer, inspired by bicycle frames.' },
  { image: 'chair3.png', title: 'Red Blue Chair', description: 'Designed by Gerrit Rietveld in De Stijl style.' },
  { image: 'chair4.png', title: 'Barcelona Chair', description: 'Created by Mies van der Rohe for the 1929 International Exposition.' },
  // Add more chairs as needed
];

chairs.forEach((chair, index) => {
  const icon = document.createElement('div');
  icon.classList.add('chair-icon');
  icon.style.backgroundImage = `url(${chair.image})`;
  icon.style.left = `${Math.random() * 95}vw`;
  icon.style.top = `${Math.random() * 95}vh`;

  icon.addEventListener('click', (e) => {
    infoBox.innerHTML = `<strong>${chair.title}</strong><br>${chair.description}`;
    infoBox.style.left = `${e.pageX + 10}px`;
    infoBox.style.top = `${e.pageY + 10}px`;
    infoBox.style.display = 'block';
  });

  container.appendChild(icon);
});

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('chair-icon')) {
    infoBox.style.display = 'none';
  }
});
