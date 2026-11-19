export interface NavLinkItem {
	label: string;
	href: string;
}

export type FeatureIconKey =
	| 'download'
	| 'fade'
	| 'wifi'
	| 'eq31'
	| 'pad'
	| 'skin'
	| 'safemode'
	| 'rta'
	| 'organizer';

export interface FeatureItem {
	id: string;
	icon: FeatureIconKey;
	title: string;
	description: string;
}

export interface ShowcasePaneImage {
	label: string;
	src: string;
	alt: string;
	width: number;
	height: number;
	kind: 'desktop' | 'android';
}

export interface ScreenHighlight {
	device: string;
	detail: string;
}

export interface HeroShowcaseData {
	badge: string;
	title: string;
	story: string;
	highlights: ScreenHighlight[];
	layout: 'desktop-android';
	screens: ShowcasePaneImage[];
}

export interface StoryChapterItem {
	id: string;
	step: string;
	shortLabel: string;
	phase: string;
	title: string;
	problem: string;
	solution: string;
	highlights: ScreenHighlight[];
	layout: 'desktop-android' | 'trio';
	screens: ShowcasePaneImage[];
}

export interface DownloadTarget {
	label: string;
	fileName: string;
	/** Isi dengan URL rilis HTTPS (mis. GitHub Releases atau Cloudflare R2) saat installer siap diunduh. */
	url: string;
}

export interface SizeGuideItem {
	label: string;
	detail: string;
}

export interface PlatformDownloadCard {
	id: 'windows' | 'android';
	badge: string;
	title: string;
	version: string;
	description: string;
	primary: DownloadTarget;
	secondary?: DownloadTarget;
	specs: string[];
	sizeGuideTitle?: string;
	sizeGuide?: SizeGuideItem[];
}

export const SITE_META = {
	title: 'SWR Player — MP3 Player Gratis dari Tukang Sound untuk Tukang Sound',
	description:
		'100% Gratis sebagai dedikasi untuk sesama tukang sound. Tersedia Desktop Windows & Android Native: download MP3 kualitas optimal YouTube & YT Music Premium, Fade In/Out adjustable, Remote & sharing Wi-Fi, 31-Band Graphic EQ, Pad Slot, Brand Skin.',
	brandName: 'SWR PLAYER',
	brandSub: 'BY SWARARIA',
};

export const NAV_LINKS: NavLinkItem[] = [
	{ label: 'Alur Kerja', href: '#cerita' },
	{ label: 'Fitur', href: '#fitur' },
];

export const HERO_COPY = {
	eyebrow: '100% GRATIS · DEDIKASI TUKANG SOUND',
	titleLead: 'SWR Player',
	titleMain: 'MP3 Player yang Dibuat oleh Tukang Sound untuk Tukang Sound.',
	description:
		'Tersedia untuk Desktop Windows dan Android Native sebagai karya dedikasi—dibagikan gratis penuh fitur tanpa langganan atau iklan. Download MP3 kualitas optimal dari YouTube & YT Music Premium, Fade In/Out adjustable, 31-Band Graphic EQ, Pad Slot, Brand Skin, hingga remote & sharing track Wi-Fi.',
	primaryCta: 'Download Gratis',
	secondaryCta: 'Lihat Alur Kerja',
};

export const HERO_SHOWCASE: HeroShowcaseData = {
	badge: 'PEMBUKA · TAMPILAN UTAMA SAAT ON AIR',
	title: 'Layar Utama Fokus ke Sisa Waktu, Transisi Halus & Keamanan Panggung',
	story:
		'Saat acara berjalan, operator tidak sempat membaca menu kecil yang bertumpuk. Karena itu angka hitung mundur dibuat besar agar terbaca sekilas, lengkap dengan Fade Out 1 klik (tekan 2x untuk putus instan), Safe Mode anti-notifikasi WA, dan pengunci layar anti-salah colek.',
	highlights: [
		{
			device: 'Laptop Windows · FOH Live Player',
			detail: 'Menampilkan status ON AIR, timer hitung mundur besar, spektrum RTA langsung, tombol Fade 3s/5s, Auto-Stop 1 lagu, dan 8 Instant Cue Pads.',
		},
		{
			device: 'HP Android · Live Deck + Guard',
			detail: 'Membisukan notifikasi WA/telepon otomatis saat tampil (Auto DND), mengunci track aktif agar aman dari salah sentuh, dan menyediakan bank 8 Pad cepat.',
		},
	],
	layout: 'desktop-android',
	screens: [
		{
			label: 'Desktop Windows · FOH Live Player (ON AIR)',
			src: '/images/desktop-play.png',
			alt: 'Tampilan live Desktop Windows saat memutar lagu dengan RTA aktif, hitung mundur besar, dan Cue Pad terisi',
			width: 1520,
			height: 900,
			kind: 'desktop',
		},
		{
			label: 'Android Native · Live Deck (Guard Aktif)',
			src: '/images/android-play.png',
			alt: 'Tampilan live Android Native Live Deck saat memutar lagu dengan meter sinyal, Guard aktif, dan Fade Out 3s',
			width: 1080,
			height: 2340,
			kind: 'android',
		},
	],
};

export const STORY_SECTION = {
	eyebrow: 'DESIGN STORY · DEDIKASI DI LAPANGAN',
	heading: 'Dari Persiapan Lagu Sampai Acara Selesai, Tanpa Pindah Aplikasi',
	subheading:
		'Lahir dari dedikasi membantu sesama pekerja sound agar kerja di panggung lebih tenang—setiap layar dirancang berurutan menjawab kebutuhan nyata tanpa biaya langganan.',
	chapters: [
		{
			id: 'tahap-01',
			step: '01',
			shortLabel: 'Cari & Unduh',
			phase: 'TAHAP 01 · PERSIAPAN MATERI',
			title: 'Cari Lagu & Download MP3 Langsung dari Aplikasi',
			problem: 'Masalah di lapangan: menyalin tautan lewat situs konverter sering penuh iklan dan kualitas audionya turun.',
			solution:
				'Keputusan desain: kolom pencarian YouTube & YouTube Music ditanam langsung di halaman awal. Tinggal cari judul lalu unduh dengan kualitas optimal—terlebih saat terhubung akun YouTube Music Premium.',
			highlights: [
				{
					device: 'Di Laptop Windows (Ingest Audio)',
					detail: 'Menandai sumber terbaik dengan label YT PREMIUM MAX, mendukung unduhan daftar lagu sekaligus dalam antrean.',
				},
				{
					device: 'Di HP Android (Tambah Lagu)',
					detail: 'Request mendadak dari MC atau panitia bisa langsung dicari dan diunduh di HP dalam hitungan detik.',
				},
			],
			layout: 'desktop-android',
			screens: [
				{
					label: 'Desktop Windows · Ingest YT Music Premium',
					src: '/images/desktop-search.png',
					alt: 'Pencarian lagu YouTube Music di Desktop Windows menampilkan kualitas YT Premium Max dan antrean unduhan',
					width: 1520,
					height: 900,
					kind: 'desktop',
				},
				{
					label: 'Android Native · Cari & Unduh Langsung',
					src: '/images/android-search.png',
					alt: 'Hasil pencarian YouTube Music di Android Native lengkap dengan bitrate dan tombol unduh langsung',
					width: 1080,
					height: 2340,
					kind: 'android',
				},
			],
		},
		{
			id: 'tahap-02',
			step: '02',
			shortLabel: 'Cek Polaritas',
			phase: 'TAHAP 02 · CEK SOUND & KABEL',
			title: 'Pastikan Polaritas Speaker (+/-) & Jalur Output Sesuai',
			problem: 'Masalah di lapangan: kabel speaker terbalik membuat hentakan bass saling meniadakan dan suara terdengar tipis.',
			solution:
				'Keputusan desain: fitur Phase Checker ditaruh di HP agar tukang sound bisa langsung mengetes di depan boks speaker, sementara Desktop menyediakan tombol routing cepat Stereo, Mono Sum L+R, dan Phase 180°.',
			highlights: [
				{
					device: 'Di Laptop Windows (Phase & Matrix)',
					detail: 'Sakelar langsung untuk ubah Stereo ke Mono Sum L+R, Solo L/R untuk cek jalur kabel, serta balik fasa 180°.',
				},
				{
					device: 'Di HP Android (Speaker Phase Checker)',
					detail: 'Membaca polaritas positif (+) atau terbalik (-) menggunakan sinyal pulsa lewat mikrofon HP (mode 1 HP atau 2 HP).',
				},
			],
			layout: 'desktop-android',
			screens: [
				{
					label: 'Desktop Windows · Phase & Matrix Routing',
					src: '/images/desktop-phase.png',
					alt: 'Kontrol Stereo, Mono Sum L+R, Solo L/R, dan Phase 180 derajat di Desktop Windows',
					width: 1520,
					height: 900,
					kind: 'desktop',
				},
				{
					label: 'Android Native · Speaker Phase Checker',
					src: '/images/android-phase.png',
					alt: 'Alat cek fasa polaritas speaker pada aplikasi Android Native',
					width: 1080,
					height: 2340,
					kind: 'android',
				},
			],
		},
		{
			id: 'tahap-03',
			step: '03',
			shortLabel: 'EQ & Pad Slot',
			phase: 'TAHAP 03 · TUNING & JINGLE',
			title: 'Rapikan Suara dengan 31-Band EQ & Siapkan Pad Slot Jingle',
			problem: 'Masalah di lapangan: karakter gedung/tenda berbeda-beda, dan jeda MC sering butuh jingle atau efek suara cepat.',
			solution:
				'Keputusan desain: slider EQ 31-band dibuat nyaman digeser di layar sentuh Android, durasi Fade In/Out bisa diatur fleksibel (0.3–5 detik), dan 8 slot Cue Pad dipisahkan di panel khusus agar tidak mengganggu musik utama.',
			highlights: [
				{
					device: 'Di Laptop Windows (Fade + 8 Cue Pads)',
					detail: 'Pengaturan Global Fade 3s/5s, 3-Band EQ cepat, serta 8 tombol Cue Pad yang bisa dipicu angka keyboard 1–8.',
				},
				{
					device: 'Di HP Android (31-Band Graphic EQ)',
					detail: 'Equalizer grafis 31 band standar ISO (20 Hz–20 kHz) lengkap dengan preset dan limiter agar output tetap bersih.',
				},
			],
			layout: 'desktop-android',
			screens: [
				{
					label: 'Desktop Windows · EQ, Fade 3s & 8 Cue Pads',
					src: '/images/desktop-eq.png',
					alt: 'Tampilan Desktop Windows dengan 3-Band EQ aktif, Global Fade 3s, dan 8 Instant Cue Pads',
					width: 1520,
					height: 900,
					kind: 'desktop',
				},
				{
					label: 'Android Native · 31-Band Graphic EQ',
					src: '/images/android-eq.png',
					alt: 'Tampilan 31-Band Graphic EQ ISO 1/3 Octave di Android Native lengkap dengan limiter',
					width: 1080,
					height: 2340,
					kind: 'android',
				},
			],
		},
		{
			id: 'tahap-04',
			step: '04',
			shortLabel: 'Remote Wi-Fi',
			phase: 'TAHAP 04 · KENDALI & BAGI LAGU',
			title: 'Kontrol Playback dari Depan Panggung & Kirim Lagu Wi-Fi',
			problem: 'Masalah di lapangan: harus bolak-balik ke meja FOH untuk Play/Fade Out atau memindahkan file lagu lewat flashdisk.',
			solution:
				'Keputusan desain: alih-alih mengetik alamat IP manual yang rawan salah, pairing dibuat cukup scan QR lewat Wi-Fi lokal atau hotspot HP untuk kendali jarak jauh sekaligus berbagi track antar HP dan Laptop.',
			highlights: [
				{
					device: 'Di Laptop Windows (FOH Wireless Remote)',
					detail: 'Menghasilkan QR Code + PIN sesi otomatis yang tinggal dipindai oleh HP operator di jaringan Wi-Fi yang sama.',
				},
				{
					device: 'Di HP Android (Remote Multi-Device)',
					detail: 'Mendukung koneksi HP ke HP maupun HP ke Laptop lewat Wi-Fi lokal/hotspot, dilengkapi pairing manual bila tanpa kamera.',
				},
			],
			layout: 'desktop-android',
			screens: [
				{
					label: 'Desktop Windows · FOH Wireless Remote QR',
					src: '/images/desktop-remote.png',
					alt: 'Dialog QR Code dan PIN untuk remote playback Desktop Windows melalui Wi-Fi lokal',
					width: 1520,
					height: 900,
					kind: 'desktop',
				},
				{
					label: 'Android Native · Remote Multi-Device',
					src: '/images/android-remote.png',
					alt: 'Menu pairing QR Wi-Fi untuk remote antar-HP maupun HP ke Laptop di Android Native',
					width: 1080,
					height: 2340,
					kind: 'android',
				},
			],
		},
		{
			id: 'tahap-05',
			step: '05',
			shortLabel: 'Brand Skin & QC',
			phase: 'TAHAP 05 · BRAND SKIN & QC LAB',
			title: 'Tampil Profesional dengan Brand Skin, Stage RTA & Audit QC',
			problem: 'Masalah di lapangan: file kiriman panitia sering pecah/clipping, sementara layar player HP terlihat standar seperti pemutar musik biasa.',
			solution:
				'Keputusan desain: Brand Skin memudahkan operator memasang logo rental dan tema warna ke tampilan Stage RTA layar penuh di HP; sementara Desktop menyediakan Soundsystem QC Lab, Tag Organizer, dan pemotong multitrack.',
			highlights: [
				{
					device: 'Di Laptop Windows (QC & Spectral Lab)',
					detail: 'Mengukur True Peak (dBTP), Loudness (LUFS), mendeteksi Fake MP3, merapikan tag track massal, dan memotong rekaman multitrack/video.',
				},
				{
					device: 'Di HP Android (Brand Skin -> Stage RTA)',
					detail: 'Unggah logo rental, tulis nama acara, pilih palet warna (Mint / Gold / Cobalt / Amber / Crimson), lalu tampilkan di Stage RTA real-time.',
				},
			],
			layout: 'trio',
			screens: [
				{
					label: 'Desktop Windows · Soundsystem QC & Spectral Lab',
					src: '/images/desktop-qc.png',
					alt: 'Halaman Soundsystem QC dan Spectral Lab di Desktop Windows untuk audit dBTP, LUFS, dan kualitas file audio',
					width: 1520,
					height: 900,
					kind: 'desktop',
				},
				{
					label: 'Android Native · Pengaturan Brand & Skin',
					src: '/images/android-skin.png',
					alt: 'Pengaturan Upload Logo, Nama Rental, Tag Event, dan pilihan tema warna di Android Native',
					width: 1080,
					height: 2340,
					kind: 'android',
				},
				{
					label: 'Android Native · Tampilan Stage RTA Berlogo',
					src: '/images/android-rta.png',
					alt: 'Hasil tampilan logo rental dan spektrum Stage RTA Halo aktif pada Android Native',
					width: 1080,
					height: 2340,
					kind: 'android',
				},
			],
		},
	] satisfies StoryChapterItem[],
};

export const FEATURES_SECTION = {
	eyebrow: 'RINGKASAN FITUR',
	heading: 'Simpel di Luar, Lengkap untuk Kerja Sound',
	subheading:
		'Seluruh alat yang sering dibutuhkan operator panggung, rental audio, dan tukang sound hajatan — tersedia di Windows maupun Android Native.',
	items: [
		{
			id: 'yt-download',
			icon: 'download',
			title: 'Download MP3 Langsung dari Aplikasi',
			description:
				'Cari lagu atau playlist lalu unduh langsung dari dalam aplikasi dengan kualitas paling optimal dari YouTube & YouTube Music — terlebih saat terhubung akun YouTube Music Premium.',
		},
		{
			id: 'fade-in-out',
			icon: 'fade',
			title: 'Fade In & Fade Out Adjustable',
			description:
				'Atur parameter durasi Fade In dan Fade Out (0.3–5 detik) agar transisi musik masuk dan berhenti tetap smooth. Tekan kedua kali saat fading untuk putus instan darurat.',
		},
		{
			id: 'wifi-remote-share',
			icon: 'wifi',
			title: 'Remote Control & Sharing Track Wi-Fi',
			description:
				'Kendalikan Play, Pause, Next, dan Fade Out dari HP sambil keliling cek suara depan panggung, serta kirim atau bagikan file lagu antar perangkat lewat Wi-Fi lokal.',
		},
		{
			id: 'graphic-eq-31',
			icon: 'eq31',
			title: '31-Band Graphic EQ',
			description:
				'Equalizer grafis 31 band presisi (20 Hz – 20 kHz) di aplikasi Android untuk merapikan karakter suara sesuai karakter speaker dan ruangan, lengkap dengan preset serta limiter.',
		},
		{
			id: 'pad-slot',
			icon: 'pad',
			title: 'Pad Slot Instan',
			description:
				'Siapkan slot pad untuk jingle sponsor, bumper acara, tepuk tangan, atau efek suara sekali sentuh — mendukung bank pad di Android dan tombol cepat angka 1–8 di Windows.',
		},
		{
			id: 'brand-skin',
			icon: 'skin',
			title: 'Brand Skin Custom',
			description:
				'Pasang logo rental sendiri, nama acara, dan pilihan warna tampilan di layar Stage RTA maupun aplikasi Android supaya meja operator terlihat makin rapi dan profesional.',
		},
		{
			id: 'safe-mode',
			icon: 'safemode',
			title: 'Safe Mode & Anti-Kepencet',
			description:
				'Bisukan notifikasi WA & telepon otomatis saat tampil (Auto DND di Android), kunci lagu yang sedang berputar agar aman dari salah colek, serta berhenti otomatis per 1 lagu.',
		},
		{
			id: 'stage-rta-phase',
			icon: 'rta',
			title: 'Stage RTA & Cek Polaritas Speaker',
			description:
				'Tampilan spektrum frekuensi real-time untuk memantau output suara, ditambah alat cek polaritas kabel speaker (+/-) di HP agar hentakan bass padat dan tidak saling telan.',
		},
		{
			id: 'tag-multitrack',
			icon: 'organizer',
			title: 'Tag Organizer & Potong Multitrack',
			description:
				'Di Desktop Windows, rapikan nomor urut track dan bersihkan tag judul YouTube secara massal, sekaligus potong rekaman multitrack WAV atau video dokumentasi per lagu.',
		},
	] satisfies FeatureItem[],
};

export const DOWNLOAD_SECTION = {
	eyebrow: '100% GRATIS · TANPA LISENSI & IKLAN',
	heading: 'Download Gratis untuk Perangkat Anda',
	subheading:
		'Seluruh fitur Desktop Windows (.exe) dan Android Native (.apk) dibagikan gratis sebagai bentuk dedikasi untuk komunitas tukang sound Indonesia—tanpa watermark, tanpa batas lagu, dan tanpa langganan.',
	promises: [
		'Gratis Penuh Semua Fitur',
		'Tanpa Langganan & Iklan',
		'Dedikasi Tukang Sound',
	],
	platforms: [
		{
			id: 'windows',
			badge: 'WINDOWS 10 / 11 (64-BIT)',
			title: 'Desktop Windows',
			version: 'Gratis · v1.0.0 · ~160 MB',
			description:
				'Paket lengkap untuk laptop operator: download YouTube & YT Music Premium, FOH Live Player, 8 Pad Hotkey, Fade In/Out, Tag Organizer, dan pemotong multitrack/video.',
			primary: {
				label: 'Download Gratis Setup (.exe)',
				fileName: 'SwarariaAudioLab_Setup.exe',
				url: '',
			},
			specs: [
				'Installer Wizard (.exe) — tinggal Next hingga selesai, sudah termasuk FFmpeg & engine audio.',
				'Dilengkapi Mode Remote Wi-Fi untuk dikontrol langsung dari HP maupun browser.',
			],
		},
		{
			id: 'android',
			badge: 'ANDROID 8.0+ NATIVE',
			title: 'Android Native',
			version: 'Gratis · v0.6.0 · Mulai ~56 MB',
			description:
				'Pemutar panggung ringan dan responsif di HP: 31-Band Graphic EQ, Pad Slot, Brand Skin, download YT/YTM Premium, Safe Mode anti-notif WA, Stage RTA & Wi-Fi Server.',
			primary: {
				label: 'APK Gratis Ringan arm64-v8a (~56 MB)',
				fileName: 'SWR-Player-0.6.0-arm64-v8a-release.apk',
				url: 'https://github.com/dediks/swararia-audio-player-android/releases/download/v0.6.0/SWR-Player-0.6.0-arm64-v8a-release.apk',
			},
			secondary: {
				label: 'APK Gratis Universal (~194 MB)',
				fileName: 'SWR-Player-0.6.0-universal-release.apk',
				url: 'https://github.com/dediks/swararia-audio-player-android/releases/download/v0.6.0/SWR-Player-0.6.0-universal-release.apk',
			},
			specs: [
				'Seluruh varian memiliki fitur yang sama persis; perbedaannya hanya pada dukungan arsitektur CPU di dalam APK.',
				'Update cukup timpa APK tanpa uninstall agar daftar lagu dan playlist tetap aman.',
			],
			sizeGuideTitle: 'Penjelasan Ukuran File Besar & Kecil',
			sizeGuide: [
				{
					label: 'Ukuran Kecil (~56 MB · Khusus arm64-v8a)',
					detail:
						'Varian arm64-v8a hanya menyertakan library FFmpeg, Python & yt-dlp untuk mayoritas HP Android modern 64-bit sehingga jauh lebih ringan dan hemat kuota.',
				},
				{
					label: 'Ukuran Besar (~194 MB · Universal Semua Arsitektur)',
					detail:
						'Varian Universal membundel lengkap 4 arsitektur CPU sekaligus (arm64-v8a, armeabi-v7a untuk HP 32-bit lama, serta x86/x86_64). Pilih ini hanya jika memakai HP 32-bit lama atau emulator.',
				},
			],
		},
	] satisfies PlatformDownloadCard[],
};

export const FOOTER_COPY = {
	copyright: '© 2026 SWR Player by Swararia · 100% Gratis sebagai Dedikasi oleh Tukang Sound untuk Tukang Sound.',
	backToTop: 'Kembali ke atas',
};
