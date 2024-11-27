<template>
    <div class="bg-custom-black h-screen flex items-center justify-center text-gray custom-scroll p-6">
        <Loader :isLoading="isLoading" />
        <div v-if="!isLoading" class="projects-archive container flex flex-col mx-auto p-2 h-full">
            <div @click="navigateTo('/')" class="mt-2 mb-5 text-md text-gray cursor-pointer">⟵ Retour</div>
            <h1 class="text-2xl font-bold text-custom-green mb-6">Mes créations</h1>

            <!-- Grille de projets responsive -->
            <div class="projects-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <!-- Carte de projet -->
                <div class="project-card bg-gray-900 p-4 rounded-lg flex flex-col items-center text-center">
                    <div class="project-thumbnail w-full h-32 mb-4">
                        <img src="/b.png" alt="Miniature du projet"
                            class="object-fit w-auto h-full mx-auto rounded-lg ">
                    </div>
                    <h2 class="text-sm font-semibold text-custom-green">Mon logo · Projet personnel</h2>
                    <div class="project-links mt-4 flex gap-4">
                        <a href="/b.png" target="_blank" class="submit-btn">➤ Voir</a>
                    </div>
                </div>

                <div class="project-card bg-gray-900 p-4 rounded-lg flex flex-col items-center text-center">
                    <div class="project-thumbnail w-full h-32 mb-4">
                        <img src="/observaterra.gif" alt="Miniature du projet"
                            class="object-fit w-auto h-full mx-auto rounded-lg ">
                    </div>
                    <h2 class="text-sm font-semibold text-custom-green">Logo et animation ObservaTerra (L'Observatoire des Dynamiques Foncières, Agraires et Forestières de Côte d'Ivoire)· Freelance</h2>
                    <div class="project-links mt-4 flex gap-4">
                        <a href="/observaterra.gif" target="_blank" class="submit-btn">➤ Voir</a>
                    </div>
                </div>

                <div class="project-card bg-gray-900 p-4 rounded-lg flex flex-col items-center text-center">
                    <div class="project-thumbnail w-full h-32 mb-4">
                        <img src="/observaterra_pattern.png" alt="Miniature du projet"
                            class="object-fit w-auto h-full mx-auto rounded-lg ">
                    </div>
                    <h2 class="text-sm font-semibold text-custom-green">Motif ObservaTerra (L'Observatoire des Dynamiques Foncières, Agraires et Forestières de Côte d'Ivoire)· Freelance</h2>
                    <div class="project-links mt-4 flex gap-4">
                        <a href="/observaterra_pattern.png" target="_blank" class="submit-btn">➤ Voir</a>
                    </div>
                </div>

                <div class="project-card bg-gray-900 p-4 rounded-lg flex flex-col items-center text-center">
                    <div class="project-thumbnail w-full h-32 mb-4">
                        <video src="/digilink.mp4" controls autoplay loop muted
                            class="object-fit w-auto h-full mx-auto rounded-lg">
                            Votre navigateur ne supporte pas la vidéo.
                        </video>

                    </div>
                    <h2 class="text-sm font-semibold text-custom-green">Animation de logo · DIGILINK</h2>
                    <div class="project-links mt-4 flex gap-4">
                        <a href="/digilink.mp4" target="_blank" class="submit-btn">➤ Voir</a>
                    </div>
                </div>

                <div class="project-card bg-gray-900 p-4 rounded-lg flex flex-col items-center text-center">
                    <div class="project-thumbnail w-full h-32 mb-4">
                        <img src="/logo pfe.png" alt="Miniature du projet"
                            class="object-fit w-auto h-full mx-auto rounded-lg ">
                    </div>
                    <h2 class="text-sm font-semibold text-custom-green">Logo · DIGILINK</h2>
                    <div class="project-links mt-4 flex gap-4">
                        <a href="/logo pfe.png" target="_blank" class="submit-btn">➤ Voir</a>
                    </div>
                </div>

                <div class="project-card bg-gray-900 p-4 rounded-lg flex flex-col items-center text-center">
                    <div class="project-thumbnail w-full h-32 mb-4">
                        <img src="/bugster.png" alt="Miniature du projet"
                            class="object-fit w-auto h-full mx-auto rounded-lg ">
                    </div>
                    <h2 class="text-sm font-semibold text-custom-green">Logo Bugster · Projet personnel</h2>
                    <div class="project-links mt-4 flex gap-4">
                        <a href="/bugster.png" target="_blank" class="submit-btn">➤ Voir</a>
                    </div>
                </div>

                <div class="project-card bg-gray-900 p-4 rounded-lg flex flex-col items-center text-center">
                    <div class="project-thumbnail w-full h-32 mb-4">
                        <img src="/logo Jerems.jpg" alt="Miniature du projet"
                            class="object-fit w-auto h-full mx-auto rounded-lg ">
                    </div>
                    <h2 class="text-sm font-semibold text-custom-green">Logo Bugster · Projet personnel</h2>
                    <div class="project-links mt-4 flex gap-4">
                        <a href="/logo Jerems.jpg" target="_blank" class="submit-btn">➤ Voir</a>
                    </div>
                </div>




            </div>
            <!-- ma signature -->
            <p class="mt-6 mx-auto p-5 text-justify text-xs text-gray">
                <i class="fas fa-code"></i> and <i class="fas fa-palette"></i> with ❤️ by
                <strong>Cypher1305</strong>
            </p>
            <!-- ma signature -->
        </div>
    </div>
</template>

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
