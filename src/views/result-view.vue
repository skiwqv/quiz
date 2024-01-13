<template>
    <v-container class="mt-10 d-flex justify-center">
        <v-card v-if="answers" max-width="600">
            <v-card-item>
                <v-card-title class="text-black text-center text-uppercase text-sm-5 text-h4">
                    <p>test number-<span>{{ testId }}</span> </p>
                </v-card-title>
            </v-card-item>
            <v-card-text class="mt-5 text-black text-center text-uppercase text-h6">
                <p>{{ rightlyAnswer }}/<span class="text-green">{{ arrCorrectAnswers.length }}</span> </p>
            </v-card-text>
            <v-card-item>
                <v-card-title class="text-black text-uppercase text-subtitle-1 text-sm-h6 text-md-h5">
                    <div class="d-flex justify-center">
                        <div class="d-flex flex-column align-center mr-6 ml-6">
                            <div class="text-right text-truncate">Ваши ответы</div>
                            <div v-for="ans in arrUserAnswers" :key="ans">
                                {{ ans }}
                            </div>
                        </div>
                        <div class="d-flex flex-column align-center">
                            <div class="text-green ">Правильные ответы</div>
                            <div class="text-green" v-for="ans in arrCorrectAnswers" :key="ans">{{ ans }}</div>
                        </div>
                    </div>
                </v-card-title>
            </v-card-item>
            <v-card-actions class="d-flex justify-center">
                <v-btn variant="outlined" append-icon="mdi-refresh" @click="toTest">try again</v-btn>
            </v-card-actions>
        </v-card>
        <empty-answer-vue v-else></empty-answer-vue>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import router from '@/router';
import emptyAnswerVue from '@/components/empty-answer.vue'

let answers = ref(window.localStorage.getItem('answers'))
let correctAnswers = ref(window.localStorage.getItem('correctAnswers'))
let arrCorrectAnswers = ref([])
let arrUserAnswers = ref([])
let rightlyAnswer = ref(0)
let testId = ref(window.localStorage.getItem('testId'))


function checkAnswers() {
    const correctAnswersArray = JSON.parse(correctAnswers.value);
    const userAnswersArray = JSON.parse(answers.value);
    arrCorrectAnswers.value = correctAnswersArray
    arrUserAnswers.value = userAnswersArray
    if (answers.value) {
        for (let i = 0; i < correctAnswersArray.length; i++) {
            const correctAnswer = correctAnswersArray[i];
            const userAnswer = userAnswersArray[i];
            if (correctAnswer === userAnswer) {
                rightlyAnswer.value++
            }
        }
    }
}
function toTest() {
    router.push(`/quize/${testId.value}`)
}
onMounted(() => {
    checkAnswers()
})
</script>

<style></style>