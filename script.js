/* ==========================================================
   Zaheer Khan — AI & ML Portfolio
   Script
   ========================================================== */

/* ---------- DATA ---------- */
const skills = [
  {code:'PY', name:'Python & OOP', desc:'Core language and object-oriented programming.'},
  {code:'ML', name:'Machine Learning', desc:'Classification, regression, clustering, model evaluation.'},
  {code:'DL', name:'Deep Learning', desc:'ANN, CNN and LSTM architectures.'},
  {code:'CV', name:'Computer Vision', desc:'Video and image analysis with OpenCV.'},
  {code:'GEN', name:'Generative AI', desc:'LLMs and Prompt Engineering.'},
  {code:'API', name:'FastAPI', desc:'Building backend APIs for ML applications.'},
  {code:'WEB', name:'React.js & Tailwind', desc:'Frontend dashboards and interfaces.'},
  {code:'SK', name:'Scikit-learn', desc:'Training, preprocessing and evaluation.'},
  {code:'DB', name:'SQLite', desc:'Lightweight relational data storage.'},
  {code:'GH', name:'Git & GitHub', desc:'Version control and project collaboration.'},
  {code:'ST', name:'Streamlit', desc:'Deploying interactive ML applications.'},
  {code:'VSC', name:'VS Code', desc:'Primary development environment.'}
];

const icons = {
  gradcap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5"/><path d="M22 10v6"/></svg>',
  house: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="m9 13 2 2 4-4"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v3"/><path d="M3 7v11a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H6a2 2 0 0 1-2-2Z"/><circle cx="16.5" cy="14" r="1.3"/></svg>',
  car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 11 6.5 6h11L19 11"/><rect x="2.5" y="11" width="19" height="6" rx="2"/><circle cx="7" cy="19" r="1.6"/><circle cx="17" cy="19" r="1.6"/></svg>',
  handshake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m11 13-2.5-2.5a2 2 0 0 0-2.8 0L2 14"/><path d="m13 13 2.5 2.5a2 2 0 0 0 2.8 0L22 12"/><path d="M8.5 10.5 12 7l3.5 3.5"/><path d="m9 17 2 2 2-2"/></svg>',
  trenddown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>',
  shieldcard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M12 13.2 14.6 14.6v2.3c0 1.5-1.1 2.4-2.6 2.9-1.5-.5-2.6-1.4-2.6-2.9v-2.3Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="m3 6.5 9 6 9-6"/><path d="M15.5 3.5v3M15.5 8h.01"/></svg>',
  exitdoor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10"/><path d="M15 3v18"/><path d="m19 8-4 4 4 4"/><path d="M19 12h-8"/></svg>'
};

const projects = [
  {cat:'Regression', title:'Student Performance Predictor', desc:'Predict student performance from study-related inputs using a simple, interpretable ML workflow.', tags:['Python','Pandas','Scikit-learn','Streamlit','Joblib'], metric:'Beginner regression project', link:'https://github.com/zaheerkhan03260-rgb/Student-Performance-Predictor', icon:icons.gradcap},
  {cat:'Regression', title:'House Price Prediction', desc:'Predict house prices from property features and evaluate the model with Mean Absolute Error.', tags:['Python','Pandas','Scikit-learn','Linear Regression','Streamlit'], metric:'MAE: 1.7', link:'https://github.com/zaheerkhan03260-rgb/House-Price-Prediction', icon:icons.house},
  {cat:'Classification', title:'Student Pass/Fail Prediction', desc:'Classify whether a student is likely to pass or fail using supervised learning and a train/test workflow.', tags:['Python','Pandas','Scikit-learn','Classification'], metric:'Classification workflow', link:'https://github.com/zaheerkhan03260-rgb/Student_Pass_Fail_Prediction', icon:icons.clipboard},
  {cat:'Regression', title:'Employee Salary Prediction', desc:'Build a salary prediction model from employee-related features, including preprocessing and training.', tags:['Python','Pandas','Scikit-learn','Regression'], metric:'Regression workflow', link:'https://github.com/zaheerkhan03260-rgb/Employee_Salary_Prediction', icon:icons.wallet},
  {cat:'Regression', title:'Car Price Prediction', desc:'Estimate car prices from vehicle attributes and turn the trained model into a reusable workflow.', tags:['Python','Pandas','Scikit-learn','Joblib'], metric:'Regression workflow', link:'https://github.com/zaheerkhan03260-rgb/Car_Price_Prediction', icon:icons.car},
  {cat:'Classification', title:'Loan Approval Prediction', desc:'Predict loan approval from applicant and financial information while handling categorical data.', tags:['Python','Pandas','Scikit-learn','Classification','Preprocessing'], metric:'Classification workflow', link:'https://github.com/zaheerkhan03260-rgb/Loan_Approval_Prediction', icon:icons.handshake},
  {cat:'Classification', title:'Customer Churn Prediction', desc:'Predict customer churn using telecom data and compare Logistic Regression with Random Forest.', tags:['Python','Pandas','Scikit-learn','Random Forest'], metric:'Log. Reg: 78.75% accuracy', link:'https://github.com/zaheerkhan03260-rgb/07_Customer_Churn_Prediction', icon:icons.trenddown},
  {cat:'Imbalanced Classification', title:'Credit Card Fraud Detection', desc:'Detect fraudulent transactions and evaluate the model beyond accuracy using precision, recall and F1.', tags:['Python','Pandas','Random Forest','Logistic Regression'], metric:'Random Forest F1: 0.82', link:'https://github.com/zaheerkhan03260-rgb/Credit_Card_Fraud_Detection', icon:icons.shieldcard},
  {cat:'NLP / Classification', title:'Spam Email Detection', desc:'Classify messages as spam or legitimate using text preprocessing and machine learning techniques.', tags:['Python','Pandas','NLP','TF-IDF'], metric:'5,728 messages', link:'https://github.com/zaheerkhan03260-rgb/Spam_Email_Detection', icon:icons.mail},
  {cat:'End-to-End ML', title:'Employee Attrition Prediction', desc:'Portfolio-level end-to-end ML app: EDA, preprocessing, model comparison, evaluation and Streamlit deployment.', tags:['Python','EDA','Logistic Regression','Streamlit'], metric:'Deployed live', link:'https://github.com/zaheerkhan03260-rgb/10_Employee_Attrition_Prediction', icon:icons.exitdoor}
];

/* ---------- RENDER SKILLS ---------- */
const skillsGrid = document.getElementById('skillsGrid');
skills.forEach((s,i)=>{
  const el = document.createElement('div');
  el.className = 'skill-card reveal';
  el.style.transitionDelay = (i*0.05)+'s';
  el.innerHTML = `<span class="skill-card__code">${s.code}</span><div class="skill-card__name">${s.name}</div><div class="skill-card__desc">${s.desc}</div>`;
  skillsGrid.appendChild(el);
});

/* ---------- RENDER PROJECTS ---------- */
const projectsGrid = document.getElementById('projectsGrid');
projects.forEach((p,i)=>{
  const el = document.createElement('div');
  el.className = 'project-card reveal';
  el.style.transitionDelay = ((i%2)*0.08)+'s';
  el.innerHTML = `
    <div class="project-card__icon">${p.icon}</div>
    <div class="project-card__top">
      <span class="project-card__index">0${i+1}</span>
      <span class="project-card__cat">${p.cat}</span>
    </div>
    <div class="project-card__title">${p.title}</div>
    <div class="project-card__desc">${p.desc}</div>
    <div class="project-card__tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    <div class="project-card__footer">
      <span class="project-card__metric">${p.metric}</span>
      <a href="${p.link}" target="_blank" rel="noopener" class="project-card__link">GitHub ↗</a>
    </div>`;
  el.addEventListener('mousemove', e=>{
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (e.clientX - r.left)+'px');
    el.style.setProperty('--my', (e.clientY - r.top)+'px');
  });
  projectsGrid.appendChild(el);
});

/* ---------- HERO TITLE WORD REVEAL ---------- */
const heroTitle = document.getElementById('heroTitle');
(function(){
  const words = heroTitle.innerHTML.split(' ');
  heroTitle.innerHTML = '';
  words.forEach((w,i)=>{
    const wrap = document.createElement('span');
    wrap.className = 'reveal-word';
    const inner = document.createElement('span');
    inner.innerHTML = w + '&nbsp;';
    inner.style.animationDelay = (0.15 + i*0.09) + 's';
    wrap.appendChild(inner);
    heroTitle.appendChild(wrap);
  });
})();

/* ---------- SCROLL REVEAL ---------- */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('.reveal');
if(reduceMotion){
  revealEls.forEach(el=>el.classList.add('in'));
}else{
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  },{threshold:0.15});
  revealEls.forEach(el=>io.observe(el));
}

/* ---------- NAV SCROLLSPY + TOGGLE ---------- */
const navLinksEls = document.querySelectorAll('.nav__link');
const sections = ['about','skills','projects','contact'].map(id=>document.getElementById(id));
function updateSpy(){
  let current = '';
  sections.forEach(sec=>{
    const rect = sec.getBoundingClientRect();
    if(rect.top <= 140 && rect.bottom >= 140) current = sec.id;
  });
  navLinksEls.forEach(a=>{
    a.classList.toggle('active', a.getAttribute('href') === '#'+current);
  });
}

const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
navToggle.addEventListener('click', ()=> navMobile.classList.toggle('open'));
navMobile.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=> navMobile.classList.remove('open')));

/* ---------- PROGRESS BAR + TO TOP + SPY ---------- */
const progressBar = document.getElementById('progressBar');
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', ()=>{
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progressBar.style.width = scrolled + '%';
  toTop.classList.toggle('show', h.scrollTop > 600);
  updateSpy();
}, {passive:true});
toTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

/* ---------- CURSOR GLOW ---------- */
const glow = document.getElementById('cursorGlow');
window.addEventListener('mousemove', e=>{
  glow.style.setProperty('--x', e.clientX+'px');
  glow.style.setProperty('--y', e.clientY+'px');
});

/* ---------- NEURAL NETWORK CANVAS ---------- */
(function(){
  const canvas = document.getElementById('neural-canvas');
  const ctx = canvas.getContext('2d');
  const hero = document.querySelector('.hero');
  let w,h,nodes=[],pulses=[];

  function resize(){
    w = canvas.width = hero.offsetWidth;
    h = canvas.height = hero.offsetHeight;
    initNodes();
  }

  function initNodes(){
    const count = w < 700 ? 22 : 42;
    nodes = Array.from({length:count}, ()=>({
      x: Math.random()*w,
      y: Math.random()*h,
      vx: (Math.random()-0.5)*0.15,
      vy: (Math.random()-0.5)*0.15,
      r: Math.random()*1.6 + 1
    }));
  }

  function step(){
    ctx.clearRect(0,0,w,h);
    nodes.forEach(n=>{
      n.x += n.vx; n.y += n.vy;
      if(n.x < 0 || n.x > w) n.vx *= -1;
      if(n.y < 0 || n.y > h) n.vy *= -1;
    });
    const maxDist = w < 700 ? 130 : 160;
    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if(dist < maxDist){
          const op = (1 - dist/maxDist) * 0.35;
          ctx.strokeStyle = `rgba(52,211,153,${op})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
          if(Math.random() < 0.0025){
            pulses.push({x1:nodes[i].x,y1:nodes[i].y,x2:nodes[j].x,y2:nodes[j].y,t:0});
          }
        }
      }
    }
    nodes.forEach(n=>{
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(107,255,168,0.85)';
      ctx.shadowColor = 'rgba(57,217,122,0.9)';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;
    });
    pulses.forEach(p=>{ p.t += 0.02; });
    pulses = pulses.filter(p=>p.t < 1);
    pulses.forEach(p=>{
      const x = p.x1 + (p.x2-p.x1)*p.t;
      const y = p.y1 + (p.y2-p.y1)*p.t;
      ctx.beginPath();
      ctx.arc(x,y,2,0,Math.PI*2);
      ctx.fillStyle = 'rgba(255,180,84,0.9)';
      ctx.shadowColor = 'rgba(255,180,84,0.9)';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    if(!reduceMotion) requestAnimationFrame(step);
  }

  window.addEventListener('resize', resize);
  resize();
  step();
})();
