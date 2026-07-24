// =====================
// AARTI FOR GIRLS (USA) — main.js
// Injects shared nav + footer and wires up interactive components.
// =====================

const NAV_HTML = `
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="nav-inner">
    <a class="nav-logo" href="index.html" aria-label="Aarti for Girls home">
      <img src="assets/images/logo.png" alt="Aarti for Girls logo" height="48">
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="impact.html">Impact</a></li>
      <li><a href="team.html">Team</a></li>
      <li class="nav-donate">
        <a href="donate.html" class="btn btn-pink">Donate Now</a>
      </li>
    </ul>
    <button class="nav-burger" id="navBurger" aria-label="Toggle menu" aria-expanded="false">&#9776;</button>
  </div>
</nav>`;

const FOOTER_HTML = `
<section class="cta-section">
  <div class="cta-inner">
    <img class="cta-img" src="assets/images/footer-illustration.png" alt="Two Aarti girls laughing together">
    <div class="cta-text">
      <h2>Every drop makes an ocean.</h2>
      <p>As a registered nonprofit, your contributions make a real difference in the lives of vulnerable children. Join us in providing a safe and nurturing environment for every child in need.</p>
      <a href="donate.html" class="btn btn-yellow btn-lg">Support Now</a>
    </div>
  </div>
</section>
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-logo">
      <a href="index.html"><img src="assets/images/logo.png" alt="Aarti for Girls"></a>
      <p class="footer-address" style="color:rgba(255,255,255,.6);margin-top:.6rem;">Aarti for Girls Inc.<br>6 Cliff Drive,<br>Mineral Wells, Texas 76067<br>United States of America</p>
      <p style="margin-top:.5rem;font-size:.8rem;">EIN&nbsp;# 47-3019649</p>
      <p style="margin-top:.35rem;font-size:.8rem;"><a href="mailto:preeti.nandanar@aartiforgirls.org" style="color:rgba(255,255,255,.6);">preeti.nandanar@aartiforgirls.org</a></p>
      <div class="footer-socials" style="margin-top:.75rem;">
        <a href="https://www.facebook.com/AartiHome/" target="_blank" rel="noopener" aria-label="Facebook">f</a>
        <a href="https://www.instagram.com/aartiforgirls/" target="_blank" rel="noopener" aria-label="Instagram">&#9650;</a>
        <a href="https://x.com/Aarti_for_Girls" target="_blank" rel="noopener" aria-label="Twitter/X">X</a>
        <a href="https://www.youtube.com/channel/UCcsQOWRbyEerw2w3HcESqMg/videos" target="_blank" rel="noopener" aria-label="YouTube">&#9654;</a>
        <a href="https://www.linkedin.com/company/aarti-for-girls" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
      </div>
    </div>
    <div>
      <h4>Explore</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="impact.html">Impact</a></li>
        <li><a href="team.html">Team</a></li>
        <li><a href="donate.html">Donate</a></li>
      </ul>
    </div>
    <div>
      <h4>Get Involved</h4>
      <ul>
        <li><a href="donate.html">Donate</a></li>
        <li><a href="https://www.aartiforgirls.org/volunteer" target="_blank" rel="noopener">Volunteer</a></li>
        <li><a href="https://www.aartiforgirls.org/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a></li>
        <li><a href="https://www.aartiforgirls.org/certifications" target="_blank" rel="noopener">Certifications</a></li>
        <li><a href="https://www.aartiforgirls.org/faq" target="_blank" rel="noopener">FAQs</a></li>
      </ul>
    </div>
    <div>
      <h4>Our Locations</h4>
      <ul>
        <li><a href="https://www.google.com/maps/place/Aarti+English+Medium+High+School/@14.4791162,78.8299799,17z" target="_blank" rel="noopener">Aarti English Medium School</a></li>
        <li><a href="https://www.google.co.in/maps/place/Aarti+village/@14.429238,78.8708758,17z" target="_blank" rel="noopener">Aarti Village</a></li>
        <li><a href="https://maps.app.goo.gl/YybVHfXwYckbsRC9A" target="_blank" rel="noopener">Aarti Women's Centre</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>Copyright &copy; Aarti for Girls 2025.</p>
    <p style="font-size:.72rem;color:rgba(255,255,255,.35);">Aarti for Girls Inc. is a registered 501(c)(3) nonprofit &mdash; EIN&nbsp;# 47-3019649</p>
  </div>
</footer>`;

// Inject nav & footer
function injectLayout() {
  const navEl = document.getElementById('nav-placeholder');
  const footEl = document.getElementById('footer-placeholder');
  if (navEl)  navEl.outerHTML  = NAV_HTML;
  if (footEl) footEl.outerHTML = FOOTER_HTML;
}

// Highlight active page in nav
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) {
      const parent = a.closest('li');
      if (parent) parent.classList.add('active');
    }
  });
}

// Mobile burger
function initBurger() {
  const burger = document.getElementById('navBurger');
  const links  = document.getElementById('navLinks');
  if (!burger || !links) return;
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.textContent = open ? '✕' : '☰';
    burger.setAttribute('aria-expanded', String(open));
  });
}

// Tab widget (donate page)
function initTabs() {
  document.querySelectorAll('[data-tabs]').forEach(wrap => {
    const btns   = wrap.querySelectorAll('.tab-btn');
    const panels = wrap.querySelectorAll('.tab-panel');
    btns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        if (panels[i]) panels[i].classList.add('active');
      });
    });
  });
}

// Expandable board-member bios (team page)
function initExpandBtns() {
  document.querySelectorAll('.expand-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = this.closest('.board-card');
      var bio = card.querySelector('.bio-content');
      var isOpen = bio.classList.toggle('open');
      this.setAttribute('aria-expanded', String(isOpen));
      this.querySelector('.expand-icon').textContent = isOpen ? '−' : '+';
    });
  });
}

// Donation amount picker (donate page)
function initDonateForm() {
  const form = document.getElementById('donateForm');
  if (!form) return;
  const chips = form.querySelectorAll('.amt-chip');
  const custom = form.querySelector('#customAmount');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      if (chip.dataset.amt === 'other') { custom && custom.focus(); }
      else if (custom) { custom.value = ''; }
    });
  });
  if (custom) {
    custom.addEventListener('focus', () => {
      chips.forEach(c => c.classList.remove('active'));
      const other = form.querySelector('[data-amt="other"]');
      if (other) other.classList.add('active');
    });
  }
  form.addEventListener('submit', e => {
    e.preventDefault();
    const note = document.getElementById('donateNote');
    if (note) { note.hidden = false; note.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
  });
}

// Boot
document.addEventListener('DOMContentLoaded', () => {
  injectLayout();
  setActiveNav();
  initBurger();
  initTabs();
  initExpandBtns();
  initDonateForm();
});
