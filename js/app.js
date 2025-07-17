// 粒子/数字雨动画
const canvas = document.getElementById('particle-bg');
const ctx = canvas.getContext('2d');
let w = window.innerWidth, h = window.innerHeight;
canvas.width = w; canvas.height = h;
let fontSize = 18, columns = Math.floor(w / fontSize), drops = [];
const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
for(let i=0;i<columns;i++) drops[i]=1;
function drawRain() {
  ctx.fillStyle = 'rgba(10,14,39,0.18)';
  ctx.fillRect(0,0,w,h);
  ctx.font = fontSize + "px Space Mono, monospace";
  ctx.fillStyle = '#00E5FF';
  for(let i=0;i<drops.length;i++){
    let text = chars[Math.floor(Math.random()*chars.length)];
    ctx.fillText(text, i*fontSize, drops[i]*fontSize);
    if(drops[i]*fontSize > h && Math.random()>0.975) drops[i]=0;
    drops[i]++;
  }
  requestAnimationFrame(drawRain);
}
drawRain();
window.addEventListener('resize',()=>{
  w=window.innerWidth; h=window.innerHeight;
  canvas.width=w; canvas.height=h;
  columns=Math.floor(w/fontSize); drops=[];
  for(let i=0;i<columns;i++) drops[i]=1;
});
// 导航栏滚动变色
const navbar = document.getElementById('navbar');
window.addEventListener('scroll',()=>{
  if(window.scrollY>32) navbar.classList.add('solid');
  else navbar.classList.remove('solid');
});
// 数字增长计数动画
function animateCounter(el) {
  const target = +el.dataset.count;
  let start = 0;
  const step = () => {
    start += Math.ceil((target-start)/12);
    if(start>=target) { el.textContent=target; return; }
    el.textContent = start;
    requestAnimationFrame(step);
  };
  step();
}
document.querySelectorAll('.counter').forEach(el=>{
  let shown = false;
  function onScroll() {
    const rect = el.getBoundingClientRect();
    if(!shown && rect.top<window.innerHeight-40) {
      animateCounter(el); shown=true;
      window.removeEventListener('scroll',onScroll);
    }
  }
  window.addEventListener('scroll',onScroll);
  onScroll();
});
// 3D hover tilt
function tiltCard(card) {
  card.addEventListener('mousemove',e=>{
    const rect=card.getBoundingClientRect();
    const x=(e.clientX-rect.left)/rect.width-0.5;
    const y=(e.clientY-rect.top)/rect.height-0.5;
    card.style.transform=`rotateY(${x*18}deg) rotateX(${-y*18}deg)`;
  });
  card.addEventListener('mouseleave',()=>{
    card.style.transform='rotateY(0) rotateX(0)';
  });
}
document.querySelectorAll('.card-3d').forEach(tiltCard);
// 产品卡片抽屉
function openDrawer(id) {
  document.getElementById('drawer-'+id).classList.add('open');
}
function closeDrawer() {
  document.querySelectorAll('.drawer').forEach(d=>d.classList.remove('open'));
}
document.querySelectorAll('.btn-detail').forEach(btn=>{
  btn.addEventListener('click',()=>openDrawer(btn.dataset.drawer));
});
document.querySelectorAll('.drawer-close').forEach(btn=>{
  btn.addEventListener('click',closeDrawer);
});
document.querySelectorAll('.drawer').forEach(drawer=>{
  drawer.addEventListener('click',e=>{if(e.target===drawer) closeDrawer();});
});
// logo墙自动滚动（无限循环）
const logoTrack = document.querySelector('.logo-track');
if(logoTrack) {
  logoTrack.innerHTML += logoTrack.innerHTML; // 复制一份实现无缝滚动
}
// 按钮波纹反馈
function addRipple(btn) {
  btn.addEventListener('click',function(e){
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = e.offsetX+'px';
    ripple.style.top = e.offsetY+'px';
    this.appendChild(ripple);
    setTimeout(()=>ripple.remove(),500);
  });
}
document.querySelectorAll('.btn-detail,.btn-submit').forEach(addRipple);
// 表单提交 toast
const form = document.getElementById('contact-form');
const toast = document.getElementById('toast');
if(form) {
  form.addEventListener('submit',function(e){
    e.preventDefault();
    fetch(form.action,{
      method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}
    }).then(r=>{
      toast.classList.add('show');
      setTimeout(()=>toast.classList.remove('show'),2600);
      form.reset();
    });
  });
}
// 图片懒加载
if('loading' in HTMLImageElement.prototype) {
  document.querySelectorAll('img[loading="lazy"]').forEach(img=>{
    if(img.complete) return;
    img.addEventListener('load',()=>img.classList.add('loaded'));
  });
}
// GSAP滚动动画
if(window.gsap && window.ScrollTrigger) {
  gsap.utils.toArray('.about-inner,.products-inner,.cases-inner,.contact-inner').forEach((el,i)=>{
    gsap.from(el,{
      opacity:0, y:60, duration:1, delay:0.1*i,
      scrollTrigger:{ trigger:el, start:'top 80%', toggleActions:'play none none none' }
    });
  });
} 