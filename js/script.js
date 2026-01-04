console.log("Website media pembelajaran aktif");

// Tab menu
const links = document.querySelectorAll(".tab-link");
const contents = document.querySelectorAll(".tab-content");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("data-target");

    // Hilangkan class active dari semua konten
    contents.forEach((c) => c.classList.remove("active"));

    const activeContent = document.getElementById(target);
    if (activeContent) {
      // Tambahkan class active
      activeContent.classList.add("active");

      // Tunggu transisi selesai sebelum scroll
      activeContent.addEventListener("transitionend", function handler() {
        activeContent.scrollIntoView({ behavior: "smooth" });
        // Hapus listener agar tidak terpanggil berulang
        activeContent.removeEventListener("transitionend", handler);
      });
    }
  });
});
