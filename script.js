/* ===== EDIT HERE: spots, details, coordinates ===== */
const TRIP_DATE = new Date('2026-12-01T00:00:00');

// id -> details. Photos lists the local image filenames for each spot.
const SPOTS = {
  tea:     {t:'Tea Plantations', cat:'in',  line:'Endless green waves, perfect for photos.', desc:'Rolling tea estates around Munnar glow in the early morning light. Stop on the roadside, walk between the rows and take the signature Munnar shots before the crowds arrive.', kw:'munnar,tea,plantation', photos:['tea1.jpg','tea2.jpg','tea3.jpg'], ll:[10.0889,77.0595]},
  eravikulam:{t:'Eravikulam National Park', cat:'in', line:'Home of the Nilgiri Tahr and misty grasslands.', desc:'A high-altitude shola grassland park known for the Nilgiri Tahr. A park shuttle takes you up to the viewing area; the walk is short and the views are huge.', kw:'eravikulam,national,park', photos:['eravikulam1.jpg','eravikulam2.jpg','eravikulam3.jpg'], ll:[10.1990,77.0450]},
  mattupetty:{t:'Mattupetty Dam', cat:'in', line:'Calm blue water wrapped in green hills.', desc:'A scenic dam and lake with optional boating. Great for a relaxed walk and wide-angle photos before heading further up.', kw:'mattupetty,dam,munnar', photos:['mettu1.jpg','mettu2.jpg','mettu3.jpg'], ll:[10.1066,77.1245]},
  echo:    {t:'Echo Point', cat:'out', line:'Shout your name, the valley answers back.', desc:'A lakeside viewpoint where the hills reflect your voice. Quick stop, big fun, and a nice view of the Kundala valley.', kw:'echo,point,munnar', photos:['echo1.jpg','echo2.jpg','echo3.jpg'], ll:[10.1197,77.1670]},
  top:     {t:'Top Station', cat:'out', line:'The highest point on the Munnar road, above the clouds.', desc:'At about 1,700 m, Top Station gives sweeping views over the Tamil Nadu plains. If it turns misty we wait it out for the best view till around 3 PM.', kw:'top,station,munnar', photos:['Top1.jpg','Top2.jpg','Top3.jpg'], ll:[10.1203,77.2194]},
  devikulam:{t:'Devikulam', cat:'out', line:'A quiet hill lake with a legend attached.', desc:'Home to the Sita Devi Lake, a peaceful stop with cool water and thick forest. A short breather on the way to Vagamon.', kw:'devikulam,lake,munnar', photos:['Devikulam.jpg'], ll:[9.9936,77.1100]},
  chinnakanal:{t:'Chinnakanal / Pooppara Drive', cat:'out', line:'Scenic road with tea hills on both sides.', desc:'A pretty drive past the Anayirankal area with tea gardens, reservoirs and open views. We choose Chinnakanal or Pooppara depending on time.', kw:'chinnakanal,poopara,kerala', photos:['Poopara1.jpg','Poopara2.jpg','Poopara3.jpg'], ll:[9.9984,77.1923]},
  night:   {t:'The Night Drive', cat:'out', line:'8 hours, one van, a lot of playlists.', desc:'We leave Villupuram by 10 PM and drive through the night to reach Munnar by sunrise. Snacks, music and window seats are mandatory.', kw:'night,road,drive,india', photos:['night1.jpg','night2.jpg','night3.jpg'], ll:[11.9401,79.4861]},
  resort:  {t:'Resort: Campfire & Pool', cat:'in', line:'Warm fire, cool water, loud laughter.', desc:'After dinner at Vagamon we unwind with a campfire or a swim, depending on what the resort offers. Lights out by 10 PM.', kw:'campfire,resort,night', photos:['resort1.jpg','resort2.jpg','resort3.jpg'], ll:[9.6860,76.9000]},
  jeep:    {t:'Ulupunni Jeep Safari', cat:'out', line:'Tunnel, waterfalls, off-road and a hill-top finish.', desc:'Starting 6.30 AM, the jeeps take us through a tunnel, past waterfalls, over rough off-road tracks and up to a hill-top viewpoint by about 10.30 AM.', kw:'jeep,safari,offroad,kerala', photos:['ulupunni1.jpg','ulupunni2.jpg','ulupunni3.PNG'], ll:[9.7050,76.9400]},
  thangal: {t:'Thangal Para', cat:'out', line:'A giant rock with a 360° valley view.', desc:'A sacred rock hill dotted with grass and a shrine. We arrive around 11.15 AM, soak in the view and leave around noon.', kw:'thangal,para,vagamon', photos:['thangal1.jpg','thangal2.jpg','thangal3.jpg'], ll:[9.6890,76.9140]},
  pine:    {t:'Pine Forest', cat:'in', line:'Tall pines, soft light, movie-style frames.', desc:'A calm forest of straight pine trees, ideal for photos and a short walk right before lunch.', kw:'vagamon,pine,forest', photos:['pineforest1.jpg','pineforest2.jpg','pineforest3.jpg'], ll:[9.6840,76.9050]},
  parunthumpara:{t:'Parunthumpara', cat:'out', line:'Hills shaped like a flying eagle, if time permits.', desc:'A scenic drive and viewpoint near Peerumedu. We visit if the clock allows, until about 3 to 3.30 PM.', kw:'parunthumpara,peerumedu,kerala', photos:['param1.jpg','param2.jpg','param3.jpg'], ll:[9.5920,76.9740]},
  kumily:  {t:'Kumily', cat:'out', line:'Chips, sweets and spice shopping.', desc:'Fresh banana chips, halwa and spices for the ride home. Skip it if we are running late.', kw:'kumily,spice,market', photos:['kumily1.jpg','kumily2.jpg'], ll:[9.6040,77.1670]},
  surli:   {t:'Surli Falls', cat:'in', line:'A last splash on the way back, if possible.', desc:'A multi-tier waterfall near Cumbum, perfect for a quick wash-off before the long final stretch.', kw:'surulipatti,falls,theni', photos:['surli1.png','surli2.jpg','surli3.jpg'], ll:[9.6410,77.3040]}
};

// Timeline: [time, label, spotId|null, icon]
const DAYS = [
  [
   ['10 PM','Start from Villupuram (or before)','night','🚐'],
   ['10 PM – 6 AM','Night drive (8 hours)',null,'🌙'],
   ['6:00 – 6:30 AM','Munnar arrival',null,'⛰️'],
   ['till 7:30 AM','Refreshment & breakfast',null,'🥞'],
   ['7:30 AM','Tea Plantations (photos)','tea','🍃'],
   ['till 10:30 AM','Eravikulam National Park','eravikulam','🐐'],
   ['till 11:00 AM','Mattupetty Dam','mattupetty','💧'],
   ['11:45 AM','Echo Point','echo','📣'],
   ['12:30 PM','Lunch',null,'🍛'],
   ['till 3:00 PM','Top Station (if misty)','top','☁️'],
   ['3:30 PM','Leaving Munnar',null,'👋'],
   ['4:00 PM','Devikulam','devikulam','🌲'],
   ['4:30 PM','Chinnakanal / Pooppara scenic drive','chinnakanal','🛣️'],
   ['evening','Long scenic drive',null,'🌅'],
   ['8:00 PM','Vagamon arrival',null,'🏡'],
   ['8:30 PM','Dinner',null,'🍽️'],
   ['till 10 PM','Campfire / swimming pool (resort permitting)','resort','🔥'],
   ['10 PM','Sleep',null,'😴']
  ],
  [
   ['5:45 – 6:00 AM','Wake up',null,'⏰'],
   ['before 6:30','Breakfast',null,'🥞'],
   ['6:30 AM','Ulupunni Jeep Safari: tunnel, waterfalls, off-road, hill-top (till ~10:30)','jeep','🚙'],
   ['11:15 AM','Thangal Para arrival','thangal','🪨'],
   ['~12:00 PM','Leaving Thangal Para',null,'👋'],
   ['12:30 PM','Pine Forest','pine','🌲'],
   ['12:45 – 1:30 PM','Lunch',null,'🍛'],
   ['till 3 – 3:30 PM','Parunthumpara drive / sightseeing (if possible)','parunthumpara','🦅'],
   ['return','Kumily: chips & sweets (if needed)','kumily','🍌'],
   ['return','Cumbum',null,'🛣️'],
   ['if possible','Surli Falls','surli','💦'],
   ['return','Theni',null,'🛣️'],
   ['return','Dindigul',null,'🛣️'],
   ['return','Trichy',null,'🛣️'],
   ['night','Villupuram',null,'🏠'],
   ['END','2 DAYS VOYAGE OVER',null,'🏁']
  ]
];
const DATES = ['01 December 2026','02 December 2026'];

/* ===== helpers ===== */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
function revealMobilePhotos(){
  if(!window.matchMedia('(max-width: 760px)').matches) return;
  $$('.dcard .ph,.thumb .ph,.card-s .ph').forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.bottom > 0 && rect.top < window.innerHeight) el.classList.add('revealed');
  });
}
window.addEventListener('scroll', revealMobilePhotos, {passive:true});
window.addEventListener('resize', revealMobilePhotos);
requestAnimationFrame(revealMobilePhotos);

// photo with 3-level fallback: local file -> keyword photo -> colour block
function photo(id, i){
  const d = document.createElement('div'); d.className = 'ph g' + (i % 3);
  const img = new Image(); img.loading = 'lazy'; img.alt = SPOTS[id].t;
  let stage = 0;
  img.onerror = () => {
    if(stage++ === 0) img.src = `https://loremflickr.com/640/480/${SPOTS[id].kw}?lock=${id.length*7+i}`;
    else img.remove();
  };
  img.src = `images/${SPOTS[id].photos?.[i] || `${id}-${i+1}.jpg`}`;
  d.appendChild(img);
  return d;
}

/* ===== navigation ===== */
function go(p){
  $$('.page').forEach(e => e.classList.toggle('active', e.id === p));
  $$('#nav button').forEach(b => b.classList.toggle('active', b.dataset.page === p));
  revealMobilePhotos();
  window.scrollTo({top:0,behavior:'smooth'});
  if(p === 'map') setTimeout(() => map.invalidateSize(), 100);
}
$$('#nav button').forEach(b => b.onclick = () => go(b.dataset.page));
$$('[data-go]').forEach(b => b.onclick = () => go(b.dataset.go));

/* ===== countdown ===== */
function tick(){
  let s = Math.max(0, (TRIP_DATE - new Date())/1000|0);
  const v = [['days',86400],['hrs',3600],['min',60],['sec',1]].map(([n,m])=>{const x=Math.floor(s/m);s%=m;return `<div><b>${x}</b>${n}</div>`});
  $('#countdown').innerHTML = v.join('');
}
tick(); setInterval(tick, 1000);

/* ===== modal ===== */
function openSpot(id, time){
  const s = SPOTS[id];
  $('#mTime').textContent = time || 'Stop';
  $('#mTitle').textContent = s.t; $('#mLine').textContent = s.line; $('#mDesc').textContent = s.desc;
  const box = $('#mShots'); box.innerHTML = '';
  const count = SPOTS[id].photos?.length || 3;
  Array.from({length:count}, (_, i) => box.appendChild(photo(id, i)));
  $('#modal').classList.add('open');
}
$('#close').onclick = () => $('#modal').classList.remove('open');
$('#modal').onclick = e => { if(e.target.id === 'modal') $('#modal').classList.remove('open'); };
document.addEventListener('keydown', e => e.key === 'Escape' && $('#modal').classList.remove('open'));

/* ===== day planning ===== */
function renderDay(n){
  const tl = $('#timeline'); tl.innerHTML = '';
  const head = document.createElement('div'); head.className = 'row';
  head.innerHTML = `<div class="box" style="background:var(--ink);color:var(--paper)"><span class="time" style="background:var(--lime);color:#111">${DATES[n]}</span><h4>Day ${n+1}</h4></div>`;
  tl.appendChild(head);
  DAYS[n].forEach(([time,label,spot,ico],k) => {
    const r = document.createElement('div');
    r.className = 'row' + (spot ? ' spot' : '') + (time === 'END' ? ' end' : '');
    r.style.animationDelay = (k*40) + 'ms';
    if(spot){
      r.innerHTML = `<div class="box"><div class="thumb"></div><div class="info"><span class="time">${time}</span><h4>${ico} ${label}</h4><small>${SPOTS[spot].line}</small></div></div>`;
      r.querySelector('.thumb').appendChild(photo(spot,0));
      r.querySelector('.thumb .ph').style.cssText = 'position:absolute;inset:0';
      r.querySelector('.box').onclick = () => openSpot(spot, time);
    } else if(time === 'END'){
      r.innerHTML = `<div class="box">${ico} ${label}</div>`;
    } else {
      r.innerHTML = `<div class="box"><span class="ico">${ico}</span><span class="time">${time}</span><h4>${label}</h4></div>`;
    }
    tl.appendChild(r);
  });
  revealMobilePhotos();
}
$$('#dayTabs button').forEach(b => b.onclick = () => {
  $$('#dayTabs button').forEach(x => x.classList.toggle('active', x === b));
  renderDay(+b.dataset.day);
});
renderDay(0);

/* ===== travels grid ===== */
function renderGrid(cat){
  const g = $('#grid'); g.innerHTML = '';
  Object.entries(SPOTS).filter(([,s]) => s.cat === cat).forEach(([id,s],k) => {
    const c = document.createElement('div'); c.className = 'card-s'; c.style.animationDelay = (k*60)+'ms';
    c.innerHTML = `<span class="lab">${cat === 'in' ? 'INTERIOR' : 'EXTERIOR'}</span><div class="ov"><h4>${s.t}</h4><p>${s.line}</p></div>`;
    c.prepend(photo(id,0));
    c.onclick = () => openSpot(id, cat === 'in' ? 'Interior' : 'Exterior');
    g.appendChild(c);
  });
  revealMobilePhotos();
}
$$('#catTabs button').forEach(b => b.onclick = () => {
  $$('#catTabs button').forEach(x => {
    const active = x === b;
    x.classList.toggle('active', active);
    x.setAttribute('aria-pressed', String(active));
  });
  const isPartner = b.dataset.cat === 'partner';
  $('#grid').hidden = isPartner;
  $('#partnerDetails').hidden = !isPartner;
  if(!isPartner) renderGrid(b.dataset.cat);
});
renderGrid('in');

/* ===== map (OpenStreetMap via Leaflet) ===== */
const map = L.map('osm', {scrollWheelZoom:false}).setView([10.3,77.7], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:'© OpenStreetMap contributors'}).addTo(map);

const GO = [[11.9401,79.4861],[10.7905,78.7047],[10.3673,77.9803],[10.0104,77.4768],[10.0889,77.0595],[9.9936,77.1100],[9.6860,76.9000]];
const BACK = [[9.6860,76.9000],[9.6040,77.1670],[9.7325,77.2820],[10.0104,77.4768],[10.3673,77.9803],[10.7905,78.7047],[11.9401,79.4861]];
L.polyline(GO, {color:'#000', weight:5}).addTo(map);
L.polyline(BACK, {color:'#000', weight:4, dashArray:'10 10'}).addTo(map);

const dot = (e, t) => L.marker(e.ll||e, {icon:L.divIcon({className:'', html:`<div style="font-size:22px;filter:drop-shadow(2px 2px 0 #111)">${t}</div>`, iconSize:[24,24], iconAnchor:[12,12]})});
dot([11.9401,79.4861],'🏁').addTo(map).bindPopup('<b>Start & End</b><br>Villupuram');
Object.entries(SPOTS).filter(([id]) => !['night'].includes(id)).forEach(([id,s]) => {
  L.circleMarker(s.ll, {radius:6, color:'#111', weight:2, fillColor:'#fff', fillOpacity:1}).addTo(map)
   .bindPopup(`<b>${s.t}</b><br>${s.line}`);
});

const van = L.marker(GO[0], {icon:L.divIcon({className:'', html:'<div class="van">🚐</div>', iconSize:[34,34], iconAnchor:[17,17]}), zIndexOffset:1000}).addTo(map);
let anim = null;
$('#drive').onclick = () => {
  clearInterval(anim);
  const path = [...GO, ...BACK.slice(1)], steps = 90, pts = [];
  for(let i=0;i<path.length-1;i++) for(let s=0;s<steps;s++){
    const [a,b]=[path[i],path[i+1]], t=s/steps; pts.push([a[0]+(b[0]-a[0])*t, a[1]+(b[1]-a[1])*t]);
  }
  let i = 0; map.fitBounds(L.latLngBounds(path).pad(.1));
  anim = setInterval(() => { van.setLatLng(pts[i]); if(++i >= pts.length) clearInterval(anim); }, 20);
};


/* ===== hero + destination images (local file -> online keyword photo -> gradient) ===== */
function bg(el, local, kw){
  const t = new Image();
  t.onload = () => el.style.backgroundImage = `url(${t.src})`;
  t.onerror = () => { if(!t.dataset.f){ t.dataset.f = 1; t.src = `https://loremflickr.com/1600/900/${kw}?lock=11`; } };
  t.src = local;
}
$$('[data-img]').forEach(el => {
  const id = el.dataset.img;
  bg(el, `images/${el.dataset.image || SPOTS[id].photos?.[0] || `${id}-1.jpg`}`, SPOTS[id].kw);
});
