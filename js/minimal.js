// 手风琴动画（平滑展开收起）
document.querySelectorAll('details').forEach(d => {
  d.addEventListener('toggle', function() {
    if(this.open) {
      document.querySelectorAll('details').forEach(o => { if(o!==this) o.open=false; });
    }
  });
});
// 按钮微动效
function addBtnMotion(btn) {
  btn.addEventListener('mouseenter',()=>btn.style.transform='translateY(-2px) scale(1.03)');
  btn.addEventListener('mouseleave',()=>btn.style.transform='');
  btn.addEventListener('focus',()=>btn.style.transform='translateY(-2px) scale(1.03)');
  btn.addEventListener('blur',()=>btn.style.transform='');
}
document.querySelectorAll('.btn-gold,.btn-fixed-gold').forEach(addBtnMotion); 