# Rencana Proyek: Web API dengan Bun, Elysia, dan Drizzle ORM (Postgres)

Proyek ini bertujuan untuk membangun web API menggunakan ekosistem Bun, framework Elysia, dan Drizzle ORM dengan database PostgreSQL. Berikut adalah rencana langkah demi langkah untuk mengimplementasikan proyek ini.

## 1. Persiapan Environment (Environment Setup)
Karena Bun dan Node.js belum terinstall di komputer ini, langkah pertama adalah menyiapkan environment:
- **Install Node.js**: Disarankan menggunakan Node Version Manager (NVM) agar mudah mengganti versi Node.js.
  - MacOS/Linux: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash` lalu `nvm install 20`.
- **Install Bun**: Jalankan script instalasi resmi dari Bun.
  - MacOS/Linux: `curl -fsSL https://bun.sh/install | bash`
- **Verifikasi**: Pastikan command `node -v` dan `bun -v` dapat berjalan di terminal.

## 2. Inisialisasi Proyek
- Buat direktori baru untuk proyek ini dan masuk ke dalamnya.
- Jalankan `bun init -y` untuk menginisialisasi proyek Bun baru. Ini akan menghasilkan file `package.json`, `tsconfig.json`, dan `index.ts`.
- Buka proyek di code editor (seperti VS Code).

## 3. Instalasi Dependency
Install library utama yang dibutuhkan untuk proyek ini:
- **Elysia (Framework API)**: `bun add elysia`
- **Drizzle ORM & Postgres Driver**: `bun add drizzle-orm postgres`
- **Drizzle Kit (Development tool untuk migrasi)**: `bun add -D drizzle-kit`
- **Plugin Tambahan (Opsional, misalnya untuk Swagger/OpenAPI)**: `bun add @elysiajs/swagger`

## 4. Persiapan Database (PostgreSQL)
- Siapkan server PostgreSQL. Jika menggunakan Docker, jalankan perintah berikut untuk membuat container Postgres:
  `docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=myapp_db -p 5432:5432 -d postgres`
- Siapkan koneksi string (URI) database, contoh: `postgres://postgres:mysecretpassword@localhost:5432/myapp_db` dan simpan di file `.env`.

## 5. Setup Drizzle ORM dan Schema
- Buat folder `src/db`.
- Buat file `src/db/schema.ts`. Di sini, definisikan tabel database menggunakan syntax Drizzle (contoh: tabel `users`).
- Buat file `src/db/index.ts` untuk menginisialisasi koneksi Postgres dan instance Drizzle ORM.
- Buat file konfigurasi `drizzle.config.ts` di root proyek untuk memberitahu Drizzle Kit di mana letak file schema dan kredensial database untuk keperluan migrasi.

## 6. Pengembangan Server Elysia
- Hapus isi default dari `index.ts` (atau `src/index.ts`) dan inisialisasi instance Elysia.
- Buat beberapa route (endpoints) dasar, misalnya:
  - `GET /users`: Mengambil semua data user menggunakan Drizzle ORM.
  - `POST /users`: Menyimpan data user baru ke database.
- Sambungkan instance database yang telah dibuat sebelumnya ke dalam logic route Elysia.
- Set server untuk "listen" di port yang diinginkan (misal: 3000).

## 7. Migrasi Database dan Eksekusi Proyek
- **Generate Migration**: Gunakan Drizzle Kit untuk membaca schema dan membuat file migrasi SQL: `bunx drizzle-kit generate`.
- **Push Schema**: Terapkan skema langsung ke database Postgres: `bunx drizzle-kit push`.
- **Jalankan Server**: Tambahkan script di `package.json` untuk mode development, misalnya `"dev": "bun --watch src/index.ts"`.
- Jalankan perintah `bun run dev` di terminal.
- Verifikasi API dengan melakukan request ke `http://localhost:3000` (menggunakan browser, cURL, atau Postman).

## 8. Langkah Selanjutnya (Opsional)
- Tambahkan validasi input menggunakan fitur built-in dari Elysia (berbasis TypeBox).
- Pisahkan routing menjadi beberapa file berbeda agar kode lebih rapi (modular).
- Tambahkan unit test menggunakan test runner bawaan Bun (`bun test`).
