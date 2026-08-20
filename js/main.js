/* =========================================================
   CAKRAWALA '23 — main.js
   Navigasi (menu mobile, navbar scroll, link aktif), event
   countdown, reveal-on-scroll, count-up statistik, horizon
   progress bar, dan tombol kembali ke atas.
   File ini dimuat di SEMUA halaman (index.html & pages/*.html).
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initNavbarScroll();
    initActiveNavLink();
    initReveal();
    initStatCountUp();
    initHorizonProgress();
    initBackToTop();
});

/* ---------- Navigasi: menu mobile ---------- */
function initMobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');
  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    iconOpen && iconOpen.classList.toggle('hidden');
    iconClose && iconClose.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', String(isHidden));
  });

  document.querySelectorAll('.mobile-link').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      iconOpen && iconOpen.classList.remove('hidden');
      iconClose && iconClose.classList.add('hidden');
    });
  });
}

/* ---------- Navigasi: navbar berubah warna saat scroll ---------- */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  function updateNav() {
    if (window.scrollY > 40) {
      navbar.classList.add('bg-navy-950/95', 'backdrop-blur', 'shadow-lg');
    } else {
      navbar.classList.remove('bg-navy-950/95', 'backdrop-blur', 'shadow-lg');
    }
  }
  window.addEventListener('scroll', updateNav);
  updateNav();
}

/* ---------- Navigasi: tandai link aktif sesuai halaman saat ini ---------- */
function initActiveNavLink() {
  const currentPage = document.body.dataset.page;
  if (!currentPage) return;

  document.querySelectorAll('.nav-link, .mobile-link').forEach((link) => {
    link.classList.remove('active');
    if (link.dataset.page === currentPage) {
      link.classList.add('active');
    }
  });
}

/* ---------- Reveal-on-scroll ---------- */
function initReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('in-view'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  targets.forEach((el) => io.observe(el));
}

/* ---------- Statistik: animasi hitung naik ---------- */
function initStatCountUp() {
  const countEls = document.querySelectorAll('[data-count]');
  if (!countEls.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          let current = 0;
          const step = Math.max(1, Math.round(target / 40));
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = current;
          }, 30);
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.4 }
  );
  countEls.forEach((el) => io.observe(el));
}

/* ---------- Horizon scroll-progress bar ---------- */
function initHorizonProgress() {
  const progressBar = document.getElementById('horizon-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

/* ---------- Tombol kembali ke atas ---------- */
function initBackToTop() {
  const toTopBtn = document.getElementById('to-top');
  if (!toTopBtn) return;

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 600) {
      toTopBtn.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      toTopBtn.classList.add('opacity-0', 'pointer-events-none');
    }
  });

  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- Toast notifikasi (dipakai lintas halaman: event, dsb.) ---------- */
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.remove('translate-y-24', 'opacity-0');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.add('translate-y-24', 'opacity-0');
  }, 3200);
}
