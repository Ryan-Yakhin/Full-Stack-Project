export const services = [
  {
    title: "Bangun Baru",
    desc: "Pembangunan rumah tinggal, ruko, kantor, gudang, hingga bangunan komersial dengan standar kualitas terukur.",
    image: "https://plus.unsplash.com/premium_photo-1667509248428-658d1be12141?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Renovasi",
    desc: "Renovasi rumah, ruko, kantor, dapur, kamar mandi, penambahan ruang, sampai renovasi total.",
    image: "https://plus.unsplash.com/premium_photo-1683141037836-e5a26067194d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2UlMjByZW5vdmF0aW9ufGVufDB8fDB8fHww",
  },
  {
    title: "Interior",
    desc: "Pekerjaan plafon, molding, dan detail interior yang menyatu dengan konsep bangunan.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Desain",
    desc: "Desain arsitektur yang mencerminkan kebutuhan dan gaya hidup pemilik bangunan.",
    image: "https://plus.unsplash.com/premium_photo-1682145930966-712ce7177919?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGFyY2l0ZWN0dXJlJTIwZGVzaWdufGVufDB8fDB8fHww",
  },
];

export const whyUs = [
  { title: "Profesional & Berpengalaman", desc: "Dikerjakan team berpengalaman dengan standar kerja yang terukur di tiap tahap." },
  { title: "Harga Transparan", desc: "RAB disusun jelas sejak awal, tanpa biaya tersembunyi di tengah proyek." },
  { title: "Tepat Waktu", desc: "Jadwal proyek dipegang ketat tanpa mengorbankan kualitas pengerjaan." },
  { title: "Konsultasi Gratis", desc: "Survei lokasi dan penawaran awal tanpa biaya, sebelum kamu memutuskan apapun." },
];

export const testimonials = [
  { name: "Pak Dodi", location: "Bekasi", text: "Bangunan sesuai ekspektasi, dengan lahan terbatas tetap menghasilkan desain yang sesuai dengan keinginan saya." },
  { name: "Pak Hilal", location: "Jakarta", text: "Desain bisa mengikuti keinginan saya sebagai klien, dan saya puas dengan hasilnya." },
  { name: "Bu Dwi", location: "Tangerang", text: "Pengerjaan tepat waktu, komunikatif, dan fast response setiap kalo ada komplain." },
];

export const serviceAreas = [
  "Jakarta", "Bogor", "Depok", "Bekasi", "Tangerang"
];

export const articles = [
  { title: "Panduan Menghitung Biaya Bangun Rumah", date: "25 Juni 2026", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600" },
  { title: "Tips Memilih Jasa Renovasi yang Terpercaya", date: "25 Juni 2026", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600" },
];

export const serviceDetails = {
  "bangun-baru": {
    title: "Bangun Baru",
    tagline: "Dari bongkar rumah lama hingga menjadi bangunan siap huni",
    heroImage: "https://plus.unsplash.com/premium_photo-1667509248428-658d1be12141?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Kami menangani pembangunan rumah tinggal, ruko, kantor, gudang, hingga bangunan komersial dari nol — mulai dari perencanaan RAB, desain, hingga serah terima kunci.",
    scope: ["Rumah Tinggal", "Ruko/Toko", "Gedung Perkantoran", "Kos/Kontrakan", "Gudang/Bangunan Industri"],
    process: [
      { step: "Konsultasi & Survei", desc: "Diskusi kebutuhan dan survei lokasi tanpa biaya." },
      { step: "Desain & RAB", desc: "Penyusunan desain dan rencana anggaran biaya secara rinci." },
      { step: "Pengerjaan", desc: "Eksekusi proyek sesuai jadwal dengan pengawasan berkala." },
      { step: "Serah Terima", desc: "Pemeriksaan akhir dan serah terima kunci ke pemilik." },
    ],
  },
  "renovasi": {
    title: "Renovasi",
    tagline: "Ubah bangunan lama menjadi lebih fungsional dan bernilai",
    heroImage: "https://plus.unsplash.com/premium_photo-1683141037836-e5a26067194d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2UlMjByZW5vdmF0aW9ufGVufDB8fDB8fHww",
    description:
      "Layanan renovasi rumah, ruko, kantor, dapur, kamar mandi, penambahan ruang, hingga renovasi total — disesuaikan dengan kondisi bangunan eksisting.",
    scope: ["Renovasi Rumah", "Renovasi Dapur", "Renovasi Kamar Mandi", "Penambahan Ruang/Lantai", "Renovasi Atap & Plafon"],
    process: [
      { step: "Asesmen Bangunan", desc: "Pemeriksaan kondisi struktur dan kebutuhan renovasi." },
      { step: "Rencana Renovasi", desc: "Penyusunan desain dan estimasi biaya sesuai skala pekerjaan." },
      { step: "Pengerjaan Bertahap", desc: "Renovasi dilakukan dengan meminimalkan gangguan aktivitas penghuni." },
      { step: "Quality Check", desc: "Pemeriksaan akhir memastikan hasil sesuai kesepakatan." },
    ],
  },
  "interior": {
    title: "Interior",
    tagline: "Detail interior yang menyatu dengan konsep bangunan",
    heroImage: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    description:
      "Pekerjaan plafon, molding, dan detail interior lain yang dikerjakan menyatu dengan struktur dan gaya bangunan Anda.",
    scope: ["Plafon & Molding", "Interior Ruang Tamu", "Interior Kamar", "Partisi Ruangan", "Built-in Furniture"],
    process: [
      { step: "Konsultasi Konsep", desc: "Diskusi gaya dan kebutuhan fungsional ruangan." },
      { step: "Desain Detail", desc: "Penyusunan gambar kerja dan material yang akan dipakai." },
      { step: "Produksi & Instalasi", desc: "Pengerjaan di lokasi dengan finishing rapi." },
      { step: "Serah Terima", desc: "Pemeriksaan hasil akhir bersama klien." },
    ],
  },
  "desain": {
    title: "Desain",
    tagline: "Desain yang mencerminkan kebutuhan dan gaya hidup Anda",
    heroImage: "https://plus.unsplash.com/premium_photo-1682145930966-712ce7177919?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGFyY2l0ZWN0dXJlJTIwZGVzaWdufGVufDB8fDB8fHww",
    description:
      "Kami menyusun desain arsitektur yang mempertimbangkan fungsi, anggaran, dan karakter personal pemilik bangunan.",
    scope: ["Desain Rumah Tinggal", "Desain Fasad", "Desain Interior", "Desain Ruang Komersial", "Konsultasi Tata Ruang"],
    process: [
      { step: "Brief & Referensi", desc: "Menggali kebutuhan, gaya, dan referensi visual dari klien." },
      { step: "Konsep Desain", desc: "Penyusunan konsep awal dan sketsa tata ruang." },
      { step: "Revisi Desain", desc: "Penyempurnaan desain berdasarkan masukan klien." },
      { step: "Gambar Kerja Final", desc: "Penyerahan gambar kerja siap digunakan untuk pembangunan." },
    ],
  },
};