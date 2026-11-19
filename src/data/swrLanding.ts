export interface NavLinkItem {
	label: string;
	href: string;
}

export interface IntroHighlight {
	id: string;
	icon: 'shield' | 'cue' | 'fader' | 'pads' | 'remote';
	label: string;
}

export interface ModuleItem {
	id: 'android-deck' | 'android-stage' | 'win-audiolab' | 'win-player';
	numberLabel: string;
	category: string;
	platformBadge: string;
	title: string;
	subtitle: string;
	accentTone: 'mint' | 'cyan' | 'gold' | 'navy';
	summary: string;
	highlights: string[];
	stageTip: string;
}

export interface FohServiceItem {
	id: string;
	icon: 'safe' | 'guard' | 'monosum' | 'duck' | 'phase' | 'skin';
	tone: 'cyan' | 'mint' | 'gold';
	platformTag: string;
	title: string;
	description: string;
}

export interface NumberStatItem {
	value: string;
	label: string;
	sublabel: string;
	tone: 'soft-cyan' | 'electric-cyan' | 'soft-mint' | 'soft-gold';
}

export interface SoundmanStory {
	quote: string;
	name: string;
	role: string;
	badge: string;
	tone: 'mint' | 'cyan' | 'gold';
}

export interface DownloadPackage {
	id: 'arm64' | 'armv7' | 'win-setup';
	platform: 'android' | 'windows';
	archLabel: string;
	title: string;
	recommended: boolean;
	approxSize: string;
	compatibility: string;
	downloadUrl: string;
	fileName: string;
}

export const SITE_META = {
	title: 'SWR Player by Swararia — Pemutar Musik untuk Soundman & Tukang Sound',
	description:
		'Pemutar musik panggung yang diracik khusus untuk soundman, tukang sound hajatan, operator mixer, dan kru rental audio—di Android dan Laptop Windows. Bebas notif WA bocor, anti kepencet, Fade Out halus, volume rata, dan remote Wi-Fi tanpa kuota.',
	brandName: 'SWR PLAYER',
	brandSub: 'BY SWARARIA',
	versionLabel: 'ANDROID & WINDOWS · 100% OFFLINE',
};

export const NAV_LINKS: NavLinkItem[] = [
	{ label: 'TENTANG', href: '#kenalan' },
	{ label: 'ANDROID & PC', href: '#modul' },
	{ label: 'FITUR', href: '#fitur-foh' },
	{ label: 'RINGKASAN', href: '#angka' },
	{ label: 'KATA SOUNDMAN', href: '#cerita' },
];

export const HERO_COPY = {
	line1: 'DIBIKIN OLEH & UNTUK',
	line2: 'TUKANG SOUND',
	line3: 'PAS JAGA',
	scriptAccent: 'Mixer.',
	description:
		'Lahir dari pengalaman jaga mixer berjam-jam di lapangan. Dibuat buat soundman panggung, tukang sound hajatan, operator FOH, sampai kru rental: bebas bunyi WA bocor ke speaker, anti kepencet pas momen sakral, volume lagu rata, dan Fade Out halus.',
	primaryCta: 'DOWNLOAD SEKARANG',
	secondaryCta: 'LIHAT CARA KERJANYA',
	floatingBadgeTop: 'ANDROID & PC',
	floatingBadgeBottom: '100% OFFLINE',
};

export const INTRO_COPY = {
	eyebrow: 'DARI MEJA OPERATOR KE LAPANGAN.',
	headline: 'PAHAM BETUL RASANYA JAGA SOUND.',
	paragraph:
		'Pemutar musik biasa dibuat cuma buat dengerin lagu santai, bukan buat kerja keras di lapangan. SWR Player kami racik sendiri dari meja mixer—buat sesama soundman, tukang sound, dan operator audio biar pas ngawal acara suasananya aman, rapi, dan nggak bikin jantungan.',
	signature: 'Karya Tukang Sound buat Rekan Lapangan 🎛️',
	deviceStatusLabel: 'HP di Meja Mixer · Laptop Persiapan',
	deviceStatusBadge: 'Siap Tempur',
	deviceSecondaryBadge: 'WA Bisu · Anti Kepencet · Fade Out 3–5d',
	highlights: [
		{ id: 'safe', icon: 'shield', label: 'Bunyi notif WA & telepon tidak bocor ke speaker panggung (Android)' },
		{ id: 'cue', icon: 'cue', label: 'Lagu main terkunci aman—nggak bakal kepotong kalau salah colek' },
		{ id: 'fader', icon: 'fader', label: 'Fade Out halus 3–5 detik (tekan 2x langsung mati) & Ducking pas MC bicara' },
		{ id: 'pads', icon: 'pads', label: 'Ketahuan MP3 palsu mendem & volume semua lagu diratakan (Windows)' },
		{ id: 'remote', icon: 'remote', label: 'Kontrol player & kirim lagu antar-HP atau laptop via Wi-Fi tanpa kuota' },
	] satisfies IntroHighlight[],
};

export const MODULES_SHOWCASE = {
	heading: 'SENJATA LENGKAP DI HP & LAPTOP',
	ctaLabel: 'UNDUH SEKARANG',
	items: [
		{
			id: 'android-deck',
			numberLabel: '01 · ANDROID (DI MEJA MIXER)',
			category: 'ANDROID · PLAYER ANTI-PANIK',
			platformBadge: 'ANDROID',
			title: 'PUTAR LAGU TANPA PANIK',
			subtitle: 'WA nggak tembus, anti kepencet & Fade Out halus',
			accentTone: 'mint',
			summary:
				'Jadikan HP Android pemutar panggung yang tenang dicolok ke mixer. Bunyi notif WA sama telepon nggak bakal bocor bikin kaget tamu, lagu yang lagi main nggak bakal mati kepencet jari, dan bisa berhenti pelan-pelan.',
			highlights: [
				'Bisukan notifikasi & panggilan otomatis (Auto DND / Separate App Sound)',
				'Berhenti otomatis setelah 1 lagu selesai + hitungan mundur 15 detik jelang habis',
				'Lagu utama terkunci aman: tersenggol atau salah colek judul lain tidak langsung memotong',
				'Fade Out halus (0.3–5 detik) & Fade In otomatis; tekan ke-2 kali langsung putus darurat',
				'16 tombol pad jingle/efek suara instan + tombol kecilkan musik 1 klik pas MC bicara (-12 dB)',
				'Deteksi otomatis colokan kabel mixer vs Bluetooth + peringatan bila volume HP belum mentok',
			],
			stageTip: 'Catatan Lapangan: Begitu kabel mixer dicolok, pastikan indikator hijau "Siap Putar" menyala dan volume media HP sudah penuh sebelum tamu datang.',
		},
		{
			id: 'android-stage',
			numberLabel: '02 · ANDROID (ALAT OPERATOR & RENTAL)',
			category: 'ANDROID · TAMPILAN & KONEKSI',
			platformBadge: 'ANDROID',
			title: 'STAGE RTA, FASA & SERVER WI-FI',
			subtitle: 'Pasang logo rental, cek speaker & remote multi-HP',
			accentTone: 'cyan',
			summary:
				'Biar meja operator makin ganteng dengan layar grafik musik berlogo rental Anda sendiri. Lengkap dengan alat cek arah kabel speaker (+/-) biar bass padat, plus mode server untuk kontrol atau kirim lagu lewat Wi-Fi.',
			highlights: [
				'Layar spektrum musik real-time (gaya Halo, LED Bar, Curve) + 5 pilihan tema warna panggung',
				'Pasang Nama Rental, Nama Hajatan/Acara & Logo kru sendiri langsung dari galeri HP',
				'Cek arah fasa speaker (+/-) pakai 1 HP atau 2 HP (satu di mixer, satu keliling box speaker) + simpan file WAV tes',
				'Cari lagu & dengar cuplikan sampai 2 menit sebelum disimpan ke playlist HP',
				'HP jadi Server Wi-Fi lokal: dikontrol HP kru lain (Scan QR) atau laptop panitia (PIN) + kirim file bebas dobel',
			],
			stageTip: 'Catatan Lapangan: Cek arah fasa sub dan top pas gladi bersih biar suara bass padat bulat di tengah tenda dan nggak saling telan.',
		},
		{
			id: 'win-audiolab',
			numberLabel: '03 · WINDOWS (PERSIAPAN DI LAPTOP)',
			category: 'WINDOWS · SIAPKAN AMUNISI',
			platformBadge: 'WINDOWS',
			title: 'BUANG MP3 MENDEM & RATAKAN VOLUME',
			subtitle: 'Pisahkan file abal-abal, samakan gain & potong rekaman',
			accentTone: 'gold',
			summary:
				'Beresin semua amunisi lagu di laptop sebelum kru berangkat loading. File MP3 palsu hasil editan yang suaranya mendem langsung ketahuan, volume semua lagu dibikin rata biar fader mixer anteng.',
			highlights: [
				'Deteksi file MP3 320k tipuan (spektrum mendem) dibanding lagu yang benar-benar jernih',
				'Samakan kekerasan suara semua lagu (EBU R128) supaya tangan operator nggak bolak-balik ngejar gain',
				'Ubah format lagu untuk Flashdisk/CDJ (44.1 kHz) atau Mixer Digital (48 kHz), atau simpan format asli',
				'Beri nomor urut otomatis (01 - , 02 - ) dan bersihkan tulisan berantakan di nama file secara massal',
				'Potong rekaman multitrack WAV per lagu (mixer X32/M32/DAW) serta potong video dokumentasi per lagu',
			],
			stageTip: 'Catatan Lapangan: Ratakan volume playlist di rumah, jadi pas hajatan tinggal duduk santai tanpa takut ada lagu yang tiba-tiba meledak kekerasan.',
		},
		{
			id: 'win-player',
			numberLabel: '04 · WINDOWS + HP (PANGGUNG & LAPANGAN)',
			category: 'WINDOWS · PLAYER & REMOTE',
			platformBadge: 'WINDOWS + HP',
			title: 'PLAYER LAPTOP & REMOTE DARI HP',
			subtitle: '8 tombol cepat, atur EQ & kendalikan dari depan tenda',
			accentTone: 'navy',
			summary:
				'Pemutar andalan di laptop Windows dengan tombol Fade 3s/5s, EQ 3-band, dan shortcut keyboard. Laptop tetap aman di meja sound—tukang sound bisa jalan ke depan tenda sambil kontrol Play dan Fade lewat HP.',
			highlights: [
				'Pilih mode berhenti otomatis per 1 lagu, lanjut terus, atau ulang + Fade In/Out (Off–5 detik)',
				'Tombol langsung Fade 3s / 5s, shortcut keyboard (Spasi, S, F, 1–8) & tekan 2x langsung putus darurat',
				'8 tombol cepat (angka 1–8 di keyboard) untuk memutar jingle sponsor atau lagu selingan seketika',
				'Atur EQ (Low, Mid, High), gabung Mono (L+R), balik fasa 180°, dan grafik spektrum real-time',
				'Kontrol Play, Stop, ganti lagu, dan Fade Out dari HP (Scan QR) lewat Wi-Fi tanpa butuh kuota internet',
			],
			stageTip: 'Catatan Lapangan: Laptop taruh di meja sound, bawa HP jalan ke tengah audiens buat tes dengar suara panggung secara riil.',
		},
	] satisfies ModuleItem[],
};

export const FOH_SERVICES: FohServiceItem[] = [
	{
		id: 'safe-mode',
		icon: 'safe',
		tone: 'cyan',
		platformTag: 'ANDROID',
		title: 'Notif WA & Telepon Bisu Otomatis',
		description: 'Bunyi "ting" WA atau panggilan masuk nggak bakal nyelonong ke sound gantung. Momen sakral aman terkendali.',
	},
	{
		id: 'guard-cue',
		icon: 'guard',
		tone: 'mint',
		platformTag: 'ANDROID',
		title: 'Lagu Main Aman, Anti Kepencet',
		description: 'Tangan operator senggolan atau salah colek judul lain? Musik yang lagi jalan tetap aman terkunci.',
	},
	{
		id: 'fader-duck',
		icon: 'duck',
		tone: 'gold',
		platformTag: 'ANDROID & WINDOWS',
		title: 'Fade Out Halus, 2x Tekan Putus',
		description: 'MC mendadak bicara? Fade Out 3–5 detik turun pelan-pelan. Kalau ada kondisi darurat, tekan 2x langsung mati.',
	},
	{
		id: 'mono-sum',
		icon: 'monosum',
		tone: 'cyan',
		platformTag: 'WINDOWS',
		title: 'Babat MP3 Mendem & Samakan Volume',
		description: 'Ketahuan mana MP3 editan abal-abal dan samakan kerasnya semua lagu biar fader mixer anteng.',
	},
	{
		id: 'phase-checker',
		icon: 'phase',
		tone: 'mint',
		platformTag: 'ANDROID & WINDOWS',
		title: '16 Pad Jingle, Duck MC & Cek Fasa',
		description: 'Tombol tepuk tangan instan, musik otomatis mengecil pas MC bicara (-12 dB), dan tes polaritas speaker (+/-).',
	},
	{
		id: 'brand-studio',
		icon: 'skin',
		tone: 'gold',
		platformTag: 'ANDROID ↔ WINDOWS',
		title: 'Remote QR & Kirim Lagu Bebas Kuota',
		description: 'Kolega rental atau panitia mau setor lagu? Kirim langsung via Wi-Fi lokal tanpa kabel data & tanpa internet.',
	},
];

export const STATS_NUMBERS: NumberStatItem[] = [
	{
		value: 'HP & PC',
		label: 'ANDROID & WINDOWS',
		sublabel: 'Bawa HP saja beres, atau bawa Laptop buat senjata lengkap',
		tone: 'soft-cyan',
	},
	{
		value: '0.3–5s',
		label: 'FADE IN & FADE OUT',
		sublabel: 'Turun halus otomatis, tombol darurat tekan 2x langsung putus',
		tone: 'electric-cyan',
	},
	{
		value: '16 PAD',
		label: 'PAD JINGLE & CEK FASA',
		sublabel: 'Pad jingle MC, logo rental di layar & cek polaritas speaker',
		tone: 'soft-mint',
	},
	{
		value: 'OFFLINE',
		label: '100% BEBAS KUOTA',
		sublabel: 'Setor lagu & kendalikan player via Wi-Fi lokal tanpa internet',
		tone: 'soft-gold',
	},
];

export const SOUNDMAN_STORIES: SoundmanStory[] = [
	{
		quote:
			'Paling tenang pas sesi ijab kabul. Notif grup WA keluarga nggak tembus ke speaker gantung, dan musik bisa turun halus pas penghulu mulai ngomong.',
		name: 'Mas Hendra',
		role: 'Tukang Sound Hajatan · Jawa Timur',
		badge: 'MH',
		tone: 'mint',
	},
	{
		quote:
			'Sebelum kru berangkat loading, playlist diberesin dulu di laptop. Lagu download-an YouTube yang suaranya mendem ketahuan semua, volumenya jadi rata pas dimainin.',
		name: 'Cak Wahyu',
		role: 'Owner Rental Audio · Jawa Tengah',
		badge: 'CW',
		tone: 'cyan',
	},
	{
		quote:
			'Laptop tinggal di meja operator, saya bisa jalan keliling depan panggung buat dengerin hasil suara sambil kontrol Play sama Fade Out langsung dari HP.',
		name: 'Kang Dedi',
		role: 'Operator Sound FOH · Jawa Barat',
		badge: 'KD',
		tone: 'gold',
	},
];

export const FOOTER_COPY = {
	headlineLine1: 'JAGA ACARA',
	headlineLine2: 'BERIKUTNYA',
	scriptAccent: 'Lebih Nyaman!',
	metaItems: [
		{ icon: 'android', label: 'Android 10+ (.APK)' },
		{ icon: 'desktop', label: 'Windows 10/11 (.EXE)' },
		{ icon: 'offline', label: '100% Offline · Tanpa Iklan' },
	],
	ctaTitle: 'PASANG DI HP ATAU LAPTOP',
	ctaDescription: 'Dibuat untuk tukang sound, soundman panggung, operator mixer, dan kru rental lapangan—pilih Android (.apk) atau Windows (.exe).',
	ctaButton: 'DOWNLOAD SEKARANG',
	copyright: '© 2026 SWR Player · Dari Meja Mixer untuk Tukang Sound & Operator Lapangan · Swararia Audio Lab.',
};

export const DOWNLOAD_PACKAGES: DownloadPackage[] = [
	{
		id: 'arm64',
		platform: 'android',
		archLabel: 'ANDROID · ARM64 (arm64-v8a)',
		title: 'Rekomendasi HP Android Modern',
		recommended: true,
		approxSize: '~107 MB',
		compatibility: 'Android 10+ (64-bit) — Samsung, Xiaomi, Oppo, Vivo, Realme terbaru.',
		downloadUrl: '#release-arm64',
		fileName: 'SWR-Player-arm64-v8a.apk',
	},
	{
		id: 'armv7',
		platform: 'android',
		archLabel: 'ANDROID · ARMv7 (armeabi-v7a)',
		title: 'HP Android Lama (32-bit)',
		recommended: false,
		approxSize: '~100 MB',
		compatibility: 'HP Android 10+ 32-bit atau HP cadangan khusus meja mixer.',
		downloadUrl: '#release-armv7',
		fileName: 'SWR-Player-armeabi-v7a.apk',
	},
	{
		id: 'win-setup',
		platform: 'windows',
		archLabel: 'DESKTOP WINDOWS · SETUP (.EXE)',
		title: 'SWR Player & Audio Lab Desktop',
		recommended: true,
		approxSize: '~160 MB',
		compatibility: 'Windows 10/11 — tinggal Next → Finish, sudah termasuk Python, UI, FFmpeg & FOH Player.',
		downloadUrl: '#release-windows-setup',
		fileName: 'SwarariaAudioLab_Setup.exe',
	},
];

export const RELEASE_NOTES_SUMMARY = [
	'Android (.APK): Pemutar panggung tahan notif WA, 16 tombol jingle/efek, layar logo rental, cek fasa speaker & mode server Wi-Fi tanpa kuota internet.',
	'Windows (.EXE): Cek MP3 palsu mendem, ratakan volume semua lagu, rapikan nama file, potong rekaman multitrack/video & player laptop dengan remote QR.',
	'Saat update versi Android, cukup timpa APK tanpa uninstall agar daftar lagu dan playlist rekan-rekan di HP tetap aman.',
];
