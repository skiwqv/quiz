<template>
    <div class="mt-10">
        <v-container>
            <div class="d-flex justify-end text-h6">{{ currentQuestionIndex + 1 }}/<p class="text-green">{{
                queze.length }}
                </p>
            </div>
        </v-container>
        <v-container class="d-flex justify-center">
            <div class="d-flex justify-center">
                <div v-if="currentQuestion">
                    <p class="text-h3 text-center" :class="textColor" style="max-width: 650px;">{{
                        currentQuestion.question }}</p>
                    <v-row class="d-flex justify-center">
                        <v-col cols="12" md="6"
                            class="d-flex flex-column justify-center align-center flex-md-row flex-sm-column">
                            <div class="mt-10 mr-5 align-center" v-for="(answer, ansIndex) in currentQuestion.answers"
                                :key="ansIndex">
                                <v-btn style="width:200px; height:4em;" class="rounded-pill"
                                    :disabled="isCorrect || isWrong" color="info" @click="handleAnswer(answer)">{{ answer
                                    }}</v-btn>
                            </div>
                        </v-col>
                    </v-row>
                    <v-container class="d-flex justify-center mt-5">
                        <p v-if="isCorrect" class="text-green text-h6">Правильно!</p>
                        <p v-if="isWrong" class="text-h6">
                            <span class="text-red">Неправильно</span>
                            ,правильный ответ:
                            <span class="text-green font-weight-black">{{ currentQuestion.corectAnswer }} </span>
                        </p>
                        <div style="height: 30px;"></div>
                    </v-container>
                    <div class="d-flex justify-end align-center mt-10">
                        <v-btn icon="mdi-arrow-right-circle-outline" width="50" class="mr-6"
                            :disabled="!isCorrect && !isWrong" @click="nextQuestion"></v-btn>
                    </div>
                </div>
                <div v-else class="d-flex justify-center align-center flex-column">
                    <h3 class="text-green text-center mb-5 text-h4">Викторина завершена!</h3>
                    <p class="text-h5 ml-4 mb-5">Количество правильных ответов:{{ rightlyAnswer }}/{{ queze.length }}</p>
                    <v-table class="mb-5" density="comfortable">
                        <thead>
                            <tr>
                                <th class="text-left text-h5">
                                    Ваши ответы
                                </th>
                                <th class="text-left text-green text-h5">
                                    Правильные ответы
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ans in correctAndUserAnswers" :key="ans">
                                <td class="text-h6">{{ ans.answers }}</td>
                                <td class="text-green text-h6">
                                    {{ ans.corectAnswer }}
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                    <v-btn append-icon="mdi-home" @click="refreshWindow">To home</v-btn>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import router from '@/router';

let quezeId = router.currentRoute.value.params.id

const queze = ref([])
let answers = ref([])
let correctAndUserAnswers = ref([])
const currentQuestionIndex = ref(0);
const isCorrect = ref(false);
const isWrong = ref(false);
let currentQuestion = ref([])
let rightlyAnswer = ref(0)
let corectAnswer = ref([])


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



let textColor = computed(() => {
    if (isCorrect.value) {
        return 'text-green'
    } else if (isWrong.value) {
        return 'text-red'
    } else {
        return 'text-black'
    }
})

function handleAnswer(answer) {
    if (answer == currentQuestion.value.corectAnswer) {
        isCorrect.value = true;
        isWrong.value = false;
        rightlyAnswer.value++
    } else {
        isCorrect.value = false;
        isWrong.value = true;
    }
    answers.value.push(answer)
    window.localStorage.setItem('answers', JSON.stringify(answers.value))
    correctAndUserAnswers.value.push({
        answers: answer,
        corectAnswer: currentQuestion.value.corectAnswer
    })
    corectAnswer.value.push(currentQuestion.value.corectAnswer)
    window.localStorage.setItem('correctAnswers', JSON.stringify(corectAnswer.value))
    window.localStorage.setItem('testId', quezeId)
}

function nextQuestion() {
    if (currentQuestionIndex.value < queze.value.length - 1) {
        currentQuestionIndex.value++;
        currentQuestion.value = queze.value[currentQuestionIndex.value];
        isCorrect.value = false;
        isWrong.value = false;
    } else {
        currentQuestion.value = null;
    }
}

function refreshWindow() {
    router.push('/')
}

onMounted(() => {
    getQuestions()
})
</script>

<style></style>


