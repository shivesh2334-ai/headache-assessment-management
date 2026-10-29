let currentView='assess';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function setView(view){
 currentView=view;
 document.getElementById('assessmentView').hidden=view!=='assess';
 document.getElementById('libraryView').hidden=view==='assess';
 document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===view)));
 if(view!=='assess')renderLibrary();
}
function sourceLinks(entry){return entry.sources.map(k=>{const s=KB_SOURCES[k];return s.url?`<a href="${s.url}" target="_blank" rel="noopener noreferrer">${esc(s.name)}</a>`:`<span>${esc(s.name)} (uploaded excerpts)</span>`;}).join(' · ');}
function renderLibrary(){
 const titles={types:'Headache types',treatment:'Treatment reference',knowledge:'Knowledge base'};
 document.getElementById('libraryTitle').textContent=titles[currentView];
 document.getElementById('libraryIntro').textContent=currentView==='treatment'?'Acute care, prevention and drug precautions by headache type.':currentView==='knowledge'?'Local, referenced summaries of clinical features, diagnosis and management.':'Compare common primary headaches, TACs and secondary presentations. TAC = trigeminal autonomic cephalalgia.';
 const terms=document.getElementById('kbQuery').value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
 const group=document.getElementById('kbGroup').value;
 const results=HEADACHE_KB.filter(e=>(!group||e.group===group)&&terms.every(t=>Object.values(e).flat().join(' ').toLocaleLowerCase().includes(t)));
 document.getElementById('kbCount').textContent=`${results.length} of ${HEADACHE_KB.length} topics`;
 document.getElementById('kbResults').innerHTML=results.length?results.map(e=>{
 const clinical=`<h3>Recognition</h3><p>${esc(e.pattern)}</p><h3>Diagnostic checks</h3><p>${esc(e.criteria)}</p>`;
 const treatment=`<h3>Acute management</h3><p>${esc(e.acute)}</p><h3>Prevention / longer-term care</h3><p>${esc(e.prevent)}</p>`;
 return `<article class="card"><span class="tag">${esc(e.group)}</span><h2>${esc(e.name)}</h2>${currentView==='treatment'?treatment:clinical}<details${currentView==='knowledge'?' open':''}><summary>${currentView==='treatment'?'Recognition and diagnostic checks':'Treatment options'}</summary>${currentView==='treatment'?clinical:treatment}</details><div class="al ${e.group==='Secondary / urgent'?'red':'amb'}"><b>Clinical precautions:</b> ${esc(e.safety)}</div><details><summary>Sources</summary><p class="ft">${sourceLinks(e)}</p><p class="ft">Reviewed 29 October 2026. Summary, not the full diagnostic criteria or prescribing label.</p></details></article>`;
 }).join(''):'<div class="card"><h3>No matching topics</h3><p>Try fewer words or another category. Search is limited to this curated library; no match does not exclude a disease.</p></div>';
 document.getElementById('kbReferences').innerHTML='<h2>Knowledge base sources and scope</h2>'+Object.values(KB_SOURCES).map(s=>`<p><b>${s.url?`<a href="${s.url}" target="_blank" rel="noopener noreferrer">${esc(s.name)}</a>`:esc(s.name)}</b><br><span class="ft">${esc(s.detail)}</span></p>`).join('')+'<p class="ft">Original summaries informed by the uploaded textbook pages and linked guidance. No textbook images or patient data are included. This library runs locally in the browser; no API key or external database is required. Rare headache treatments often rely on limited evidence and specialist practice.</p>';
}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
document.getElementById('kbQuery').addEventListener('input',()=>{if(currentView==='assess')setView('knowledge');else renderLibrary();});
document.getElementById('kbGroup').addEventListener('change',renderLibrary);
document.getElementById('clearSearch').addEventListener('click',()=>{document.getElementById('kbQuery').value='';document.getElementById('kbGroup').value='';renderLibrary();document.getElementById('kbQuery').focus();});
