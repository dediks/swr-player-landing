(() => {
	const THEME_STORAGE_KEY = 'swr_landing_theme';
	const root = document.documentElement;
	const themeToggle = document.querySelector('[data-theme-toggle]');
	const themeIcon = document.querySelector('[data-theme-icon]');
	const themeLabel = document.querySelector('[data-theme-label]');
	const themeMeta = document.querySelector('meta[name="theme-color"]');

	function readStoredTheme() {
		try {
			const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
			return saved === 'dark' || saved === 'light' ? saved : null;
		} catch {
			return null;
		}
	}

	function saveStoredTheme(theme) {
		try {
			window.localStorage.setItem(THEME_STORAGE_KEY, theme);
		} catch {
			// Ignore storage restrictions in private browsing modes.
		}
	}

	function resolveInitialTheme() {
		const stored = readStoredTheme();
		if (stored) return stored;
		return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
	}

	function applyTheme(theme) {
		const isDark = theme === 'dark';
		root.dataset.theme = theme;
		if (themeMeta) {
			themeMeta.setAttribute('content', isDark ? '#06101e' : '#06224b');
		}
		if (themeToggle instanceof HTMLElement) {
			themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
			themeToggle.setAttribute(
				'aria-label',
				isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap',
			);
		}
		if (themeIcon) {
			themeIcon.textContent = isDark ? '☀️' : '🌙';
		}
		if (themeLabel) {
			themeLabel.textContent = isDark ? 'LIGHT' : 'DARK';
		}
	}

	applyTheme(resolveInitialTheme());

	if (themeToggle instanceof HTMLElement) {
		themeToggle.addEventListener('click', () => {
			const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
			applyTheme(nextTheme);
			saveStoredTheme(nextTheme);
		});
	}

	const moduleDialog = document.getElementById('swrModuleDialog');
	const downloadDialog = document.getElementById('swrDownloadDialog');
	const apkStatusNote = document.getElementById('swrApkStatusNote');

	function switchDownloadPlatform(platform) {
		if (!(downloadDialog instanceof HTMLDialogElement)) return;
		downloadDialog.querySelectorAll('[data-dl-tab]').forEach((tab) => {
			if (!(tab instanceof HTMLElement)) return;
			const active = tab.dataset.dlTab === platform;
			tab.classList.toggle('active', active);
			tab.setAttribute('aria-selected', active ? 'true' : 'false');
		});
		downloadDialog.querySelectorAll('[data-dl-panel]').forEach((panel) => {
			if (panel instanceof HTMLElement) {
				panel.hidden = panel.dataset.dlPanel !== platform;
			}
		});
		if (apkStatusNote) {
			apkStatusNote.hidden = true;
			apkStatusNote.textContent = '';
		}
	}

	function openModuleModal(moduleId) {
		if (!(moduleDialog instanceof HTMLDialogElement)) return;
		const panels = moduleDialog.querySelectorAll('[data-module-panel]');
		panels.forEach((panel) => {
			if (panel instanceof HTMLElement) {
				panel.hidden = panel.dataset.modulePanel !== moduleId;
			}
		});
		moduleDialog.showModal();
	}

	function openDownloadModal() {
		if (!(downloadDialog instanceof HTMLDialogElement)) return;
		switchDownloadPlatform('android');
		downloadDialog.showModal();
	}

	document.querySelectorAll('[data-dl-tab]').forEach((tab) => {
		tab.addEventListener('click', () => {
			if (tab instanceof HTMLElement && tab.dataset.dlTab) {
				switchDownloadPlatform(tab.dataset.dlTab);
			}
		});
	});

	document.querySelectorAll('[data-open-module]').forEach((trigger) => {
		trigger.addEventListener('click', () => {
			if (trigger instanceof HTMLElement && trigger.dataset.openModule) {
				openModuleModal(trigger.dataset.openModule);
			}
		});
	});

	document.querySelectorAll('[data-open-download]').forEach((trigger) => {
		trigger.addEventListener('click', () => {
			if (
				trigger instanceof HTMLElement &&
				trigger.dataset.closeParent === 'swrModuleDialog' &&
				moduleDialog instanceof HTMLDialogElement &&
				moduleDialog.open
			) {
				moduleDialog.close();
			}
			openDownloadModal();
		});
	});

	document.querySelectorAll('[data-close-dialog]').forEach((btn) => {
		btn.addEventListener('click', () => {
			if (!(btn instanceof HTMLElement)) return;
			const targetId = btn.dataset.closeDialog;
			const target = targetId ? document.getElementById(targetId) : null;
			if (target instanceof HTMLDialogElement && target.open) {
				target.close();
			}
		});
	});

	[moduleDialog, downloadDialog].forEach((dlg) => {
		if (!(dlg instanceof HTMLDialogElement)) return;
		dlg.addEventListener('click', (event) => {
			if (event.target === dlg) {
				dlg.close();
			}
		});
	});

	document.querySelectorAll('[data-apk-select]').forEach((btn) => {
		btn.addEventListener('click', () => {
			if (!(btn instanceof HTMLElement)) return;
			const fileName = btn.dataset.apkSelect || 'SWR-Player';
			const url = btn.dataset.apkUrl || '#';
			if (url.startsWith('https://')) {
				window.location.assign(url);
				return;
			}
			if (apkStatusNote) {
				apkStatusNote.textContent =
					'Link rilis ' +
					fileName +
					' belum ditautkan. Unggah file installer ke Cloudflare R2 atau GitHub Releases lalu isi URL-nya pada src/data/swrLanding.ts.';
				apkStatusNote.hidden = false;
			}
		});
	});
})();
