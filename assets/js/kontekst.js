
    window.scrollTo(0, 0);

    // -----------------------------------------------------------------------
    // Entrance animations (IntersectionObserver)
    // -----------------------------------------------------------------------
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    window.addEventListener('load', () => {
      const heroEls = document.querySelectorAll('.hero .fade-up');
      heroEls.forEach(el => {
        const delay = Array.from(el.classList).find(c => c.startsWith('fade-up--d'));
        const ms = delay ? parseInt(delay.slice(-1)) * 80 : 0;
        setTimeout(() => el.classList.add('is-visible'), ms + 60);
      });
    });

    // -----------------------------------------------------------------------
    // Translation cycling
    // -----------------------------------------------------------------------
    const cycles = [
      { from: 'Dansk', to: 'Arabisk',  src: 'Jeg har smerter i maven og feber siden i går',         tgt: 'لدي ألم في بطني وحمى منذ الأمس',                        context: 'Sundhed' },
      { from: 'Dansk', to: 'Tyrkisk',  src: 'Hvornår er min næste aftale hos lægen?',                tgt: 'Bir sonraki doktor randevum ne zaman?',                   context: 'Sundhed' },
      { from: 'Dansk', to: 'Russisk',  src: 'Vi skal udfylde ansøgningen om boligstøtte',           tgt: 'Нам нужно заполнить заявление на жилищное пособие',        context: 'Borgerservice' },
      { from: 'Dansk', to: 'Polsk',    src: 'Du har ret til en gratis tolk ved dette møde',          tgt: 'Masz prawo do bezpłatnego tłumacza na tym spotkaniu',      context: 'Socialrådgivning' },
    ];

    let cycleIdx = 0;

    function applyTranslation(prefix, t) {
      const ids = [prefix + '-lang-from', prefix + '-lang-to', prefix + '-src', prefix + '-tgt', prefix + '-ctx'];
      const [fromEl, toEl, srcEl, tgtEl, ctxEl] = ids.map(id => document.getElementById(id));
      if (!fromEl) return;

      [fromEl, toEl, srcEl, tgtEl].forEach(el => {
        el.style.transition = 'opacity 280ms cubic-bezier(0.16, 1, 0.3, 1)';
        el.style.opacity = '0';
      });
      if (ctxEl) {
        ctxEl.style.transition = 'color 280ms cubic-bezier(0.16, 1, 0.3, 1)';
        ctxEl.style.color = 'transparent';
      }

      setTimeout(() => {
        fromEl.textContent = t.from;
        toEl.textContent   = t.to;
        srcEl.innerHTML    = t.src + '<span class="t-ui__cursor"></span>';
        tgtEl.textContent  = t.tgt;
        if (ctxEl) { ctxEl.textContent = t.context; ctxEl.style.color = ''; }
        [fromEl, toEl, srcEl, tgtEl].forEach(el => { el.style.opacity = '1'; });
      }, 300);
    }

    setInterval(() => {
      cycleIdx = (cycleIdx + 1) % cycles.length;
      applyTranslation('h', cycles[cycleIdx]);
      applyTranslation('p', cycles[cycleIdx]);
    }, 3800);

    // -----------------------------------------------------------------------
    // Mic button toggle (translate demo)
    // -----------------------------------------------------------------------
    document.querySelectorAll('.t-ui__mic').forEach(mic => {
      mic.addEventListener('click', function () {
        const wasActive = this.classList.contains('is-active');
        document.querySelectorAll('.t-ui__mic').forEach(m => m.classList.remove('is-active'));
        if (!wasActive) this.classList.add('is-active');
      });
    });

    // -----------------------------------------------------------------------
    // Chat audio recorder animation
    // -----------------------------------------------------------------------
    const chatRounds = [
      {
        recorded: { from: 'T', spoken: 'Hvad er dit primære behov i dag?', translation: 'ما هو احتياجك الرئيسي اليوم؟' },
        guests: [
          { from: 'G', spoken: 'أحتاج مساعدة في طلب الإسكان', translation: 'Jeg har brug for hjælp til boligansøgningen' },
          { from: 'G', spoken: 'ومتى يمكنني الحصول على جواب؟', translation: 'Og hvornår kan jeg få et svar?' },
        ]
      },
      {
        recorded: { from: 'T', spoken: 'Vi behandler ansøgninger inden for 4 uger', translation: 'نعالج الطلبات خلال 4 أسابيع' },
        guests: [
          { from: 'G', spoken: 'شكراً، هذا مفيد جداً', translation: 'Tak, det er meget nyttigt' },
          { from: 'G', spoken: 'هل أحتاج إلى مزيد من الوثائق؟', translation: 'Skal jeg bruge yderligere dokumenter?' },
        ]
      },
    ];

    function appendMsg(msgs, from, side, spoken, translation) {
      const isSent = side === 'sent';
      const row = document.createElement('div');
      row.className = 'c-ui__msg' + (isSent ? ' c-ui__msg--sent' : '');
      row.innerHTML =
        '<div class="c-ui__msg-avatar c-ui__msg-avatar--' + (isSent ? 'sent' : 'received') + '">' + from + '</div>' +
        '<div class="c-ui__msg-bubble c-ui__msg-bubble--' + (isSent ? 'sent' : 'received') + '">' +
          spoken +
          '<span class="c-ui__msg-translation">' + translation + '</span>' +
        '</div>';
      msgs.appendChild(row);
      msgs.scrollTop = msgs.scrollHeight;
      requestAnimationFrame(() => requestAnimationFrame(() => row.classList.add('is-visible')));
    }

    function runChatMicLoop(prefix) {
      const btn   = document.getElementById(prefix + '-chat-mic');
      const label = document.getElementById(prefix + '-input-label');
      const input = document.getElementById(prefix + '-input-text');
      const wave  = document.getElementById(prefix + '-wave');
      const send  = document.getElementById(prefix + '-send');
      const msgs  = document.getElementById(prefix + '-msgs');
      if (!btn || !label || !input || !msgs) return;

      let roundIdx = 0;

      function setIdle() {
        btn.className = 'c-ui__mic-btn';
        btn.innerHTML = '<span class="material-symbols-outlined">mic</span>';
        label.textContent = 'Skriv her...';
        wave.classList.remove('is-visible');
        input.classList.remove('is-recording');
        if (send) send.classList.remove('is-hidden');
      }

      function runRound() {
        const round = chatRounds[roundIdx % chatRounds.length];
        roundIdx++;
        const rec = round.recorded;

        setTimeout(() => {
          btn.className = 'c-ui__mic-btn is-recording';
          btn.innerHTML = '<span class="material-symbols-outlined">stop</span>';
          label.textContent = '';
          wave.classList.add('is-visible');
          input.classList.add('is-recording');
          if (send) send.classList.add('is-hidden');
        }, 600);

        setTimeout(() => {
          btn.className = 'c-ui__mic-btn is-processing';
          btn.innerHTML = '<div class="c-ui__mic-spinner"></div>';
          wave.classList.remove('is-visible');
          input.classList.remove('is-recording');
          let i = 0;
          label.textContent = '';
          const typer = setInterval(() => {
            i++;
            label.textContent = rec.spoken.slice(0, i);
            if (i >= rec.spoken.length) clearInterval(typer);
          }, 30);
        }, 2600);

        setTimeout(() => {
          label.textContent = '';
          appendMsg(msgs, rec.from, 'sent', rec.spoken, rec.translation);
          setTimeout(setIdle, 250);
        }, 4400);

        setTimeout(() => {
          appendMsg(msgs, round.guests[0].from, 'received', round.guests[0].spoken, round.guests[0].translation);
        }, 6000);

        setTimeout(() => {
          appendMsg(msgs, round.guests[1].from, 'received', round.guests[1].spoken, round.guests[1].translation);
        }, 7800);

        setTimeout(runRound, 11000);
      }

      setTimeout(runRound, 800);
    }

    function setupChatLoop(prefix) {
      const anchor = document.getElementById(prefix + '-msgs');
      if (!anchor) return;
      const obs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          runChatMicLoop(prefix);
          obs.disconnect();
        }
      }, { threshold: 0.25 });
      obs.observe(anchor.closest('section, .product-card') || anchor);
    }

    setupChatLoop('hero');
    setupChatLoop('card');

    // -----------------------------------------------------------------------
    // Nav scroll shadow
    // -----------------------------------------------------------------------
    const nav = document.querySelector('.nav');
    if (nav) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 8) {
          nav.style.boxShadow = '0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.08)';
        } else {
          nav.style.boxShadow = '0 1px 2px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.04)';
        }
      }, { passive: true });
    }

    // -----------------------------------------------------------------------
    // Quick-nav active-state on scroll
    // -----------------------------------------------------------------------
    const qnLinks = document.querySelectorAll('.quicknav__link');
    const qnSections = Array.from(qnLinks).map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
    function updateQuicknav() {
      const y = window.scrollY + 140;
      let active = qnSections[0];
      for (const s of qnSections) { if (s.offsetTop <= y) active = s; }
      qnLinks.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + active.id));
    }
    window.addEventListener('scroll', updateQuicknav, { passive: true });
    updateQuicknav();

    // -----------------------------------------------------------------------