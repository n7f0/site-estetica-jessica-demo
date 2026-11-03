const themeButton=document.getElementById('themeToggle');
const savedTheme=localStorage.getItem('jessica-demo-theme');
if(savedTheme==='escuro'){document.documentElement.dataset.tema='escuro';themeButton.textContent='☀';}
themeButton.addEventListener('click',()=>{const dark=document.documentElement.dataset.tema!=='escuro';document.documentElement.dataset.tema=dark?'escuro':'claro';themeButton.textContent=dark?'☀':'☾';localStorage.setItem('jessica-demo-theme',dark?'escuro':'claro');});
const menuButton=document.getElementById('menuToggle');
const nav=document.getElementById('nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰';}));
const modal=document.getElementById('demoModal');
function openModal(){modal.hidden=false;document.getElementById('modalOk').focus();}
function closeModal(){modal.hidden=true;}
document.querySelectorAll('[data-demo]').forEach(button=>button.addEventListener('click',openModal));
document.getElementById('modalClose').addEventListener('click',closeModal);
document.getElementById('modalOk').addEventListener('click',closeModal);
modal.addEventListener('click',event=>{if(event.target===modal)closeModal();});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeModal();});
document.getElementById('year').textContent=new Date().getFullYear();