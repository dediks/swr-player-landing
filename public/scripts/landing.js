(() => {
	document.querySelectorAll('[data-pending-file]').forEach((btn) => {
		btn.addEventListener('click', () => {
			if (!(btn instanceof HTMLElement)) return;
			const fileName = btn.dataset.pendingFile || 'installer';
			const targetId = btn.dataset.statusTarget || '';
			const noteEl = targetId ? document.getElementById(targetId) : null;
			if (!noteEl) return;
			noteEl.textContent =
				'Tautan unduhan untuk ' +
				fileName +
				' sedang disiapkan. File rilis akan segera tersedia di sini.';
			noteEl.hidden = false;
		});
	});

	const dialog = document.getElementById('swr-lightbox');
	const zoomImg = document.getElementById('swr-lightbox-img');
	const zoomCaption = document.getElementById('swr-lightbox-caption');
	const closeBtn = document.getElementById('swr-lightbox-close');

	if (
		dialog instanceof HTMLDialogElement &&
		zoomImg instanceof HTMLImageElement &&
		zoomCaption instanceof HTMLElement &&
		closeBtn instanceof HTMLElement
	) {
		document.querySelectorAll('[data-zoom-src]').forEach((trigger) => {
			trigger.addEventListener('click', () => {
				if (!(trigger instanceof HTMLElement)) return;
				const src = trigger.dataset.zoomSrc || '';
				if (!src.startsWith('/images/')) return;
				zoomImg.src = src;
				zoomImg.alt = trigger.dataset.zoomAlt || '';
				zoomCaption.textContent = trigger.dataset.zoomLabel || '';
				dialog.showModal();
			});
		});

		closeBtn.addEventListener('click', () => {
			dialog.close();
		});

		dialog.addEventListener('click', (ev) => {
			if (ev.target === dialog) {
				dialog.close();
			}
		});

		dialog.addEventListener('close', () => {
			zoomImg.removeAttribute('src');
			zoomImg.alt = '';
		});
	}

	const dockLinks = Array.from(document.querySelectorAll('.swr-dock-link[href^="#"]'));
	const sections = ['top', 'cerita', 'fitur', 'download']
		.map((id) => document.getElementById(id))
		.filter((el) => el instanceof HTMLElement);

	if ('IntersectionObserver' in window && dockLinks.length > 0 && sections.length > 0) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;
					const targetHref = '#' + entry.target.id;
					dockLinks.forEach((link) => {
						if (!(link instanceof HTMLElement) || link.classList.contains('is-primary')) return;
						link.classList.toggle('is-active', link.getAttribute('href') === targetHref);
					});
				});
			},
			{ rootMargin: '-35% 0px -55% 0px' },
		);
		sections.forEach((sec) => observer.observe(sec));
	}
})();
