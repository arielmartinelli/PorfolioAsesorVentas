document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Menu Toggle ---
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuToggle.classList.toggle('active');
      
      // Transform hamburger into an 'X'
      const spans = menuToggle.querySelectorAll('span');
      if (menuToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.querySelectorAll('span').forEach(span => span.style.transform = 'none');
        menuToggle.querySelectorAll('span')[1].style.opacity = '1';
      });
    });
  }

  // --- Header Scrolled Effect ---
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Scroll Spy & Animations (Intersection Observer) ---
  const sections = document.querySelectorAll('section');
  const navLinksItems = document.querySelectorAll('.nav-link');
  const reveals = document.querySelectorAll('.reveal');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // Trigger when section is in active viewing area
    threshold: 0
  };

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinksItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => spyObserver.observe(section));

  // --- Reveal on Scroll ---
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  });

  reveals.forEach(reveal => revealObserver.observe(reveal));

  // --- Back to Top Button ---
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  // --- WhatsApp Testimonials Slider ---
  const testimonials = [
    {
      initials: 'CF',
      name: 'Carlos Fernández',
      status: 'en línea',
      avatarColor: '#128c7e',
      messages: [
        { type: 'incoming', text: '¡Ariel, buenas tardes! Che te quería avisar que llegamos bárbaro a Rosario con el Audi A4. ¡Qué nave por favor! 🚗💨', time: '14:23' },
        { type: 'incoming', text: 'La verdad que impecable el viaje. Un placer haber hecho negocio con vos, re transparente todo y la documentación lista al toque.', time: '14:24' },
        { type: 'outgoing', text: '¡Hola Carlos! Qué alegría enorme me da leer esto. Sabía que ese A4 te iba a encantar, está nuevo de verdad. ¡Que lo disfrutes mucho con la familia y gracias por confiar en mí! 🚗🔥', time: '14:28' },
        { type: 'incoming', text: 'Olvidate, ya te recomendé con mi cuñado que anda buscando cambiar la camioneta. ¡Abrazo grande Ariel!', time: '14:30' },
        { type: 'outgoing', text: '¡Buenísimo Carlos! Decile que me escriba sin vueltas y le buscamos algo lindo en stock. ¡Abrazo y buena ruta!', time: '14:31' }
      ]
    },
    {
      initials: 'MJ',
      name: 'María & Juan',
      status: 'escribiendo...',
      avatarColor: '#3b82f6',
      messages: [
        { type: 'incoming', text: 'Hola Ariel! Te escribimos para agradecerte toda la paciencia del sábado en la sucursal. ¡Ya tenemos la Volvo en casa! 🥳', time: '18:05' },
        { type: 'incoming', text: 'Pensamos que por el tema de la financiación solo con DNI nos iban a dar mil vueltas, pero lo resolviste rapidísimo.', time: '18:07' },
        { type: 'outgoing', text: '¡Hola María, hola Juan! Qué gran noticia, felicitaciones por esa Volvo XC60. Me alegra mucho que hayamos podido acomodar la financiación de forma que les quede cómoda. ¡A disfrutar de la ruta! 🙌', time: '18:15' },
        { type: 'incoming', text: 'Sii, el finde ya nos vamos para la costa a probarla en la arena. Gracias por gestionar todo el trámite de la patente tan rápido.', time: '18:18' }
      ]
    },
    {
      initials: 'ER',
      name: 'Esteban R.',
      status: 'visto recientemente',
      avatarColor: '#f59e0b',
      messages: [
        { type: 'incoming', text: 'Qué hacés Ariel, todo bien? Te mando foto del Golf GTI impecable acá lavado en el garage. ¡Qué locura de auto! Jajaja', time: '11:10' },
        { type: 'incoming', text: 'Che, espectacular la tasación de mi Focus usado. Pensé que me iban a tirar abajo el precio pero me lo tomaste excelente para poder subirme al GTI.', time: '11:12' },
        { type: 'outgoing', text: '¡Hola Esteban! Jajaja ¡se ve hermoso! Te subiste a un misil clásico. El Focus tuyo estaba muy cuidado, era justo tasarlo bien. Trato justo para ambas partes, esa es la idea.', time: '11:20' },
        { type: 'incoming', text: 'Tal cual, por eso se hace rápido el negocio. En la semana te acerco a un amigo del laburo que quiere entregar su auto para comprar un sedán. ¡Saludos!', time: '11:22' },
        { type: 'outgoing', text: 'Espectacular Esteban, decile que venga de tu parte que lo asesoramos de diez. ¡Disfrutá ese GTI!', time: '11:25' }
      ]
    }
  ];

  let currentChatIndex = 0;
  const chatBody = document.getElementById('whatsapp-chat-body');
  const chatName = document.getElementById('whatsapp-name');
  const chatStatus = document.getElementById('whatsapp-name').nextElementSibling;
  const chatAvatar = document.getElementById('whatsapp-avatar');
  const clientDots = document.querySelectorAll('.client-dot');

  function renderChat(index) {
    if (!chatBody) return;
    
    const chat = testimonials[index];
    chatName.textContent = chat.name;
    chatStatus.textContent = chat.status;
    
    // Set status styling
    if (chat.status === 'en línea' || chat.status === 'escribiendo...') {
      chatStatus.style.color = 'var(--whatsapp)';
    } else {
      chatStatus.style.color = '#8696a0';
    }
    
    chatAvatar.textContent = chat.initials;
    chatAvatar.style.backgroundColor = chat.avatarColor;

    // Clear chat body
    chatBody.innerHTML = '';

    // Render messages with small delay to simulate real chat loading
    chat.messages.forEach((msg, idx) => {
      const bubble = document.createElement('div');
      bubble.classList.add('chat-bubble', msg.type);
      
      let doubleCheckHtml = '';
      if (msg.type === 'outgoing') {
        doubleCheckHtml = `
          <span class="chat-checkmarks">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 3L8.5 9.5L5.5 6.5" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11 3L4.5 9.5L1.5 6.5" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>`;
      }

      bubble.innerHTML = `
        ${msg.text}
        <span class="chat-time">
          ${msg.time}
          ${doubleCheckHtml}
        </span>
      `;
      
      // Delay printing each bubble slightly for organic effect
      setTimeout(() => {
        chatBody.appendChild(bubble);
        // Scroll chat to bottom
        chatBody.scrollTop = chatBody.scrollHeight;
      }, idx * 150);
    });

    // Update active dot indicators
    clientDots.forEach((dot, dIdx) => {
      if (dIdx === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  // Bind dots events
  clientDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const index = parseInt(dot.getAttribute('data-index'));
      currentChatIndex = index;
      renderChat(currentChatIndex);
    });
  });

  // Next / Prev Chat Controls
  const prevBtn = document.getElementById('chat-prev');
  const nextBtn = document.getElementById('chat-next');

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentChatIndex = (currentChatIndex - 1 + testimonials.length) % testimonials.length;
      renderChat(currentChatIndex);
    });
    nextBtn.addEventListener('click', () => {
      currentChatIndex = (currentChatIndex + 1) % testimonials.length;
      renderChat(currentChatIndex);
    });
  }

  // Initial render
  renderChat(currentChatIndex);



  // --- Contact Form Submission & Validation ---
  const contactForm = document.getElementById('contact-form');
  const formInterestSelect = document.getElementById('form-interest');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value.trim();
      const phone = document.getElementById('form-phone').value.trim();
      const interest = formInterestSelect.value;
      const message = document.getElementById('form-message').value.trim();

      if (!name || !phone || !message) {
        alert('Por favor, completa todos los campos requeridos.');
        return;
      }

      const whatsappNumber = '5491112345678'; // Asesor Phone

      // Format WhatsApp string
      const leadMessage = `*NUEVO CLIENTE - WEB PORTFOLIO*\n\n` +
                          `👤 *Nombre:* ${name}\n` +
                          `📞 *Teléfono:* ${phone}\n` +
                          `🚗 *Interés:* ${interest}\n` +
                          `💬 *Mensaje:* ${message}`;

      const formWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(leadMessage)}`;
      window.open(formWhatsappUrl, '_blank');
      
      // Optional: clear form
      contactForm.reset();
    });
  }

});
