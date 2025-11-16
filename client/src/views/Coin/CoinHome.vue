<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue' // onMounted, onBeforeUnmount - Для Spline-3D
import VideoPlayer from '@/components/VideoPlayer.vue'
import Reactions from '@/components/Reactions.vue'
import Slider from '@/components/Slider.vue'
import { useUserStore } from '@/stores/user'
import Header from '@/components/Header.vue'
import Header2 from '@/components/Header2.vue'

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

//Меняет отображение иконки -
const checked1 = ref(false);
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
    <div>
        <!-- Шапка -->
        <Header2 />

        <div class="flex flex-col items-center gap-3 py-55">

            <!-- Заголовок -->
            <div class="flex flex-col items-center gap-7">
                <H1>КУПИТЬ МАЙНКОИНЫ</H1>
                <p class="max-w-[800px] mx-auto px-2">
                    Майнкоины — это виртуальная валюта Minecraft. С ее помощью можно преобразовать миры,
                    отправиться на поиски эпичных сюжетных приключений, придать уникальный вид своему персонажу
                    и сделать еще много всего интересного.
                </p>
            </div>

            <!-- Выбор набора -->
            <div class="flex flex-col items-center py-2">
                <p class="text-lg font-semibold">ВЫБЕРИТЕ НАБОР</p>
            </div>


            <!-- Товары -->
            <div class="flex flex-row justify-center gap-4 mb-1">
                <!-- Один товар -->
                <div class="flex flex-col w-full max-w-[250px] bg-[#1f1e1d] text-white pl-15 pr-15 rounded-lg gap-12">

                    <div class="flex flex-col items-center gap-3">
                        <img src="/images/CoinHome/coins.png" alt="" class="" />
                        <p class="text-xl font-bold">320</p>
                    </div>

                    <!-- Разделитель -->
                    <div class="-mt-1">
                        <hr class="border-t border-[#33302F]" />
                    </div>

                    <!-- Чекбокс-кнопка -->
                    <div class="flex flex-row justify-center gap-2.5 mb-5 -mt-6">
                        <label class="cursor-pointer inline-flex flex-col items-center">
                            <input type="checkbox" v-model="checked1" class="hidden" />
                            <img :src="checked1 ? '/images/CoinHome/buttch1.png' : '/images/CoinHome/buttch2.png'"
                                class="w-8 h-8" alt="checkbox" />
                        </label>
                        <div class="px-1">
                            <p>1200руб</p>
                        </div>

                    </div>

                </div>


                <!-- Один товар -->
                <div class="flex flex-col w-full max-w-[250px] bg-[#1f1e1d] text-white pl-15 pr-15 rounded-lg gap-12">

                    <div class="flex flex-col items-center gap-3">
                        <img src="/images/CoinHome/coins.png" alt="" class="" />
                        <p class="text-xl font-bold">320</p>
                    </div>

                    <!-- Разделитель -->
                    <div class="-mt-1">
                        <hr class="border-t border-[#33302F]" />
                    </div>

                    <!-- Чекбокс-кнопка -->
                    <div class="flex flex-row justify-center gap-2.5 mb-5 -mt-6">
                        <label class="cursor-pointer inline-flex flex-col items-center">
                            <input type="checkbox" v-model="checked1" class="hidden" />
                            <img :src="checked1 ? '/images/CoinHome/buttch1.png' : '/images/CoinHome/buttch2.png'"
                                class="w-8 h-8" alt="checkbox" />
                        </label>
                        <div class="px-1">
                            <p>1200руб</p>
                        </div>

                    </div>

                </div>
            </div>
            <div class="flex flex-col items-center py-2">
                <a href="http://localhost:5173/register/registerProf"
                    class="flex items-center justify-center text-black py-4 px-15 hover:opacity-90 transition text-sm md:text-base"
                    style="
        background-image: url('/images/CoinHome/button1.png');
        background-repeat: no-repeat;
        background-position: center;
       	background-size: cover;
   ">
                    ОПЛАТИТЬ
                </a>
            </div>






        </div>

    </div>

</template>