// =========================================================
// SYNTERA'25
// EVENT.JS
// Data Event + Event Terdekat + Activities + Archive
// =========================================================


// =========================================================
// DATA EVENT
// =========================================================

const events = [

    // =====================================================
    // UPCOMING
    // =====================================================

    {
        id: 1,

        title: "Silaturahmi Masyarakat Siskom (SMS) 2026",

        category: "Internal",

        date: "2026-10-10T19:30:00+07:00",

        dateText: "10 Oktober 2026",

        time: "12.30 WIB",

        location: "Aula Gedung Resiskom",

        description:
            "Kegiatan silaturrahmi dan ramah tamah antar masyarakat di lingkungan RESISKOM UNTAN.",

        image:
            "../assets/img/event/sms.jpeg",

        status: "upcoming"
    },


    // =====================================================
    // ARCHIVE
    // =====================================================

    {
        id: 4,

        title: "Silaturahmi Masyarakat Siskom (SMS) 2025",

        category: "Sosial",

        date: "2025-10-12T15:30:00+07:00",

        dateText: "19 Oktober 2025",

        time: "12.00 WIB - Selesai",

        location: "Aula Gedung Rekayasa Sistem Komputer",

        description:
            "Kegiatan silaturrahmi dan ramah tamah antar masyarakat di lingkungan RESISKOM UNTAN",

        image:
            "../assets/img/event/sms.jpeg",

        status: "archive"
    },


    {
        id: 5,

        title: "Penutupan BIOS 2025",

        category: "Internal",

        date: "2026-01-29T19:00:00+07:00",

        dateText: "29 Januari 2026 - 01 Februari 2026",

        time: "07.00 WIB - Selesai",

        location: "Anjungan Melancar, Kab. Mempawah",

        description:
            "Penutupan kegiatan kaderisasi atau BIOS mahasiswa Resiskom akt 2025.",

        image:
            "../assets/img/event/diskusi-perdana.jpg",

        status: "archive"
    },

    {
        id: 6,

        title: "Bakti Sosial 2026",

        category: "Sosial",

        date: "2026-03-07T19:00:00+07:00",

        dateText: "07 Maret 2026",

        time: "13.00 WIB - Selesai",

        location: "Panti Asuhan Nurul Amal",

        description:
            "Acara tahunan bakti sosial masyarakat Resiskom ke salah satu panti asuhan di bulan Ramadhan.",

        image:
            "../assets/img/event/diskusi-perdana.jpg",

        status: "archive"
    },

    {
        id: 7,

        title: "Pesona SCREEN 2025",

        category: "Entertaint",

        date: "2026-05-16T19:00:00+07:00",

        dateText: "16 Mei 2026",

        time: "16.00 WIB - Selesai",

        location: "KONFERENSI 5, Gedung Konferensi UNTAN",

        description:
            "Acara pentupan SCREEN XV yang akan dihibur oleh Dewan Penghibur Rakyat.",

        image:
            "../assets/img/event/screen15.jpeg",

        status: "archive"
    },

    {
        id: 7,

        title: "Pesta Siskom 2026",

        category: "Internal",

        date: "2026-05-10T19:00:00+07:00",

        dateText: "10 Mei 2026",

        time: "15.30 WIB - Selesai",

        location: "Gedung Rekayasa Sitem Komputer",

        description:
            "Pesta Siskom yang mengusul tema 'Initialize the future, celebrate the journey'.",

        image:
            "../assets/img/event/pess.jpeg",

        status: "archive"
    },

    {
        id: 7,

        title: "Musyawarah Besar 2026",

        category: "Internal",

        date: "2026-07-24T19:00:00+07:00",

        dateText: "24 - 26 Juli 2026",

        time: "09.00 WIB - Selesai",

        location: "Gedung Kuliah Bersama B, Ruang 2.1",

        description:
            "Musyawarah Besar 2026.",

        image:
            "../assets/img/event/mubes.jpeg",

        status: "archive"
    }

];


// =========================================================
// HELPER
// EVENT TERDEKAT
// =========================================================

function getNextEvent() {

    const now = new Date();

    return events

        .filter(event =>
            new Date(event.date) > now
        )

        .sort(
            (a, b) =>
                new Date(a.date) -
                new Date(b.date)
        )[0] || null;

}


// =========================================================
// FEATURED EVENT
// BAGIAN "EVENT TERDEKAT"
// =========================================================

function renderFeaturedUpcoming() {

    const title =
        document.getElementById(
            "upcoming-event-title"
        );

    if (!title) return;


    const description =
        document.getElementById(
            "upcoming-event-description"
        );


    const image =
        document.getElementById(
            "upcoming-event-image"
        );


    const date =
        document.getElementById(
            "upcoming-event-date"
        );


    const time =
        document.getElementById(
            "upcoming-event-time"
        );


    const location =
        document.getElementById(
            "upcoming-event-location"
        );


    const event =
        getNextEvent();


    // -----------------------------------------------------
    // TIDAK ADA EVENT
    // -----------------------------------------------------

    if (!event) {

        title.textContent =
            "Belum Ada Event";

        if (description) {

            description.textContent =
                "Belum ada event mendatang.";

        }

        if (date) {
            date.textContent = "--";
        }

        if (time) {
            time.textContent = "--";
        }

        if (location) {
            location.textContent = "--";
        }

        return;

    }


    // -----------------------------------------------------
    // TAMPILKAN DATA
    // -----------------------------------------------------

    title.textContent =
        event.title;


    if (description) {

        description.textContent =
            event.description;

    }


    if (image) {

        image.src =
            event.image;

        image.alt =
            event.title;

    }


    if (date) {

        date.textContent =
            event.dateText;

    }


    if (time) {

        time.textContent =
            event.time;

    }


    if (location) {

        location.textContent =
            event.location;

    }

}


// =========================================================
// EVENT CARD
// =========================================================

function createEventCard(event, index) {

    const categoryClass =
        event.category
            .toLowerCase()
            .replace(/\s+/g, "-");


    return `

        <article
            class="event-card in-view"
            style="animation-delay: ${index * 80}ms;">

            <!-- IMAGE -->

            <div
                class="relative
                aspect-[16/10]
                overflow-hidden
                rounded-t-[28px]
                bg-navy-900">

                <img
                    src="${event.image}"
                    alt="${event.title}"
                    loading="lazy"
                    class="w-full h-full object-cover transition duration-500 hover:scale-105">

                <div
                    class="absolute inset-0
                    bg-gradient-to-t
                    from-navy-950/70
                    via-transparent
                    to-transparent">
                </div>


                <!-- CATEGORY -->

                <span
                    class="absolute
                    top-5
                    left-5
                    inline-flex
                    items-center
                    px-3
                    py-1.5
                    rounded-full
                    bg-white/90
                    backdrop-blur-sm
                    text-navy-950
                    text-xs
                    font-bold">

                    ${event.category}

                </span>

            </div>


            <!-- CONTENT -->

            <div
                class="p-6
                bg-white
                rounded-b-[28px]">

                <!-- DATE -->

                <div
                    class="flex
                    items-center
                    gap-2
                    text-xs
                    font-mono
                    text-gold-600
                    uppercase
                    tracking-wide">

                    <i class="fa-regular fa-calendar"></i>

                    ${event.dateText}

                </div>


                <!-- TITLE -->

                <h3
                    class="mt-3
                    font-display
                    text-2xl
                    text-navy-950
                    leading-tight">

                    ${event.title}

                </h3>


                <!-- DESCRIPTION -->

                <p
                    class="mt-3
                    text-sm
                    leading-relaxed
                    text-gray-500">

                    ${event.description}

                </p>


                <!-- META -->

                <div
                    class="mt-5
                    pt-5
                    border-t
                    border-gray-100
                    flex
                    flex-wrap
                    gap-x-5
                    gap-y-2
                    text-xs
                    text-gray-500">

                    <span
                        class="flex
                        items-center
                        gap-2">

                        <i class="fa-regular fa-clock"></i>

                        ${event.time}

                    </span>


                    <span
                        class="flex
                        items-center
                        gap-2">

                        <i class="fa-solid fa-location-dot"></i>

                        ${event.location}

                    </span>

                </div>

            </div>

        </article>

    `;

}


// =========================================================
// ACTIVITIES
// eventGrid
// =========================================================

function renderUpcomingEvents() {

    const grid =
        document.getElementById(
            "eventGrid"
        );


    if (!grid) return;


    const empty =
        document.getElementById(
            "eventEmpty"
        );


    const upcoming =
        events

            .filter(event =>
                new Date(event.date) > new Date()
            )

            .sort(
                (a, b) =>
                    new Date(a.date) -
                    new Date(b.date)
            );


    grid.innerHTML = "";


    // -----------------------------------------------------
    // EMPTY
    // -----------------------------------------------------

    if (upcoming.length === 0) {

        if (empty) {

            empty.classList.remove(
                "hidden"
            );

        }

        return;

    }


    if (empty) {

        empty.classList.add(
            "hidden"
        );

    }


    // -----------------------------------------------------
    // RENDER
    // -----------------------------------------------------

    upcoming.forEach(
        (event, index) => {

            grid.insertAdjacentHTML(
                "beforeend",

                createEventCard(
                    event,
                    index
                )
            );

        }
    );

}


// =========================================================
// ARCHIVE
// eventArchive
// =========================================================

function renderArchive() {

    const grid =
        document.getElementById(
            "eventArchive"
        );


    if (!grid) return;


    const archive =
        events

            .filter(event =>
                new Date(event.date) <= new Date()
            )

            .sort(
                (a, b) =>
                    new Date(b.date) -
                    new Date(a.date)
            );


    grid.innerHTML = "";


    // -----------------------------------------------------
    // RENDER
    // -----------------------------------------------------

    archive.forEach(
        (event, index) => {

            grid.insertAdjacentHTML(
                "beforeend",

                createEventCard(
                    event,
                    index
                )
            );

        }
    );

}


// =========================================================
// INIT
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderFeaturedUpcoming();

        renderUpcomingEvents();

        renderArchive();

    }
);