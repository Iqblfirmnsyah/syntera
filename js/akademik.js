/* =========================================================
   SYNTERA'25 — akademik.js
   Materi & Resource
========================================================= */


/* =========================================================
   DATA RESOURCE
========================================================= */

const resources = [

    {
        title: "Bank Soal Himaster",
        description: "Kumpulan soal latihan untuk membantu persiapan perkuliahan.",
        category: "soal",
        icon: "fa-solid fa-file-lines",
        type: "Bank Soal",
        url: "https://keilmuan.himaster.org/banksoal/"
    }

];


/* =========================================================
   ELEMENT
========================================================= */

const resourceGrid =
    document.getElementById("resourceGrid");

const resourceEmpty =
    document.getElementById("resourceEmpty");

const resourceSearch =
    document.getElementById("resourceSearch");

const resourceFilters =
    document.querySelectorAll(".resource-filter");


/* =========================================================
   STATE
========================================================= */

let currentCategory = "all";

let currentSearch = "";


/* =========================================================
   RENDER RESOURCE
========================================================= */

function renderResources(data) {

    resourceGrid.innerHTML = "";


    if (data.length === 0) {

        resourceEmpty.classList.remove("hidden");

        return;

    }


    resourceEmpty.classList.add("hidden");


    data.forEach((resource, index) => {

        const card =
            document.createElement("article");


        card.className =
            "resource-card reveal";


        card.style.animationDelay =
            `${index * 70}ms`;


        card.innerHTML = `

            <div class="resource-icon">

                <i class="${resource.icon}"></i>

            </div>


            <div class="resource-body">

                <span class="resource-type">

                    ${resource.type}

                </span>


                <h3>

                    ${resource.title}

                </h3>


                <p>

                    ${resource.description}

                </p>


                <a
                    href="${resource.url}"
                    class="resource-button"
                    ${resource.url !== "#" ? 'target="_blank" rel="noopener noreferrer"' : ""}
                >

                    Buka Resource

                    <i class="fa-solid fa-arrow-right"></i>

                </a>

            </div>

        `;


        resourceGrid.appendChild(card);

    });


    /*
       Trigger reveal animation
       untuk card hasil render.
    */

    requestAnimationFrame(() => {

        document
            .querySelectorAll("#resourceGrid .reveal")
            .forEach(card => {

                card.classList.add("in-view");

            });

    });

}


/* =========================================================
   FILTER DATA
========================================================= */

function filterResources() {

    const search =
        currentSearch.toLowerCase().trim();


    const filtered =
        resources.filter(resource => {


            /* FILTER KATEGORI */

            const categoryMatch =
                currentCategory === "all" ||
                resource.category === currentCategory;


            /* SEARCH */

            const searchMatch =
                resource.title
                    .toLowerCase()
                    .includes(search)

                ||

                resource.description
                    .toLowerCase()
                    .includes(search)

                ||

                resource.type
                    .toLowerCase()
                    .includes(search);


            return categoryMatch && searchMatch;

        });


    renderResources(filtered);

}


/* =========================================================
   LIVE SEARCH
========================================================= */

if (resourceSearch) {

    resourceSearch.addEventListener(
        "input",
        function () {

            currentSearch =
                this.value;

            filterResources();

        }
    );

}


/* =========================================================
   CATEGORY FILTER
========================================================= */

resourceFilters.forEach(button => {

    button.addEventListener(
        "click",
        function () {


            /* HAPUS ACTIVE */

            resourceFilters.forEach(btn => {

                btn.classList.remove("active");

            });


            /* ACTIVE BUTTON */

            this.classList.add("active");


            /* CATEGORY */

            currentCategory =
                this.dataset.category;


            filterResources();

        }
    );

});


/* =========================================================
   INITIAL RENDER
========================================================= */

renderResources(resources);