<template>
  <div id="app">
    <router-view></router-view> <!-- C'est ici que le composant actif sera rendu -->
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // Créez l'élément de curseur personnalisé
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    // Suivez le mouvement de la souris
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    // Ajoutez un effet de loupe au survol des éléments avec la classe .hover-effect
    document.querySelectorAll(".hover-effect").forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.classList.add("zoomed-element"); // Ajoute l'effet de loupe
      });
      element.addEventListener("mouseout", () => {
        element.classList.remove("zoomed-element"); // Retire l'effet de loupe
      });
    });
  },
};
</script>