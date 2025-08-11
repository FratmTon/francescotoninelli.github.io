// Mobile nav toggle & active link
document.addEventListener('DOMContentLoaded', ()=> {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');

  if(btn && nav){
    btn.addEventListener('click', ()=> {
      nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.background = 'rgba(255,255,255,0.02)';
      nav.style.padding = '12px';
      nav.style.borderRadius = '10px';
      nav.style.position = 'absolute';
      nav.style.right = '20px';
      nav.style.top = '68px';
      nav.style.zIndex = 40;
    });
    window.addEventListener('resize', ()=> {
      if(window.innerWidth > 840) nav.style.display = 'flex';
      else nav.style.display = 'none';
    });
  }

  // Active link
  const links = document.querySelectorAll('.nav a');
  links.forEach(a => {
    if(a.href === location.href || location.pathname.endsWith(a.getAttribute('href'))){
      a.classList.add('active')
    }
  })
});
