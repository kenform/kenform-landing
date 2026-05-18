import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

function forceElvenSyndicatePreviewImages() {
  const fallback = `${process.env.PUBLIC_URL || ''}/assets/elven-syndicate-preview.png`;

  document.querySelectorAll('img').forEach((img) => {
    const src = img.getAttribute('src') || '';
    const alt = img.getAttribute('alt') || '';
    const wrapperText = img.closest('[class*="modal" i], [class*="card" i], article, section, div')?.textContent || '';
    const context = `${alt} ${src} ${wrapperText}`;

    const isElven = /Elven\s+Syndicate/i.test(context) || /Превью проекта Elven/i.test(context);
    const alreadyFallback = img.src.includes('/assets/elven-syndicate-preview.png');
    const looksBroken =
      !src ||
      src === 'undefined' ||
      src === 'null' ||
      src.includes('elvenSyndicatePreview') ||
      src.includes('[object Object]') ||
      (img.complete && img.naturalWidth === 0);

    if (isElven && !alreadyFallback && looksBroken) {
      img.src = fallback;
      img.alt = 'Elven Syndicate';
      img.loading = 'lazy';
      img.decoding = 'async';
      img.style.objectFit = 'cover';
      img.style.objectPosition = 'center';
      img.style.width = '100%';
      img.style.height = '100%';
      img.dataset.elvenPreviewFixed = 'true';
    }
  });
}

if (typeof window !== 'undefined') {
  window.addEventListener(
    'error',
    (event) => {
      const target = event.target;
      if (target instanceof HTMLImageElement) {
        const alt = target.getAttribute('alt') || '';
        const wrapperText = target.closest('[class*="modal" i], [class*="card" i], article, section, div')?.textContent || '';

        if (/Elven\s+Syndicate/i.test(`${alt} ${wrapperText}`) || /Превью проекта Elven/i.test(`${alt} ${wrapperText}`)) {
          target.src = `${process.env.PUBLIC_URL || ''}/assets/elven-syndicate-preview.png`;
          target.alt = 'Elven Syndicate';
          target.style.objectFit = 'cover';
          target.style.objectPosition = 'center';
          target.style.width = '100%';
          target.style.height = '100%';
          target.dataset.elvenPreviewFixed = 'true';
        }
      }
    },
    true
  );

  window.addEventListener('load', forceElvenSyndicatePreviewImages);
  setTimeout(forceElvenSyndicatePreviewImages, 300);
  setTimeout(forceElvenSyndicatePreviewImages, 1200);

  const observer = new MutationObserver(() => {
    window.requestAnimationFrame(forceElvenSyndicatePreviewImages);
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<I18nextProvider i18n={i18n} defaultNS={'translation'}>
			<Provider store={store}>
				<Router basename={process.env.PUBLIC_URL}>
					<App />
				</Router>
			</Provider>
		</I18nextProvider>
	</React.StrictMode>,
);


// Portfolio page route marker + reveal animations
const initPortfolioPagePolish = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const setRoute = () => {
    const hashRoute = window.location.hash.replace(/^#\/?/, '').split('/')[0];
    const pathRoute = window.location.pathname.split('/').filter(Boolean)[0];
    document.body.dataset.route = hashRoute || pathRoute || 'home';
  };

  setRoute();
  window.addEventListener('hashchange', setRoute);
  window.addEventListener('popstate', setRoute);

  const revealSelector = [
    'main section > *',
    'main [class*="grid" i] > *',
    'main [class*="cards" i] > *',
    'main [class*="list" i] > *'
  ].join(',');

  const applyReveal = () => {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    Array.from(document.querySelectorAll(revealSelector)).forEach((el, index) => {
      if (!(el instanceof HTMLElement)) return;
      if (el.closest('header, nav')) return;
      if (el.dataset.revealReady === '1') return;

      el.dataset.revealReady = '1';
      el.classList.add('reveal-on-scroll');
      el.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 55}ms`);
      observer.observe(el);
    });
  };

  window.requestAnimationFrame(applyReveal);
  window.setTimeout(applyReveal, 120);

  const mutationObserver = new MutationObserver(() => {
    window.requestAnimationFrame(applyReveal);
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });
};

initPortfolioPagePolish();

