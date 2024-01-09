<template>
    <v-container>
        <v-navigation-drawer v-model="drawer" temporary app>
            <v-list density="compact" nav>
                <v-list-item-group>
                    <v-list-item v-for="link in links" :key="link.title" :to="link.url">
                        <v-btn variant="text">{{ link.title }}</v-btn>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-container>
    <v-app-bar>
        <div>
            <v-btn color="primary" @click.stop="drawer = !drawer">
                toogle
            </v-btn>
        </div>
    </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';

let drawer = ref(null)


let links = [{
    title: 'Home',
    url: '/'
},
{
    title: 'About',
    url: '/about'
}]



</script>

<style scoped></style>