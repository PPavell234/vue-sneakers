<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue' // onMounted, onBeforeUnmount - Для Spline-3D
import { useUserStore } from '@/stores/user'
import Header from '@/components/Header.vue'
import Header2 from '@/components/Header2.vue'
import { useRouter } from 'vue-router'

const router = useRouter()



const userStore = useUserStore()


const showMenu = ref(false)
const toggleMenu = () => {
    showMenu.value = !showMenu.value
}

// Клик вне меню — закрыть
const handleClickOutside = (event) => {
    const btn = document.getElementById('account-btn')
    const menu = document.getElementById('account-menu')
    if (btn && menu && !btn.contains(event.target) && !menu.contains(event.target)) {
        showMenu.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})

//Кнопка для возврата
const goBack = () => {
    router.push('/')
}

</script>



<style scoped>
/* Плавное появление/исчезновение */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Адаптивность гифки */
@media (max-width: 768px) {
    img {
        width: 100%;
        height: auto;
    }
}
</style>


<template>
    <div> <!-- Шапка -->
        <Header2 v-if="userStore.isRegistered" />
        <Header v-else />

        <!-- Остальной контент -->
        <div class="bg-[#100e0d] flex flex-col items-center gap-3 py-55">

            <!-- Заголовок -->
            <div class="flex flex-col  items-center gap-7">
                <p class="font-bold font-[700] text-5xl">Ой… Нам не удалось отыскать эту страницу Error 404</p>
                <img src="/images/Hole.png" alt="">
            </div>


            <div class="flex flex-col items-center py-2">
                <button @click="goBack"
                    class="flex items-center justify-center text-black py-4 px-15 hover:opacity-90 transition text-sm md:text-base"
                    style="
            background-image: url('/images/CoinHome/button1.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        ">
                    Вернуться обратно
                </button>
            </div>






        </div>




    </div>




</template>