document.addEventListener("DOMContentLoaded",()=>{
  const menuButton=document.querySelector('.mobile-menu-button');
  const nav=document.querySelector('.nav-menu');
  if(menuButton){
    menuButton.addEventListener('click',()=>nav.classList.toggle('open'));
  }

  const links=document.querySelectorAll('.nav-menu a');
  const sections=[...document.querySelectorAll('main section[id]')];
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      links.forEach(link=>link.classList.toggle('active', link.getAttribute('href')===`#${entry.target.id}`));
    });
  },{rootMargin:'-35% 0px -55% 0px'});
  sections.forEach(section=>observer.observe(section));

  const revealTargets=document.querySelectorAll('.reveal');
  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  },{threshold:0.12});
  revealTargets.forEach(el=>revealObserver.observe(el));

  links.forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));
});
