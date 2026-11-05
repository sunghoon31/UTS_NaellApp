# PRD — Personal CV & Academic Score App

UTS Pemrograman Mobile 2 · Target Level 10 (Industry)

Nov 5, 2026 · @Ell

## 1. Ringkasan & Identitas Proyek

Proyek ini membangun **Personal CV & Academic Score App**, aplikasi mobile React Native + Expo berisi profil, portofolio, dan capaian akademik mahasiswa, dengan target **Level 10 (Industry)** sehingga seluruh persyaratan Level 1–10 wajib terpenuhi (kumulatif).

| Item | Isi |
| --- | --- |
| Nama lengkap | Naelul Kirom Indalloh |
| NIM | 242505011 |
| Kampus / Fakultas | Universitas Ma'soem / Komputer |
| Kelas | SI-R-5, SI-NR-5 |
| Mata kuliah | Pemrograman Mobile 2 |
| Dosen | Iin, M.Kom |
| Jenis ujian | UTS Ganjil 2026/2027, proyek individu (Progressive Challenge 10 level) |
| Nama aplikasi | Personal CV & Academic Score App |
| Teknologi | React Native + Expo, JavaScript (bukan TypeScript), Expo Router |
| Level target | **Level 10 — Industry** |
| Perangkat demo | Expo Go di Android (HP fisik) |
| Referensi UI | https://kangsolihin.vercel.app/ (struktur informasi saja, tidak disalin) |

**Berkas yang wajib dikumpulkan:** (1) link video demo maksimal 3 menit, (2) link source code (GitHub disarankan, atau zip di Google Drive), (3) deskripsi video berisi identitas, level yang diklaim, petunjuk menjalankan, dan daftar fitur. Link source code ditulis di awal deskripsi video.

## 2. Tujuan, Ruang Lingkup & Keputusan Desain

**Tujuan:** menghasilkan aplikasi yang stabil saat didemokan, benar secara fungsi, rapi secara kode, dan dapat dijelaskan oleh pemilik; bukan sekadar tampilan menarik (sesuai bagian G dan H soal).

**Dalam ruang lingkup (in scope)**

- 6 halaman: Home, About, Skills, Portfolio, My Score, Contact, ditambah halaman detail proyek.
- Data lokal berformat JSON, diakses lewat service layer mock API (async dengan jeda).
- Fitur Level 7: Dynamic Skills, Portfolio Gallery + Search/Filter, Theme Switcher, Experience Timeline, Hobby Section.
- My Score (Level 8) dengan data dummy sesuai soal.
- Level 10: loading/error/empty state, AsyncStorage, aksesibilitas dasar, pengujian Jest, README dan dokumentasi arsitektur.

**Di luar ruang lingkup (out of scope)**

- Integrasi API Academic War LMS sungguhan (opsional, pengembangan lanjutan setelah UTS).
- Pengiriman email sungguhan atau penyimpanan ke server.
- Backend, autentikasi, dan multi-bahasa.
- Build iOS/APK produksi dan publikasi ke store.

**Keputusan desain (hasil konfirmasi pemilik)**

| Topik | Keputusan |
| --- | --- |
| Fitur Level 7 | Skills + Portfolio + Filter, Theme Switcher, Hobby Section, Experience Timeline |
| Navigasi | Bottom Tabs 6 tab sesuai soal (Expo Router) |
| Gaya visual | Modern biru-ungu, kartu rounded, mendukung mode gelap |
| Bahasa kode / konten | JavaScript, konten Bahasa Indonesia |
| Visual My Score | Kartu + progress bar |
| Fitur Level 10 | Mock API + loading/error/empty state, unit test Jest + RNTL, aksesibilitas + dokumentasi, AsyncStorage |
| Perangkat demo | Expo Go di Android |
| Foto profil | Placeholder dulu (`assets/profile.jpg`), diganti pemilik |
| Profesi | Information Systems Student & System Analyst |
| Portofolio | Proyek kuliah pemilik (Calliandra Home Living, Surat Desa Cileunyi Wetan, dan proyek lain) |
| Kontak & sosial | Placeholder dulu, diisi pemilik di `profile.json` |

**Asumsi & data yang wajib diverifikasi pemilik:** soal mewajibkan data asli yang dapat dipertanggungjawabkan. Nama dan NIM sudah asli. Foto, deskripsi diri, skills, pengalaman, hobi, detail proyek, dan semua kontak/sosial masih placeholder atau contoh; pemilik wajib mengganti atau memverifikasinya sebelum video direkam.

## 3. Persona & User Stories

Tiga pengguna utama: **dosen penguji** (memverifikasi level dan kode), **calon rekan/perekrut** (melihat profil dan portofolio), dan **pemilik** (mengelola data lewat file JSON).

| ID | Sebagai | Saya ingin | Agar | Level |
| --- | --- | --- | --- | --- |
| US-01 | Dosen | melihat NIM, nama, dan foto di layar awal | identitas mahasiswa langsung terverifikasi | 1 |
| US-02 | Pengunjung | membaca profesi dan deskripsi singkat | memahami siapa pemilik CV | 2 |
| US-03 | Pengunjung | membaca tampilan yang rapi di ponsel | nyaman dibaca tanpa teks terpotong | 3 |
| US-04 | Pengunjung | mengirim pesan lewat formulir kontak | bisa menghubungi pemilik | 4 |
| US-05 | Pemilik | mengubah isi CV cukup lewat file data | tidak perlu mengubah komponen UI | 5–6 |
| US-06 | Pengunjung | melihat skills dan proyek sebagai daftar dinamis | menilai kemampuan pemilik | 7 |
| US-07 | Pengunjung | mencari dan menyaring proyek | menemukan proyek yang relevan | 7 |
| US-08 | Pengunjung | berganti tema terang/gelap | nyaman membaca di kondisi cahaya berbeda | 7 |
| US-09 | Dosen | melihat nilai, grade, LP, dan progres belajar | memeriksa capaian akademik dummy | 8 |
| US-10 | Pengunjung | berpindah halaman lewat tab bawah | menjelajah dengan mudah | 9 |
| US-11 | Pengunjung | melihat pesan jelas saat memuat, gagal, atau kosong | tidak bingung ketika ada masalah | 10 |
| US-12 | Pemilik | pengaturan tema dan pesan tersimpan | tersedia lagi saat aplikasi dibuka ulang | 10 |
| US-13 | Dosen | membaca README dan menjalankan tes | memverifikasi kualitas dan keputusan teknis | 10 |

## 4. Requirement Fungsional per Level (L1–L10)

Setiap baris dipetakan ke persyaratan pada soal. Level bersifat kumulatif, jadi Level 10 hanya sah jika semua baris di bawah lulus. Kolom terakhir adalah kriteria uji yang bisa didemokan.

| ID | Lv | Requirement | Kriteria penerimaan |
| --- | --- | --- | --- |
| FR-01 | 1 | Tampilkan NIM | NIM 242505011 terlihat di Home |
| FR-02 | 1 | Tampilkan nama lengkap | "Naelul Kirom Indalloh" terlihat tanpa terpotong |
| FR-03 | 1 | Tampilkan foto profil | Gambar `assets/profile.jpg` tampil bulat, ada teks alternatif |
| FR-04 | 1 | Aplikasi dapat dijalankan | `npx expo start` lalu terbuka di Expo Go tanpa error |
| FR-05 | 2 | Tampilkan profesi/bidang minat | "Information Systems Student & System Analyst" tampil di bawah nama |
| FR-06 | 2 | Tampilkan deskripsi singkat | Paragraf 2–4 kalimat di Home/About |
| FR-07 | 2 | Heading yang sesuai | Tiap halaman dan section punya judul |
| FR-08 | 2 | Gunakan komponen RN dasar | `View`, `Text`, `Image`, `ScrollView`, `Pressable` dipakai dengan tepat |
| FR-09 | 3 | Layout terstruktur dengan Flexbox + StyleSheet | Semua gaya lewat `StyleSheet.create` atau token tema |
| FR-10 | 3 | Tipografi, warna, jarak, ukuran konsisten | Token tema dipakai, tanpa angka acak |
| FR-11 | 3 | Beberapa section tersusun rapi | Hierarki visual jelas: judul, subjudul, isi |
| FR-12 | 3 | Terbaca di layar ponsel | Tidak ada teks/elemen utama terpotong di layar kecil (360 dp) maupun besar |
| FR-13 | 4 | Props untuk kirim data ke komponen | Komponen presentasional menerima data via props |
| FR-14 | 4 | State untuk data yang berubah | `useState` untuk input form, filter, tema |
| FR-15 | 4 | Tombol/interaksi sederhana | Tombol Kirim, Reset, ganti tema merespons sentuhan |
| FR-16 | 4 | Form kontak: nama, email, pesan | Tiga field, masing-masing dapat diisi dan diubah |
| FR-17 | 4 | Event handling input dan tombol | `onChangeText`, `onPress`, `onSubmitEditing` terhubung ke handler |
| FR-18 | 4 | Validasi input kosong | Field kosong menampilkan pesan error spesifik, form tidak terkirim |
| FR-19 | 4 | Respons setelah form diproses | Banner sukses + form direset |
| FR-20 | 5 | Data terpisah dari UI | Tidak ada teks profil ditulis langsung di komponen |
| FR-21 | 5 | Komponen menerima data via props | `<ProfileHeader data={...} />` dan sejenisnya |
| FR-22 | 5 | Komponen reusable & struktur terorganisasi | Folder `components/`, `data/`, `services/`, `hooks/` |
| FR-23 | 6 | Data di file `.json` valid | `profile.json`, `skills.json`, `portfolio.json`, `experience.json`, `hobbies.json`, `score.json` lolos validasi JSON |
| FR-24 | 6 | Aplikasi membaca dan menampilkan JSON | Ubah isi JSON, tampilan ikut berubah tanpa mengubah komponen |
| FR-25 | 6 | Pemetaan data ke UI tanpa tulis ulang | List dirender dengan `map()`/`FlatList` |
| FR-26 | 7 | Dynamic Skills | Daftar skill dari JSON via `FlatList`, dikelompokkan per kategori |
| FR-27 | 7 | Portfolio Gallery | Kartu proyek dinamis dari JSON, dengan teknologi dan link |
| FR-28 | 7 | Search/Filter portofolio | Kotak cari + chip kategori; hasil kosong menampilkan empty state |
| FR-29 | 7 | Theme Switcher | Terang/gelap berpindah instan dan seluruh layar ikut |
| FR-30 | 7 | Experience Timeline | Pendidikan dan organisasi tampil sebagai timeline vertikal |
| FR-31 | 7 | Hobby Section | Kartu hobi dengan ikon + deskripsi dari JSON |
| FR-32 | 8 | Section My Score terintegrasi | Tab My Score tampil dengan gaya UI yang sama |
| FR-33 | 8 | Identitas akademik | Nama, NIM, MK Pemrograman Mobile 2, Dosen Iin, M.Kom |
| FR-34 | 8 | Current Score | Nilai **89**, grade **A**, mencolok di bagian atas |
| FR-35 | 8 | Learning Points | Total **12375 LP** (tampil dengan pemisah ribuan) |
| FR-36 | 8 | Learning Progress | Attendance 100%, Practice 87%, Quest 95%, Challenge 100% sebagai kartu + progress bar dari data |
| FR-37 | 8 | Data akademik di struktur terpisah (`score.json`), komponen reusable via props | `ScoreCard`, `ProgressBar`, `StatTile` tidak berisi angka hard-code |
| FR-38 | 9 | Navigasi antarhalaman | 6 tab: Home, About, Skills, Portfolio, My Score, Contact |
| FR-39 | 9 | Halaman terpisah sesuai fungsi + detail proyek | Rute `/project/[id]` dibuka dari kartu portofolio |
| FR-40 | 9 | Konsistensi UI antarhalaman | Header, spasi, kartu, dan warna seragam |
| FR-41 | 9 | Tetap nyaman saat konten bertambah | Menambah 20 proyek/skill di JSON tidak merusak layout (list virtualisasi) |
| FR-42 | 9 | Semua fitur level sebelumnya tetap berfungsi | Regresi diperiksa lewat checklist UAT |
| FR-43 | 10 | Struktur kode terorganisasi, tanggung jawab terpisah | Komponen (UI), `services/` (data), `hooks/` (logika), `utils/` (validasi) |
| FR-44 | 10 | Mock API dengan simulasi pengambilan data | `profileService` dkk. async, jeda 500–1000 ms, dapat disimulasikan gagal |
| FR-45 | 10 | Loading, error, empty state | Skeleton/spinner, pesan galat + tombol "Coba lagi", pesan kosong informatif |
| FR-46 | 10 | Umpan balik form dan interaksi jelas | Error inline per field, status mengirim, banner sukses, haptic opsional |
| FR-47 | 10 | Penyimpanan lokal preferensi | Tema dan pesan terkirim tersimpan di AsyncStorage |
| FR-48 | 10 | Aksesibilitas dasar + kenyamanan | Label, role, target sentuh ≥ 44 dp, kontras cukup, font scaling aman |
| FR-49 | 10 | Pengujian fitur utama | `npm test` hijau untuk validator, form, skor, filter, service |
| FR-50 | 10 | Dokumentasi proyek | README (instalasi, arsitektur, fitur, tes) + checklist level |

## 5. Non-Functional Requirement

| ID | Aspek | Persyaratan | Cara verifikasi |
| --- | --- | --- | --- |
| NFR-01 | Stabilitas | Tidak crash saat demo; error ditangkap dan ditampilkan ramah | Demo 3 menit tanpa red screen; simulasi error |
| NFR-02 | Performa | Transisi tab terasa instan; list memakai `FlatList`; gambar ringan (< 300 KB) | Uji manual di Android menengah |
| NFR-03 | Kompatibilitas | Android via Expo Go (utama); iOS tidak diuji tetapi tidak memakai API khusus Android | Jalankan di HP Android |
| NFR-04 | Responsif | Layout aman di lebar 320–430 dp dan font besar sistem | Uji dengan ukuran font sistem maksimum |
| NFR-05 | Aksesibilitas | `accessibilityLabel`/`role`/`state`, target sentuh ≥ 44 dp, kontras teks ≥ 4,5:1 | Checklist aksesibilitas + TalkBack singkat |
| NFR-06 | Kemudahan pemeliharaan | Satu tanggung jawab per file, nama konsisten, tanpa duplikasi, lint bersih | `npm run lint` |
| NFR-07 | Keterujian (testability) | Logika dipisah dari UI agar bisa diuji unit | `npm test` |
| NFR-08 | Privasi | Hanya data identitas yang disetujui pemilik; kontak placeholder tidak berisi data orang lain | Tinjauan data JSON sebelum rekam video |
| NFR-09 | Kejujuran data | Data dummy My Score diberi label "Data dummy untuk UTS" | Terlihat di layar My Score |
| NFR-10 | Portabilitas | Jalan hanya dengan `npm install` + `npx expo start`; tanpa konfigurasi native tambahan | Uji instalasi bersih dari README |
| NFR-11 | Konsistensi | Satu sistem desain (token warna, spasi, radius, tipografi) untuk terang dan gelap | Tinjauan visual |

## 6. Arsitektur & Struktur Proyek

Arsitektur berlapis: **data JSON → service (mock API) → hook → layar → komponen**. Komponen hanya menerima props dan tidak tahu dari mana data berasal; ini yang membuat pemisahan data dan UI (Level 5–6) benar-benar terbukti.

&#91;embedded content: arsitektur berlapis · 5 lapisan, aliran satu arah\]

Lapisan atas hanya bergantung pada lapisan di bawahnya, sehingga mengganti data lokal dengan API sungguhan cukup mengubah lapisan Service.

**Stack dan dependensi**

| Kebutuhan | Pilihan | Alasan |
| --- | --- | --- |
| Framework | React Native + Expo (SDK terbaru dari `create-expo-app`) | Wajib oleh soal |
| Navigasi | `expo-router` (file-based, bottom tabs + stack) | Dibolehkan soal; struktur jelas |
| Penyimpanan lokal | `@react-native-async-storage/async-storage` | Preferensi tema dan pesan kontak |
| Ikon | `@expo/vector-icons` | Bawaan Expo, tanpa konfigurasi |
| Gradient | `expo-linear-gradient` | Header Home dan kartu skor |
| Link eksternal | `expo-linking` | Buka GitHub/link proyek |
| Pengujian | `jest-expo`, `@testing-library/react-native` | Standar RN |
| Lint | `eslint` + `eslint-config-expo` | Kerapian kode |

**Struktur folder**

```text
cv-app/
├─ app/                      # Expo Router (layar = file)
│  ├─ _layout.jsx            # ThemeProvider + Stack root
│  ├─ (tabs)/
│  │  ├─ _layout.jsx         # Bottom tabs (6 tab)
│  │  ├─ index.jsx           # Home
│  │  ├─ about.jsx           # About + Experience Timeline + Hobby
│  │  ├─ skills.jsx          # Skills
│  │  ├─ portfolio.jsx       # Portfolio + search/filter
│  │  ├─ score.jsx           # My Score
│  │  └─ contact.jsx         # Contact form
│  └─ project/[id].jsx       # Detail proyek
├─ components/
│  ├─ ui/                    # Card, Chip, Section, ProgressBar, StatTile, Screen
│  ├─ states/                # LoadingState, ErrorState, EmptyState
│  ├─ ProfileHeader.jsx
│  ├─ AboutSection.jsx
│  ├─ SkillItem.jsx
│  ├─ ProjectCard.jsx
│  ├─ TimelineItem.jsx
│  ├─ HobbyCard.jsx
│  ├─ ScoreSummary.jsx
│  ├─ ProgressCard.jsx
│  └─ ContactForm.jsx
├─ data/                     # sumber data JSON (satu-satunya tempat isi CV)
│  ├─ profile.json  skills.json  portfolio.json
│  ├─ experience.json  hobbies.json  score.json
├─ services/                 # mock API (async + delay + simulasi gagal)
│  ├─ api.js  profileService.js  scoreService.js  contactService.js
├─ hooks/                    # useAsyncData, useTheme, useContactForm, usePortfolioFilter
├─ utils/                    # validators.js, format.js, storage.js
├─ theme/                    # tokens.js (warna, spasi, radius, tipografi), ThemeContext.jsx
├─ assets/                   # profile.jpg, icon.png, splash.png
├─ __tests__/                # validators, ContactForm, ProgressCard, filter, service, storage
├─ docs/                     # ARCHITECTURE.md, UAT.md
├─ README.md
└─ package.json  app.json  babel/jest config
```

**Aturan penulisan list (`FlatList` vs `map()`)**

| Kasus | Pakai | Alasan |
| --- | --- | --- |
| List yang bisa panjang: Portfolio, Skills, riwayat pesan | `FlatList` (atau `SectionList` untuk skill per kategori) | Hanya merender item yang terlihat; wajib punya `keyExtractor` |
| List pendek dan tetap: 4 indikator progres, hobi, tab, chip kategori | `map()` di dalam `View` | Jumlah kecil, tidak perlu virtualisasi; kode lebih sederhana |

**Larangan:** jangan menaruh `FlatList` vertikal di dalam `ScrollView` (memicu peringatan *VirtualizedLists should never be nested* dan merusak performa). Layar yang memakai `FlatList` menjadikannya penggulir utama, dan bagian atasnya (judul, kotak cari, chip filter) dipasang lewat `ListHeaderComponent`. Kondisi kosong memakai `ListEmptyComponent`, dan tarik-untuk-muat-ulang memakai `refreshing` + `onRefresh`. Halaman tanpa list panjang (Home, About, My Score) boleh memakai `ScrollView` dengan `map()`.

## 7. Skema Data JSON

Enam file di `data/` adalah satu-satunya sumber isi CV. Hanya `score.json` yang nilainya dikunci oleh soal; nilai lain bertanda `CONTOH` wajib diganti pemilik. Semua file harus JSON valid (kunci dan string dengan tanda kutip ganda, tanpa koma di akhir).

| File | Isi | Dipakai oleh |
| --- | --- | --- |
| `profile.json` | identitas, profesi, deskripsi, kontak, sosial | Home, About, Contact |
| `skills.json` | skill per kategori dengan tingkat 0–100 | Skills |
| `portfolio.json` | proyek: judul, ringkasan, teknologi, kategori, link | Portfolio, Detail |
| `experience.json` | pendidikan dan organisasi (timeline) | About |
| `hobbies.json` | hobi + nama ikon + deskripsi | About |
| `score.json` | identitas akademik, skor, LP, progres | My Score |

**`data/profile.json`**

```json
{
  "nama": "Naelul Kirom Indalloh",
  "nim": "242505011",
  "profesi": "Information Systems Student & System Analyst",
  "kampus": "Universitas Ma'soem",
  "foto": "profile",
  "deskripsi": "CONTOH: Mahasiswa Sistem Informasi yang fokus pada analisis, perancangan, dan dokumentasi sistem, serta pengembangan aplikasi web dan mobile.",
  "lokasi": "CONTOH: Bandung, Indonesia",
  "kontak": {
    "email": "CONTOH@email.com",
    "whatsapp": "CONTOH",
    "github": "https://github.com/CONTOH",
    "linkedin": "https://linkedin.com/in/CONTOH",
    "instagram": "https://instagram.com/CONTOH"
  }
}
```

**`data/score.json`** (nilai sesuai soal Level 8, data dummy)

```json
{
  "akademik": {
    "nama": "Naelul Kirom Indalloh",
    "nim": "242505011",
    "mataKuliah": "Pemrograman Mobile 2",
    "dosen": "Iin, M.Kom"
  },
  "currentScore": { "nilai": 89, "grade": "A" },
  "learningPoints": { "total": 12375, "satuan": "LP" },
  "learningProgress": [
    { "id": "attendance", "label": "Attendance", "persen": 100 },
    { "id": "practice",   "label": "Practice",   "persen": 87 },
    { "id": "quest",      "label": "Quest",      "persen": 95 },
    { "id": "challenge",  "label": "Challenge",  "persen": 100 }
  ],
  "catatan": "Data dummy untuk UTS"
}
```

**Bentuk file lain (struktur tetap, isi CONTOH)**

```json
// skills.json
[{ "kategori": "Analisis & Dokumentasi", "items": [{ "id": "uml", "nama": "UML", "level": 80 }] }]

// portfolio.json
[{ "id": "calliandra", "judul": "Sistem Informasi Penjualan, Pembelian, dan Persediaan Calliandra Home Living",
   "ringkasan": "...", "kategori": "Web", "teknologi": ["..."], "tahun": 2026, "link": "" }]

// experience.json
[{ "id": "masoem", "jenis": "pendidikan", "judul": "S1 Sistem Informasi", "instansi": "Universitas Ma'soem",
   "periode": "CONTOH 2024 - sekarang", "deskripsi": "..." }]

// hobbies.json
[{ "id": "coding", "nama": "Ngoding", "ikon": "code-slash", "deskripsi": "..." }]
```

(Komentar `//` di atas hanya penjelasan di dokumen ini; file JSON asli tidak boleh berisi komentar.)

**Aturan data:** kunci `id` unik per item; persen berupa bilangan bulat 0–100; `learningProgress` memakai larik agar indikator dirender dengan `map()` (FR-36); angka LP ditampilkan dengan pemisah ribuan lewat `utils/format.js` (12.375 LP).

## 8. Spesifikasi Layar & Wireframe

Setiap layar mengambil data lewat hook `useAsyncData(service)` sehingga otomatis punya tiga state: loading, error, dan kosong.

| Tab / rute | Isi utama | Komponen | Data | Interaksi |
| --- | --- | --- | --- | --- |
| **Home** `/` | Foto, nama, NIM, profesi, deskripsi singkat, tombol "Lihat Portofolio" dan "Hubungi Saya", ringkasan skor | `ProfileHeader`, `Section`, `StatTile` | `profile.json`, `score.json` | Tombol menuju tab lain, tombol tema di header |
| **About** `/about` | Profil lengkap, Experience Timeline, Hobby Section | `AboutSection`, `TimelineItem`, `HobbyCard` | `profile.json`, `experience.json`, `hobbies.json` | Filter timeline (Semua/Pendidikan/Organisasi) |
| **Skills** `/skills` | Skill per kategori dengan indikator level | `SkillItem`, `ProgressBar` | `skills.json` | Gulir; kategori dapat dilipat |
| **Portfolio** `/portfolio` | Kotak cari, chip kategori, kartu proyek | `ProjectCard`, `Chip`, `SearchBar`, `EmptyState` | `portfolio.json` | Cari, filter, ketuk kartu menuju detail |
| **Detail** `/project/[id]` | Judul, ringkasan, teknologi, tahun, link | `Screen`, `Chip` | `portfolio.json` | Tombol kembali, buka link |
| **My Score** `/score` | Identitas akademik, Current Score 89 (A), 12.375 LP, empat kartu progres | `ScoreSummary`, `ProgressCard`, `ProgressBar`, `StatTile` | `score.json` | Muat ulang (tarik ke bawah), label "Data dummy" |
| **Contact** `/contact` | Formulir nama/email/pesan, tautan kontak, riwayat pesan terkirim | `ContactForm`, `ContactLink` | `profile.json`, AsyncStorage | Validasi, kirim, reset, hapus riwayat |

**Wireframe Home**

```text
+--------------------------------+
| Personal CV            [☾/☀]   |
|                                |
|          (  FOTO  )            |
|   Naelul Kirom Indalloh        |
|   NIM 242505011                |
|   Information Systems Student  |
|   & System Analyst             |
|                                |
|  Deskripsi singkat 2-4 kalimat |
|  [Lihat Portofolio] [Hubungi]  |
|                                |
|  Ringkasan Akademik            |
|  [ Skor 89 A ] [ 12.375 LP ]   |
+--------------------------------+
| Home|About|Skills|Port|Score|Ct|
+--------------------------------+
```

**Wireframe My Score**

```text
+--------------------------------+
| My Score                       |
| Naelul Kirom Indalloh · 242505011|
| Pemrograman Mobile 2           |
| Dosen: Iin, M.Kom              |
|  +--------------------------+  |
|  |  CURRENT SCORE           |  |
|  |      89     Grade A      |  |
|  +--------------------------+  |
|  Learning Points: 12.375 LP    |
|  Learning Progress             |
|  [Attendance  100%  ========]  |
|  [Practice     87%  =======.]  |
|  [Quest        95%  ========]  |
|  [Challenge   100%  ========]  |
|  * Data dummy untuk UTS        |
+--------------------------------+
```

**Wireframe Portfolio & Contact**

```text
Portfolio                          Contact
[ Cari proyek...        ]          Nama   [____________]
(Semua)(Web)(Mobile)(Admin)        Email  [____________]
+----------------------+           Pesan  [____________]
| Judul proyek         |                  [____________]
| Ringkasan 2 baris    |           err: pesan minimal 10 karakter
| [React][Expo]  Detail>|           [ Kirim ]   [ Reset ]
+----------------------+           Riwayat pesan terkirim (lokal)
(kosong: "Tidak ada proyek ...")
```

## 9. Desain UI & Komponen Reusable

Gaya **modern biru-ungu**: aksen indigo-ungu, latar bersih, kartu rounded dengan bayangan tipis, dan dua tema (terang/gelap) dari satu set token di `theme/tokens.js`. Tidak ada warna atau angka spasi yang ditulis langsung di layar.

| Token | Terang | Gelap | Pemakaian |
| --- | --- | --- | --- |
| `primary` | #4F46E5 | #818CF8 | Tombol, tab aktif, progress |
| `accent` | #7C3AED | #A78BFA | Gradient, highlight skor |
| `background` | #F8FAFC | #0B1020 | Latar layar |
| `surface` | #FFFFFF | #151B2E | Kartu |
| `text` | #0F172A | #E5E7EB | Teks utama |
| `textMuted` | #475569 | #94A3B8 | Teks sekunder |
| `border` | #E2E8F0 | #26304A | Garis kartu |
| `success` / `warning` / `danger` | #16A34A / #D97706 / #DC2626 | #4ADE80 / #FBBF24 / #F87171 | Status, error form |

Kontras teks utama dan sekunder terhadap latar harus ≥ 4,5:1 di kedua tema (diperiksa saat QA; angka warna bisa disesuaikan jika tidak lolos).

**Tipografi:** font sistem (tanpa unduhan font, lebih stabil di Expo Go). Skala: judul 28/700, heading 20/700, subjudul 16/600, isi 15/400, keterangan 13/400, dengan `allowFontScaling` tetap aktif.

**Skala spasi dan bentuk:** spasi 4/8/12/16/24/32; radius 12 (kartu), 999 (chip, avatar); target sentuh minimum 44 dp.

| Komponen | Tanggung jawab | Props utama |
| --- | --- | --- |
| `Screen` | Kerangka layar: SafeArea, scroll, judul | `title`, `children`, `onRefresh` |
| `Section` | Judul section + isi | `title`, `children` |
| `Card` | Wadah dengan surface, border, radius | `children`, `onPress` |
| `Chip` | Label/filter terpilih atau tidak | `label`, `selected`, `onPress` |
| `ProgressBar` | Bar persentase dari data | `value`, `label` |
| `StatTile` | Angka besar + label | `value`, `label`, `caption` |
| `ProfileHeader` | Foto, nama, NIM, profesi | `data` |
| `ProgressCard` | Kartu satu indikator progres | `label`, `persen` |
| `ScoreSummary` | Nilai, grade, LP | `score`, `learningPoints` |
| `LoadingState` / `ErrorState` / `EmptyState` | Tiga kondisi data | `message`, `onRetry` |

## 10. Spesifikasi Level 10 (Production-Oriented)

**Mock API.** `services/api.js` membungkus data JSON dalam `Promise` dengan jeda 500–1000 ms. Variabel `EXPO_PUBLIC_SIMULATE_ERROR=true` membuat panggilan gagal agar error state dapat didemokan; tombol "Coba lagi" memanggil ulang. Tiap service punya kontrak sama: `getX()` mengembalikan data atau melempar `Error` berpesan jelas.

| Service | Fungsi | Hasil |
| --- | --- | --- |
| `profileService` | `getProfile()`, `getSkills()`, `getExperience()`, `getHobbies()` | Data JSON terkait |
| `portfolioService` | `getProjects()`, `getProjectById(id)` | Larik/objek; `null` jika tidak ada |
| `scoreService` | `getScore()` | Objek `score.json` |
| `contactService` | `submitMessage(payload)` | Simulasi kirim sukses; menyimpan ke AsyncStorage |

**Kondisi tampilan (FR-45)**

| Kondisi | Tampilan | Kapan |
| --- | --- | --- |
| Loading | Indikator + teks "Memuat …" | Selama promise berjalan |
| Error | Ikon, pesan galat, tombol "Coba lagi" | Promise ditolak |
| Empty | Ilustrasi/ikon + saran, mis. "Tidak ada proyek yang cocok, ubah kata kunci" | Daftar kosong atau hasil filter 0 |
| Data | Konten normal | Sukses dan tidak kosong |
| Proyek tidak ditemukan | Pesan + tombol kembali | `/project/[id]` dengan id tak dikenal |

**Formulir kontak (FR-16 s.d. FR-19, FR-46)**

| Field | Aturan | Pesan error |
| --- | --- | --- |
| Nama | wajib, 3–60 karakter (spasi di tepi dibuang) | "Nama wajib diisi" / "Nama minimal 3 karakter" |
| Email | wajib, format email valid | "Email wajib diisi" / "Format email tidak valid" |
| Pesan | wajib, 10–500 karakter | "Pesan wajib diisi" / "Pesan minimal 10 karakter" |

Alur: error muncul per field saat tombol Kirim ditekan (dan hilang saat diperbaiki) → tombol nonaktif + indikator saat "mengirim" → banner sukses "Pesan tersimpan" → form kosong → pesan masuk riwayat lokal. Tombol Reset mengosongkan field dan error. Fokus pindah ke field berikutnya dengan `returnKeyType`.

**AsyncStorage (FR-47)**

| Kunci | Nilai | Perilaku |
| --- | --- | --- |
| `@cv/theme` | `"light"` / `"dark"` / `"system"` | Dibaca saat start, ditulis saat berubah |
| `@cv/messages` | Larik pesan terkirim (`id`, `nama`, `email`, `pesan`, `waktu`) | Maksimal 20 terbaru; ada tombol hapus riwayat |
| `@cv/portfolio-filter` | Kategori terakhir | Dipulihkan saat membuka Portfolio |

Kegagalan baca/tulis tidak boleh membuat aplikasi crash: gunakan `try/catch` dan nilai bawaan.

**Aksesibilitas dan kenyamanan (FR-48)**

- Semua tombol dan ikon interaktif punya `accessibilityRole` dan `accessibilityLabel` (mis. "Ganti tema, saat ini terang").
- Foto punya `accessibilityLabel` berisi nama pemilik; elemen dekoratif disembunyikan dari pembaca layar.
- Input punya label tampak dan `accessibilityHint`; error dibacakan lewat `accessibilityLiveRegion="polite"`.
- Tab bawah memakai label teks, tidak hanya ikon; status aktif diumumkan lewat `accessibilityState`.
- Layout aman untuk keyboard (`KeyboardAvoidingView`) dan font besar; target sentuh ≥ 44 dp.
- Mode gelap tersedia dan mengikuti pengaturan sistem jika pengguna belum memilih.

## 11. Rencana Pengujian

Pengujian otomatis dijalankan dengan `npm test` (Jest + React Native Testing Library); pengujian manual memakai checklist UAT di `docs/UAT.md`.

**Unit/komponen (FR-49)**

| ID | Target | Skenario | Hasil diharapkan |
| --- | --- | --- | --- |
| T-01 | `validators.js` | nama kosong, nama 2 huruf, email salah, pesan pendek, semua valid | Pesan error sesuai bagian 10; valid mengembalikan tanpa error |
| T-02 | `ContactForm` | kirim dalam keadaan kosong | Tiga pesan error tampil, `onSubmit` tidak terpanggil |
| T-03 | `ContactForm` | isi valid lalu kirim | Banner sukses, field kosong |
| T-04 | `ContactForm` | tombol Reset | Field dan error kosong |
| T-05 | `ProgressBar`/`ProgressCard` | `persen` 87 | Teks "87%" tampil dan lebar bar 87% |
| T-06 | `ScoreSummary` | data `score.json` | "89", "A", "12.375 LP" tampil |
| T-07 | `ProfileHeader` | data profil | Nama, NIM, profesi tampil |
| T-08 | `usePortfolioFilter` | kata kunci + kategori | Daftar tersaring; tidak cocok memberi larik kosong |
| T-09 | `format.js` | 12375 | "12.375" |
| T-10 | Service mock | sukses dan mode gagal (fake timers) | Resolve dengan data / reject dengan pesan |
| T-11 | `storage.js` | baca/tulis dan penyimpanan rusak | Nilai bawaan, tidak melempar galat |
| T-12 | Validasi data | semua `data/*.json` | JSON valid, `id` unik, persen 0–100, skor sesuai soal |

**UAT manual di HP Android**

| ID | Skenario | Hasil diharapkan |
| --- | --- | --- |
| U-01 | Buka aplikasi dari Expo Go | Home tampil, NIM dan nama benar, foto tampil |
| U-02 | Pindah ke enam tab berurutan | Semua halaman terbuka, tab aktif jelas |
| U-03 | Ganti tema lalu tutup dan buka lagi | Tema tetap pilihan terakhir |
| U-04 | Cari proyek dengan kata yang tidak ada | Empty state tampil |
| U-05 | Ketuk kartu proyek lalu kembali | Detail benar, tombol kembali berfungsi |
| U-06 | Aktifkan `SIMULATE_ERROR`, buka My Score | Error state + "Coba lagi" |
| U-07 | Kirim form kosong, lalu valid | Error lalu sukses; pesan ada di riwayat |
| U-08 | Perbesar font sistem ke maksimum | Tidak ada teks terpotong atau tertimpa |
| U-09 | Ubah isi `profile.json` (nama) | Home dan About ikut berubah tanpa mengubah komponen |
| U-10 | Tambah 20 proyek dummy | Gulir lancar, layout tidak rusak |
| U-11 | TalkBack singkat di Home dan Contact | Label terbaca masuk akal |

**Matriks level:** sebelum rekam video, semua FR-01 sampai FR-50 pada bagian 4 dicentang satu per satu; klaim Level 10 hanya dibuat jika tidak ada satu pun yang gagal.

## 12. Dokumentasi, Video Demo & Pengumpulan

**README.md** memuat: deskripsi, level yang diklaim, daftar fitur, teknologi, cara instalasi (`npm install`, `npx expo start`, scan QR di Expo Go), cara mengganti data (edit `data/*.json`), cara menjalankan tes, cara mensimulasikan error, struktur folder, arsitektur singkat, dan checklist Level 1–10. `docs/ARCHITECTURE.md` menjelaskan alur data dan keputusan teknis.

**Naskah video demo (maksimal 3 menit, sesuai soal: perkenalan, penjelasan kode, hasil)**

| Waktu | Bagian | Yang ditunjukkan |
| --- | --- | --- |
| 0:00–0:15 | Perkenalan | Nama, NIM, mata kuliah, level 10 yang diklaim |
| 0:15–0:55 | Penjelasan kode | Struktur folder; satu contoh aliran `data/profile.json` → service → hook → `ProfileHeader` via props; bedanya JSON dan komponen |
| 0:55–1:15 | Layout & tema | Home, tema gelap/terang, tersimpan |
| 1:15–1:45 | Fitur L7 & navigasi | Skills, Portfolio + filter + detail, About timeline & hobi |
| 1:45–2:10 | My Score | 89/A, 12.375 LP, empat progres dari `score.json` |
| 2:10–2:35 | Contact & Level 10 | Validasi kosong, sukses, riwayat; satu demo error state + coba lagi |
| 2:35–3:00 | Kualitas & penutup | `npm test` hijau, README, kesimpulan |

**Template deskripsi video** (link source code di baris pertama)

```text
Source code: <LINK GITHUB / ZIP GOOGLE DRIVE>

Nama   : Naelul Kirom Indalloh
NIM    : 242505011
MK     : Pemrograman Mobile 2 — Dosen: Iin, M.Kom
Kelas  : <SI-R-5 / SI-NR-5>
Level yang diklaim: Level 10 (Industry)

Cara menjalankan:
1. npm install
2. npx expo start
3. Scan QR dengan Expo Go (Android)
4. Tes: npm test

Fitur: profil & identitas, layout responsif, form kontak + validasi,
pemisahan data-UI, data JSON, skills dinamis, portofolio + cari/filter,
theme switcher, timeline, hobi, My Score, navigasi 6 tab + detail,
mock API, loading/error/empty state, AsyncStorage, aksesibilitas,
unit test, dokumentasi.
```

**Checklist pengumpulan**

- [ ] Video ≤ 3 menit, berisi perkenalan, penjelasan kode, hasil
- [ ] Source code di GitHub (atau zip Drive) tanpa `node_modules`
- [ ] Link source code di awal deskripsi video
- [ ] Deskripsi berisi identitas, level, cara menjalankan, daftar fitur
- [ ] Level target tercantum di laporan proyek
- [ ] Semua data CONTOH sudah diganti data asli
- [ ] Aplikasi siap dijalankan langsung jika diminta dosen

## 13. Rencana Pengerjaan, Risiko & Kesiapan Menjelaskan

Urutan kerja mengikuti level, sehingga setiap tahap menghasilkan aplikasi yang sudah bisa didemokan. Tanggal pengumpulan UTS belum diketahui, jadi tahap dinyatakan berurutan tanpa tanggal; tambahkan tenggat saat sudah ada.

| Tahap | Cakupan | Keluaran |
| --- | --- | --- |
| 0 | Persiapan: proyek Expo, Git, dependensi, uji jalan di Expo Go | Layar kosong berjalan di HP |
| 1 | Level 1–3: identitas, profil, layout dan token tema | Home rapi di ponsel |
| 2 | Level 4–6: props, state, form kontak, data JSON terpisah | Form + data dari JSON |
| 3 | Level 7–8: skills, portofolio + filter, tema, timeline, hobi, My Score | Semua fitur isi |
| 4 | Level 9: Expo Router 6 tab + detail proyek | Navigasi lengkap |
| 5 | Level 10: service mock, state loading/error/empty, AsyncStorage, aksesibilitas | Aplikasi tahan galat |
| 6 | Unit test, README, ARCHITECTURE, UAT | `npm test` hijau, dokumentasi |
| 7 | QA akhir, ganti data CONTOH, rekam video, unggah, kumpulkan | Paket pengumpulan lengkap |

**Risiko dan mitigasi**

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Versi Expo Go di HP tidak cocok dengan SDK proyek | Aplikasi tidak terbuka | Perbarui Expo Go; pakai SDK dari `create-expo-app` terbaru; uji sejak Tahap 0 |
| Data CONTOH lupa diganti | Melanggar syarat data asli | Checklist pengumpulan; cari kata "CONTOH" di `data/` sebelum rekam |
| Tidak bisa menjelaskan kode saat diminta | Nilai turun (poin G.6) | Latihan dengan tabel pertanyaan di bawah; pahami aliran data dan state |
| Video melebihi 3 menit | Dianggap tidak sesuai | Ikuti naskah berwaktu; rekam ulang bila perlu |
| Enam tab padat di layar kecil | Label terpotong | Label pendek, font 11, uji lebar 360 dp |
| Terlalu banyak fitur, waktu habis | Level lebih rendah tercapai | Kerjakan berurutan; Level 1–9 stabil dulu sebelum Level 10 |
| Tes gagal karena AsyncStorage/animasi | `npm test` merah | Pakai mock resmi AsyncStorage dan fake timers |

**Definition of Done (Level 10 diklaim jika semuanya benar)**

- [ ] FR-01 sampai FR-50 lulus; NFR-01 sampai NFR-11 terverifikasi.
- [ ] Aplikasi berjalan dari instalasi bersih mengikuti README.
- [ ] `npm test` dan `npm run lint` bersih.
- [ ] Tidak ada data CONTOH tersisa; nilai My Score sama persis dengan soal.
- [ ] Pemilik dapat menjelaskan setiap berkas utama tanpa membaca.

**Pertanyaan yang mungkin diajukan dosen (siapkan jawaban sendiri)**

| Pertanyaan | Poin kunci |
| --- | --- |
| Bagaimana data dari file JSON sampai ke layar? | JSON → service (async) → `useAsyncData` → layar → props ke komponen |
| Apa beda props dan state? | Props dikirim dari induk dan read-only; state dimiliki komponen dan memicu render ulang (contoh: input form, filter, tema) |
| Apa beda data JSON dan komponen UI? | JSON berisi isi; komponen berisi tampilan yang dipakai ulang untuk isi apa pun |
| Kenapa memakai `FlatList`? | Render hanya item terlihat, efisien saat data bertambah |
| Kenapa ada service layer padahal data lokal? | Meniru API: mengganti ke API sungguhan cukup mengubah `services/`, UI tidak berubah |
| Bagaimana validasi form bekerja? | Fungsi murni di `validators.js` mengembalikan objek error; UI hanya menampilkannya |
| Bagaimana tema tersimpan? | Context + AsyncStorage `@cv/theme`, dibaca saat start |
| Bagaimana kamu menguji? | Jest + RNTL untuk validator, form, skor, filter, service; UAT manual untuk alur |
