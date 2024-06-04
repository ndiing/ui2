# Material

Material adalah proyek frontend yang mengimplementasikan prinsip-prinsip Material Design 3. Proyek ini dibangun dengan menggunakan Node.js, Webpack, dan Lit Element untuk menyediakan komponen-komponen UI yang modern dan responsif.

## Instalasi

Untuk menjalankan proyek ini secara lokal, pastikan Anda memiliki Node.js dan npm terinstal di komputer Anda. Kemudian, ikuti langkah-langkah berikut:

1. Clone repositori ini ke komputer Anda:

```bash
git clone https://github.com/ndiing/material.git
```

2. Masuk ke direktori proyek:

```bash
cd material
```

3. Install semua dependensi menggunakan npm:

```bash
npm install
```

4. Jalankan proyek:

```bash
npm start
```

Proyek akan dijalankan di `localhost:3000` secara default. Buka browser Anda dan akses URL tersebut untuk melihat proyek.

## Menggunakan Router

Untuk mengatur routing dalam proyek ini, Anda dapat menggunakan modul router yang telah disediakan. Berikut adalah contoh penggunaannya:

```js
import { MDRouterModule } from "../com/router/router";

const routes = [
    // Daftar rute Anda
];

MDRouterModule.init(routes, {
    historyApiFallback: false,
});
```

Pastikan untuk menyesuaikan rute sesuai dengan struktur halaman proyek Anda.

## Memuat Halaman Awal

Untuk menampilkan halaman awal proyek, Anda dapat menggunakan komponen `AppMainElement`. Berikut adalah contoh penggunaannya:

```js
import { html } from "lit";
import { MDElement } from "../../com/element/element";
import { layout } from "../../com/layout/layout";

class AppMainElement extends MDElement {
    // Metode constructor dan lainnya
}

customElements.define("app-main", AppMainElement);

export default document.createElement("app-main");
```

Pastikan Anda memanggil `customElements.define` untuk mendefinisikan elemen kustom Anda, dan `document.createElement("app-main")` untuk membuat elemen tersebut dalam halaman HTML Anda.

## Contoh File `index.html`

Berikut adalah contoh file `index.html` untuk mengatur tampilan awal proyek Anda:

```html
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
```

## Dokumentasi

Dokumentasi lengkap untuk proyek ini dapat ditemukan di direktori [docs](https://github.com/ndiing/material/tree/main/docs).

- [badge](./docs/badge.md)
- [bottom-app-bar](./docs/bottom-app-bar.md)
- [bottom-sheet](./docs/bottom-sheet.md)
- [button](./docs/button.md)
- [card](./docs/card.md)
- [checkbox](./docs/checkbox.md)
- [chips](./docs/chips.md)
- [color-field](./docs/color-field.md)
- [color-picker](./docs/color-picker.md)
- [color](./docs/color.md)
- [data-table](./docs/data-table.md)
- [data](./docs/data.md)
- [date-field](./docs/date-field.md)
- [date-picker](./docs/date-picker.md)
- [datetime-field](./docs/datetime-field.md)
- [datetime-picker](./docs/datetime-picker.md)
- [dialog](./docs/dialog.md)
- [element](./docs/element.md)
- [email-field](./docs/email-field.md)
- [fab](./docs/fab.md)
- [file-field](./docs/file-field.md)
- [form](./docs/form.md)
- [gesture](./docs/gesture.md)
- [icon-button](./docs/icon-button.md)
- [icon](./docs/icon.md)
- [image](./docs/image.md)
- [layout](./docs/layout.md)
- [list](./docs/list.md)
- [localization](./docs/localization.md)
- [menu](./docs/menu.md)
- [mixin](./docs/mixin.md)
- [month-field](./docs/month-field.md)
- [month-picker](./docs/month-picker.md)
- [navigation-bar](./docs/navigation-bar.md)
- [navigation-drawer](./docs/navigation-drawer.md)
- [navigation-rail](./docs/navigation-rail.md)
- [nested-list](./docs/nested-list.md)
- [number-field](./docs/number-field.md)
- [password-field](./docs/password-field.md)
- [popper](./docs/popper.md)
- [progress-indicator](./docs/progress-indicator.md)
- [radio-button](./docs/radio-button.md)
- [ripple](./docs/ripple.md)
- [router](./docs/router.md)
- [search-field](./docs/search-field.md)
- [segmented-button](./docs/segmented-button.md)
- [select-field](./docs/select-field.md)
- [side-sheet](./docs/side-sheet.md)
- [slider](./docs/slider.md)
- [snackbar](./docs/snackbar.md)
- [store](./docs/store.md)
- [switch](./docs/switch.md)
- [tabs](./docs/tabs.md)
- [tel-field](./docs/tel-field.md)
- [text-field](./docs/text-field.md)
- [textarea-field](./docs/textarea-field.md)
- [time-field](./docs/time-field.md)
- [time-picker](./docs/time-picker.md)
- [tooltip](./docs/tooltip.md)
- [top-app-bar](./docs/top-app-bar.md)
- [typography](./docs/typography.md)
- [url-field](./docs/url-field.md)
- [virtual-scroll](./docs/virtual-scroll.md)
- [week-field](./docs/week-field.md)
- [week-picker](./docs/week-picker.md)

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
