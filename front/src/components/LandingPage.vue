<template>
    <div class="flex h-screen bg-custom-black text-custom-green">
        <!-- Typing text container, affiché jusqu'à la fin de l'animation -->
        <div v-show="!isVisible" ref="container"
            class="flex items-center justify-center w-full h-screen text-xl font-mono fade-out">
            <span ref="typingText"></span>
            <span class="cursor">|</span>
        </div>

        <!-- Contenu principal, affiché après l'animation -->
        <div v-if="isVisible" class="w-full text-xl font-inter">
            <header
                class="w-[38%] h-screen fixed bg-custom-black border-r border-blue p-1 font-inter flex flex-col items-center justify-center">
                <img :src="profileImage" alt="Photo" class="rounded-full w-40 h-30 mt-1 photo" />
                <div class="w-[80%] mx-auto flex flex-col ">
                    <h1 class="text-3xl text-white font-inter font-bold mt-1 text-left">YAO Kossia Bénédicte</h1>
                    <h4 class="text-2xl text-white font-inter text-left">Développeur Full Stack</h4>
                    <p class="text-base text-gray font-inter mb-2 text-center text-justify">
                        Je conçois des sites et des applications web/mobiles, tout en développant des projets
                        innovants visant à apporter des solutions concrètes aux défis actuels.
                    </p>
                    <a class=" code_button text-center"><span>Message</span></a>

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


            <section class="ml-[40%] mx-auto p-8 overflow-y-auto h-screen custom-scroll text-white flex flex-col">
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
                        <p class="experience-date text-base w-[90px]">2023-2024</p>
                        <div class="experience-details ml-6 flex flex-col">
                            <h1 class="text-lg font-semibold">Développeur Full Stack JS · KY’s CONSULTING</h1>
                            <p class="text-base text-gray text-justify">
                                Développement d'applications web dynamiques pour gérer et optimiser les processus
                                internes des PME.
                            </p>
                            <div class="stack mt-2 flex flex-wrap gap-3">
                                <a href="#" class="tech-icon"><i class="fab fa-node-js"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-react"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-js"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-java"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-sass"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Expérience 2 -->
                    <div class="experience-item flex flex-row mt-5 text-custom-green font-inter">
                        <p class="experience-date text-base w-[90px]">2022-2023</p>
                        <div class="experience-details ml-6 flex flex-col">
                            <h1 class="text-lg font-semibold">Designer UI/UX · Freelance</h1>
                            <p class="text-base text-gray text-justify">
                                Conception d’interfaces utilisateur intuitives et esthétiques pour des applications web
                                et mobiles.
                            </p>
                            <div class="stack mt-2 flex flex-wrap gap-3">
                                <a href="#" class="tech-icon"><i class="fab fa-figma"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-adobe"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-html5"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-css3-alt"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Expérience 3 -->
                    <div class="experience-item flex flex-row mt-5 text-custom-green font-inter">
                        <p class="experience-date text-base w-[85px]">2021-2022</p>
                        <div class="experience-details ml-6 flex flex-col">
                            <h1 class="text-lg font-semibold">Développeur Back-End · Start-up Innov</h1>
                            <p class="text-base text-gray text-justify">
                                Conception et optimisation de l'architecture back-end pour des applications SaaS.
                            </p>
                            <div class="stack mt-2 flex flex-wrap gap-3">
                                <a href="#" class="tech-icon"><i class="fab fa-python"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-docker"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-linux"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-aws"></i></a>
                            </div>
                        </div>
                    </div>
                    <a href="/CV_YAO_Kossia_Benedicte.pdf" target="_blank"
                        class="mt-5 ml-2 text-lg font-semibold text-gray">➤ Voir le CV complet</a>
                </div>

                <div id="projets" class="mt-12">
                    <h2 class="text-2xl mb-2">PROJETS</h2>

                    <!-- Projet 1 -->
                    <div class="experience-item flex flex-row mt-5 text-custom-green font-inter">
                        <p class="experience-date text-base w-[90px]">2023-2024</p>
                        <div class="experience-details ml-6 flex flex-col">
                            <h1 class="text-lg font-semibold">BUSTER</h1>
                            <p class="text-base text-gray text-justify">
                                Développement d'applications web dynamiques pour gérer et optimiser les processus
                                internes des PME.
                            </p>
                            <div class="stack mt-2 flex flex-wrap gap-3">
                                <a href="#" class="tech-icon"><i class="fab fa-node-js"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-react"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-js"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-java"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-sass"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Projet 2 -->
                    <div class="experience-item flex flex-row mt-5 text-custom-green font-inter">
                        <p class="experience-date text-base w-[90px]">2022-2023</p>
                        <div class="experience-details ml-6 flex flex-col">
                            <h1 class="text-lg font-semibold">Designer UI/UX · Freelance</h1>
                            <p class="text-base text-gray text-justify">
                                Conception d’interfaces utilisateur intuitives et esthétiques pour des applications web
                                et mobiles.
                            </p>
                            <div class="stack mt-2 flex flex-wrap gap-3">
                                <a href="#" class="tech-icon"><i class="fab fa-figma"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-adobe"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-html5"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-css3-alt"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Projet 3 -->
                    <div class="experience-item flex flex-row mt-5 text-custom-green font-inter">
                        <p class="experience-date text-base w-[85px]">2021-2022</p>
                        <div class="experience-details ml-6 flex flex-col">
                            <h1 class="text-lg font-semibold">Développeur Back-End · Start-up Innov</h1>
                            <p class="text-base text-gray text-justify">
                                Conception et optimisation de l'architecture back-end pour des applications SaaS.
                            </p>
                            <div class="stack mt-2 flex flex-wrap gap-3">
                                <a href="#" class="tech-icon"><i class="fab fa-python"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-docker"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-linux"></i></a>
                                <a href="#" class="tech-icon"><i class="fab fa-aws"></i></a>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="mt-5 ml-2 text-lg font-semibold text-gray">➤ Voir les archives de projets</a>
                </div>

                <div id="projets" class="mt-12">
                    <h2 class="text-2xl mb-4">COMPÉTENCES</h2>

                    <div class="mb-4">
                        <div class="flex justify-between">
                            <span class="font-bold">JavaScript</span>
                            <span>90%</span>
                        </div>
                        <div class="bg-gray-700 rounded-full h-2">
                            <div class="bg-green-500 h-2 rounded-full" style="width: 90%;"></div>
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="flex justify-between">
                            <span class="font-bold">React</span>
                            <span>85%</span>
                        </div>
                        <div class="bg-gray-700 rounded-full h-2">
                            <div class="bg-green-500 h-2 rounded-full" style="width: 85%;"></div>
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="flex justify-between">
                            <span class="font-bold">Node.js</span>
                            <span>80%</span>
                        </div>
                        <div class="bg-gray-700 rounded-full h-2">
                            <div class="bg-green-500 h-2 rounded-full" style="width: 80%;"></div>
                        </div>
                    </div>
                </div>

                <p class="mt-24 ml-9 text-justify text-xs text-gray">Cookie marshmallow brownie cheesecake tiramisu.
                    Lollipop
                    chocolate cake
                    sweet roll jujubes sesame snaps.Cookie marshmallow brownie cheesecake tiramisu. Lollipop chocolate
                    cake
                    sweet roll jujubes sesame snaps.Cookie marshmallow brownie cheesecake tiramisu. Lollipop chocolate
                    cake
                    sweet roll jujubes sesame snaps.Cookie marshmallow brownie cheesecake tiramisu. Lollipop chocolate
                    cake
                    sweet roll jujubes sesame snaps.Cookie marshmallow brownie cheesecake tiramisu. Lollipop chocolate
                    cake
                    sweet roll jujubes sesame snaps.</p>

                <div id="app">
                    <router-link to="/DesignPage"
                        class="flex flex-col items-center mt-24 text-white hover:text-gray-300">
                        <i class="fas fa-laugh-wink mr-2"></i>
                        <span class="text-xs text-gray">En savoir plus sur moi ?</span>
                    </router-link>
                    <router-view></router-view>
                </div>



            </section>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue';
import profileImage from '@/assets/moi.jpg';
import DesignPage from './DesignPage.vue';
import ArchivePage from './ArchivePage.vue';

export default {
    setup() {
        const isVisible = ref(false);
        const container = ref(null);
        const typingText = ref(null);
        const texts = [
            "Welcome to my portfolio",
            "Discover my projects",
            "Let’s create together!"
        ];

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
                    setTimeout(typingEffect, 150);
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
        };
    }
};
</script>

<style scoped>
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
</style>