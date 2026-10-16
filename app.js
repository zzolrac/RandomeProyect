let current = null;
const grid = document.getElementById('grid');
const player = document.getElementById('player');
const result = document.getElementById('result');

document.getElementById('stat-count').textContent = GENERATORS.length;
document.getElementById('cta-pro-top').href = PRO_LINK;
document.getElementById('cta-pro-main').href = PRO_LINK;

function card(g){
  const b = document.createElement('button');
  b.className = 'card';
  b.innerHTML = `<div class="e">${g.emoji}</div><h3>${g.title}</h3><p>${g.desc} · ${g.items.length} ideas</p><span class="go">Abrir →</span>`;
  b.style.borderTop = `10px solid ${g.color}`;
  b.onclick = () => openGen(g.id);
  return b;
}
function renderGrid(filter=""){
  grid.innerHTML = "";
  GENERATORS.filter(g => (g.title+g.desc).toLowerCase().includes(filter.toLowerCase()))
    .forEach(g => grid.appendChild(card(g)));
}
document.getElementById('search').addEventListener('input', e => renderGrid(e.target.value));

function openGen(id, silent){
  current = GENERATORS.find(g => g.id === id);
  if(!current) return;
  document.getElementById('player-emoji').textContent = current.emoji;
  document.getElementById('player-title').textContent = current.title;
  document.getElementById('player-desc').textContent = current.desc;
  document.getElementById('affil').innerHTML = current.affil;
  result.textContent = "Pulsa generar 👇";
  player.hidden = false;
  document.body.style.overflow = "hidden";
  try{
    const url = new URL(location.href); url.searchParams.set('g', id);
    history.replaceState(null,'',url);
    let h = JSON.parse(localStorage.getItem('rl_recent')||'[]');
    h = [id, ...h.filter(x=>x!==id)].slice(0,5);
    localStorage.setItem('rl_recent', JSON.stringify(h));
  }catch{}
}
function closeGen(){ player.hidden = true; document.body.style.overflow = ""; try{const u=new URL(location.href);u.searchParams.delete('g');history.replaceState(null,'',u);}catch{} }
document.getElementById('player-close').onclick = closeGen;
player.addEventListener('click', e => { if(e.target === player) closeGen(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeGen(); });

function pick(){
  if(!current) return;
  const item = current.items[Math.floor(Math.random()*current.items.length)];
  result.textContent = item;
  result.classList.remove('pop'); void result.offsetWidth; result.classList.add('pop');
}
document.getElementById('btn-generate').onclick = pick;
document.getElementById('btn-surprise').onclick = () => {
  const g = GENERATORS[Math.floor(Math.random()*GENERATORS.length)];
  openGen(g.id); pick();
};
document.getElementById('btn-copy').onclick = async () => {
  try{ await navigator.clipboard.writeText(result.textContent); alert("Copiado ✔"); }
  catch{ alert("Copia manual: selecciona el texto"); }
};
document.getElementById('btn-share').onclick = async () => {
  const link = location.href;
  const data = {title:'RandomLab', text: result.textContent + " — vía RandomLab", url: link};
  if(navigator.share){ try{ await navigator.share(data);}catch{} }
  else { try{ await navigator.clipboard.writeText(data.text+" "+data.url); alert("Enlace copiado para compartir ✔"); }catch{} }
};
renderGrid();
// Deep-link ?g=slug + PWA
try{
  const slug = new URLSearchParams(location.search).get('g');
  if(slug && GENERATORS.some(g=>g.id===slug)){ openGen(slug); }
}catch{}
if('serviceWorker' in navigator && location.protocol.startsWith('http')){ navigator.serviceWorker.register('sw.js').catch(()=>{}); }
