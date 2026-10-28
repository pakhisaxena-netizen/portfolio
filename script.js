// Executive Portfolio Interactive Scripts - Pakhi Saxena

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle Logic (Dark / Light mode)
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    html.classList.add('dark');
  } else if (savedTheme === 'light') {
    html.classList.remove('dark');
  } else {
    // Default to dark mode for luxury executive aesthetic
    html.classList.add('dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  // 2. Header shadow on scroll
  const mainHeader = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  });

  // 3. Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a nav link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 4. Scrollspy: Highlight active nav link
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('header nav a.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      if (href === currentId) {
        link.classList.add('text-brand-500', 'dark:text-brand-400');
        link.classList.remove('text-slate-600', 'dark:text-slate-300');
      } else {
        link.classList.remove('text-brand-500', 'dark:text-brand-400');
        link.classList.add('text-slate-600', 'dark:text-slate-300');
      }
    });
  });

  // 5. Contact Form Handler (simulated send & mailto trigger)
  const contactForm = document.getElementById('contactForm');
  const formSuccessMessage = document.getElementById('formSuccessMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const organization = document.getElementById('organization').value;
      const email = document.getElementById('email').value;
      const topic = document.getElementById('topic').value;
      const message = document.getElementById('message').value;

      // Construct mailto link
      const subject = encodeURIComponent(`Executive Inquiry: ${topic} - ${name} (${organization})`);
      const body = encodeURIComponent(
        `Dear Pakhi,\n\n${message}\n\n---\nSender: ${name}\nOrganization: ${organization}\nEmail: ${email}\nTopic: ${topic}`
      );
      
      if (formSuccessMessage) {
        formSuccessMessage.classList.remove('hidden');
      }

      // Open email client
      setTimeout(() => {
        window.location.href = `mailto:pakhi.saxena@accordindia.net?subject=${subject}&body=${body}`;
      }, 500);
    });
  }
});

// 6. Global Print Bio Trigger
window.printBio = function() {
  window.print();
};

// 7. Thought Leadership Briefings Data & Modal Handlers
const reportData = {
  ecommerce: {
    title: "The Future of Indian E-Commerce: Tier-II & D2C Growth",
    source: "ETRetail & Wazir Advisors • Authored by Pakhi Saxena",
    badge: "Flagship Industry Report",
    content: `
      <p class="font-medium text-slate-800 dark:text-slate-100">Key Takeaways from the Research:</p>
      <ul class="list-disc list-inside space-y-2 mt-2">
        <li><strong>Democratization of Digital Commerce:</strong> Over 40% of India's incremental e-commerce demand is originating from Tier-II, Tier-III towns and rural clusters, propelled by smartphone penetration, digital payments (UPI), and vernacular UI.</li>
        <li><strong>The Rise of Direct-to-Consumer (D2C):</strong> Traditional retail moats are being challenged by digital-first native brands in beauty, personal care, specialty food, and lifestyle fashion that achieve direct customer relationships.</li>
        <li><strong>Omnichannel Inevitability:</strong> The study highlights that pure digital customer acquisition reaches high saturation cost thresholds; sustainable scale mandates strategic offline touchpoints and experiential brick-and-mortar integration.</li>
      </ul>
      <p class="mt-3"><strong>Implications for Boards & CXOs:</strong> Sourcing leaders who understand both digital performance marketing unit economics and complex physical retail supply chains is now the #1 strategic priority.</p>
    `
  },
  apparel: {
    title: "The Evolution of India’s Apparel & Lifestyle Market",
    source: "Images BOF & India Fashion Forum (IFF) • Speaker & Industry Contributor",
    badge: "Sectoral Deep-Dive",
    content: `
      <p class="font-medium text-slate-800 dark:text-slate-100">Core Findings & Strategic Themes:</p>
      <ul class="list-disc list-inside space-y-2 mt-2">
        <li><strong>Casualization & Comfort Wear:</strong> Accelerated post-pandemic shift toward smart casuals, athleisure, and performance denim driving margin expansion for innovative apparel brands.</li>
        <li><strong>Formalization of Ethnic Wear:</strong> Rapid transition from unorganized tailoring to branded national ethnic and celebration wear retail chains, creating massive private equity consolidation opportunities.</li>
        <li><strong>Innerwear & Intimates Evolution:</strong> Shift from functional necessity to aspirational lifestyle category, driving premiumization and superior return on capital for branded players.</li>
      </ul>
      <p class="mt-3"><strong>Strategic Recommendation:</strong> Fashion brands must decouple their supply chain lead times and adopt agile small-batch replenishment models to capture fleeting micro-trends.</p>
    `
  },
  omnichannel: {
    title: "Omnichannel Retail & Shopping Experience of the Future",
    source: "Shopping Centres Next & Retail Leadership Summit • Jury Member & Keynote",
    badge: "Jury & Keynote Address",
    content: `
      <p class="font-medium text-slate-800 dark:text-slate-100">Address Highlights:</p>
      <ul class="list-disc list-inside space-y-2 mt-2">
        <li><strong>The New Purpose of Physical Stores:</strong> Retail stores are evolving from mere transactional depots into experiential brand flagships, customer acquisition centers, and localized fulfillment nodes.</li>
        <li><strong>Unified Commerce Architecture:</strong> Dissecting how unified CRM, real-time inventory visibility across warehouses and stores, and frictionless return mechanisms drive long-term customer lifetime value (LTV).</li>
        <li><strong>Mall & Tenant Partnerships:</strong> Re-evaluating lease structures, revenue-share frameworks, and community-centric anchor concepts in modern retail developments.</li>
      </ul>
      <p class="mt-3"><strong>Leadership Imperative:</strong> Cross-functional capability building: retail leaders must break organizational silos between online digital teams and offline regional retail managers.</p>
    `
  }
};

window.openReportModal = function(key) {
  const modal = document.getElementById('reportModal');
  const data = reportData[key];
  if (!modal || !data) return;

  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalSource').textContent = data.source;
  document.getElementById('modalBadge').textContent = data.badge;
  document.getElementById('modalBody').innerHTML = data.content;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
};

window.closeReportModal = function() {
  const modal = document.getElementById('reportModal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = 'auto';
};

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  const modal = document.getElementById('reportModal');
  if (e.target === modal) {
    window.closeReportModal();
  }
});
