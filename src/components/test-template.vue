<template>
    <v-container v-for="queze in quezes" :key="queze.title">
        <v-card @click="toQueze(queze.id)" :image="queze.image" class="mr-10" width="344" height="220" hover>
            <v-card-item>
                <v-card-title class="text-black">
                    {{ queze.title }}
                </v-card-title>
            </v-card-item>

            <v-card-text class="text-black">
                {{ queze.description }}
            </v-card-text>
        </v-card>
    </v-container>
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