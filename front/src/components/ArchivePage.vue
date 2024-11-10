<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Loader from '../components/Loader.vue'; // Importer le loader

const router = useRouter();
const isLoading = ref(true);

const navigateTo = (route) => {
    router.push(route);
};

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 5000); // Simule le chargement pendant 2 secondes
});
</script>

<template>
    <div class="bg-custom-black h-full p-6 flex items-center justify-center text-gray custom-scroll">
        <Loader :isLoading="isLoading" />
        <div v-if="!isLoading" class="projects-archive container flex flex-col mt-[300px] mx-auto">
            <div @click="navigateTo('/')" class="mb-9 text-md text-gray cursor-pointer">⟵ Retour</div>
            <h1 class="text-2xl font-bold text-custom-green mb-6">Projets Réalisés</h1>

            <!-- Grille de projets responsive -->
            <div class="projects-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <!-- Carte de projet -->
                <div
                    class="project-card bg-gray-900 p-4 rounded-lg flex flex-col justify-center items-center text-center">
                    <div class="project-thumbnail w-full h-32 mb-4 bg-gray-900">
                        <img src="/bugster.png" alt="Miniature du projet"
                            class="object-fit w-auto h-full rounded-lg mx-auto">
                    </div>
                    <h2 class="text-lg font-semibold text-custom-green">BUGSTER · Projet personnel</h2>
                    <p class="text-sm text-gray mt-2">
                        Application mobile d'apprentissage par projets, jeux et challenges, en programmation et
                        algorithmes.
                    </p>
                    <div class="stack mt-3 flex flex-wrap justify-center gap-3">
                        <a href="https://nodejs.org/en/docs" target="_blank" class="tech-icon"><i
                                class="fab fa-node-js"></i></a>
                        <a href="https://react.dev" target="_blank" class="tech-icon"><i class="fab fa-react"></i></a>
                        <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank"
                            class="tech-icon"><i class="fab fa-js"></i></a>
                        <a href="https://docs.oracle.com/en/java" target="_blank" class="tech-icon"><i
                                class="fab fa-java"></i></a>
                        <a href="https://sass-lang.com" target="_blank" class="tech-icon"><i
                                class="fab fa-sass"></i></a>
                    </div>
                    <div class="project-links mt-4 flex gap-4">
                        <a href="#" target="_blank" class="submit-btn">➤ Visiter</a>
                        <a href="https://github.com/Cypher1305" target="_blank" class="submit-btn">Code source</a>
                    </div>
                </div>

                <!-- Carte de projet -->
                <div
                    class="project-card bg-gray-900 p-4 rounded-lg flex flex-col justify-center items-center text-center">
                    <div class="project-thumbnail w-full h-32 mb-4 bg-gray-900">
                        <img src="/bugster.png" alt="Miniature du projet"
                            class="object-fit w-auto h-full rounded-lg mx-auto">
                    </div>
                    <h2 class="text-lg font-semibold text-custom-green">BUGSTER · Projet personnel</h2>
                    <p class="text-sm text-gray mt-2">
                        Application mobile d'apprentissage par projets, jeux et challenges, en programmation et
                        algorithmes.
                    </p>
                    <div class="stack mt-3 flex flex-wrap justify-center gap-3">
                        <a href="https://nodejs.org/en/docs" target="_blank" class="tech-icon"><i
                                class="fab fa-node-js"></i></a>
                        <a href="https://react.dev" target="_blank" class="tech-icon"><i class="fab fa-react"></i></a>
                        <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank"
                            class="tech-icon"><i class="fab fa-js"></i></a>
                        <a href="https://docs.oracle.com/en/java" target="_blank" class="tech-icon"><i
                                class="fab fa-java"></i></a>
                        <a href="https://sass-lang.com" target="_blank" class="tech-icon"><i
                                class="fab fa-sass"></i></a>
                    </div>
                    <div class="project-links mt-4 flex gap-4">
                        <a href="#" target="_blank" class="submit-btn">➤ Visiter</a>
                        <a href="https://github.com/Cypher1305" target="_blank" class="submit-btn">Code source</a>
                    </div>
                </div>

                <!-- Carte de projet -->
                <div
                    class="project-card bg-gray-900 p-4 rounded-lg flex flex-col justify-center items-center text-center">
                    <div class="project-thumbnail w-full h-32 mb-4 bg-gray-900">
                        <img src="/bugster.png" alt="Miniature du projet"
                            class="object-fit w-auto h-full rounded-lg mx-auto">
                    </div>
                    <h2 class="text-lg font-semibold text-custom-green">BUGSTER · Projet personnel</h2>
                    <p class="text-sm text-gray mt-2">
                        Application mobile d'apprentissage par projets, jeux et challenges, en programmation et
                        algorithmes.
                    </p>
                    <div class="stack mt-3 flex flex-wrap justify-center gap-3">
                        <a href="https://nodejs.org/en/docs" target="_blank" class="tech-icon"><i
                                class="fab fa-node-js"></i></a>
                        <a href="https://react.dev" target="_blank" class="tech-icon"><i class="fab fa-react"></i></a>
                        <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank"
                            class="tech-icon"><i class="fab fa-js"></i></a>
                        <a href="https://docs.oracle.com/en/java" target="_blank" class="tech-icon"><i
                                class="fab fa-java"></i></a>
                        <a href="https://sass-lang.com" target="_blank" class="tech-icon"><i
                                class="fab fa-sass"></i></a>
                    </div>
                    <div class="project-links mt-4 flex gap-4">
                        <a href="#" target="_blank" class="submit-btn">➤ Visiter</a>
                        <a href="https://github.com/Cypher1305" target="_blank" class="submit-btn">Code source</a>
                    </div>
                </div>

                <!-- Carte de projet -->
                <div
                    class="project-card bg-gray-900 p-4 rounded-lg flex flex-col justify-center items-center text-center">
                    <div class="project-thumbnail w-full h-32 mb-4 bg-gray-900">
                        <img src="/bugster.png" alt="Miniature du projet"
                            class="object-fit w-auto h-full rounded-lg mx-auto">
                    </div>
                    <h2 class="text-lg font-semibold text-custom-green">BUGSTER · Projet personnel</h2>
                    <p class="text-sm text-gray mt-2">
                        Application mobile d'apprentissage par projets, jeux et challenges, en programmation et
                        algorithmes.
                    </p>
                    <div class="stack mt-3 flex flex-wrap justify-center gap-3">
                        <a href="https://nodejs.org/en/docs" target="_blank" class="tech-icon"><i
                                class="fab fa-node-js"></i></a>
                        <a href="https://react.dev" target="_blank" class="tech-icon"><i class="fab fa-react"></i></a>
                        <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank"
                            class="tech-icon"><i class="fab fa-js"></i></a>
                        <a href="https://docs.oracle.com/en/java" target="_blank" class="tech-icon"><i
                                class="fab fa-java"></i></a>
                        <a href="https://sass-lang.com" target="_blank" class="tech-icon"><i
                                class="fab fa-sass"></i></a>
                    </div>
                    <div class="project-links mt-4 flex gap-4">
                        <a href="#" target="_blank" class="submit-btn">➤ Visiter</a>
                        <a href="https://github.com/Cypher1305" target="_blank" class="submit-btn">Code source</a>
                    </div>
                </div>

                <!-- Carte de projet -->
                <div
                    class="project-card bg-gray-900 p-4 rounded-lg flex flex-col justify-center items-center text-center">
                    <div class="project-thumbnail w-full h-32 mb-4 bg-gray-900">
                        <img src="/bugster.png" alt="Miniature du projet"
                            class="object-fit w-auto h-full rounded-lg mx-auto">
                    </div>
                    <h2 class="text-lg font-semibold text-custom-green">BUGSTER · Projet personnel</h2>
                    <p class="text-sm text-gray mt-2">
                        Application mobile d'apprentissage par projets, jeux et challenges, en programmation et
                        algorithmes.
                    </p>
                    <div class="stack mt-3 flex flex-wrap justify-center gap-3">
                        <a href="https://nodejs.org/en/docs" target="_blank" class="tech-icon"><i
                                class="fab fa-node-js"></i></a>
                        <a href="https://react.dev" target="_blank" class="tech-icon"><i class="fab fa-react"></i></a>
                        <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank"
                            class="tech-icon"><i class="fab fa-js"></i></a>
                        <a href="https://docs.oracle.com/en/java" target="_blank" class="tech-icon"><i
                                class="fab fa-java"></i></a>
                        <a href="https://sass-lang.com" target="_blank" class="tech-icon"><i
                                class="fab fa-sass"></i></a>
                    </div>
                    <div class="project-links mt-4 flex gap-4">
                        <a href="#" target="_blank" class="submit-btn">➤ Visiter</a>
                        <a href="https://github.com/Cypher1305" target="_blank" class="submit-btn">Code source</a>
                    </div>
                </div>

                <!-- Carte de projet -->
                <div
                    class="project-card bg-gray-900 p-4 rounded-lg flex flex-col justify-center items-center text-center">
                    <div class="project-thumbnail w-full h-32 mb-4 bg-gray-900">
                        <img src="/bugster.png" alt="Miniature du projet"
                            class="object-fit w-auto h-full rounded-lg mx-auto">
                    </div>
                    <h2 class="text-lg font-semibold text-custom-green">BUGSTER · Projet personnel</h2>
                    <p class="text-sm text-gray mt-2">
                        Application mobile d'apprentissage par projets, jeux et challenges, en programmation et
                        algorithmes.
                    </p>
                    <div class="stack mt-3 flex flex-wrap justify-center gap-3">
                        <a href="https://nodejs.org/en/docs" target="_blank" class="tech-icon"><i
                                class="fab fa-node-js"></i></a>
                        <a href="https://react.dev" target="_blank" class="tech-icon"><i class="fab fa-react"></i></a>
                        <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank"
                            class="tech-icon"><i class="fab fa-js"></i></a>
                        <a href="https://docs.oracle.com/en/java" target="_blank" class="tech-icon"><i
                                class="fab fa-java"></i></a>
                        <a href="https://sass-lang.com" target="_blank" class="tech-icon"><i
                                class="fab fa-sass"></i></a>
                    </div>
                    <div class="project-links mt-4 flex gap-4">
                        <a href="#" target="_blank" class="submit-btn">➤ Visiter</a>
                        <a href="https://github.com/Cypher1305" target="_blank" class="submit-btn">Code source</a>
                    </div>
                </div>






               

                <!-- Répétez les cartes de projet ci-dessus -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-scroll {
    height: 100vh;
    /* Hauteur de la vue */
    overflow-y: scroll;
    scrollbar-width: none;
    /* Pour Firefox */
}

.custom-scroll::-webkit-scrollbar {
    display: none;
    /* Pour Chrome, Safari et Edge */
}

/* Ajoutez ici le style pour la grille de projets */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
}

.project-card {
    background-color: #00000033;
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #ffffff;
    transition: all 0.3s ease;
}

.project-card:hover {
    border: 1px solid rgb(145, 248, 214);
    transform: scale(1.1);
}

.submit-btn {
    padding: 0.5rem 1rem;
    background-color: #1f406838;
    color: white;
    border-radius: 0.25rem;
    text-decoration: none;
}

.submit-btn:hover {
    background-color: #16244750;
}
</style>
