/* =========================================================
   SYNTERA'25 — GALERI.JS

   - Data gallery
   - Filter kategori
   - Search
   - Masonry gallery
   - Lightbox
   - Previous / Next
   - Keyboard navigation
   ========================================================= */


/* =========================================================
   DATA GALERI
   ========================================================= */

const galleryData = [

    {
        image: "../assets/img/galeri/featured.jpeg",
        title: "Matrikulasi 2025",
        category: "kebersamaan",
        description: "Momen awal kebersamaan mahasiswa SYNTERA'25."
    },

    {
        image: "../assets/img/galeri/bios3.jpeg",
        title: "Penutupan BIOS 3",
        category: "kebersamaan",
        description: "Dokumentasi sebelum pulang dari anjungan."
    },

    {
        image: "../assets/img/galeri/baksos.jpg",
        title: "Bakti Sosial 2026",
        category: "kebersamaan",
        description: "Kegiatan himaster berbakti di panti asuhan."
    },

    {
        image: "../assets/img/galeri/bootingday1.jpg",
        title: "Booting Day 1",
        category: "kegiatan",
        description: "Dokumentasi after kegiatan booting day 1."
    },

    {
        image: "../assets/img/galeri/bootingday2.jpg",
        title: "Booting Day 2",
        category: "kegiatan",
        description: "Dokumentasi after kegiatan booting day 2."
    },

    {
        image: "../assets/img/galeri/praksisdiga.jpg",
        title: "Last Praktikum Sisdig Kelas A",
        category: "akademik",
        description: "Dokumentasi hari terakhir praktikum sisdig kelas A."
    },

    {
        image: "../assets/img/galeri/praksisdigd.jpg",
        title: "Last Praktikum Sisdig Kelas D",
        category: "akademik",
        description: "Dokumentasi hari terakhir praktikum sisdig kelas D."
    },

    {
        image: "../assets/img/galeri/lastsem2.jpg",
        title: "Last Semester 2",
        category: "akademik",
        description: "Dokumentasi hari terakhir UAS di semester 2."
    },

    {
        image: "../assets/img/galeri/supporter.jpg",
        title: "Syntera Supporter in Dekan Cup",
        category: "kegiatan",
        description: "Dokumentasi supporter pada kegiatan dekan cup."
    },

    {
        image: "../assets/img/galeri/mubes.jpg",
        title: "Mubes 2026",
        category: "kegiatan",
        description: "Dokumentasi mubes 2026."
    },

    {
        image: "../assets/img/galeri/screen.jpg",
        title: "Syntera in Screen XV",
        category: "kegiatan",
        description: "Dokumentasi kontribusi syntera pada kegiatan screen xv."
    },

    {
        image: "../assets/img/galeri/pes26.jpg",
        title: "Syntera in Pesta Siskom 2026",
        category: "kegiatan",
        description: "Dokumentasi pada kegiatan pesta siskom 2026."
    }

];


/* =========================================================
   STATE
   ========================================================= */

let currentGallery = [...galleryData];

let currentLightboxIndex = 0;


/* =========================================================
   DOM
   ========================================================= */

const galleryGrid =
    document.getElementById("galleryGrid");

const galleryEmpty =
    document.getElementById("galleryEmpty");

const gallerySearch =
    document.getElementById("gallerySearch");

const galleryFilters =
    document.querySelectorAll(".gallery-filter");

const lightbox =
    document.getElementById("galleryLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxCategory =
    document.getElementById("lightboxCategory");

const lightboxDescription =
    document.getElementById("lightboxDescription");

const lightboxClose =
    document.getElementById("lightboxClose");

const lightboxPrev =
    document.getElementById("lightboxPrev");

const lightboxNext =
    document.getElementById("lightboxNext");


/* =========================================================
   RENDER GALLERY
   ========================================================= */

function renderGallery(data) {

    if (!galleryGrid) return;

    galleryGrid.innerHTML = "";

    if (!data.length) {

        galleryEmpty?.classList.remove("hidden");

        return;

    }

    galleryEmpty?.classList.add("hidden");


    data.forEach((item, index) => {

        const card =
            document.createElement("article");

        card.className =
            "gallery-item reveal";


        card.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.title}"
                loading="lazy"
            >

            <div class="gallery-overlay">

                <span class="gallery-category">
                    ${formatCategory(item.category)}
                </span>

                <h3 class="gallery-title">
                    ${item.title}
                </h3>

            </div>

        `;


        card.addEventListener("click", () => {

            openLightbox(index);

        });


        galleryGrid.appendChild(card);

    });


    initGalleryReveal();

}


/* =========================================================
   FORMAT CATEGORY
   ========================================================= */

function formatCategory(category) {

    const categories = {

        kegiatan: "Kegiatan",

        akademik: "Akademik",

        kebersamaan: "Kebersamaan",

        event: "Event",

        lainnya: "Lainnya"

    };

    return categories[category] || category;

}


/* =========================================================
   SEARCH
   ========================================================= */

function handleGallerySearch() {

    const keyword =
        gallerySearch.value
            .trim()
            .toLowerCase();


    const activeFilter =
        document
            .querySelector(".gallery-filter.active")
            ?.dataset.filter || "all";


    currentGallery =
        galleryData.filter(item => {

            const matchesSearch =

                item.title
                    .toLowerCase()
                    .includes(keyword)

                ||

                item.description
                    .toLowerCase()
                    .includes(keyword)

                ||

                item.category
                    .toLowerCase()
                    .includes(keyword);


            const matchesFilter =

                activeFilter === "all"

                ||

                item.category === activeFilter;


            return matchesSearch && matchesFilter;

        });


    renderGallery(currentGallery);

}


/* =========================================================
   FILTER
   ========================================================= */

function initGalleryFilters() {

    galleryFilters.forEach(button => {

        button.addEventListener("click", () => {

            galleryFilters.forEach(btn => {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            handleGallerySearch();

        });

    });

}


/* =========================================================
   LIGHTBOX
   ========================================================= */

function openLightbox(index) {

    if (!currentGallery.length) return;


    currentLightboxIndex = index;


    updateLightbox();


    lightbox.classList.remove("hidden");

    lightbox.classList.add("flex");


    document.body.style.overflow = "hidden";

}


function closeLightbox() {

    lightbox.classList.add("hidden");

    lightbox.classList.remove("flex");

    document.body.style.overflow = "";

}


function updateLightbox() {

    const item =
        currentGallery[currentLightboxIndex];


    if (!item) return;


    lightboxImage.src =
        item.image;

    lightboxImage.alt =
        item.title;


    lightboxTitle.textContent =
        item.title;


    lightboxCategory.textContent =
        formatCategory(item.category);


    lightboxDescription.textContent =
        item.description;

}


/* =========================================================
   NEXT
   ========================================================= */

function nextGallery() {

    if (!currentGallery.length) return;


    currentLightboxIndex++;

    if (
        currentLightboxIndex >=
        currentGallery.length
    ) {

        currentLightboxIndex = 0;

    }


    updateLightbox();

}


/* =========================================================
   PREVIOUS
   ========================================================= */

function previousGallery() {

    if (!currentGallery.length) return;


    currentLightboxIndex--;

    if (currentLightboxIndex < 0) {

        currentLightboxIndex =
            currentGallery.length - 1;

    }


    updateLightbox();

}


/* =========================================================
   KEYBOARD
   ========================================================= */

function initKeyboardNavigation() {

    document.addEventListener(
        "keydown",
        event => {

            if (
                lightbox.classList.contains("hidden")
            ) {
                return;
            }


            if (event.key === "Escape") {

                closeLightbox();

            }


            if (event.key === "ArrowRight") {

                nextGallery();

            }


            if (event.key === "ArrowLeft") {

                previousGallery();

            }

        }
    );

}


/* =========================================================
   REVEAL
   ========================================================= */

function initGalleryReveal() {

    const items =
        document.querySelectorAll(
            ".gallery-item"
        );


    if (!items.length) return;


    if (
        !("IntersectionObserver" in window)
    ) {

        items.forEach(item => {

            item.classList.add("in-view");

        });

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("in-view");


                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.08
            }
        );


    items.forEach(item => {

        observer.observe(item);

    });

}


/* =========================================================
   EVENT LISTENERS
   ========================================================= */

function initGallery() {

    renderGallery(galleryData);

    initGalleryFilters();

    initKeyboardNavigation();


    gallerySearch?.addEventListener(
        "input",
        handleGallerySearch
    );


    lightboxClose?.addEventListener(
        "click",
        closeLightbox
    );


    lightboxPrev?.addEventListener(
        "click",
        previousGallery
    );


    lightboxNext?.addEventListener(
        "click",
        nextGallery
    );


    lightbox?.addEventListener(
        "click",
        event => {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );

}


/* =========================================================
   START
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initGallery
);