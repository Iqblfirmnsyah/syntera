// =========================================================
// SYNTERA'25
// DIREKTORI MAHASISWA
// SEARCH + FILTER + SORTING + STATISTIK
// =========================================================


// =========================================================
// DATA MAHASISWA
// =========================================================

const mahasiswa = [

    {
        nama: "Iqbal Firmansyah",
        panggilan: "Iqbal",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/iqball.jpg",
        instagram: "https://instagram.com/iqblfrmnsyahh",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Abdul Aziz Alamsyah",
        panggilan: "Ajul",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/ajul.jpg",
        instagram: "https://instagram.com/ajdulaaa",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Arie Nafi Noor",
        panggilan: "Arie",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/arie.jpg",
        instagram: "https://instagram.com/arinfiii",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Redo Anthus",
        panggilan: "Redo",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/redo.jpg",
        instagram: "https://instagram.com/ranthus7",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Jimmy",
        panggilan: "Jimmy",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/jimmy.jpg",
        instagram: "https://instagram.com/jimmyyzzs",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Rasya Rizky Pratama",
        panggilan: "Rasya",
        gender: "male",
        pengurus: true,
        foto: "../assets/img/mahasiswa/rasya.jpg",
        instagram: "https://instagram.com/kyy.pertamax",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Wasiqah Hasya",
        panggilan: "Hasya",
        gender: "female",
        pengurus: true,
        foto: "../assets/img/mahasiswa/hasya.jpg",
        instagram: "https://instagram.com/haederran",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Nazwa Fathira",
        panggilan: "Nazwa",
        gender: "female",
        pengurus: true,
        foto: "../assets/img/mahasiswa/nazwa.jpg",
        instagram: "https://instagram.com/nasfahyra",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Gusti Achmad Al Ghazali",
        panggilan: "Gusti",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/gusti.jpg",
        instagram: "https://instagram.com/gusti_achmad_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Deving Andreas",
        panggilan: "Deving",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/deving.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Muhammad Delvyn Ezra Faiq",
        panggilan: "Delvyn",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/delvyn.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Bintang Gunawan",
        panggilan: "Bintang",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/bintang.jpg",
        instagram: "https://instagram.com/nnawannn_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Rindi Babaro",
        panggilan: "Rindi",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/rindi.jpg",
        instagram: "https://instagram.com/rnve14_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Marsha Erliani",
        panggilan: "Marsha",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/marsha.jpg",
        instagram: "https://instagram.com/mrr.shaa_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Miranda Novasarai",
        panggilan: "Miranda",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/miranda.jpg",
        instagram: "https://instagram.com/nvaa_sa3",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Ban Shang",
        panggilan: "Ban Shang",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/banshang.jpg",
        instagram: "https://instagram.com/shhnbang",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Aurellia",
        panggilan: "Aurel",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/aurel.jpg",
        instagram: "https://instagram.com/patricia_aurelliaa",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Parel",
        panggilan: "Parel",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/parel.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Muhammad Abel Ferdinan",
        panggilan: "Abel",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/abel.jpg",
        instagram: "https://instagram.com/m.abel.f",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Heru Dwi Putra Susatyo",
        panggilan: "Heru",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/heru.jpg",
        instagram: "https://instagram.com/hewruu_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Rafid Ahmad Mustaqim",
        panggilan: "Rafid",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/rafid.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Ahmad Kamal",
        panggilan: "Aka",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/nofoto.jpeg",
        instagram: "https://instagram.com/aka_mal",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Bryant Marcelo Emmanuel",
        panggilan: "Bryant",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/bryant.jpg",
        instagram: "https://instagram.com/bmrce1",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Karina",
        panggilan: "Karina",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/karina.jpg",
        instagram: "https://instagram.com/tandatanya_jk",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Juwita Jesica Sipayung",
        panggilan: "Juju",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/juju.png",
        instagram: "https://instagram.com/juwiiiii_sip",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Diky Hidayat",
        panggilan: "Diky",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/diky.jpg",
        instagram: "https://instagram.com/dikyaats",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Sartilawati",
        panggilan: "sartila",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/nofoto.jpeg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Muhammad Abdilah Haq",
        panggilan: "Abdillah",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/abdillah.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Farel Hadrian",
        panggilan: "Farel",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/nofoto.jpeg",
        instagram: "https://instagram.com/frlhfrian",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Muhammad Abiyu Ramadhan",
        panggilan: "Abiyu",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/abiyyuu.jpg",
        instagram: "https://instagram.com/abiyuu_e",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Chica Faradila Jannati",
        panggilan: "Chica",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/chica.jpg",
        instagram: "https://instagram.com/chcaa_fj",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Rafianda Azzikra Nur Zahid",
        panggilan: "Rafi",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/rafi.jpg",
        instagram: "https://instagram.com/deves8986",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Suci Pitaloka Ningrum",
        panggilan: "Suci",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/suci.png",
        instagram: "https://instagram.com/luvicidd",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Rakha Shabi Athaya",
        panggilan: "Rakha",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/rakha.jpg",
        instagram: "https://instagram.com/rakhajak_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Firman",
        panggilan: "Firman",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/firman.jpg",
        instagram: "https://instagram.com/frmannn_24",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Tedy Harlino",
        panggilan: "Tedy",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/nofoto.jpeg",
        instagram: "https://instagram.com/_tdy12",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Neza Fadya Kirana",
        panggilan: "Neza",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/neza.jpg",
        instagram: "https://instagram.com/_neza.fdy_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Nazila Averil Yuna",
        panggilan: "Nazila",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/nazila.jpg",
        instagram: "https://instagram.com/ave192006",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Abiyyu Sulthan Syaf",
        panggilan: "Abiyyu",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/abiyyu.png",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Rahmat Fadilah",
        panggilan: "Fadil",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/fadil.jpg",
        instagram: "https://instagram.com/rhmt.fadil",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Oscar William",
        panggilan: "Oscar",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/nofoto.jpeg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Parcell Christiano Supriadi",
        panggilan: "Parcell",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/parcel.jpg",
        instagram: "https://instagram.com/arsel.christiano",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Muhammad Nabil Annafa",
        panggilan: "Nabil",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/anna.png",
        instagram: "https://instagram.com/_annatelier",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Nabil Satya Ridho",
        panggilan: "Nabil",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/nabilsatya.jpg",
        instagram: "https://instagram.com/nabil.satyaa",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Giosia Christand Thioga",
        panggilan: "Gio",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/gio.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Angelina Fitriani",
        panggilan: "Angelina",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/angelina.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Prabowo Putra Dwiharto",
        panggilan: "Bowo",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/nofoto.jpeg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Muhammad Nour Rozan",
        panggilan: "Rozan",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/ozan.png",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Cinta Fitria Rahmadani",
        panggilan: "Cinta",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/cinta.jpg",
        instagram: "https://instagram.com/lovlyyeoniie",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Achmad Aimar Ghazali Putra",
        panggilan: "Aimar",
        gender: "male",
        pengurus: true,
        foto: "../assets/img/mahasiswa/aimar.jpeg",
        instagram: "https://instagram.com/a_imar1296",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Nur Aisyah",
        panggilan: "Aisyah",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/aisyah.jpg",
        instagram: "https://instagram.com/nnraais",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Kristiono Elgi",
        panggilan: "Elgi",
        gender: "male",
        pengurus: true,
        foto: "../assets/img/mahasiswa/elgi.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Fortunata Esfi Efrata Altama",
        panggilan: "Nata",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/nata.jpg",
        instagram: "https://instagram.com/_nvttss",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Errick Tan Jaya",
        panggilan: "Errick",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/errick.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Muhammad Dicka Saputra",
        panggilan: "Dicka",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/dicka.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Rizky Dwi Karunia Sejati",
        panggilan: "Rizky",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/rizky.jpg",
        instagram: "https://instagram.com/iky.ikyy_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Farhan Irsyad",
        panggilan: "Farhan",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/irsyad.jpg",
        instagram: "https://instagram.com/frhanirsydd_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Rehan Ramadhan",
        panggilan: "Rehan",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/rehan.jpg",
        instagram: "https://instagram.com/rr_cossack1914",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Tegar Dwi Setyo",
        panggilan: "Tegar",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/tegar.jpg",
        instagram: "https://instagram.com/tgardwstyo_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Natasya Awan Raka Pratiwi",
        panggilan: "Tasya",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/tasya.jpg",
        instagram: "https://instagram.com/ntsyaawnrakaa",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Gabriel Fernando",
        panggilan: "Gabriel",
        gender: "male",
        pengurus: true,
        foto: "../assets/img/mahasiswa/gabriel.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Lika Juliawati",
        panggilan: "Lika",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/lika.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Andy Rizki",
        panggilan: "Andy",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/andy.jpg",
        instagram: "https://instagram.com/izumi.nishimura1",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Josian Serreny Serra",
        panggilan: "Serra",
        gender: "female",
        pengurus: true,
        foto: "../assets/img/mahasiswa/serra.jpg",
        instagram: "https://instagram.com/seiraa.aaa",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Raditya Meldi",
        panggilan: "Meldi",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/meldi.jpg",
        instagram: "https://instagram.com/raditya_meldi",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Muhammad Rizky Ramadhan",
        panggilan: "Rizky",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/nofoto.jpeg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Ramadhan Ba'asya",
        panggilan: "Madhan",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/madhan.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Elya Cici Dayanti",
        panggilan: "Elya",
        gender: "female",
        pengurus: true,
        foto: "../assets/img/mahasiswa/elya.png",
        instagram: "https://instagram.com/leaalockedup",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Muhammad Faiz Nur Aslam",
        panggilan: "Faiz",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/aslam.jpg",
        instagram: "https://instagram.com/muhaslm.12",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Salwa Diva Mauly Anggita",
        panggilan: "Salwa",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/salwa.jpg",
        instagram: "https://instagram.com/salwamauly",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Jodika Sela",
        panggilan: "Jodi",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/jodi.jpg",
        instagram: "https://instagram.com/jodika_s",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Aqila Ghadah",
        panggilan: "Aqila",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/aqilah.jpg",
        instagram: "https://instagram.com/qylagh",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Rofiuddin Irsyad Ryanda",
        panggilan: "Udin",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/udin.jpg",
        instagram: "https://instagram.com/rofirsnrynd",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Muhammad Putra Dwi Utama",
        panggilan: "Jamal",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/putra.jpg",
        instagram: "https://instagram.com/mhdpvt__",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Dhio Yudistira",
        panggilan: "Dhio",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/dhio.jpg",
        instagram: "https://instagram.com/dio_up2u",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Ayla Aurellia Azzura",
        panggilan: "Ayla",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/ayla.jpg",
        instagram: "https://instagram.com/andrainjn_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Muhammad Ziyan",
        panggilan: "Ziyan",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/ziyan.png",
        instagram: "https://instagram.com/ziyananakbaikk",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Muhammad Fatir Al Handauw Saputra",
        panggilan: "Petir",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/fatir.jpg",
        instagram: "https://instagram.com/fatr_sa",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Zulkarnain",
        panggilan: "Ijul",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/ijul.jpg",
        instagram: "https://instagram.com/zullkarnaiin_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Augustouv Vios Eric",
        panggilan: "Eric",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/eric.jpg",
        instagram: "https://instagram.com/erictooblivion_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Rafael Adrian Febriyandi",
        panggilan: "Rafael",
        gender: "male",
        pengurus: true,
        foto: "../assets/img/mahasiswa/rafael.jpeg",
        instagram: "https://instagram.com/rafaeadri_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Anjela Salwa Vardilla",
        panggilan: "Anjela",
        gender: "female",
        pengurus: true,
        foto: "../assets/img/mahasiswa/anjela.jpg",
        instagram: "https://instagram.com/aliennzzx",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Mohammad Faizar Ikhlas",
        panggilan: "Faiz",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/faiz.jpg",
        instagram: "https://instagram.com/mfzr_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Irfan Naufal Fajri",
        panggilan: "Irfan",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/irfan.jpg",
        instagram: "https://instagram.com/keylnn_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Fajar Erlangga",
        panggilan: "Fajar",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/nofoto.jpeg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Steven Putra Wijaya",
        panggilan: "Steven",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/steven.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Arman Noor Yahya",
        panggilan: "Arman",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/nofoto.jpeg",
        instagram: "https://instagram.com/mman4upp",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Benedictus Napoli Nayer De Pila",
        panggilan: "Benedictus",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/benedictus.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Dede Surya Pasha",
        panggilan: "Dede",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/dede.jpg",
        instagram: "https://instagram.com/_dxs.dz_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Wiliam Wiranoto",
        panggilan: "Wiliam",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/william.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Reval Prayogo",
        panggilan: "Reval",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/reval.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Muhammad Adji Sultan Tsafiudiin",
        panggilan: "Adji",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/adji.jpg",
        instagram: "https://instagram.com/adji_sts",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Fidelis Figo",
        panggilan: "Figo",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/figo.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Muhammad Raffi Putranto",
        panggilan: "Raffi",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/nofoto.jpeg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Eurin Jaya Limbun",
        panggilan: "Eren",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/eren.jpg",
        instagram: "https://instagram.com/eurin.ern",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Dava Sanjaya",
        panggilan: "Dava",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/dava.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Dimas Alfajri",
        panggilan: "Dimas",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/nofoto.jpeg",
        instagram: "https://instagram.com/$1fazryy_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Khabib Abdilah Ali",
        panggilan: "Kebab",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/khabib.jpg",
        instagram: "https://instagram.com/khbiib_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Felix Dhimas Sadewa",
        panggilan: "Felix",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/felix.jpg",
        instagram: "https://instagram.com/sadewaganteng",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Yustina Rarastika",
        panggilan: "Rasti",
        gender: "female",
        pengurus: true,
        foto: "../assets/img/mahasiswa/rasti.jpg",
        instagram: "https://instagram.com/rasti.yr",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Reza Nugraha",
        panggilan: "Reza",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/reza.jpg",
        instagram: "https://instagram.com/rezadoer_",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Asi Holong Manullang",
        panggilan: "Holong",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/asi.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Hning Rimba Mardhiko",
        panggilan: "Rimba",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/rimba.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Kristianud Taras Barda",
        panggilan: "Taras",
        gender: "male",
        pengurus: true,
        foto: "../assets/img/mahasiswa/taras.webp",
        instagram: "https://instagram.com/trs_nrd7",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Jenna Vellagia Pamare",
        panggilan: "Jenna",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/nofoto.jpeg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Dimas Syifa Riswana",
        panggilan: "Dimas",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/dimassyifa.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Yeki Maulana",
        panggilan: "Yeki",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/yeki.jpg",
        instagram: "https://instagram.com/jeckiiiiy",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Muhammad Rizky Afrizal Bosbandi",
        panggilan: "Rizky",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/nofoto.jpeg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Ya Farrel Aiputra Chaidir",
        panggilan: "Farrel",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/yafarel.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Airin Indriani",
        panggilan: "Airin",
        gender: "female",
        pengurus: false,
        foto: "../assets/img/mahasiswa/nofoto.jpeg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Febryan",
        panggilan: "Febry",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/febry.jpg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "Meiliyanto",
        panggilan: "Anto",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/meimei.jpg",
        instagram: "https://instagram.com/diveyanto",
        linkedin: "https://linkedin.com/"
    },

    {
        nama: "F. Deo Parto",
        panggilan: "Deo",
        gender: "male",
        pengurus: false,
        foto: "../assets/img/mahasiswa/nofoto.jpeg",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/"
    }

];

// Daftar mahasiswa yang sudah out dari prodi
const mahasiswaOut = [
    "Airin Indriani",
    "Aqila Ghadah",
    "Arman Noor Yahya",
    "Hning Rimba Mardhiko",
    "Jenna Vellagia Pamare",
    "Lika Juliawati",
    "Mohammad Faizar Ikhlas",
    "Muhammad Rizky Afrizal Bosbandi",
    "Muhammad Rizky Ramadhan",
    "Rahmat Fadilah",
    "Sartilawati",
    "Steven Putra Wijaya",
];


// =========================================================
// ELEMENT HTML
// =========================================================

const studentGrid = document.getElementById("studentGrid");
const emptyState = document.getElementById("emptyState");

const searchInput = document.getElementById("searchInput");

const filterButtons = document.querySelectorAll(".filter-chip");

const totalCount = document.getElementById("total-count");
const maleCount = document.getElementById("male-count");
const femaleCount = document.getElementById("female-count");
const pengurusCount = document.getElementById("pengurus-count");


// =========================================================
// STATE
// =========================================================

let activeFilter = "all";
let activeSort = null;


// =========================================================
// INITIAL RENDER
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    renderMahasiswa(mahasiswa);

    updateStatistic(mahasiswa);

    initSearch();

    initFilter();

});


// =========================================================
// SEARCH
// =========================================================

function initSearch() {

    if (!searchInput) return;

    searchInput.addEventListener("input", () => {

        applyAll();

    });

}


// =========================================================
// FILTER & SORTING
// =========================================================

function initFilter() {

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter = button.dataset.filter;


            // =============================================
            // SORTING
            // =============================================

            if (filter === "az" || filter === "za") {

                activeSort = filter;

            }

            // =============================================
            // FILTER
            // =============================================

            else {

                activeFilter = filter;

            }


            // =============================================
            // ACTIVE BUTTON
            // =============================================

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");


            applyAll();

        });

    });

}


// =========================================================
// APPLY SEARCH + FILTER + SORT
// =========================================================

function applyAll() {

    let result = [...mahasiswa];


    // =====================================================
    // SEARCH
    // =====================================================

    const keyword = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";


    if (keyword !== "") {

        result = result.filter(student => {

            const nama = student.nama.toLowerCase();

            const panggilan = student.panggilan.toLowerCase();

            return (
                nama.includes(keyword) ||
                panggilan.includes(keyword)
            );

        });

    }


    // =====================================================
    // FILTER GENDER / PENGURUS
    // =====================================================

    if (activeFilter === "male") {

        result = result.filter(
            student => student.gender === "male"
        );

    }


    if (activeFilter === "female") {

        result = result.filter(
            student => student.gender === "female"
        );

    }


    if (activeFilter === "pengurus") {

        result = result.filter(
            student => student.pengurus === true
        );

    }


    // =====================================================
    // SORTING
    // =====================================================

    if (activeSort === "az") {

        result.sort((a, b) => {

            return a.nama.localeCompare(
                b.nama,
                "id",
                {
                    sensitivity: "base"
                }
            );

        });

    }


    if (activeSort === "za") {

        result.sort((a, b) => {

            return b.nama.localeCompare(
                a.nama,
                "id",
                {
                    sensitivity: "base"
                }
            );

        });

    }


    // =====================================================
    // RENDER
    // =====================================================

    renderMahasiswa(result);

    updateStatistic(result);

}


// =========================================================
// RENDER CARD
// =========================================================

function renderMahasiswa(data) {

    if (!studentGrid) return;


    studentGrid.innerHTML = "";


    // =====================================================
    // EMPTY STATE
    // =====================================================

    if (data.length === 0) {

        if (emptyState) {

            emptyState.classList.remove("hidden");

        }

        return;

    }


    if (emptyState) {

        emptyState.classList.add("hidden");

    }


    // =====================================================
    // CARD
    // =====================================================

    data.forEach((item, index) => {


        const badgePengurus = item.pengurus
    ? `<span class="badge-pengurus">★</span>`
    : "";

        const badgeOut = mahasiswaOut.includes(item.nama)
    ? `<span class="badge-out">OUT</span>`
    : "";


        const card = document.createElement("div");


        card.className = "student-card reveal";


        card.style.animationDelay =
            `${index * 70}ms`;


        card.innerHTML = `

            <div class="student-image">

                <img
                    src="${item.foto}"
                    alt="${item.nama}"
                    loading="lazy">

                <div class="image-overlay"></div>

            ${badgePengurus}
            ${badgeOut} 

            </div>

            <div class="student-content">

                <h3>${item.nama}</h3>

                <p>(${item.panggilan})</p>

                <div class="social">

                    <a
                        href="${item.instagram}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="instagram">

                        <i class="fa-brands fa-instagram"></i>

                    </a>

                    <a
                        href="${item.linkedin}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="linkedin">

                        <i class="fa-brands fa-linkedin-in"></i>

                    </a>

                </div>

            </div>

        `;


        // =================================================
        // SOCIAL LINK
        // MENCEGAH EVENT CARD MENGGANGGU LINK
        // =================================================

        card
            .querySelectorAll(".student-social a")
            .forEach(link => {

                link.addEventListener("click", event => {

                    event.stopPropagation();

                });

            });


        studentGrid.appendChild(card);


        // =================================================
        // REVEAL
        // =================================================

        requestAnimationFrame(() => {

            setTimeout(() => {

                card.classList.add("in-view");

            }, index * 70);

        });

    });

}


// =========================================================
// STATISTIK
// =========================================================

function updateStatistic(data) {


    const total = data.length;


    const male = data.filter(
        student => student.gender === "male"
    ).length;


    const female = data.filter(
        student => student.gender === "female"
    ).length;


    const pengurus = data.filter(
        student => student.pengurus === true
    ).length;


    animateNumber(totalCount, total);

    animateNumber(maleCount, male);

    animateNumber(femaleCount, female);

    animateNumber(pengurusCount, pengurus);

}


// =========================================================
// ANIMASI ANGKA
// =========================================================

function animateNumber(element, target) {

    if (!element) return;


    // Hentikan animasi sebelumnya
    if (element._countTimer) {

        clearInterval(element._countTimer);

    }


    let current = parseInt(element.textContent, 10);


    if (isNaN(current)) {

        current = 0;

    }


    const difference = target - current;


    if (difference === 0) {

        element.textContent = target;

        return;

    }


    const step = Math.max(
        1,
        Math.ceil(Math.abs(difference) / 15)
    );


    element._countTimer = setInterval(() => {


        if (current < target) {

            current += step;

            if (current >= target) {

                current = target;

                clearInterval(element._countTimer);

            }

        }


        else if (current > target) {

            current -= step;

            if (current <= target) {

                current = target;

                clearInterval(element._countTimer);

            }

        }


        element.textContent = current;


    }, 30);

}
