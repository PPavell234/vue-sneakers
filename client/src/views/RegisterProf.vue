<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'  // 👈 подключаем роутер

const router = useRouter()
const email = ref('')
const password = ref('')

const handleNext = async () => {
    try {
        const res = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        })

        const data = await res.json()
        console.log(data)

        if (res.ok) {
            alert("✅ Регистрация успешна!")
            // 👉 Перенаправление на главную страницу
            router.push('/')
        } else {
            alert(data.message)
        }

    } catch (err) {
        console.error(err)
        alert("Ошибка соединения с сервером")
    }
}
</script>

<template>
    <div class="text-white py-100 text-center bg-[url('/images/register_image.jpg')] bg-cover bg-center bg-no-repeat">
        <div class="bg-white text-black rounded-t-md md:p-10 max-w-[600px] mx-auto my-10 px-4">
            <div>
                <p class="font-bold text-2xl mb-5">Укажите свой адрес электронной почты</p>

                <input v-model="email" type="email" placeholder="someone@example.com"
                    class="my-5 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />

                <input v-model="password" type="password" placeholder="password"
                    class="my-5 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>

            <div class="flex flex-col md:flex-row items-center justify-end gap-4">
                <button class="p-3 bg-[#cccccc]">Назад</button>

                <button @click="handleNext" class="p-3 bg-[#107c10] text-white">
                    Вперед
                </button>
            </div>
        </div>
    </div>
</template>
