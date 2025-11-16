<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue' // onMounted, onBeforeUnmount - Для Spline-3D
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user' // импорт стора
import '@/assets/main.css' //импорт стилей , нужно также для Spline элементов


const email = ref('')
const password = ref('')
const router = useRouter()
const userStore = useUserStore()

//Вход -
const handleLogin = async () => {
    try {
        const res = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        })

        const data = await res.json()

        if (res.ok) {
            alert("Вход выполнен!")

            // сохраняем состояние пользователя
            userStore.setRegistered(true)
            userStore.setEmail(email.value)

            router.push('/') // переход на главную
        } else {
            alert(data.message)
        }
    } catch (err) {
        console.error(err)
        alert("Ошибка соединения с сервером")
    }
}



//Spline-3D

function moveBottomObjectsDown(viewer, limitY = -10, offset = -200) {
    const scene = viewer?.scene;
    if (!scene) return;

    // обходим ВСЕ объекты в Сцены
    scene.traverse(obj => {
        if (!obj.position) return;

        // если объект находится ниже определённой высоты — смещаем
        if (obj.position.y < limitY) {
            obj.position.y += offset;  // уводим вниз
        }
    });
}

function initSpline() {
    const viewer = document.querySelector("spline-viewer");
    if (!viewer) return;

    viewer.addEventListener("load", () => {
        // пытаемся сдвинуть watermark вниз
        moveBottomObjectsDown(viewer, -5, -300);
    });
}

onMounted(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.11.2/build/spline-viewer.js';
    script.onload = () => {
        // небольшая задержка, чтобы сцена прогрузилась
        setTimeout(initSpline, 300)
    };
    document.head.appendChild(script);
});



//Кнопка выхода - 
const logout = () => {
    userStore.logout()
    router.push('/')      // редирект на главную или любую другую страницу
}

</script>

<style>
spline-viewer::part(branding) {
    opacity: 0 !important;
}
</style>

<template>
    <div>
        <!-- Глобальный Spline слой (fixed) -->
        <div class="spline-crop fixed inset-0 pointer-events-none -z-10" style="z-index:5;">
            <spline-viewer class="spline-cut" url="https://prod.spline.design/ziIbK-A1dXgwGdDS/scene.splinecode"
                style="width:100%; height:100%; pointer-events:none; background:transparent;">
            </spline-viewer>
        </div>
        <div
            class="text-white py-100 text-center bg-[url('/images/register_image.jpg')] bg-cover bg-center bg-no-repeat">
            <div class="bg-white text-black rounded-t-md md:p-10 max-w-[600px] mx-auto my-10 px-4">
                <div>
                    <p class="font-bold text-2xl mb-5">Вход в учетную запись </p>


                    <input v-model="email" type="email" placeholder="someone@example.com"
                        class="my-5 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />

                    <input v-model="password" type="password" placeholder="password"
                        class="my-5 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>

                <div class="flex flex-col md:flex-row items-center justify-end gap-4">
                    <a href="http://localhost:5173/register" class="p-3 bg-[#cccccc] inline-block">
                        Назад
                    </a>
                    <button @click="handleLogin" class="p-3 bg-[#107c10] text-white">
                        Вперед
                    </button>
                </div>
            </div>
        </div>
    </div>


</template>
