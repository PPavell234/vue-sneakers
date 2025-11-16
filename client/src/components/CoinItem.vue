<script setup>
import { computed } from "vue";

const props = defineProps({
    modelValue: Number,   // id выбранной карточки
    id: Number,           // id текущей карточки
    image: String,
    amount: Number,
    price: Number,
    activeIcon: { type: String, default: "/images/CoinHome/buttch2.png" },
    inactiveIcon: { type: String, default: "/images/CoinHome/buttch1.png" }
});

const emit = defineEmits(["update:modelValue"]);

// активна ли эта карточка?
const isActive = computed(() => props.modelValue === props.id);

// клик
function activate() {
    emit("update:modelValue", props.id);
}
</script>
<template>
    <div class="flex flex-col w-full max-w-[250px] bg-[#1f1e1d] text-white px-15 py-6 rounded-lg gap-12"
        :class="isActive ? 'ring-2 ring-yellow-400' : ''" @click="activate">
        <div class="flex flex-col items-center gap-3">
            <img :src="image" alt="coins" />
            <p class="text-xl font-bold">{{ amount }}</p>
        </div>

        <div>
            <hr class="border-t border-[#33302F]" />
        </div>

        <div class="flex flex-row justify-center gap-2.5 mb-5">
            <img :src="isActive ? activeIcon : inactiveIcon" class="w-8 h-8 cursor-pointer" alt="selector"
                @click.stop="activate" />

            <p>{{ price }} руб</p>
        </div>
    </div>
</template>
