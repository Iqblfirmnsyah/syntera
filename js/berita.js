/* =========================================================
   SYNTERA'25 — BERITA
   News data + search + filter + render
========================================================= */


const beritaData = [

    {
        id: 2,
        judul: "Syntera in SCREEN XV",
        kategori: "kegiatan",
        tanggal: "16 Mei 2026",
        tanggalSort: "2026-05-16",
        gambar: "../assets/img/berita/screen.JPG",
        deskripsi:
            "No deskripsi yet."
    },

    {
        id: 3,
        judul: "Syntera Berprestasi",
        kategori: "prestasi",
        tanggal: "13 Juni 2026",
        tanggalSort: "2026-06-12",
        gambar: "../assets/img/berita/raffi.jpeg",
        deskripsi:
            "No deskripsi yet."
    }

];


const newsGrid =
    document.getElementById("newsGrid");

const newsEmpty =
    document.getElementById("newsEmpty");

const newsSearch =
    document.getElementById("newsSearch");

const newsFilters =
    document.querySelectorAll(".news-filter");


let currentCategory = "all";
let currentSearch = "";


/* =========================================================
   RENDER
========================================================= */

function renderNews(data) {

    if (!newsGrid) return;

    newsGrid.innerHTML = "";


    if (data.length === 0) {

        newsEmpty?.classList.remove("hidden");

        return;

    }


    newsEmpty?.classList.add("hidden");


    data.forEach((item, index) => {

        const article =
            document.createElement("article");

        article.className =
            "news-card reveal";

        article.style.animationDelay =
            `${index * 80}ms`;


        article.innerHTML = `

            <a
                href="#"
                class="news-card-image">

                <img
                    src="${item.gambar}"
                    alt="${item.judul}"
                    loading="lazy">

                <span class="news-card-category">
                    ${formatCategory(item.kategori)}
                </span>

            </a>


            <div class="news-card-content">

                <div class="news-card-date">

                    ${item.tanggal}

                </div>


                <h3 class="font-display">

                    ${item.judul}

                </h3>


                <p>

                    ${item.deskripsi}

                </p>


                <a
                    href="#"
                    class="news-card-link">

                    Baca selengkapnya

                    <span>↗</span>

                </a>

            </div>

        `;


        newsGrid.appendChild(article);

    });


    requestAnimationFrame(() => {

        newsGrid
            .querySelectorAll(".reveal")
            .forEach(card => {

                card.classList.add("in-view");

            });

    });

}


/* =========================================================
   CATEGORY LABEL
========================================================= */

function formatCategory(category) {

    const labels = {

        kegiatan: "KEGIATAN",

        pengumuman: "PENGUMUMAN",

        prestasi: "PRESTASI",

        akademik: "AKADEMIK"

    };

    return labels[category] || category.toUpperCase();

}


/* =========================================================
   FILTER + SEARCH
========================================================= */

function applyNewsFilter() {

    const result =
        beritaData.filter(item => {

            const matchesCategory =
                currentCategory === "all" ||
                item.kategori === currentCategory;


            const keyword =
                currentSearch.toLowerCase().trim();


            const matchesSearch =
                item.judul
                    .toLowerCase()
                    .includes(keyword) ||

                item.deskripsi
                    .toLowerCase()
                    .includes(keyword);


            return (
                matchesCategory &&
                matchesSearch
            );

        });


    renderNews(result);

}


/* =========================================================
   SEARCH
========================================================= */

newsSearch?.addEventListener(
    "input",
    (event) => {

        currentSearch =
            event.target.value;

        applyNewsFilter();

    }
);


/* =========================================================
   CATEGORY BUTTON
========================================================= */

newsFilters.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            newsFilters.forEach(btn => {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            currentCategory =
                button.dataset.category;


            applyNewsFilter();

        }
    );

});


/* =========================================================
   INITIAL
========================================================= */

renderNews(beritaData);
