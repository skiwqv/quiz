<template>
    <v-container>
        <v-navigation-drawer v-model="drawer" temporary app>
            <v-list density="compact" nav>
                <v-list-item-group>
                    <v-list-item v-for="link in links" :key="link.title" :to="link.url">
                        <v-btn :append-icon="link.icon" variant="text">{{ link.title }}</v-btn>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-container>
    <v-app-bar>
        <div>
            <v-app-bar-nav-icon color="primary" @click.stop="drawer = !drawer">
            </v-app-bar-nav-icon>
        </div>
    </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';

let drawer = ref(null)


let links = [{
    title: 'Home',
    url: '/',
    icon: 'mdi-home'
},
{
    title: 'About',
    url: '/about',
    icon: 'mdi-information-outline'
},
{
    title: 'Results',
    url: '/result',
    icon: 'mdi-file-chart-outline'
}
]



</script>

<style scoped></style>