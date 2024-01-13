<template>
    <v-container class="mt-10 d-flex justify-center">
        <v-card max-width="400">
            <v-card-title class="text-center text-h5">
                Вы ещё не прошли тест
            </v-card-title>
            <v-card-actions class="d-flex justify-center">
                <v-btn variant="outlined" color="primary" rounded="lg" class="text-h6" width="auto"
                    @click="router.push('/')">пройти
                    тест</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script setup>
import router from '@/router';

</script>

<style></style>