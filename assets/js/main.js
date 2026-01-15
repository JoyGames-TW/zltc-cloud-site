/**
 * ZLTC Corporate Website - Main JavaScript
 * 湛盧科技有限公司 企業官網
 * 
 * Features:
 * - Shared Navbar/Footer Component Loading
 * - Scroll Reveal Animations
 * - Navbar Scroll Effects
 * - Active Navigation State
 * - Case Study Filtering
 */

(function() {
  'use strict';

  // ============================================
  // Configuration
  // ============================================
  const CONFIG = {
    navbarScrollThreshold: 50,
    revealThreshold: 0.15,
    revealRootMargin: '0px 0px -50px 0px'
  };

  // ============================================
  // Navbar Component
  // ============================================
  const NavbarComponent = `
    <nav class="navbar navbar-expand-lg fixed-top" id="mainNavbar">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <span class="brand-icon">
            <img src="assets/img/company-logos/logo-horizontal.png" alt="湛盧科技 橫式 Logo" class="navbar-logo">
          </span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="切換導覽列">
          <i class="bi bi-list fs-4"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html" data-page="home">首頁</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="solutions.html" data-page="solutions">解決方案</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="products.html" data-page="products">產品</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="case-studies.html" data-page="case-studies">案例</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html" data-page="about">關於我們</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html" data-page="contact">聯絡我們</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="resources.html" data-page="resources">資源</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  // ============================================
  // Footer Component
  // ============================================
  const FooterComponent = `
    <footer class="site-footer">
      <div class="container">
        <div class="row g-4">
          <!-- Company Info -->
          <div class="col-lg-5 col-md-6">
            <div class="footer-brand">
              <img src="assets/img/company-logos/logo-mark.png" style="height: 48px;">
              湛盧科技有限公司
            </div>
            <div class="footer-brand-en">Zhan-Lu Technology Co., Ltd. (ZLTC)</div>
            <p class="mb-0" style="font-size: 0.9375rem;">
              專注醫療資訊系統與資料視覺化，以及跨平台軟體開發的科技公司。
            </p>
          </div>
          
          <!-- Quick Links -->
          <div class="col-lg-2 col-md-6">
            <h5 class="footer-title">快速連結</h5>
            <ul class="footer-links">
              <li><a href="solutions.html">解決方案</a></li>
              <li><a href="products.html">產品</a></li>
              <li><a href="case-studies.html">案例</a></li>
              <li><a href="about.html">關於我們</a></li>
              <li><a href="resources.html">資源中心</a></li>
            </ul>
          </div>
          
          <!-- Products -->
          <div class="col-lg-2 col-md-6">
            <h5 class="footer-title">產品服務</h5>
            <ul class="footer-links">
              <li><a href="products.html#pathology">病理系統</a></li>
              <li><a href="products.html#dashboard">醫療儀器數據儀表板</a></li>
              <li><a href="products.html#game">手機遊戲開發</a></li>
            </ul>
          </div>
          
          <!-- Contact -->
          <div class="col-lg-3 col-md-6">
            <h5 class="footer-title">聯絡我們</h5>
            <div class="footer-contact-item">
              <i class="bi bi-envelope" style="margin-top: -0.125rem;"></i>
              <a href="mailto:contact@zltc-cloud.net">contact@zltc-cloud.net</a>
            </div>
            <div class="footer-contact-item">
              <i class="bi bi-geo-alt" style="margin-top: -0.125rem;"></i>
              <span>台灣</span>
            </div>
            <div class="footer-contact-item">
              <i class="bi bi-clock" style="margin-top: -0.125rem;"></i>
              <span>週一至週五 09:00 - 18:00</span>
            </div>
          </div>
        </div>
        
        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <div class="footer-copyright">
            © ${new Date().getFullYear()} 湛盧科技有限公司 Zhan-Lu Technology Co., Ltd. 版權所有。
          </div>
          <div class="footer-legal-links">
            <a href="privacy-policy.html">隱私政策</a>
            <a href="terms.html">服務條款</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  // ============================================
  // Initialize Components
  // ============================================
  function initComponents() {
    // Insert Navbar
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
      navbarPlaceholder.innerHTML = NavbarComponent;
    }

    // Insert Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.innerHTML = FooterComponent;
    }

    // Set active navigation state
    setActiveNavigation();
  }

  // ============================================
  // Set Active Navigation
  // ============================================
  function setActiveNavigation() {
    const currentPage = document.body.getAttribute('data-page');
    if (!currentPage) return;

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('data-page');
      if (linkPage === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // ============================================
  // Navbar Scroll Effect
  // ============================================
  function initNavbarScroll() {
    const navbar = document.getElementById('mainNavbar');
    if (!navbar) return;

    function handleScroll() {
      if (window.scrollY > CONFIG.navbarScrollThreshold) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
  }

  // ============================================
  // Scroll Reveal Animation
  // ============================================
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    if (!revealElements.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: CONFIG.revealThreshold,
        rootMargin: CONFIG.revealRootMargin
      });

      revealElements.forEach(el => observer.observe(el));
    } else {
      // Fallback for older browsers
      revealElements.forEach(el => el.classList.add('revealed'));
    }
  }

  // ============================================
  // Case Study Filter
  // ============================================
  function initCaseFilter() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const caseCards = document.querySelectorAll('.case-card-wrapper');

    if (!filterTabs.length || !caseCards.length) return;

    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Update active tab
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-filter');

        // Filter cards
        caseCards.forEach(card => {
          const category = card.getAttribute('data-category');
          
          if (filter === 'all' || category === filter) {
            card.style.display = 'block';
            // Re-trigger reveal animation
            setTimeout(() => {
              card.querySelector('.case-card').classList.add('revealed');
            }, 50);
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ============================================
  // Case Study Modal
  // ============================================
  function initCaseModal() {
    const caseCards = document.querySelectorAll('.case-card[data-bs-toggle="modal"]');
    const modalTitle = document.getElementById('caseModalLabel');
    const modalBody = document.getElementById('caseModalBody');

    if (!caseCards.length || !modalBody) return;

    caseCards.forEach(card => {
      card.addEventListener('click', () => {
        const title = card.getAttribute('data-title');
        const background = card.getAttribute('data-background');
        const challenge = card.getAttribute('data-challenge');
        const solution = card.getAttribute('data-solution');
        const result = card.getAttribute('data-result');
        const tech = card.getAttribute('data-tech');

        if (modalTitle) {
          modalTitle.textContent = title;
        }

        modalBody.innerHTML = `
          <div class="mb-4">
            <h6 class="text-primary-custom fw-semibold mb-2">背景</h6>
            <p class="text-muted">${background}</p>
          </div>
          <div class="mb-4">
            <h6 class="text-primary-custom fw-semibold mb-2">挑戰</h6>
            <p class="text-muted">${challenge}</p>
          </div>
          <div class="mb-4">
            <h6 class="text-primary-custom fw-semibold mb-2">解決方案</h6>
            <p class="text-muted">${solution}</p>
          </div>
          <div class="mb-4">
            <h6 class="text-primary-custom fw-semibold mb-2">成果</h6>
            <p class="text-muted">${result}</p>
          </div>
          <div>
            <h6 class="text-primary-custom fw-semibold mb-2">技術重點</h6>
            <p class="text-muted mb-0">${tech}</p>
          </div>
        `;
      });
    });
  }

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const navbarHeight = document.getElementById('mainNavbar')?.offsetHeight || 0;
          const targetPosition = targetElement.offsetTop - navbarHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ============================================
  // Mobile Menu Close on Link Click
  // ============================================
  function initMobileMenuClose() {
    const navbarCollapse = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    if (!navbarCollapse) return;

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
  }

  // ============================================
  // Back to Top Button (Optional Enhancement)
  // ============================================
  function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ============================================
  // Initialize Everything
  // ============================================
  function init() {
    // Load components first
    initComponents();
    
    // Then initialize features (with small delay to ensure DOM is ready)
    setTimeout(() => {
      initNavbarScroll();
      initScrollReveal();
      initCaseFilter();
      initCaseModal();
      initSmoothScroll();
      initMobileMenuClose();
      initBackToTop();
    }, 50);
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
