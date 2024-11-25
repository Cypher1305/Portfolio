<template>
    <div class="flex flex-col lg:flex-row h-full bg-custom-black text-custom-green custom-scroll">
        <!-- Typing text container, affiché jusqu'à la fin de l'animation -->
        <div v-show="!isVisible" ref="container"
            class="flex items-center justify-center w-full h-screen text-xl font-mono fade-out">
            <span ref="typingText"></span>
            <span class="cursor">|</span>
        </div>

        <!-- Contenu principal, affiché après l'animation -->
        <div v-if="isVisible" class="flex flex-col lg:flex-row w-full text-xl font-inter">
            <header
                class="w-full lg:w-[38%] lg:h-screen lg:fixed bg-custom-black border-r border-blue p-1 font-inter flex flex-col items-center justify-center">
                <img :src="profileImage" alt="Photo" class="rounded-full w-40 h-30 mt-1 photo" />
                <div class="w-[80%] mx-auto flex flex-col ">
                    <h1 class="text-3xl text-white font-inter font-bold mt-2 text-left">YAO Kossia Bénédicte</h1>
                    <h4 class="text-2xl text-white font-inter text-left">Développeur Full Stack</h4>
                    <p class="text-base text-gray font-inter mb-2 text-center text-justify">
                        Je conçois des sites et des applications web/mobiles, ainsi que des projets pour répondre aux
                        défis actuels.
                    </p>
                    <div @click="navigateTo('/Message')" class=" code_button text-center"><span>Message</span></div>

                    <!-- Navigation -->
                    <nav class="mt-2 font-inter">
                        <ul class="space-y-1">
                            <li><a href="#about"
                                    class="tab">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspÀ
                                    PROPOS</a></li>
                            <li><a href="#experiences"
                                    class="tab">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspEXPÉRIENCES</a>
                            </li>
                            <li><a href="#projets"
                                    class="tab">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspPROJETS</a>
                            </li>
                            <li><a href="#skills"
                                    class="tab">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspCOMPÉTENCES</a>
                            </li>
                        </ul>
                    </nav>

                    <div class="mt-2 social-icons">
                        <a href="https://github.com/Cypher1305" target="_blank" class="social-icon">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/Cypher1305" target="_blank" class="social-icon">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://codepen.io/Cypher1305" target="_blank" class="social-icon">
                            <i class="fab fa-codepen"></i>
                        </a>
                    </div>

                </div>
            </header>


            <section class="lg:ml-[40%] mx-auto p-8 text-white flex flex-col scrollbar-hidden">
                <div id="about">
                    <h2 class="text-2xl mb-2">À PROPOS</h2>
                    <p class="mt-5 text-justify text-base text-gray">Créative, autodidacte et dotée d’un excellent
                        relationnel, je suis passionné par les technologies et le digital. Titulaire d’une licence en
                        Technologies Web et Images Numériques (TWIN) de l’École Supérieure Africaine des Technologies de
                        l'Information et de la Communication (ESATIC), je poursuis actuellement un Master (MSc BIHAR ou
                        Master of Science BIHAR (Big Data
                        Intelligence for Human Augmented Reality)) à
                        l'École Supérieure des Technologies Industrielles Avancées (ESTIA), en partenariat avec le
                        campus connecté de l'ESATIC. Mon parcours est axé sur le perfectionnement de mes compétences en
                        technologies de l'information, avec un intérêt particulier pour l'intelligence artificielle et
                        ses applications pratiques.</p>
                </div>
                <div id="experiences" class="mt-12">
                    <h2 class="text-2xl mb-2">EXPÉRIENCES</h2>

                    <!-- Expérience 1 -->
                    <div class="experience-item flex flex-row mt-5 text-custom-green font-inter">
                        <p class="experience-date text-base w-[150px]">2023-2024</p>
                        <div class="experience-details ml-6 flex flex-col">
                            <h1 class="text-lg font-semibold">Développeur Full Stack JS · KY’s CONSULTING</h1>
                            <p class="text-base text-gray text-justify">
                                Développement d'applications web dynamiques pour la gestion et le developpement des
                                réseaux professionnel pour les petites entreprises.
                            </p>
                            <div class="stack mt-2 flex flex-wrap gap-3">
                                <a href="https://nodejs.org/en/docs" target="_blank" class="tech-icon"><i
                                        class="fab fa-node-js"></i></a>
                                <a href="https://react.dev" target="_blank" class="tech-icon"><i
                                        class="fab fa-react"></i></a>
                                <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank"
                                    class="tech-icon"><i class="fab fa-js"></i></a>
                                <a href="https://docs.oracle.com/en/java" target="_blank" class="tech-icon"><i
                                        class="fab fa-java"></i></a>
                                <a href="https://sass-lang.com" target="_blank" class="tech-icon"><i
                                        class="fab fa-sass"></i></a>
                                <a href="https://docs.aws.amazon.com" target="_blank" class="tech-icon"><i
                                        class="fab fa-aws"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Expérience 2 -->
                    <div class="experience-item flex flex-row mt-5 text-custom-green font-inter">
                        <p class="experience-date text-base w-[100px]">2022-2023</p>
                        <div class="experience-details ml-6 flex flex-col">
                            <h1 class="text-lg font-semibold">Designer UI/UX · Freelance</h1>
                            <p class="text-base text-gray text-justify">
                                Conception d’interfaces utilisateur intuitives et esthétiques pour des applications web
                                et mobiles.
                            </p>
                            <div class="stack mt-2 flex flex-wrap gap-3">
                                <a href="https://www.figma.com" target="_blank" class="tech-icon"><i
                                        class="fab fa-figma"></i></a>
                                <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank"
                                    class="tech-icon"><i class="fab fa-js"></i></a>
                                <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank"
                                    class="tech-icon"><i class="fab fa-html5"></i></a>
                                <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank"
                                    class="tech-icon"><i class="fab fa-css3-alt"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Expérience 3 -->
                    <div class="experience-item flex flex-row mt-5 text-custom-green font-inter">
                        <p class="experience-date text-base w-[100px]">2021-2022</p>
                        <div class="experience-details ml-6 flex flex-col">
                            <h1 class="text-lg font-semibold">Développeur Front-End · Mplaces Africa</h1>
                            <p class="text-base text-gray text-justify">
                                Implémentation des designs à partir des maquettes et teste avant mise en production des
                                projets.
                            </p>
                            <div class="stack mt-2 flex flex-wrap gap-3 mb-5">
                                <a href="https://symfony.com/doc/current/index.html" target="_blank"
                                    class="tech-icon"><i class="fab fa-symfony"></i></a>
                                <a href="https://docs.docker.com" target="_blank" class="tech-icon"><i
                                        class="fab fa-docker"></i></a>
                                <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank"
                                    class="tech-icon"><i class="fab fa-css3-alt"></i></a>
                                <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank"
                                    class="tech-icon"><i class="fab fa-html5"></i></a>
                            </div>
                        </div>
                    </div>
                    <a href="/CV_YAO_Kossia_Benedicte.pdf" target="_blank"
                        class="mt-5 ml-2 text-lg font-semibold text-gray hover:text-custom-green hover:underline transition-colors duration-100 ease-in-out">➤
                        Voir mon CV complet</a>
                </div>

                <div id="projets" class="mt-12">
                    <h2 class="text-2xl mb-2">PROJETS</h2>

                    <!-- Projet 1 -->
                    <div class="experience-item flex flex-row mt-5 text-custom-green font-inter">
                        <div class="project-thumbnail w-30 h-30 mb-4 mt-4">
                            <img src="/b.png" alt="Miniature du projet" class="object-cover w-auto h-auto rounded-lg">
                        </div>
                        <div class="experience-details ml-6 flex flex-col">
                            <h1 class="text-lg font-semibold">Pain de Vie · Projet personnel</h1>
                            <p class="text-base text-gray text-justify">
                                Application mobile pour le partage quotidien de Versets Bibliques.
                            </p>
                            <div class="stack mt-2 flex flex-wrap gap-3">
                                <a href="https://nodejs.org/en/docs" target="_blank" class="tech-icon"><i
                                        class="fab fa-node-js"></i></a>
                                <a href="https://react.dev" target="_blank" class="tech-icon"><i
                                        class="fab fa-react"></i></a>
                                <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank"
                                    class="tech-icon"><i class="fab fa-js"></i></a>
                                <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank"
                                    class="tech-icon"><i class="fab fa-css3-alt"></i></a>
                                <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank"
                                    class="tech-icon"><i class="fab fa-html5"></i></a>
                            </div>
                            <div class="project-links flex gap-4">
                                <a href="#" @click.prevent="showPopup = true" target="_blank" class="submit-btn">➤
                                    Télécharger</a>
                            </div>
                        </div>
                    </div>

                    <!-- Projet 1 -->
                    <div class="experience-item flex flex-row mt-5 text-custom-green font-inter">
                        <div class="project-thumbnail w-32 h-32 mb-4 mt-5 ">
                            <img src="/b.png" alt="Miniature du projet" class="object-cover w-auto h-auto rounded-lg">
                        </div>
                        <div class="experience-details ml-6 flex flex-col">
                            <h1 class="text-lg font-semibold">BUGSTER · Projet personnel</h1>
                            <p class="text-base text-gray text-justify">
                                Application mobile d'apprentissage par projets, jeux et challenges, en programmation et
                                algorithmes.
                            </p>
                            <div class="stack mt-2 flex flex-wrap gap-3">
                                <a href="https://nodejs.org/en/docs" target="_blank" class="tech-icon"><i
                                        class="fab fa-node-js"></i></a>
                                <a href="https://react.dev" target="_blank" class="tech-icon"><i
                                        class="fab fa-react"></i></a>
                                <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank"
                                    class="tech-icon"><i class="fab fa-js"></i></a>
                                <a href="https://docs.oracle.com/en/java" target="_blank" class="tech-icon"><i
                                        class="fab fa-java"></i></a>
                            </div>
                            <div class="project-links flex gap-4">
                                <a href="#" @click.prevent="showPopup = true" target="_blank" class="submit-btn">➤
                                    Visiter</a>
                                <a href="https://github.com/Cypher1305" target="_blank" class="submit-btn">Code
                                    source</a>
                            </div>
                        </div>
                    </div>



                    <div @click="navigateTo('/archive')" target="_blank"
                        class="mt-9 ml-2 text-lg font-semibold text-gray hover:text-custom-green hover:underline transition-colors duration-100 ease-in-out">
                        ➤ Voir tous
                        mes projets</div>
                </div>

                <div id="projets" class="mt-12">
                    <h2 class="text-2xl mb-4">COMPÉTENCES</h2>
                    <div class="mb-4">
                        <div>
                            <span class="font-bold mx-5">Développement Web/Mobile</span>
                            <ul class="mt-3 mx-9">
                                <li class="flex gap-3">
                                    <span class="bg-custom-green rounded-full w-[5px]"></span>
                                    <p class="text-gray text-justify text-base">Je suis capable de gérer un projet de
                                        bout en bout
                                        c’est-à-dire, la conception d’interfaces utilisateur attrayantes, la gestion des
                                        bases de données, la logique métier et
                                        même le déploiement de l’application. Je maitrise plusieurs langages et
                                        Framework. J’ai une grande capacité d’apprentissage ce qui me permet de
                                        m’adapter rapidement à
                                        de nouveaux langages et Framework.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div>
                            <span class="font-bold mx-5">Gestion de projet</span>
                            <ul class="mt-3 mx-9">
                                <li class="flex gap-3">
                                    <span class="bg-custom-green rounded-full w-[5px]"></span>
                                    <p class="text-gray text-justify text-base">Je suis en mesure de piloter un projet
                                        de bout en
                                        bout, depuis la planification initiale jusqu’à la livraison finale. J’excelle
                                        dans la gestion des tâches, la coordination des équipes et la communication avec
                                        les parties prenantes. J’utilise la méthodologie agile et l'outil Trello pour
                                        organiser, prioriser et
                                        suivre efficacement les étapes du projet .</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="mb-4">
                        <div>
                            <span class="font-bold mx-5">UI/UX Design</span>
                            <ul class="mt-3 mx-9">
                                <li class="flex gap-3">
                                    <span class="bg-custom-green rounded-full w-[5px]"></span>
                                    <p class="text-gray text-justify text-base">Je maîtrise les principes fondamentaux
                                        du design
                                        centré
                                        utilisateur, la création de maquettes attrayantes et fonctionnelles, jusqu’aux
                                        prototypes interactifs.
                                        J’utilise des outils tels que Figma et Adobe XD.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="mb-4">
                        <div>
                            <span class="font-bold mx-5">Communication digitale</span>
                            <ul class="mt-3 mx-9">
                                <li class="flex gap-3">
                                    <span class="bg-custom-green rounded-full w-[5px]"></span>
                                    <p class="text-gray text-justify text-base">Je suis compétente dans l’élaboration et
                                        l’exécution de stratégies de communication digitale, incluant la création de
                                        contenus engageants, la gestion des réseaux sociaux et le suivi des
                                        performances. J’ai une expertise dans l’utilisation d’outils de gestion des
                                        campagnes publicitaires et de reporting.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div @click="navigateTo('/creas')" class="flex flex-col items-center mt-4 text-white" target='_blank'>
                    <i class="fas fa-palette mx-auto cursor-pointer"></i>
                    <span class="text-xs text-gray cursor-pointer">Plus? cliquez ici !</span>
                </div>

                <!-- Popup modal "Bientôt disponible" -->
                <div v-if="showPopup" class="modal-overlay" @click.self="showPopup = false">
                    <div class="modal-content">
                        <p class="bg-white font-semibold">Bientôt disponible!😉</p>
                        <button @click="showPopup = false" class="close-btn">Fermer</button>
                    </div>
                </div>

                <p class=" mt-5 text-center text-xs text-gray mx-auto ">Construit avec Vue.js et stylisé avec Tailwind
                    CSS, déployé grâce à Render.
                </p>
                <p class="mt-1 mx-auto mb-0 text-justify text-xs text-gray">
                    <i class="fas fa-code"></i> and <i class="fas fa-palette"></i> with ❤️ by
                    <strong>Cypher1305</strong>
                </p>



            </section>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue';
import profileImage from '@/assets/moi.jpg';
import DesignPage from './DesignPage.vue';
import ArchivePage from './ArchivePage.vue';
import Message from './Message.vue';
import { useRouter } from 'vue-router';

export default {
    name: 'LandingPage',
    setup() {
        const isVisible = ref(false);
        const container = ref(null);
        const typingText = ref(null);
        const texts = [
            "Bienvenue sur mon portfolio",
            "Chaque détail compte!",
            "Des projets inspirés.",
            "Votre vision, mon expertise.",
            "Donnez vie à vos projets!"
        ];

        const showPopup = ref(false);

        const router = useRouter();
        const navigateTo = (route) => {
            if (route === '#') {
                showPopup.value = true;
            } else {
                router.push(route);
            }
        };

        onMounted(async () => {
            await nextTick();
            typeText();
        });


        const typeText = () => {
            const text = texts[Math.floor(Math.random() * texts.length)];
            let index = 0;

            const typingEffect = () => {
                if (index < text.length) {
                    typingText.value.innerText += text[index] === ' ' ? '\u00A0' : text[index];
                    index++;
                    setTimeout(typingEffect, 50);
                } else {
                    // Ajouter une classe fade-out-active après l'animation de texte
                    setTimeout(() => {
                        container.value.classList.add('fade-out-active');
                        setTimeout(() => {
                            isVisible.value = true;
                        }, 2000); // Afficher le contenu principal après le fondu
                    }, 2000); // Délai de 2 secondes avant le fondu
                }
            };

            typingEffect();
        };

        return {
            isVisible,
            container,
            typingText,
            profileImage,
            showPopup,
            navigateTo,
        };
    }
};
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

.cursor {
    animation: blink 1s infinite;
    font-weight: lighter;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}

/* Effet de fondu */
.fade-out {
    opacity: 1;
    transition: opacity 2s ease;
}

.fade-out-active {
    opacity: 0;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
}

.modal-content {
    background: #fff;
    padding: 20px 30px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.modal-content p {
    font-size: 18px;
    color: #000814;
    margin-bottom: 20px;
}

.close-btn {
    padding: 8px 16px;
    background: #000814;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
}

.close-btn:hover {
    background: #14AE5C;
}
</style>