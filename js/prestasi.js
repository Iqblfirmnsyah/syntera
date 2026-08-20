/* =========================================================
   SYNTERA'25
   PRESTASI & PENCAPAIAN
========================================================= */


/* =========================================================
   DATA PRESTASI
========================================================= */

const achievements = [

    {
        year: "2026",
        title: "Finalis National Essay Competition (NEC) 5",
        person: "Kristianus Taras Narda",
        description:
            "Berhasil lolos dan melaju ke final pada ajang NEC 5.",
        category: "Akademik",
        icon: "fa-solid fa-trophy"
    },

    {
        year: "2026",
        title: "Juara 1 Badminton Ganda Putra Dekan Cup 2026",
        person: "Rafianda Azzikra'25",
        description:
            "Berhasil Menjuarai Pada lomba badminton ganda putra bersama bang kevin alfiansyah pada dekan cup 2026.",
        category: "Non-Akademik",
        icon: "fa-solid fa-medal"
    }

];


/* =========================================================
   ELEMENT
========================================================= */

const achievementTimeline =
    document.getElementById(
        "achievementTimeline"
    );

const achievementEmpty =
    document.getElementById(
        "achievementEmpty"
    );


/* =========================================================
   RENDER
========================================================= */

function renderAchievements(data) {

    if (!achievementTimeline) return;


    achievementTimeline.innerHTML = "";


    if (!data.length) {

        achievementEmpty?.classList.remove(
            "hidden"
        );

        return;

    }


    achievementEmpty?.classList.add(
        "hidden"
    );


    data.forEach((item, index) => {

        const achievement =
            document.createElement("article");


        achievement.className =
            "achievement-item reveal";


        achievement.style.animationDelay =
            `${index * 100}ms`;


        achievement.innerHTML = `

            <div class="achievement-dot">

                <i class="${item.icon}"></i>

            </div>


            <div class="achievement-card">

                <div class="achievement-year">

                    ${item.year}

                </div>


                <div class="achievement-content">

                    <span class="achievement-category">

                        ${item.category}

                    </span>


                    <h3>

                        ${item.title}

                    </h3>


                    <p class="achievement-person">

                        <i class="fa-solid fa-user"></i>

                        ${item.person}

                    </p>


                    <p class="achievement-description">

                        ${item.description}

                    </p>

                </div>

            </div>

        `;


        achievementTimeline.appendChild(
            achievement
        );

    });


    requestAnimationFrame(() => {

        achievementTimeline
            .querySelectorAll(".reveal")
            .forEach(item => {

                item.classList.add(
                    "in-view"
                );

            });

    });

}


/* =========================================================
   INITIAL RENDER
========================================================= */

renderAchievements(
    achievements
);