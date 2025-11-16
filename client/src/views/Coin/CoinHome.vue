<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue' // onMounted, onBeforeUnmount - Для Spline-3D
import VideoPlayer from '@/components/VideoPlayer.vue'
import Reactions from '@/components/Reactions.vue'
import Slider from '@/components/Slider.vue'
import { useUserStore } from '@/stores/user'
import Header from '@/components/Header.vue'
import Header2 from '@/components/Header2.vue'
import CoinItem from "@/components/CoinItem.vue";


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

//Отображение списка карточек ---

const selected = ref(null); // id активной карточки

const coins = [
    {
        id: 1,
        image: "/images/CoinHome/coins.png",
        amount: 320,
        price: 1200
    },
    {
        id: 2,
        image: "/images/CoinHome/coins.png",
        amount: 550,
        price: 2000
    },
    {
        id: 3,
        image: "/images/CoinHome/coins.png",
        amount: 1000,
        price: 3500
    },
    {
        id: 4,
        image: "/images/CoinHome/coins.png",
        amount: 1000,
        price: 1000000
    },
    {
        id: 5,
        image: "/images/CoinHome/coins.png",
        amount: 1000,
        price: 1000000000
    },
];

//Оплата --
async function pay() {
    if (selected.value === null) {
        alert("Выберите набор перед оплатой");
        return;
    }

    const item = coins.find(c => c.id === selected.value);

    try {
        const res = await fetch("http://localhost:5000/api/wallet/add-coins", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: userStore.email,  // <-- email из store
                amount: item.amount
            })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message || "Ошибка оплаты");
            return;
        }

        userStore.setWallet({
            coins: data.coins
        });

        alert(`Баланс пополнен на ${item.amount}! Новый баланс: ${data.coins}`);

    } catch (error) {
        console.log(error);
        alert("Ошибка соединения с сервером");
    }
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
    <div>
        <!-- Шапка -->
        <Header2 />

        <div class="flex flex-col items-center gap-3 py-55">

            <!-- Заголовок -->
            <div class="flex flex-col  items-center gap-7">
                <p class="font-bold font-[700] text-5xl">КУПИТЬ МАЙНКОИНЫ</p>
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
                <CoinItem v-for="coin in coins" :key="coin.id" v-model="selected" :id="coin.id" :image="coin.image"
                    :amount="coin.amount" :price="coin.price" />
            </div>
            <div class="flex flex-col items-center py-2">
                <button @click="pay"
                    class="flex items-center justify-center text-black py-4 px-15 hover:opacity-90 transition text-sm md:text-base"
                    style="
            background-image: url('/images/CoinHome/button1.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        ">
                    ОПЛАТИТЬ
                </button>
            </div>






        </div>

    </div>

</template>