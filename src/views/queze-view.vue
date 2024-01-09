<template>
    <div class="mt-10">
        <v-container>
            <div>amount:{{ questions.length }}</div>
            <div v-for="(question, index) in questions" :key="index">
                <h3>{{ question.question }}</h3>
                <div v-for="(answer, ansIndex) in question.answers" :key="ansIndex">
                    <button @click="handleAnswer(answer, index)">{{ answer }}</button>
                </div>
                <p v-if="isCorrect">Correct!</p>
                <p v-if="isWrong">ИДИ НАХУЙ УЕБИЩЕ, ВОЗЬМИ КИРПИЧ И СЛОМАЙ СЕБЕ ЧЕРЕП НАХУЙ СОБАКА БЕЗМОЗГЛАЯ!!!!!!!!!!!!
                </p>
            </div>
        </v-container>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import router from '@/router';

let quezeId = router.currentRoute.value.params.id
let questions = ref([])
let isCorrect = ref(false)
let isWrong = ref(false)

function getQuestions() {
    if (quezeId == '1') {
        let queze = [
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
        questions.value = queze
    } else if (quezeId == '2') {
        let queze = [
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
        questions.value = queze
        console.log('questions', queze);
    } else if (quezeId == '3') {
        let queze = [
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
        questions.value = queze
    }
}
const handleAnswer = (answer, questionIndex) => {
    selectedAnswer.value = answer;
    currentQuestion.value = questionIndex;
    let corectAnswer = questions.value[currentQuestion.value].corectAnswer
    if (corectAnswer == answer) {
        isCorrect.value = true
    } else {
        isWrong.value = true
    }
};
let currentQuestion = ref(null);
let selectedAnswer = ref(null);
onMounted(() => {
    getQuestions()
})
</script>

<style></style>