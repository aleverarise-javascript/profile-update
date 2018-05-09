<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">Datos personales</h3>
                    </div>
                </v-card-title>
            </v-flex>
            <v-flex xs2>
                <v-avatar
                  :size=50
                  color="grey lighten-4"
                >
                    <img v-bind:src="'data:'+typeImage+';base64,'+image" class="avatar-img" />
                    <base64-upload @change="onChangeImage">
                    </base64-upload>
                </v-avatar>
            </v-flex>
            <v-flex xs10>
                <v-form v-model="valid">
                    <v-layout row wrap>
                        <v-flex m6>
                           <div>
                                <v-text-field
                                    v-model="name"
                                    @keyup="sendValue({type: 'NAME', payload: name})"
                                    :rules="nameRules"
                                    label="Nombre"
                                    required
                                    color="#B3B3B3"
                                ></v-text-field>
                            </div>
                            <div class="text-sm-left">
                                <div v-if="gender == 'F'">
                                    <v-btn small class="btn-click-active" v-on:click="setGender({type: 'GENDER', payload: 'F'})">
                                        <v-icon small class="icon-button">fas fa-female</v-icon>
                                         Femenino
                                    </v-btn>

                                    <v-btn small class="btn-click" v-on:click="setGender({type: 'GENDER', payload: 'M'})">
                                        <v-icon small class="icon-button">fas fa-male</v-icon>
                                         Masculino
                                    </v-btn>
                                </div>

                                <div v-if="gender == 'M'">
                                    <v-btn small class="btn-click" v-on:click="setGender({type: 'GENDER', payload: 'F'})">
                                        <v-icon small class="icon-button">fas fa-female</v-icon>
                                         Femenino
                                    </v-btn>

                                    <v-btn small class="btn-click-active" v-on:click="setGender({type: 'GENDER', payload: 'M'})">
                                        <v-icon small class="icon-button">fas fa-male</v-icon>
                                         Masculino
                                    </v-btn>
                                </div>

                                <div v-if="gender == null">
                                    <v-btn small class="btn-click" v-on:click="setGender({type: 'GENDER', payload: 'F'})">
                                        <v-icon small class="icon-button">fas fa-female</v-icon>
                                         Femenino
                                    </v-btn>

                                    <v-btn small class="btn-click" v-on:click="setGender({type: 'GENDER', payload: 'M'})">
                                        <v-icon small class="icon-button">fas fa-male</v-icon>
                                         Masculino
                                    </v-btn>
                                </div>
                            </div>
                        </v-flex>
                        <v-flex m6>
                            <v-text-field
                                v-model="lastname"
                                label="Apellidos"
                                @keyup="sendValue({type: 'LASTNAME', payload: lastname})"
                                color="#B3B3B3"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-form>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>

import Base64Upload from 'vue-base64-upload'
import {mapActions} from 'vuex';

export default {
    name: "headerC",
    components: {
        Base64Upload
    },
    mounted(){
        this.name = this.$store.state.profile.name
        this.lastname = this.$store.state.profile.lastname
        this.gender = this.$store.state.profile.gender
        this.typeImage = this.$store.state.profile.typeImage
        this.image = this.$store.state.profile.image
    },
    data: () => ({
        valid: false,
        name: null,
        lastname: null,
        gender: null,
        typeImage: null,
        image: null,
        nameRules: [
            v => !!v || 'Nombre Requerido',
        ],
    }),
    methods: {
        ...mapActions([
            'sendValue', // mapeamos this.sendValue() a this.$store.dispatch('sendValue')
        ]),
        setGender(value){
            this.sendValue(value)
            this.gender = value.payload
        },
        onChangeImage(file) {
            this.sendValue({type: 'TYPE_IMAGE', payload: file.type})
            this.sendValue({type: 'BASE_64', payload: file.base64})
            this.typeImage = file.type
            this.image = file.base64
        }
    },
};
</script>

<style lang="scss">
    .btn-click{
        text-transform: capitalize !important;
        color: #6b6464;
        border: 1px solid currentColor;
        background: transparent!important;
    }
    .btn-click-active{
        background: #26C6DA !important;
        border-color: #26C6DA;
        color: white;
    }
    .icon-button{
        padding-right: 5px
    }
    .input-group--text-field input,
    .input-group--select .input-group__input{
        border-bottom: 1px solid #B3B3B3;
    }
    .btn.btn--outline{
        border-color: #B3B3B3 !important;
    }
    .input-group label{
        color: #B3B3B3;
    }
    .base64-upload[data-v-6daa18d9]{
        width: 50px;
        height: 50px;
        cursor: pointer;
        right: 25px;
        img{
            display: none
        }
    }
    .avatar-img{
        width: 50px !important;
        height: 50px !important;
        position: relative;
    }
</style>
