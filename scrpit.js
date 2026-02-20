console.log('Portfolio loaded');

function openContact() {
  document.getElementById("contactPopup").style.display = "flex";
}

function closeContact() {
  document.getElementById("contactPopup").style.display = "none";
}

function sendEmail(){
  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const mail =
    `mailto:adityanavale@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      "Name: " + name + "\n\n" + message
    )}`;

  window.location.href = mail;
}


/* ================= CERTIFICATE IMAGE POPUP ================= */

const modal = document.getElementById("certModal");
const preview = document.getElementById("certPreview");
const closeBtn = document.querySelector(".close-modal");

/* open preview */
document.querySelectorAll(".cert-card img").forEach(img => {
  img.addEventListener("click", () => {
    preview.src = img.src;
    modal.style.display = "flex";
  });
});

/* close preview */
closeBtn.onclick = () => modal.style.display = "none";

/* click outside to close */
modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

