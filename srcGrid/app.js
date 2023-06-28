let allGridItems = [...document.getElementsByClassName("grid-item")];
let popupBg = document.getElementById("popup-bg");
let popupImg = document.getElementById("popup-img");

const openPopup = (e) => {
  let gridItemClicked = e.target.closest(".grid-item");
  let clickedImageName = gridItemClicked.id;
  popupBg.classList.add("active");
  popupImg.src = `./assets/img/${clickedImageName}.jpg`;
};

const closePopup = () => {
  popupBg.classList.remove("active");
};

allGridItems.forEach((el) => el.addEventListener("click", openPopup));

popupImg.addEventListener("click", (e) => e.stopPropagation());
popupBg.addEventListener("click", closePopup);

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".grid-img");
  let currentIndex = 0;


  function showPopup(imageIndex) {
    const popupBg = document.getElementById("popup-bg");
    const popupContent = document.getElementById("popup-content");
    const popupImg = document.getElementById("popup-img");
    const closeBtn = document.getElementById("popup-close");

    // Afficher l'image en plein écran
    popupImg.src = images[imageIndex].src;
    popupBg.style.display = "flex";

    // Fermer l'image en plein écran lors du clic sur le bouton de fermeture
    closeBtn.addEventListener("click", function () {
      popupBg.style.display = "none";
    });
  }

  // Fonction pour passer à l'image précédente
  function goToPreviousImage() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    showPopup(currentIndex);
  }

  // Fonction pour passer à l'image suivante
  function goToNextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showPopup(currentIndex);
  }

  // Écouter les événements de touche
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 37) { // Flèche gauche
      goToPreviousImage();
    } else if (event.keyCode === 39) { // Flèche droite
      goToNextImage();
    }
  });

  // Écouter les clics sur les images
  images.forEach(function (image, index) {
    image.addEventListener("click", function () {
      showPopup(index);
    });
  });
});
