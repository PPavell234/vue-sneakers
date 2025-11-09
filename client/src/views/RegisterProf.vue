<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const mode = ref("register"); // 👈 "register" или "login"

const handleNext = async () => {
    try {
        const url =
            mode.value === "register"
                ? "http://localhost:5000/api/auth/register"
                : "http://localhost:5000/api/auth/login";

        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            }),
        });

        const data = await res.json();
        console.log(data);

        if (res.ok) {
            alert("✅ " + data.message);
            if (data.token) localStorage.setItem("token", data.token);
        } else {
            alert("⚠️ " + data.message);
        }
    } catch (err) {
        console.error(err);
        alert("Ошибка соединения с сервером");
    }
};
</script>

<template>
    <div class="text-white py-100 text-center bg-[url('/images/register_image.jpg')] bg-cover bg-center bg-no-repeat">
        <div class="bg-white text-black rounded-t-md md:p-10 max-w-[600px] mx-auto my-10 px-4">
            <div>
                <p class="font-bold text-2xl mb-5">
                    {{ mode === "register"
                        ? "Регистрация нового пользователя"
                        : "Вход в аккаунт" }}
                </p>

                <input v-model="email" type="email" placeholder="someone@example.com"
                    class="my-5 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />

                <input v-model="password" type="password" placeholder="password"
                    class="my-5 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>

            <div class="flex flex-col md:flex-row items-center justify-end gap-4">
                <button @click="mode = mode === 'register' ? 'login' : 'register'" class="p-3 bg-[#cccccc]">
                    {{ mode === "register" ? "Перейти к входу" : "Перейти к регистрации" }}
                </button>

                <button @click="handleNext" class="p-3 bg-[#107c10] text-white">
                    {{ mode === "register" ? "Зарегистрироваться" : "Войти" }}
                </button>
            </div>
        </div>
    </div>
</template>
