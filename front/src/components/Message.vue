<template>
    <div class="flex flex-col bg-custom-black h-screen text-custom-green items-center justify-center custom-scroll">
        <div class="form-container">
            <form class="form" @submit.prevent="submitForm" ref="contactForm">
                <div class="form-group">
                    <label for="email">Votre Nom</label>
                    <input type="text" id="nom" name="nom" required v-model="nom">
                </div>
                <div class="form-group">
                    <label for="email">Votre email</label>
                    <input type="text" id="email" name="email" required v-model="email">
                </div>
                <div class="form-group">
                    <label for="textarea">Comment puis-je vous aider?</label>
                    <textarea name="message" id="textarea" rows="10" required v-model="message"></textarea>
                </div>
                <button class="form-submit-btn" type="submit">Envoyer</button>
            </form>
        </div>
        <!-- Popup confirmation message -->
        <div v-if="isSubmitted" class="popup-container">
            <div class="popup">
                <p class="bg-white">Votre message a bien été envoyé ! <br> je serai ravie de vous répondre 😊</p>
                <button @click="navigateTo('/')" class="popup-close-btn">Retour à l'accueil</button>
            </div>
        </div>

        <div @click="navigateTo('/')" class="mt-5 ml-2 text-md text-gray cursor-pointer">⟵ Retour</div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
    name: 'Message',
    setup() {
        const router = useRouter();
        const navigateTo = (route) => {
            router.push(route);
        };

        const email = ref('');
        const nom = ref('');
        const message = ref('');
        const isSubmitted = ref(false);
        const contactForm = ref(null);

        const submitForm = async () => {
            try {
                const response = await fetch('http://localhost:3000/send', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nom: nom.value, email: email.value, message: message.value }),
                });
                if (!response.ok) {
                    throw new Error("Erreur lors de l'envoi du message.");
                };
                const data = await response.json();
                console.log(data.message);
                isSubmitted.value = true; // Affiche le message de confirmation si l'envoi est réussi
            } catch (error) {
                console.error(error);
            }
        };

        return {
            navigateTo,
            nom,
            email,
            message,
            submitForm,
            isSubmitted,
            contactForm,
        };
    }
};
</script>

<style scoped>

.form-container {
    width: 400px;
    background: linear-gradient(#000814, #000814) padding-box,
        linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
}

.form-container button:active {
    scale: 0.95;
}

.form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
}

.form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #414141;
}

.form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    resize: none;
    color: #fff;
    height: 96px;
    border: 1px solid #414141;
    background-color: transparent;
    font-family: inherit;
}

.form-container .form-group input::placeholder {
    opacity: 0.5;
}

.form-container .form-group input:focus {
    outline: none;
    border-color: #e81cff;
}

.form-container .form-group textarea:focus {
    outline: none;
    border-color: #e81cff;
}

.form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: #fff;
    font-weight: 600;
    width: 40%;
    background: #000814;
    border: 1px solid #414141;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.5s ease;
}

.form-container .form-submit-btn:hover {
    color: #fff;
    border-color: #14AE5C;
    box-shadow: 0px 0px 8px 4px rgba(8, 235, 252, 0.2),
        0px 0px 15px rgba(0, 8, 20, 0.4);
    transform: scale(1.1);
}


.popup-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.popup {
    background: #fff;
    border-radius: 8px;
    padding: 20px 40px;
    text-align: center;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: fadeIn 0.3s ease-in-out;
}

.popup p {
    font-size: 18px;
    color: #000814;
    font-weight: 600;
}

.popup-close-btn {
    margin-top: 15px;
    padding: 8px 15px;
    background-color: #000814;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.popup-close-btn:hover {
    background-color: #14AE5C;
}

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

</style>
