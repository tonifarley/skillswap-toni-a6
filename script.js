function filterSkillsByCategory(skills, category) {
  if (category === 'All') {
    return skills;
  }
  return skills.filter(skill => skill.category === category);
}

const allSkills = [
  { 
    title: 'Python Tutoring', 
    category: 'Programming', 
    price: 20, 
    provider: 'By Sarah Johnson',
    description: 'Expert Python programming tutor specializing in data science and web development. Perfect for beginners and intermediate learners.'
  },
  { 
    title: 'JavaScript Help', 
    category: 'Programming', 
    price: 25, 
    provider: 'By Mike Chen',
    description: 'Full-stack developer offering JavaScript mentoring. Focus on React, Node.js, and modern web development practices.'
  },
  { 
    title: 'Guitar Lessons', 
    category: 'Music', 
    price: 15, 
    provider: 'By Alex Rivera',
    description: 'Professional guitarist teaching acoustic and electric guitar. All genres welcome, from beginner to advanced.'
  },
  { 
    title: 'Digital Photography', 
    category: 'Photography', 
    price: 30, 
    provider: 'By Emma Liu',
    description: 'Learn professional photography techniques, editing skills, and composition. Hands-on training with your camera.'
  },
  { 
    title: 'Resume Review', 
    category: 'Career', 
    price: 0, 
    provider: 'By James Taylor',
    description: 'Professional resume reviewer with 10+ years of HR experience. Get your resume noticed by employers.'
  }
];

function displaySkills(skills) {
  const container = document.getElementById('skills-container');
  
  if (!container) {
    console.error('skills-container not found');
    return;
  }
  
  container.innerHTML = ''; 
  
  skills.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `
      <div class="card-header">
        <h4>${skill.title}</h4>
        <span class="price">$${skill.price}/hour</span>
      </div>
      <p class="provider">${skill.provider}</p>
      <p class="description">${skill.description}</p>
      <p class="category">Category: ${skill.category}</p>
    `;
    
    card.addEventListener('click', function() {
      const title = this.querySelector('h4').textContent;
      const provider = this.querySelector('.provider').textContent;
      const price = this.querySelector('.price').textContent;
      
      alert(`${title}\n${provider}\nRate: ${price}\n\nClick to learn more and book a session!`);
    });
    
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      
      const category = button.getAttribute('data-category');
      const filteredSkills = filterSkillsByCategory(allSkills, category);
      displaySkills(filteredSkills);
    });
  });
  
  // Set "All" button as active initially
  if (filterButtons.length > 0) {
    filterButtons[0].classList.add('active');
  }
  
  // Display all skills initially
  displaySkills(allSkills);
});