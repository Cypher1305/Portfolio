<template>
    <div class="flex flex-col bg-custom-black h-screen text-custom-green items-center justify-center custom-scroll">
        <div class="form-container">
            <form class="form">
                <div class="form-group">
                    <label for="email">Votre email</label>
                    <input type="text" id="email" name="email" required="">
                </div>
                <div class="form-group">
                    <label for="textarea">Comment puis-je vous aider?</label>
                    <textarea name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
                </div>
                <button class="form-submit-btn" type="submit">Envoyer</button>
            </form>
        </div>
        <div @click="navigateTo('/')" class="mt-5 ml-2 text-md text-gray cursor-pointer">⟵ Retour</div>

    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    name: 'Message',
    setup() {
        const router = useRouter();
        const navigateTo = (route) => {
            router.push(route);
        };
        return {
            navigateTo,
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
</style>
