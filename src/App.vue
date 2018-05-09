<template>
    <div id="app">
        <v-layout>
            <v-flex xs12 sm8 offset-sm2>
                <v-card>
                    <v-container grid-list-md>
                        <v-layout row wrap>
                            <v-flex xs12>
                                <HeaderC></HeaderC>
                            </v-flex>

                            <v-flex xs12>
                                <BodyC></BodyC>
                            </v-flex>

                            <v-flex xs12>
                                <FooterC></FooterC>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import HeaderC from "./components/Header.vue";
import BodyC from "./components/Body.vue";
import FooterC from "./components/Footer.vue";

export default {
    name: "app",
    components: {
        HeaderC,
        BodyC,
        FooterC,
    },
    methods: {
    }
};
</script>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
body{
    background-color: #ECEFF1;
}
.card{
    background-color: white;
    -webkit-box-shadow: -8px 9px 21px -5px rgba(179,179,179,1) !important;
    -moz-box-shadow: -8px 9px 21px -5px rgba(179,179,179,1) !important;
    box-shadow: -8px 9px 21px -5px rgba(179,179,179,1) !important;
}
</style>
