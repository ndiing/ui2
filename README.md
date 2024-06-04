# Material

Material adalah proyek frontend yang mengimplementasikan prinsip-prinsip Material Design 3. Proyek ini dibangun dengan menggunakan Node.js, Webpack, dan Lit Element untuk menyediakan komponen-komponen UI yang modern dan responsif.

## Instalasi

Untuk menjalankan proyek ini secara lokal, pastikan Anda memiliki Node.js dan npm terinstal di komputer Anda. Kemudian, ikuti langkah-langkah berikut:

1. Clone repositori ini ke komputer Anda:

<pre>
git clone https://github.com/ndiing/material.git
</pre>

2. Masuk ke direktori proyek:

<pre>
cd material
</pre>

3. Install semua dependensi menggunakan npm:

<pre>
npm install
</pre>

4. Jalankan proyek:

<pre>
npm start
</pre>

Proyek akan dijalankan di `localhost:3000` secara default. Buka browser Anda dan akses URL tersebut untuk melihat proyek.

## Menggunakan Router

Untuk mengatur routing dalam proyek ini, Anda dapat menggunakan modul router yang telah disediakan. Berikut adalah contoh penggunaannya:

<pre>
import { MDRouterModule } from "../com/router/router";

const routes = [
    // Daftar rute Anda
];

MDRouterModule.init(routes, {
    historyApiFallback: false,
});
</pre>

Pastikan untuk menyesuaikan rute sesuai dengan struktur halaman proyek Anda.

## Memuat Halaman Awal

Untuk menampilkan halaman awal proyek, Anda dapat menggunakan komponen `AppMainElement`. Berikut adalah contoh penggunaannya:

<pre>
import { html } from "lit";
import { MDElement } from "../../com/element/element";
import { layout } from "../../com/layout/layout";

class AppMainElement extends MDElement {
    // Metode constructor dan lainnya
}

customElements.define("app-main", AppMainElement);

export default document.createElement("app-main");
</pre>

Pastikan Anda memanggil `customElements.define` untuk mendefinisikan elemen kustom Anda, dan `document.createElement("app-main")` untuk membuat elemen tersebut dalam halaman HTML Anda.

## Contoh File `index.html`

Berikut adalah contoh file `index.html` untuk mengatur tampilan awal proyek Anda:

<pre>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        />
        <meta
            name="theme-color"
            content="#6750a4"
        />
        <meta
            name="description"
            content="Explore examples of Material Design frameworks to create sleek, modern interfaces."
        />

        <title>Material Design Framework Examples</title>

        <base href="/" />

        <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
        />
        <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
        />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
    </head>
    <body>
        <md-outlet></md-outlet>
    </body>
</html>
</pre>

## Dokumentasi

Dokumentasi lengkap untuk proyek ini dapat ditemukan di direktori [docs](https://github.com/ndiing/material/tree/main/docs).

## Demo

Demo proyek ini dapat diakses melalui [halaman GitHub Pages](https://ndiing.github.io/material/dist/).

## Kontribusi

Anda ingin berkontribusi pada proyek ini? Kami senang menerima kontribusi dari berbagai pengembang. Berikut langkah-langkah untuk berkontribusi:

1. Fork repositori ini.
2. Buat branch baru untuk fitur Anda (`git checkout -b fitur-anda`).
3. Lakukan perubahan yang diperlukan dan commit (`git commit -am 'Menambahkan fitur keren'`).
4. Push ke branch Anda (`git push origin fitur-anda`).
5. Buat pull request baru.

Tim kami akan melakukan review terhadap pull request Anda secepat mungkin. Terima kasih atas kontribusi Anda!

## Kontak

Jika Anda memiliki pertanyaan atau saran terkait proyek ini, jangan ragu untuk menghubungi kami melalui email di ndiing.inc@gmail.com.
