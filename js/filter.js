// =========================================================
// SYNTERA'25
// FILTER, SEARCH & SORT MAHASISWA
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");
    const filterButtons = document.querySelectorAll(".filter-chip");

    if (!searchInput || !filterButtons.length) {
        return;
    }

    // =====================================================
    // FILTER YANG AKTIF
    // Default = A-Z
    // =====================================================

    let activeFilter = "az";


    // =====================================================
    // PASTIKAN TOMBOL A-Z AKTIF SAAT HALAMAN DIBUKA
    // =====================================================

    filterButtons.forEach(button => {
        button.classList.remove("active");

        if (button.dataset.filter === "az") {
            button.classList.add("active");
        }
    });


    // =====================================================
    // SEARCH
    // =====================================================

    searchInput.addEventListener("input", () => {
        applyStudentFilter();
    });


    // =====================================================
    // FILTER & SORTING
    // =====================================================

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            activeFilter = button.dataset.filter;


            // Hapus active dari semua tombol
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });


            // Aktifkan tombol yang dipilih
            button.classList.add("active");


            // Terapkan filter
            applyStudentFilter();

        });

    });


    // =====================================================
    // FUNGSI UTAMA
    // =====================================================

    function applyStudentFilter() {

        const keyword = searchInput.value
            .trim()
            .toLowerCase();


        // =================================================
        // SALIN DATA ASLI
        // =================================================

        let result = [...mahasiswa];


        // =================================================
        // SEARCH
        // =================================================

        if (keyword !== "") {

            result = result.filter(student => {

                const nama = student.nama
                    .toLowerCase();

                const panggilan = student.panggilan
                    .toLowerCase();


                return (
                    nama.includes(keyword) ||
                    panggilan.includes(keyword)
                );

            });

        }


        // =================================================
        // FILTER
        // =================================================

        switch (activeFilter) {

            case "male":

                result = result.filter(
                    student => student.gender === "male"
                );

                break;


            case "female":

                result = result.filter(
                    student => student.gender === "female"
                );

                break;


            case "pengurus":

                result = result.filter(
                    student => student.pengurus === true
                );

                break;

        }


        // =================================================
        // SORTING
        // =================================================

        // A-Z
        if (activeFilter === "az") {

            result.sort((a, b) =>

                a.nama.localeCompare(
                    b.nama,
                    "id",
                    {
                        sensitivity: "base"
                    }
                )

            );

        }


        // Z-A
        if (activeFilter === "za") {

            result.sort((a, b) =>

                b.nama.localeCompare(
                    a.nama,
                    "id",
                    {
                        sensitivity: "base"
                    }
                )

            );

        }


        // =================================================
        // RENDER
        // =================================================

        renderMahasiswa(result);

        updateStatistic(result);

    }


    // =====================================================
    // JALANKAN SEKALI SAAT HALAMAN PERTAMA DIBUKA
    // =====================================================

    applyStudentFilter();

});