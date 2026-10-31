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

function renderIndianBrands(terms, category){
 let panel=document.getElementById('indianBrands');
 if(!panel){panel=document.createElement('section');panel.id='indianBrands';panel.className='card';panel.setAttribute('aria-labelledby','indianBrandTitle');document.getElementById('kbResults').before(panel);}
 panel.hidden=currentView==='types';
 if(panel.hidden)return 0;
 const categoryClasses={
  'Migraine':['analgesic','nsaid','triptan','antiemetic','beta','arb','tca','aed','gepant','mab','botulinum','caffeine','ditan','excluded'],
  'Tension-type':['analgesic','nsaid','tca','caffeine','excluded'],
  'TACs':['nsaid','triptan','aed','ccb','steroid','lithium','mab','local','oxygen'],
  'Other primary':['nsaid','beta','tca','aed','lithium','caffeine'],
  'Secondary / urgent':['cai','aed','excluded']
 };
 const groups=INDIA_DRUG_CLASSES.filter(g=>(!category||(categoryClasses[category]||[]).includes(g.id))).map(g=>{
  const products=INDIA_DRUG_PRODUCTS.filter(p=>p.classes.includes(g.id));
  const context=[g.name,g.use,g.note].join(' ').toLowerCase();
  const matches=products.filter(p=>terms.every(t=>(context+' '+Object.values(p).flat().join(' ').toLowerCase()).includes(t)));
  return {...g,products:matches,show:matches.length>0||terms.every(t=>context.includes(t)),total:products.length};
 }).filter(g=>g.show);
 const money=n=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',minimumFractionDigits:2}).format(n);
 panel.innerHTML='<h2 id="indianBrandTitle">Indian brands, combinations and prices</h2><p class="ft">Checked '+esc(INDIA_BRAND_REVIEWED)+'. Up to five products per class, including combinations. Illustrative brands, not a ranking or endorsement. Prices are static INR pack snapshots; MRP and retail prices are labelled separately and may vary by batch, seller and location. Verify the current pack and prescription before use.</p><p class="ft">Company roles are explicit: marketer is not necessarily the physical manufacturer. Where the manufacturer was not independently verified, the entry says so. Pack strength is not a prescribed dose. Cross-class combinations appear under each relevant class and count toward each class limit.</p><p role="status" aria-live="polite">'+groups.length+' matching medicine classes. Search by brand, ingredient, company or class using the search above.</p>'+
 (groups.length?groups.map(g=>'<details class="brand-class"'+(terms.length?' open':'')+'><summary>'+esc(g.name)+' — '+g.products.length+' product'+(g.products.length===1?'':'s')+'</summary><p><b>Role:</b> '+esc(g.use)+'</p><p class="ft">'+esc(g.note)+'</p><div class="brand-grid">'+g.products.map(p=>'<article class="brand-product"><h3>'+esc(p.name)+' '+(p.combination?'<span class="tag">Combination</span>':'')+'</h3><p>'+esc(p.composition)+'</p><p><b>'+money(p.price)+'</b> / '+esc(p.pack)+'<br><span class="ft">'+esc(p.priceType)+'</span></p><p class="ft"><b>Marketer:</b> '+esc(p.marketer)+'<br><b>Manufacturer:</b> '+esc(p.manufacturer)+'</p>'+(p.note?'<p class="ft">'+esc(p.note)+'</p>':'')+'<p class="ft"><a href="'+esc(p.url)+'" target="_blank" rel="noopener noreferrer">Price / product source</a>'+(p.companySource?' · <a href="'+esc(p.companySource)+'" target="_blank" rel="noopener noreferrer">Company source</a>':'')+'</p></article>').join('')+'</div></details>').join(''):'<p>No matching brands or classes. Try fewer search words or another category. A missing listing does not mean a medicine is unavailable.</p>')+
 '<p class="ft">For classes without a verified suitable fixed-dose combination, none is invented. A listing is not proof of an Indian headache indication, regulatory approval or current stock. Specialist and off-label uses require clinician review. Price sources are commercial listings; clinical recommendations remain in the referenced topic cards below.</p>';
 return groups.length;
}

function renderLibrary(){
 const titles={types:'Headache types',treatment:'Treatment reference',knowledge:'Knowledge base'};
 document.getElementById('libraryTitle').textContent=titles[currentView];
 document.getElementById('libraryIntro').textContent=currentView==='treatment'?'Acute care, prevention and drug precautions by headache type.':currentView==='knowledge'?'Local, referenced summaries of clinical features, diagnosis and management.':'Compare common primary headaches, TACs and secondary presentations. TAC = trigeminal autonomic cephalalgia.';
 const terms=document.getElementById('kbQuery').value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
 const group=document.getElementById('kbGroup').value;
 renderIndianBrands(terms,group);
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
