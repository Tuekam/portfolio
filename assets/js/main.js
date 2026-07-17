// ============================================================
// DARK MODE (avec localStorage)
// ============================================================
const darkToggle = document.getElementById('darkToggle');
let isDark = localStorage.getItem('darkMode') === 'true';

if (isDark) {
  document.body.classList.add('dark');
  darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
  darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

darkToggle.addEventListener('click', () => {
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);
  darkToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem('darkMode', isDark);
});

// ============================================================
// AGRANDISSEMENT D'IMAGE EN PLEIN ÉCRAN
// ============================================================
function openFullscreen(imgSrc) {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.92);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: zoom-out;
    padding: 20px;
    backdrop-filter: blur(8px);
  `;
  
  overlay.innerHTML = `
    <img src="${imgSrc}" alt="Agrandissement" 
         style="max-width: 95%; max-height: 95%; object-fit: contain; border-radius: 8px; box-shadow: 0 20px 60px rgba(0,0,0,0.6);" />
    <button style="position: absolute; top: 24px; right: 24px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2); color: #fff; border-radius: 50%; width: 48px; height: 48px; font-size: 1.5rem; cursor: pointer; transition: all 0.3s; display: flex; align-items: center; justify-content: center;"
            onmouseover="this.style.background='rgba(255,255,255,0.25)'" 
            onmouseout="this.style.background='rgba(255,255,255,0.15)'">
      <i class="fas fa-times"></i>
    </button>
    <span style="position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); color: rgba(255,255,255,0.4); font-size: 0.85rem; letter-spacing: 0.5px; background: rgba(0,0,0,0.3); padding: 8px 20px; border-radius: 100px;">
      Cliquez n'importe où pour fermer
    </span>
  `;
  
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay || e.target.tagName === 'SPAN') {
      overlay.remove();
      document.body.style.overflow = '';
    }
  });
  
  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') {
      overlay.remove();
      document.body.style.overflow = '';
      document.removeEventListener('keydown', escHandler);
    }
  });
  
  document.body.style.overflow = 'hidden';
  document.body.appendChild(overlay);
}

// ============================================================
// DONNÉES DES PROJETS (avec coverImage)
// ============================================================
const projectsData = {
  hopsecure: {
    icon: '🏥',
    title: 'HopSecure - Reconnaissance vocale dans un établissement de santé',
    coverImage: '/assets/images/projects/hopsecure-cover.jpg',
    tags: ['React', 'Node.js', 'Python', 'TensorFlow', 'PostgreSQL'],
    description: `HopSecure est une application web innovante qui utilise la reconnaissance vocale pour faciliter la prise de notes et la documentation dans les établissements de santé.

**Fonctionnalités clés :**
• Transcription vocale en temps réel des consultations
• Intégration avec les dossiers patients électroniques
• Reconnaissance du vocabulaire médical spécifique
• Interface intuitive pour les professionnels de santé
• Sécurisation des données conforme au RGPD

**Problématique résolue :**
Les professionnels de santé passent jusqu'à 30% de leur temps à la documentation administrative. HopSecure réduit ce temps en automatisant la saisie via la voix, permettant aux médecins de se concentrer sur leurs patients.`,
    images: [
      '/assets/images/cap8.jpg',
      '/assets/images/cap9.jpg',
      '/assets/images/cap10.jpg'
    ],
    github: '#',
    demo: '#'
  },
  tomscan: {
    icon: '🍅',
    title: 'TomScan - Détection des maladies du feuillage de la tomate',
    coverImage: '/assets/images/projects/tomscan-cover.jpg',
    tags: ['Flutter', 'TensorFlow', 'Pytorch', 'PostgreSQL', 'FastAPI'],
    description: `TomScan est une application mobile qui utilise l'intelligence artificielle pour détecter les maladies du feuillage de la tomate à partir d'une simple photo.

**Fonctionnalités clés :**
• Capture photo ou import depuis la galerie
• Analyse IA en temps réel
• Diagnostic précis avec taux de confiance
• Recommandations de traitement
• Historique des analyses

**Problématique résolue :**
Les agriculteurs et jardiniers peinent souvent à identifier les maladies des tomates. TomScan leur permet d'obtenir un diagnostic rapide et fiable, leur évitant ainsi des pertes de récolte importantes.`,
    images: [
      '/assets/images/cap1.jpg',
      '/assets/images/cap2.jpg',
      '/assets/images/cap3.jpg'
    ],
    github: '#',
    demo: '#'
  },
  managestore: {
    icon: '📦',
    title: 'ManageStore - Application web de gestion de stock',
    coverImage: '/assets/images/projects/managestore-cover.jpg',
    tags: ['PHP', 'GIT', 'PostgreSQL', 'TailwindCSS'],
    description: `ManageStore est une solution complète de gestion de stock pour les commerces de toutes tailles.

**Fonctionnalités clés :**
• Gestion des produits et catégories
• Suivi des entrées/sorties de stock
• Alertes de réapprovisionnement
• Tableau de bord avec statistiques
• Export de rapports (PDF/Excel)
• Gestion multi-utilisateurs avec rôles

**Problématique résolue :**
Les petites et moyennes entreprises manquent souvent d'outils de gestion de stock accessibles. ManageStore leur offre une solution intuitive et puissante pour optimiser leur inventaire.`,
    images: [
      '/assets/images/cap5.jpg',
      '/assets/images/cap6.jpg',
      '/assets/images/cap7.jpg'
    ],
    github: '#',
    demo: '#'
  },
  stagecm: {
    icon: '🎓',
    title: 'StageCM - application web de Recherche de stage pour étudiants camerounais',
    coverImage: '/assets/images/projects/stagecm-cover.jpg',
    tags: ['React.js', 'Laravel', 'MySQL', 'TailwindCSS'],
    description: `StageCM est une plateforme de mise en relation entre les étudiants camerounais et les entreprises offrant des stages.

**Fonctionnalités clés :**
• Recherche de stages par domaine, ville, durée
• Profils étudiants avec CV et compétences
• Publication d'offres par les entreprises
• Système de candidature en ligne
• Messagerie intégrée
• Suivi des candidatures

**Problématique résolue :**
Les étudiants camerounais ont souvent du mal à trouver des stages de qualité. StageCM centralise les offres et facilite la mise en relation avec les entreprises.`,
    images: [
      'https://via.placeholder.com/800x1200/0EA5E9/FFFFFF?text=StageCM+-+Offres+(longue)',
      'https://via.placeholder.com/400x300/38BDF8/FFFFFF?text=StageCM+-+Profile',
      'https://via.placeholder.com/400x300/0284C7/FFFFFF?text=StageCM+-+Candidatures'
    ],
    github: '#',
    demo: '#'
  },
  projet6: {
    icon: '🚀',
    title: 'Mise en place d`une infrastructure linux de haute disponibilité',
    coverImage: '/assets/images/haute_dispo.jpg',
    tags: ['React', 'Node.js'],
    description: 'Ce projet consiste en la conception et le déploiement d`une infrastructure Linux de haute disponibilité composée de cinq machines interconnectées sur un réseau local, dont l`objectif est d`assurer une continuité de service web sans interruption pour un client. L`architecture repose sur un serveur MySQL (S2) qui héberge une base de données contenant des fiches employés, génère dynamiquement une page HTML à partir de ces données via des scripts shell, puis dépose ce fichier sur un serveur FTP central (S1) jouant le rôle de dépôt. Deux serveurs Apache (S3 et S4), configurés en mode principal et secours, récupèrent périodiquement ce fichier depuis le dépôt FTP et le servent aux clients. La haute disponibilité est assurée par HAProxy, qui répartit les requêtes HTTP entre les deux serveurs web tout en vérifiant leur état de santé, et par Keepalived, qui gère une adresse IP virtuelle flottante (VIP) basculant automatiquement de S3 vers S4 en cas de défaillance, rendant la panne totalement transparente pour l`utilisateur. L``ensemble du cycle est automatisé via des tâches CRON exécutées toutes les cinq minutes sur S2 (insertion des données, génération HTML et dépôt FTP) ainsi que sur S3 et S4 (récupération du fichier depuis S1), garantissant ainsi une mise à jour régulière du contenu web et une disponibilité ininterrompue du service.',
    images: [
    ],
    github: '#',
    demo: '#'
  }
};

// ============================================================
// OUVERTURE / FERMETURE DE LA MODALE PROJET
// ============================================================
function openProjectModal(projectKey) {
  const data = projectsData[projectKey];
  if (!data) return;

  document.getElementById('projectModalIcon').textContent = data.icon || '📱';
  document.getElementById('projectModalTitle').textContent = data.title;

  const tagsContainer = document.getElementById('projectModalTags');
  tagsContainer.innerHTML = data.tags.map(tag =>
    `<span class="font-mono text-xs bg-[var(--indigo-light)] text-[var(--indigo-deep)] px-3 py-1 rounded-full">${tag}</span>`
  ).join('');

  document.getElementById('projectModalDescription').innerHTML = data.description.replace(/\n/g, '<br>');

  const gallery = document.getElementById('projectModalGallery');
  if (data.images && data.images.length > 0) {
    gallery.innerHTML = data.images.map(img => {
      const escapedImg = img.replace(/'/g, "\\'");
      return `<div class="screenshot-wrapper rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--bg-body)]" style="cursor:pointer; position:relative;" onclick="openFullscreen('${escapedImg}')">
        <img src="${img}" alt="${data.title}" class="w-full h-auto object-contain" loading="lazy" style="pointer-events:none;" />
        <div style="position:absolute; bottom:8px; right:8px; background:rgba(0,0,0,0.5); color:#fff; padding:4px 10px; border-radius:20px; font-size:0.65rem; opacity:0; transition:opacity 0.3s; display:flex; align-items:center; gap:4px; backdrop-filter:blur(4px);" class="zoom-indicator">
          <i class="fas fa-search-plus" style="font-size:0.6rem;"></i> Agrandir
        </div>
      </div>`;
    }).join('');

    setTimeout(() => {
      document.querySelectorAll('.screenshot-wrapper').forEach(el => {
        el.addEventListener('mouseenter', function() {
          const indicator = this.querySelector('.zoom-indicator');
          if (indicator) indicator.style.opacity = '1';
        });
        el.addEventListener('mouseleave', function() {
          const indicator = this.querySelector('.zoom-indicator');
          if (indicator) indicator.style.opacity = '0';
        });
      });
    }, 100);

  } else {
    gallery.innerHTML = `
      <div class="col-span-full text-center py-8 text-[var(--text-secondary)]">
        <i class="fas fa-image text-3xl mb-2 block"></i>
        <span class="text-sm">Aucune capture d'écran disponible</span>
      </div>
    `;
  }

  const linksContainer = document.getElementById('projectModalLinks');
  linksContainer.innerHTML = `
    <a href="${data.github}" target="_blank" class="btn-primary bg-[var(--indigo)] text-white px-5 py-2 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition inline-flex items-center gap-2">
      <i class="fab fa-github"></i> Voir sur GitHub
    </a>
    <a href="${data.demo}" target="_blank" class="btn-secondary bg-transparent text-[var(--text-primary)] px-5 py-2 rounded-full text-sm font-semibold border-2 border-[var(--border-color)] hover:border-[var(--text-primary)] hover:bg-[var(--bg-card)] transition inline-flex items-center gap-2">
      <i class="fas fa-external-link-alt"></i> Démo en ligne
    </a>
  `;

  document.getElementById('projectModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  document.getElementById('projectModal').classList.remove('active');
  document.body.style.overflow = '';
}

const projectModal = document.getElementById('projectModal');
if (projectModal) {
  projectModal.addEventListener('click', function(e) {
    if (e.target === this) closeProjectModal();
  });
}

// ============================================================
// MODAL SERVICES (9 services)
// ============================================================
const servicesData = {
  web: {
    icon: '<i class="fas fa-laptop-code"></i>',
    title: 'Développement Web',
    description: 'Je crée des applications web sur mesure, de la conception à la mise en production.\n\n• Développement avec React, Next.js, Node.js\n• Création d\'APIs RESTful et GraphQL\n• Intégration de bases de données (PostgreSQL, MongoDB)\n• Déploiement sur AWS, Vercel, Netlify\n• Optimisation des performances et SEO\n• Interfaces utilisateur modernes et accessibles'
  },
  mobile: {
    icon: '<i class="fas fa-mobile-alt"></i>',
    title: 'Développement Mobile',
    description: 'Je développe des applications mobiles natives et cross-platform.\n\n• Applications iOS et Android avec Flutter\n• Applications natives avec Kotlin (Android)\n• Intégration de fonctionnalités natives (caméra, GPS, notifications)\n• Synchronisation avec des APIs backend\n• Publication sur les stores\n• Maintenance et mises à jour'
  },
  vitrine: {
    icon: '<i class="fas fa-globe"></i>',
    title: 'Sites Vitrines',
    description: 'Je crée des sites web professionnels pour présenter votre activité.\n\n• Design moderne et responsive (mobile-first)\n• Optimisation SEO pour un meilleur référencement\n• Intégration de formulaires de contact\n• Galeries d\'images et portfolios\n• Vitesse de chargement optimisée\n• CMS simple pour la mise à jour du contenu'
  },
  plateforme: {
    icon: '<i class="fas fa-cubes"></i>',
    title: 'Administration systeme',
    description: 'Je garantis la fiabilité et la performance de votre infrastructure IT : administration de serveurs (Linux/Windows), virtualisation, monitoring, sauvegarde, sécurité réseau, automatisation des tâches et mise en place de solutions haute disponibilité pour assurer la continuité de vos services.'
  },
  api: {
    icon: '<i class="fas fa-plug"></i>',
    title: 'API REST & Microservices',
    description: 'Je conçois et développe des APIs robustes et scalables.\n\n• Conception d\'APIs RESTful avec Node.js, Express\n• Architecture microservices avec Docker et Kubernetes\n• Documentation d\'API (Swagger, OpenAPI)\n• Sécurité (JWT, OAuth2, authentification)\n• Tests automatisés et CI/CD\n• Monitoring et logging'
  },
  cloud: {
    icon: '<i class="fas fa-cloud-upload-alt"></i>',
    title: 'Hébergement & Déploiement Cloud',
    description: 'Je vous accompagne dans le déploiement et l\'hébergement de vos applications.\n\n• Déploiement sur AWS\n• Hébergement sur Vercel\n• Configuration de serveurs (Nginx, Apache)\n• Mise en place de CI/CD\n• Gestion de domaines et certificats SSL\n• Surveillance et maintenance'
  },
  vision: {
    icon: '<i class="fas fa-eye"></i>',
    title: 'Vision par ordinateur',
    description: 'Je développe des solutions de traitement d\'images et reconnaissance visuelle.\n\n• Reconnaissance d\'objets et de visages\n• Classification d\'images avec TensorFlow, PyTorch\n• Détection et segmentation d\'images\n• Traitement d\'images en temps réel\n• Intégration dans des applications web et mobiles\n• Solutions de vision pour l\'agriculture, la santé, la sécurité'
  },
  database: {
    icon: '<i class="fas fa-database"></i>',
    title: 'Conception de bases de données',
    description: 'Je conçois et optimise des bases de données pour vos applications.\n\n• Modélisation de bases de données relationnelles (PostgreSQL, MySQL)\n• Bases de données NoSQL (MongoDB, Firebase)\n• Optimisation des requêtes et indexation\n• Migration de bases de données\n• Sauvegarde et récupération\n• Conception de schémas évolutifs'
  },
  consulting: {
    icon: '<i class="fas fa-user-tie"></i>',
    title: 'Consulting IT',
    description: 'Je vous conseille et vous accompagne dans vos projets digitaux.\n\n• Audit technique et architecture\n• Choix des technologies adaptées\n• Estimation des coûts et délais\n• Accompagnement à la transformation digitale\n• Formation et montée en compétence des équipes\n• Revue de code et bonnes pratiques'
  }
};

function openModal(serviceKey) {
  const data = servicesData[serviceKey];
  if (!data) {
    console.error('Service non trouvé:', serviceKey);
    return;
  }
  const iconEl = document.getElementById('modalIcon');
  const titleEl = document.getElementById('modalTitle');
  const descEl = document.getElementById('modalDescription');
  const modalEl = document.getElementById('serviceModal');
  
  if (iconEl) iconEl.innerHTML = data.icon;
  if (titleEl) titleEl.textContent = data.title;
  if (descEl) descEl.textContent = data.description;
  if (modalEl) {
    modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modalEl = document.getElementById('serviceModal');
  if (modalEl) {
    modalEl.classList.remove('active');
    document.body.style.overflow = '';
  }
}

const serviceModal = document.getElementById('serviceModal');
if (serviceModal) {
  serviceModal.addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
}

// ============================================================
// FERMETURE AVEC ÉCHAP
// ============================================================
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const projectModalEl = document.getElementById('projectModal');
    const serviceModalEl = document.getElementById('serviceModal');
    if (projectModalEl && projectModalEl.classList.contains('active')) {
      closeProjectModal();
    }
    if (serviceModalEl && serviceModalEl.classList.contains('active')) {
      closeModal();
    }
  }
});

// ============================================================
// FILTRES PROJETS
// ============================================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card:not(.extra-project)');
const extraProjects = document.querySelectorAll('.extra-project');
let showAll = false;

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    if (showAll) {
      extraProjects.forEach(p => p.classList.add('hidden'));
      showAll = false;
      const viewBtn = document.getElementById('viewAllBtn');
      if (viewBtn) viewBtn.innerHTML = '<i class="fas fa-arrow-right"></i> Voir tous les projets';
    }

    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });

    if (filter === 'all') {
      extraProjects.forEach(p => p.classList.add('hidden'));
    }
  });
});

// ============================================================
// BOUTON "VOIR TOUS LES PROJETS"
// ============================================================
const viewBtn = document.getElementById('viewAllBtn');
if (viewBtn) {
  viewBtn.addEventListener('click', function() {
    showAll = !showAll;
    if (showAll) {
      extraProjects.forEach(p => p.classList.remove('hidden'));
      this.innerHTML = '<i class="fas fa-arrow-left"></i> Voir moins de projets';
    } else {
      extraProjects.forEach(p => p.classList.add('hidden'));
      this.innerHTML = '<i class="fas fa-arrow-right"></i> Voir tous les projets';
    }
  });
}

// ============================================================
// FORMULAIRE DE CONTACT
// ============================================================
const contactForm = document.getElementById('contactForm');
const confirmationModal = document.getElementById('confirmationModal');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Récupération des valeurs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validation simple
    if (!name || !email || !message) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('https://formspree.io/f/xrenplog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Réinitialiser le formulaire
        contactForm.reset();
        // Ouvrir la modale de confirmation
        if (confirmationModal) {
          confirmationModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      } else {
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      alert('Erreur réseau. Veuillez réessayer ou m\'envoyer un email directement.');
    }
  });
}

// ============================================================
// OUVERTURE / FERMETURE DE LA MODALE DE CONFIRMATION
// ============================================================
function openConfirmationModal() {
  const modal = document.getElementById('confirmationModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeConfirmationModal() {
  const modal = document.getElementById('confirmationModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Fermeture au clic sur l'overlay
const confirmationModalEl = document.getElementById('confirmationModal');
if (confirmationModalEl) {
  confirmationModalEl.addEventListener('click', function(e) {
    if (e.target === this) closeConfirmationModal();
  });
}

// ============================================================
// RÉINITIALISATION DU FORMULAIRE
// ============================================================
function resetForm() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.reset();
  }
  closeConfirmationModal();
}

// ============================================================
// REVEAL AU SCROLL
// ============================================================
const revealElements = document.querySelectorAll(
  '.section, .project-card, .service-card, .testimonial-card, .cert-card, .stat-card'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ============================================================
// RENDRE LES FONCTIONS GLOBALES (pour les onclick HTML)
// ============================================================
window.openModal = openModal;
window.resetForm = resetForm;
window.closeModal = closeModal;
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.openFullscreen = openFullscreen;

console.log('🚀 Portfolio chargé avec succès !');