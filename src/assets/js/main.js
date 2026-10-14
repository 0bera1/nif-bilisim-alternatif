/* NİF Bilişim – minimal vanilla JS: header, menü, tema, animasyon, formlar */
(function () {
  'use strict';

  var root = document.documentElement;
  var body = document.body;
  var header = document.querySelector('[data-header]');

  /* Header gölgesi */
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Mobil menü */
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('main-nav');
  function setNav(open) {
    body.classList.toggle('nav-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
  }
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () { setNav(!body.classList.contains('nav-open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
    window.matchMedia('(min-width: 1080px)').addEventListener('change', function (m) { if (m.matches) setNav(false); });
  }

  /* Masaüstü alt menü */
  var subItem = document.querySelector('.has-sub');
  var subBtn = subItem && subItem.querySelector('.sub-toggle');
  function setSub(open) {
    if (!subItem) return;
    subItem.classList.toggle('is-open', open);
    subBtn.setAttribute('aria-expanded', String(open));
  }
  if (subBtn) {
    subBtn.addEventListener('click', function (e) { e.stopPropagation(); setSub(!subItem.classList.contains('is-open')); });
    document.addEventListener('click', function (e) { if (!subItem.contains(e.target)) setSub(false); });
    subItem.addEventListener('focusout', function (e) { if (!subItem.contains(e.relatedTarget)) setSub(false); });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (subItem && subItem.classList.contains('is-open')) { setSub(false); subBtn.focus(); }
    if (body.classList.contains('nav-open')) { setNav(false); navToggle.focus(); }
  });

  /* Tema (açık / koyu) */
  var themeBtn = document.querySelector('[data-theme-toggle]');
  var mqDark = window.matchMedia('(prefers-color-scheme: dark)');
  function currentTheme() { return root.dataset.theme || (mqDark.matches ? 'dark' : 'light'); }
  function syncThemeBtn() {
    if (!themeBtn) return;
    var dark = currentTheme() === 'dark';
    themeBtn.setAttribute('aria-pressed', String(dark));
    themeBtn.setAttribute('aria-label', dark ? 'Açık temaya geç' : 'Koyu temaya geç');
  }
  if (themeBtn) {
    syncThemeBtn();
    themeBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) { /* gizli mod */ }
      syncThemeBtn();
    });
    mqDark.addEventListener('change', syncThemeBtn);
  }

  /* Scroll animasyonları */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* Formlar */
  var MSG = {
    required: 'Bu alan zorunludur.',
    email: 'Lütfen geçerli bir e-posta adresi girin.',
    tel: 'Lütfen geçerli bir telefon numarası girin.',
    kvkk: 'Devam etmek için KVKK metnini onaylamanız gerekir.',
    group: 'Lütfen en az bir hizmet seçin.',
  };
  var PHONE = 'tel:+902325700431';

  function setError(input, msg) {
    var wrap = input.closest('.field');
    var err = document.getElementById(input.getAttribute('aria-describedby'));
    if (wrap) wrap.classList.toggle('has-error', !!msg);
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    if (err) err.textContent = msg || '';
  }

  function validateInput(input) {
    var v = (input.value || '').trim();
    var msg = '';
    if (input.type === 'checkbox') {
      if (input.required && !input.checked) msg = input.name === 'kvkk_onay' ? MSG.kvkk : MSG.required;
    } else if (input.required && !v) {
      msg = MSG.required;
    } else if (v && input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
      msg = MSG.email;
    } else if (v && input.type === 'tel' && v.replace(/\D/g, '').length < 10) {
      msg = MSG.tel;
    }
    setError(input, msg);
    return !msg;
  }

  function validateGroup(fs) {
    var ok = !!fs.querySelector('input:checked');
    var err = fs.querySelector('.field-error');
    fs.classList.toggle('has-error', !ok);
    if (err) err.textContent = ok ? '' : MSG.group;
    return ok;
  }

  function status(form, type, html) {
    var box = form.querySelector('.form-status');
    box.className = 'form-status' + (type ? ' is-' + type : '');
    box.innerHTML = html;
    if (html) box.focus();
  }

  document.querySelectorAll('[data-form]').forEach(function (form) {
    var inputs = form.querySelectorAll('.field input:not([type=hidden]), .field textarea');
    var group = form.querySelector('[data-group-required]');

    inputs.forEach(function (input) {
      if (input.closest('[data-group-required]')) return;
      input.addEventListener('blur', function () { if (input.value || input.type === 'checkbox') validateInput(input); });
      input.addEventListener('input', function () { if (input.getAttribute('aria-invalid') === 'true') validateInput(input); });
      input.addEventListener('change', function () { if (input.type === 'checkbox') validateInput(input); });
    });
    if (group) group.addEventListener('change', function () { validateGroup(group); });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      var firstBad = null;
      inputs.forEach(function (input) {
        if (input.closest('[data-group-required]')) return;
        if (!validateInput(input)) { ok = false; firstBad = firstBad || input; }
      });
      if (group && !validateGroup(group)) { ok = false; firstBad = firstBad || group.querySelector('input'); }
      if (!ok) { firstBad.focus(); return; }

      // Honeypot: botlar gizli alanı doldurur
      var hp = form.querySelectorAll('.hp input');
      for (var i = 0; i < hp.length; i++) { if (hp[i].value) { status(form, 'success', 'Teşekkürler, mesajınız alındı.'); return; } }

      var data = new FormData(form);
      // Çoklu hizmet seçimini tek satırda birleştir
      var services = data.getAll('hizmet_turu');
      if (services.length) { data.delete('hizmet_turu'); data.append('hizmet_turu', services.join(', ')); }
      if (data.get('email')) data.append('replyto', data.get('email'));
      data.delete('redirect');

      if (form.action.indexOf('web3forms') > -1 && !data.get('access_key')) {
        status(form, 'error', 'Form şu anda yapılandırılmamış. Lütfen bizi <a href="' + PHONE + '">(+90) 232 570 0431</a> numarasından arayın ya da <a href="mailto:bilgi@nifbilisim.com">bilgi@nifbilisim.com</a> adresine yazın.');
        return;
      }

      var btn = form.querySelector('button[type=submit]');
      var label = btn.querySelector('span');
      var old = label.textContent;
      btn.disabled = true;
      label.textContent = 'Gönderiliyor…';
      status(form, '', '');

      fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (res) {
          if (!res.ok || res.j.success === false) throw new Error(res.j.message || 'Gönderilemedi');
          form.reset();
          status(form, 'success', 'Teşekkürler! Mesajınız bize ulaştı, en kısa sürede sizinle iletişime geçeceğiz.');
        })
        .catch(function () {
          status(form, 'error', 'Mesajınız gönderilemedi. Lütfen tekrar deneyin ya da bizi <a href="' + PHONE + '">(+90) 232 570 0431</a> numarasından arayın.');
        })
        .then(function () { btn.disabled = false; label.textContent = old; });
    });
  });
})();
