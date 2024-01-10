<template>
    <div class="mt-10">
        <v-container>
            <div class="d-flex justify-end text-h6">{{ currentQuestionIndex + 1 }}/<p class="text-green">{{
                queze.length }}
                </p>
            </div>
        </v-container>
        <v-container class="d-flex justify-center">
            <div v-if="currentQuestion">
                <p class="text-h3 text-center ml-5" :class="textColor" style="max-width: 600px;">{{
                    currentQuestion.question }}</p>
                <div class="d-flex justify-center">
                    <div class="mt-10 mr-5 align-center" v-for="(answer, ansIndex) in currentQuestion.answers"
                        :key="ansIndex">
                        <v-btn style="width:200px; height:4em;" class="rounded-pill" :disabled="isCorrect || isWrong"
                            color="info" @click="handleAnswer(answer)">{{ answer
                            }}</v-btn>
                    </div>
                </div>
                <v-container class="d-flex justify-center mt-5">
                    <p v-if="isCorrect" class="text-green text-h6">Правильно!</p>
                    <p v-if="isWrong" class="text-h6">
                        <span class="text-red">Неправильно</span>
                        ,правильный ответ:
                        <span class="text-green font-weight-black">{{ currentQuestion.corectAnswer }} </span>
                    </p>
                    <div style="height: 30px;"></div>
                </v-container>
                <div class="d-flex justify-end align-center mt-10" style="position:relative;">
                    <v-btn class="mr-6" style="width:100px; height:2.5em;" :disabled="!isCorrect && !isWrong"
                        @click="nextQuestion">Next</v-btn>
                </div>
            </div>
            <div v-else>
                <h3>Викторина завершена!</h3>
            </div>
        </v-container>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import router from '@/router';

let quezeId = router.currentRoute.value.params.id

const queze = ref([])

function getQuestions() {
    if (quezeId == '1') {
        let questions = [
            {
                question: 'Какого цвета звезды на флаге Новой Зеландии?',
                answers: ['Белый', 'Красный', 'Желтый'],
                corectAnswer: 'Красный'
            },
            {
                question: 'two',
                answers: ['1', '2', '3'],
                corectAnswer: '3'
            },
            {
                question: 'three',
                answers: ['1', '2', '3'],
                corectAnswer: '3'
            },
            {
                question: 'four',
                answers: ['1', '2', '3'],
                corectAnswer: '3'
            },
            {
                question: 'five',
                answers: ['1', '2', '3'],
                corectAnswer: '3'
            },
        ]
        queze.value = questions
    } else if (quezeId == '2') {
        let questions = [
            {
                question: 'one',
                answers: ['1', '2', '3'],
                corectAnswer: '3'
            },
            {
                question: 'two',
                answers: ['1', '2', '3'],
                corectAnswer: '3'
            },
            {
                question: 'three',
                answers: ['1', '2', '3'],
                corectAnswer: '3'
            },
            {
                question: 'four',
                answers: ['1', '2', '3'],
                corectAnswer: '3'
            },
            {
                question: 'five',
                answers: ['1', '2', '3'],
                corectAnswer: '3'
            },
        ]
        queze.value = questions
    } else if (quezeId == '3') {
        let questions = [
            {
                question: 'one',
                answers: ['1', '2', '3'],
                corectAnswer: '3'
            },
            {
                question: 'two',
                answers: ['1', '2', '3'],
                corectAnswer: '3'
            },
            {
                question: 'three',
                answers: ['1', '2', '3'],
                corectAnswer: '3'
            },
            {
                question: 'four',
                answers: ['1', '2', '3'],
                corectAnswer: '3'
            },
            {
                question: 'five',
                answers: ['1', '2', '3'],
                corectAnswer: '3'
            },
        ]
        queze.value = questions
    }
    currentQuestion.value = queze.value[currentQuestionIndex.value]
}


const currentQuestionIndex = ref(0);

let textColor = computed(() => {
    if (isCorrect.value) {
        return 'text-green'
    } else if (isWrong.value) {
        return 'text-red'
    } else {
        return 'text-black'
    }
})

const isCorrect = ref(false);
const isWrong = ref(false);
let currentQuestion = ref([])
const handleAnswer = (answer) => {
    if (answer == currentQuestion.value.corectAnswer) {
        isCorrect.value = true;
        isWrong.value = false;
    } else {
        isCorrect.value = false;
        isWrong.value = true;
    }
};

const nextQuestion = () => {
    if (currentQuestionIndex.value < queze.value.length - 1) {
        currentQuestionIndex.value++;
        currentQuestion.value = queze.value[currentQuestionIndex.value];
        isCorrect.value = false;
        isWrong.value = false;
    } else {
        currentQuestion.value = null;
    }
};

onMounted(() => {
    getQuestions()
})
</script>

<style></style>


