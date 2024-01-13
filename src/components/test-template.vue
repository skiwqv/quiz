<template>
    <v-row>
        <v-col v-for="queze in quezes" :key="queze.title" cols="12" sm="6" md="4" lg="4" xl="4"
            class="d-flex justify-center">
            <v-card @click="toQueze(queze.id)" :image="queze.image" width="350" height="220" hover>
                <v-card-item>
                    <v-card-title class="text-black text-uppercase text-h4">
                        {{ queze.title }}
                    </v-card-title>
                </v-card-item>
                <v-card-text class="mt-5 text-black text-uppercase text-h6">
                    {{ queze.description }}
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref } from 'vue';
import router from '@/router';

function toQueze(id) {
    router.push(`/quize/${id}`)
}

let quezes = ref([
    {
        title: 'test',
        image: 'https://www.buzzfeed.com/static-assets/quizparty/_next/static/images/header_right-e67085e9fcec5e4d6df5cc5b31e8035f.png',
        description: 'test 1',
        id: '1'
    },
    {
        title: 'test',
        image: 'https://www.headtohealth.gov.au/sites/default/files/h2h/2021-12/health-you-quiz%402x.png',
        description: 'test 2',
        id: '2'
    },
    {
        title: 'test',
        image: 'https://www.buzzfeed.com/static-assets/quizparty/_next/static/images/header_right-e67085e9fcec5e4d6df5cc5b31e8035f.png',
        description: 'test 3',
        id: '3'
    },
])

</script>

<style></style>