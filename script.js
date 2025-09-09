// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Load posts
fetch('posts.json')
  .then(r => r.json())
  .then(posts => {
    const wrap = document.getElementById('posts');
    posts.forEach(p => {
      const el = document.createElement('article');
      el.className='post';
      el.innerHTML = `<h3>${p.title}</h3>
        <time datetime="${p.date}">${new Date(p.date).toLocaleDateString('zh-TW')}</time>
        <p>${p.summary}</p>
        ${p.url ? `<a class="btn-ghost" href="${p.url}" target="_blank" rel="noreferrer">閱讀更多</a>`:''}`;
      wrap.appendChild(el);
    });
  }).catch(()=>{
    // No posts.json found
  });

// Feedback modal + NPS
const dlg = document.getElementById('feedbackDialog');
const btn = document.getElementById('feedbackBtn');
const form = document.getElementById('feedbackForm');
const npsWrap = form?.querySelector('.nps');
const fbText = document.getElementById('fbText');

if (npsWrap) {
  for (let i=0;i<=10;i++){
    const b=document.createElement('button');
    b.type='button'; b.textContent=i; b.setAttribute('aria-pressed','false');
    b.addEventListener('click',()=>{
      [...npsWrap.children].forEach(x=>x.setAttribute('aria-pressed','false'));
      b.setAttribute('aria-pressed','true'); b.dataset.selected='true';
    });
    npsWrap.appendChild(b);
  }
}

btn?.addEventListener('click',()=> dlg.showModal());
form?.querySelector('.dialog-close')?.addEventListener('click',()=> dlg.close());

document.getElementById('fbSend')?.addEventListener('click', (e)=>{
  e.preventDefault();
  const scoreBtn=[...npsWrap.children].find(x=>x.dataset.selected==='true');
  const score= scoreBtn ? Number(scoreBtn.textContent) : null;
  const text = fbText.value.trim();
  const entry = {score, text, ts: new Date().toISOString(), ua: navigator.userAgent};
  // Since GitHub Pages has no backend, we offer a file download so you can later upload it or process it.
  const blob=new Blob([JSON.stringify(entry,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=`feedback-${Date.now()}.json`;
  a.click();
  dlg.close();
  showToast('感謝回饋！已下載 feedback 檔案。');
});

function showToast(msg){
  const t=document.createElement('div');
  t.className='toast'; t.textContent=msg; document.body.appendChild(t);
  requestAnimationFrame(()=> t.classList.add('show'));
  setTimeout(()=>{t.classList.remove('show'); setTimeout(()=>t.remove(),250)}, 3000);
}
