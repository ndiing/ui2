# Material Design Framework

Material adalah sebuah framework desain berbasis Material Design yang dirancang untuk pengembangan web modern. Framework ini menyediakan komponen UI yang kaya dan responsif, serta berbagai alat yang berguna untuk membangun aplikasi web yang menarik.

## Demo

Lihat demo: [Material Demo](https://ndiing.github.io/material/dist/)

## Dokumentasi

Dokumentasi lengkap tersedia di: [Material Docs](https://ndiing.gitbook.io/material)

## Instalasi

Untuk menggunakan Material dalam proyek Anda, ikuti langkah-langkah berikut:

1. **Inisialisasi Proyek dengan npm**:
   
    ```bash
    npm init -y
    ```

2. **Install webpack-cli**:

    ```bash
    npm install -D webpack-cli
    ```

3. **Inisialisasi webpack**:

    ```bash
    npx webpack init
    ```

    Ketika diminta, pilih opsi sebagai berikut:

    - Which of the following JS solutions do you want to use? **ES6**
    - Do you want to use webpack-dev-server? **Yes**
    - Do you want to simplify the creation of HTML files for your bundle? **Yes**
    - Do you want to add PWA support? **No**
    - Which of the following CSS solutions do you want to use? **SASS**
    - Will you be using CSS styles along with SASS in your project? **Yes**
    - Will you be using PostCSS in your project? **Yes**
    - Do you want to extract CSS for every file? **No**
    - Do you like to install prettier to format generated configuration? **Yes**
    - Pick a package manager: **npm**

4. **Installasi Modul Tambahan**:

    ```bash
    npm i @ndiinginc/material
    ```

5. **Konfigurasi `src/index.js`**:

    Buka file `src/index.js` dan tambahkan load component:

    ```javascript
    import "@ndiinginc/material/src/com/index.scss";
    import "@ndiinginc/material/src/com/index.js";
    ```

6. **Buat file `index.html`**:

    Buka file `index.html` dan tambahkan kode HTML dasar:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#6750a4" />
        <meta name="description" content="description" />
        <title>title</title>
        <base href="/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <script src="dist/bundle.js" defer></script>
    </head>
    <body>
        <md-button label="Label"></md-button>
    </body>
    </html>
    ```

    Dalam kode ini, saya menambahkan `<script src="dist/bundle.js" defer></script>` untuk memuat file JavaScript bundle yang dihasilkan oleh webpack. Jika direktori output webpack berbeda, sesuaikan path-nya.

## Mengatur Warna Tema

Anda dapat mengatur warna tema dengan mengubah konten dari tag meta `theme-color`. Ganti nilai `content` pada tag `<meta name="theme-color" content="#6750a4" />` dengan warna tema yang Anda inginkan.

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan buka [CONTRIBUTING.md](CONTRIBUTING.md) untuk panduan kontribusi.

## Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

---
© 2024 Ndiing | MIT License
