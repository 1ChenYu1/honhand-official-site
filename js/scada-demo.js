// SCADA DEMO 3D
(function(){
const CANVAS_ID = 'scadaCanvas';
const WRAPPER_CLASS = 'scada-demo-wrapper';
const HUD_CLASS = 'scada-hud';
const FULL_BTN_CLASS = 'scada-fullscreen-btn';
const POPUP_CLASS = 'scada-popup';
const HIGHLIGHT_CLASS = 'scada-highlight';
const FULLSCREEN_CLASS = 'scada-demo-fullscreen';
const SVG_CLASS = 'scada-static-svg';
const THREE_CDN = 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js';
const GSAP_CDN = 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js';
const DATGUI_CDN = 'https://cdn.jsdelivr.net/npm/dat.gui@0.7.9/build/dat.gui.min.js';
const FONT_CDN = 'https://cdn.jsdelivr.net/npm/dseg@0.46.0/fonts/DSEG14Classic/DSEG14Classic-Regular.woff2';

// 响应式降级
if(window.matchMedia('(max-width:767px)').matches){
  // 移动端静态SVG
  const wrapper = document.querySelector('.'+WRAPPER_CLASS);
  if(wrapper){
    wrapper.innerHTML = `<svg class='${SVG_CLASS}' viewBox="0 0 1200 500" width="100%" height="500">
      <rect x="40" y="120" width="180" height="80" rx="18" fill="#00E5FF11" stroke="#00E5FF" stroke-width="4"/>
      <rect x="40" y="120" width="180" height="80" rx="18" fill="none" stroke="#C9A96E" stroke-width="0" class="svg-pump-hl"/>
      <rect x="40" y="320" width="180" height="80" rx="18" fill="#00E5FF11" stroke="#00E5FF" stroke-width="4"/>
      <rect x="40" y="320" width="180" height="80" rx="18" fill="none" stroke="#C9A96E" stroke-width="0" class="svg-pump-hl"/>
      <rect x="320" y="220" width="120" height="180" rx="30" fill="#00E5FF11" stroke="#00E5FF" stroke-width="4"/>
      <rect x="320" y="220" width="120" height="180" rx="30" fill="none" stroke="#C9A96E" stroke-width="0" class="svg-tank-hl"/>
      <rect x="1040" y="120" width="120" height="80" rx="18" fill="#00E5FF11" stroke="#00E5FF" stroke-width="4"/>
      <rect x="1040" y="120" width="120" height="80" rx="18" fill="none" stroke="#C9A96E" stroke-width="0" class="svg-pump-hl"/>
      <rect x="1040" y="320" width="120" height="80" rx="18" fill="#00E5FF11" stroke="#00E5FF" stroke-width="4"/>
      <rect x="1040" y="320" width="120" height="80" rx="18" fill="none" stroke="#C9A96E" stroke-width="0" class="svg-pump-hl"/>
      <rect x="440" y="260" width="600" height="20" fill="#00E5FF33" stroke="#00E5FF" stroke-width="4"/>
      <rect x="440" y="260" width="600" height="20" fill="none" stroke="#C9A96E" stroke-width="0" class="svg-pipe-hl"/>
      <circle cx="380" cy="310" r="18" fill="#00E5FF" class="svg-liquid"/>
      <text x="60" y="170" font-size="32" fill="#C9A96E" font-family="'DSEG14 Classic',monospace">PUMP_01</text>
      <text x="60" y="370" font-size="32" fill="#C9A96E" font-family="'DSEG14 Classic',monospace">PUMP_02</text>
      <text x="1060" y="170" font-size="32" fill="#C9A96E" font-family="'DSEG14 Classic',monospace">PUMP_03</text>
      <text x="340" y="250" font-size="32" fill="#C9A96E" font-family="'DSEG14 Classic',monospace">TANK</text>
      <text x="500" y="250" font-size="28" fill="#00E5FF" font-family="'DSEG14 Classic',monospace">PIPE_A</text>
      <text x="500" y="290" font-size="28" fill="#00E5FF" font-family="'DSEG14 Classic',monospace">PIPE_B</text>
    </svg>`;
    // 简单闪烁动画
    setInterval(()=>{
      document.querySelectorAll('.svg-pump-hl').forEach(e=>e.setAttribute('stroke-width',e.getAttribute('stroke-width')==='0'?'6':'0'));
      document.querySelectorAll('.svg-tank-hl').forEach(e=>e.setAttribute('stroke-width',e.getAttribute('stroke-width')==='0'?'6':'0'));
      document.querySelectorAll('.svg-pipe-hl').forEach(e=>e.setAttribute('stroke-width',e.getAttribute('stroke-width')==='0'?'6':'0'));
      document.querySelectorAll('.svg-liquid').forEach(e=>e.setAttribute('fill',e.getAttribute('fill')==='#00E5FF'?'#C9A96E':'#00E5FF'));
    }, 700);
  }
  return;
}
// 动态加载CDN
function loadScript(src){return new Promise(r=>{const s=document.createElement('script');s.src=src;s.onload=r;document.head.appendChild(s);});}
function loadFont(){const f=new FontFace('DSEG14 Classic',`url(${FONT_CDN})`);f.load().then(font=>{document.fonts.add(font);});}
// 主逻辑
Promise.all([
  loadScript(THREE_CDN),
  loadScript(GSAP_CDN),
  loadScript(DATGUI_CDN)
]).then(()=>{
  loadFont();
  const THREE=window.THREE, gsap=window.gsap;
  // 场景
  const canvas=document.getElementById(CANVAS_ID);
  const wrapper=canvas.parentElement;
  let w=canvas.clientWidth, h=canvas.clientHeight;
  const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
  renderer.setClearColor(0x000000,0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  renderer.setSize(w,h,false);
  // 相机
  const camera=new THREE.PerspectiveCamera(38,w/h,0.1,100);
  camera.position.set(0,7,22);
  // 场景
  const scene=new THREE.Scene();
  // 灯光
  scene.add(new THREE.AmbientLight(0x00e5ff,0.7));
  // 设备建模
  const matLine = new THREE.MeshBasicMaterial({color:0x00e5ff,wireframe:true,transparent:true,opacity:0.7});
  const matFill = new THREE.MeshBasicMaterial({color:0x00e5ff,transparent:true,opacity:0.10});
  // 泵
  const pumpGeo = new THREE.CylinderGeometry(1.2,1.2,3,24,1);
  const pumpMeshs = [];
  const pumpNames = ['Pump_01','Pump_02','Pump_03'];
  const pumpPos = [ [-7,0,0], [0,-6,0], [7,0,0] ];
  for(let i=0;i<3;i++){
    const group=new THREE.Group();
    const body=new THREE.Mesh(pumpGeo,matFill.clone());
    const wire=new THREE.Mesh(pumpGeo,matLine.clone());
    group.add(body,wire);
    // 叶轮
    const impGeo=new THREE.CylinderGeometry(0.7,0.7,0.5,12,1);
    const impMat=new THREE.MeshBasicMaterial({color:0xC9A96E,transparent:true,opacity:0.7});
    const imp=new THREE.Mesh(impGeo,impMat);
    imp.position.y=1.2;
    group.add(imp);
    group.position.set(...pumpPos[i]);
    group.name=pumpNames[i];
    scene.add(group);
    pumpMeshs.push({group,imp});
  }
  // 管道
  const pipeGeo = new THREE.CylinderGeometry(0.3,0.3,10,16,1);
  const pipeA = new THREE.Mesh(pipeGeo,matFill.clone());
  pipeA.position.set(0,0,0); pipeA.rotation.z=Math.PI/2; scene.add(pipeA);
  const pipeAWire = new THREE.Mesh(pipeGeo,matLine.clone());
  pipeAWire.position.copy(pipeA.position); pipeAWire.rotation.copy(pipeA.rotation); scene.add(pipeAWire);
  // Pipe B
  const pipeBGeo = new THREE.CylinderGeometry(0.3,0.3,7,16,1);
  const pipeB = new THREE.Mesh(pipeBGeo,matFill.clone());
  pipeB.position.set(0,-3.5,0); pipeB.rotation.x=Math.PI/2; scene.add(pipeB);
  const pipeBWire = new THREE.Mesh(pipeBGeo,matLine.clone());
  pipeBWire.position.copy(pipeB.position); pipeBWire.rotation.copy(pipeB.rotation); scene.add(pipeBWire);
  // 储罐
  const tankGeo = new THREE.CylinderGeometry(2.2,2.2,6,32,1,true);
  const tank = new THREE.Mesh(tankGeo,matFill.clone());
  tank.position.set(0,6,0); scene.add(tank);
  const tankWire = new THREE.Mesh(tankGeo,matLine.clone());
  tankWire.position.copy(tank.position); scene.add(tankWire);
  // 液位
  const tankLevelGeo = new THREE.CylinderGeometry(2.1,2.1,1,32,1);
  const tankLevelMat = new THREE.MeshBasicMaterial({color:0x00E5FF,transparent:true,opacity:0.5});
  const tankLevel = new THREE.Mesh(tankLevelGeo,tankLevelMat);
  tankLevel.position.set(0,3.5,0);
  scene.add(tankLevel);
  // 粒子流动
  let points, pointsMat, pointsGeo;
  if(window.innerWidth>=1024){
    pointsGeo = new THREE.BufferGeometry();
    const N = 60, arr = [];
    for(let i=0;i<N;i++){
      arr.push(-5+10*i/N,0.3,0);
    }
    pointsGeo.setAttribute('position',new THREE.Float32BufferAttribute(arr,3));
    pointsMat = new THREE.PointsMaterial({color:0x00E5FF,size:0.22,transparent:true,opacity:0.8});
    points = new THREE.Points(pointsGeo,pointsMat);
    scene.add(points);
  }
  // HUD
  const hud = document.createElement('div');
  hud.className = HUD_CLASS;
  hud.innerHTML = `<span class="scada-clock">--:--:--</span><span class="scada-status"><span class="scada-status-dot"></span>RUN</span>`;
  wrapper.appendChild(hud);
  // 全屏按钮
  const fullBtn = document.createElement('button');
  fullBtn.className = FULL_BTN_CLASS;
  fullBtn.innerText = '全屏演示';
  fullBtn.setAttribute('aria-label','全屏演示');
  wrapper.appendChild(fullBtn);
  // 交互弹窗
  let popup = null;
  function showPopup(name,power){
    if(popup) popup.remove();
    popup = document.createElement('div');
    popup.className = POPUP_CLASS;
    popup.innerHTML = `<button class='popup-close' aria-label='关闭'>×</button><h4>${name}</h4><div class='popup-status'>运行中</div><div class='popup-power'>功率 ${power} kW</div>`;
    wrapper.appendChild(popup);
    popup.querySelector('.popup-close').onclick = ()=>popup.remove();
    setTimeout(()=>{if(popup)popup.remove();},4000);
  }
  // 动画数据
  let pumpSpeed = [0.8,0.8,0.8];
  let pumpPower = [75,75,75];
  let tankLevelVal = 0.6;
  function randomizeData(){
    for(let i=0;i<3;i++){
      pumpSpeed[i]=0.6+0.4*Math.random();
      pumpPower[i]=Math.round(60+40*Math.random());
    }
    tankLevelVal=0.4+0.5*Math.random();
    if(pointsMat){
      pointsMat.color.setHSL(0.55+0.15*Math.random(),1,0.5);
    }
  }
  setInterval(randomizeData,2000);
  // 液位动画
  gsap.to({}, {duration:2,repeat:-1,onRepeat(){
    gsap.to(tankLevel.scale,{y:tankLevelVal*6,ease:'power1.inOut',duration:1.8});
  }});
  // 叶轮动画
  function animate(){
    for(let i=0;i<3;i++){
      pumpMeshs[i].imp.rotation.y += 0.12*pumpSpeed[i];
    }
    if(points){
      let arr = pointsGeo.attributes.position.array;
      for(let i=0;i<arr.length;i+=3){
        arr[i] += 0.04*pumpSpeed[0];
        if(arr[i]>5) arr[i]=-5;
      }
      pointsGeo.attributes.position.needsUpdate = true;
    }
    renderer.render(scene,camera);
    if(running) requestAnimationFrame(animate);
  }
  // HUD时钟
  function updateClock(){
    const now=new Date();
    hud.querySelector('.scada-clock').textContent = now.toLocaleTimeString('zh-CN',{hour12:false});
  }
  setInterval(updateClock,1000); updateClock();
  // 交互
  let running=true, isFull=false;
  function onResize(){
    w=wrapper.offsetWidth; h=500;
    if(isFull){w=window.innerWidth;h=window.innerHeight;}
    renderer.setSize(w,h,false);
    camera.aspect=w/h; camera.updateProjectionMatrix();
  }
  window.addEventListener('resize',onResize);
  onResize();
  // 鼠标拾取
  const raycaster=new THREE.Raycaster();
  const mouse=new THREE.Vector2();
  let lastHL=null;
  canvas.addEventListener('mousemove',e=>{
    const rect=canvas.getBoundingClientRect();
    mouse.x = ((e.clientX-rect.left)/rect.width)*2-1;
    mouse.y = -((e.clientY-rect.top)/rect.height)*2+1;
    raycaster.setFromCamera(mouse,camera);
    const intersects=raycaster.intersectObjects(pumpMeshs.map(p=>p.group),true);
    if(lastHL) lastHL.children.forEach(m=>m.material.color.set(0x00e5ff));
    if(intersects.length){
      const obj=intersects[0].object.parent;
      obj.children.forEach(m=>m.material.color.set(0xC9A96E));
      lastHL=obj;
      canvas.style.cursor='pointer';
    }else{
      lastHL=null;canvas.style.cursor='';
    }
  });
  canvas.addEventListener('mouseleave',()=>{
    if(lastHL) lastHL.children.forEach(m=>m.material.color.set(0x00e5ff));
    lastHL=null;canvas.style.cursor='';
  });
  canvas.addEventListener('click',e=>{
    const rect=canvas.getBoundingClientRect();
    mouse.x = ((e.clientX-rect.left)/rect.width)*2-1;
    mouse.y = -((e.clientY-rect.top)/rect.height)*2+1;
    raycaster.setFromCamera(mouse,camera);
    const intersects=raycaster.intersectObjects(pumpMeshs.map(p=>p.group),true);
    if(intersects.length){
      const idx=pumpMeshs.findIndex(p=>p.group===intersects[0].object.parent);
      showPopup(pumpNames[idx],pumpPower[idx]);
    }
  });
  // 全屏
  fullBtn.onclick=()=>{
    isFull=!isFull;
    if(isFull){
      wrapper.classList.add(FULLSCREEN_CLASS);
      canvas.width=window.innerWidth;canvas.height=window.innerHeight;
      onResize();
      fullBtn.textContent='退出全屏';
    }else{
      wrapper.classList.remove(FULLSCREEN_CLASS);
      canvas.width=1200;canvas.height=500;
      onResize();
      fullBtn.textContent='全屏演示';
    }
  };
  document.addEventListener('keydown',e=>{if(isFull&&e.key==='Escape'){fullBtn.onclick();}});
  // 滚动自动播放/暂停
  function checkInView(){
    const rect=wrapper.getBoundingClientRect();
    if(rect.bottom>80&&rect.top<window.innerHeight-80){
      if(!running){running=true;animate();}
    }else{
      running=false;
    }
  }
  window.addEventListener('scroll',checkInView);checkInView();
  animate();
});
})(); 