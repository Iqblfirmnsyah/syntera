// =========================================================
// SYNTERA'25
// HOMEPAGE EVENT COUNTDOWN
// =========================================================

function getNextEvent() {

    if (typeof events === "undefined") {
        console.error("Data events tidak ditemukan.");
        return null;
    }

    const now = new Date();

    return events
        .filter(event => event.status === "upcoming")
        .filter(event => new Date(event.date) > now)
        .sort(
            (a, b) =>
                new Date(a.date) - new Date(b.date)
        )[0] || null;
}


// =========================================================
// COUNTDOWN
// =========================================================

function initEventCountdown() {

    const countdown =
        document.getElementById("countdown");

    if (!countdown) return;


    const event = getNextEvent();

    if (!event) {

        console.warn("Tidak ada event mendatang.");
        return;

    }


    // -----------------------------------------------------
    // TAMPILKAN DATA EVENT
    // -----------------------------------------------------

    const titleElement =
        document.getElementById("countdown-event-title");

    const dateElement =
        document.getElementById("countdown-event-date");


    if (titleElement) {

        titleElement.textContent =
            event.title;

    }


    if (dateElement) {

        dateElement.textContent =
            formatShortDate(event.date);

    }


    // -----------------------------------------------------
    // COUNTDOWN
    // -----------------------------------------------------

    const targetDate =
        new Date(event.date).getTime();


    function updateCountdown() {

        const now =
            Date.now();

        const distance =
            targetDate - now;


        if (distance <= 0) {

            document.getElementById("cd-days").textContent = "00";
            document.getElementById("cd-hours").textContent = "00";
            document.getElementById("cd-mins").textContent = "00";
            document.getElementById("cd-secs").textContent = "00";

            clearInterval(timer);

            return;

        }


        const days =
            Math.floor(
                distance / (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (distance %
                    (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (distance %
                    (1000 * 60 * 60)) /
                (1000 * 60)
            );


        const seconds =
            Math.floor(
                (distance %
                    (1000 * 60)) /
                1000
            );


        document.getElementById("cd-days")
            .textContent =
            String(days).padStart(2, "0");


        document.getElementById("cd-hours")
            .textContent =
            String(hours).padStart(2, "0");


        document.getElementById("cd-mins")
            .textContent =
            String(minutes).padStart(2, "0");


        document.getElementById("cd-secs")
            .textContent =
            String(seconds).padStart(2, "0");

    }


    updateCountdown();

    const timer =
        setInterval(updateCountdown, 1000);

}


// =========================================================
// FORMAT TANGGAL
// =========================================================

function formatShortDate(dateString) {

    const date =
        new Date(dateString);

    const months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MEI",
        "JUN",
        "JUL",
        "AGT",
        "SEP",
        "OKT",
        "NOV",
        "DES"
    ];

    return `${String(date.getDate()).padStart(2, "0")} ${
        months[date.getMonth()]
    } ${date.getFullYear()}`;
}


// =========================================================
// INIT
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    initEventCountdown
);