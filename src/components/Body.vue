<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <v-form >
                    <v-container>
                        <v-layout row wrap>
                            <v-flex xs6 m6>
                                <div class="select">
                                    <select v-model="typeId" @change="setTypeId(typeId)" class="select-text">
                                        <option 
                                            v-for="type in types" 
                                            v-bind:value="type.title"
                                            >
                                            {{type.title}}
                                        </option>
                                    </select>
                                    <span class="select-highlight"></span>
                                    <span class="select-bar"></span>
                                    <label class="select-label">Tipo de identificacion</label>
                                </div>
                            </v-flex>
                            <v-flex xs6 m6>
                                <v-text-field
                                  v-model="id"
                                  label="Numero de Identificacion"
                                  @keyup="sendValue({type: 'ID', payload: id})"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                            <v-flex m12>
                                <div>
                                    <v-subheader class="subtitle">Tipo de sangre</v-subheader>
                                </div>
                                <div>
                                    <ul class="listBlood">
                                        <li v-for="blood in bloods">
                                            <div v-if="typeBlood == blood.title">
                                                <v-btn 
                                                    small 
                                                    class="btn-click-activeB"
                                                    v-on:click="setBlood({type: 'TYPE_BLOOD', payload: blood.title})">
                                                     {{blood.title}}
                                                </v-btn>
                                            </div>
                                           <div v-else>
                                                <v-btn 
                                                    small 
                                                    class="btn-clickB"
                                                    v-on:click="setBlood({type: 'TYPE_BLOOD', payload: blood.title})">
                                                     {{blood.title}}
                                                </v-btn>
                                           </div>
                                        </li>
                                    </ul>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-form>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>

import {mapActions} from 'vuex';

export default {
    name: "bodyC",
    mounted(){
        this.id = this.$store.state.profile.id
        this.typeId = this.$store.state.profile.typeId
        this.typeBlood = this.$store.state.profile.typeBlood
    },
    data: () => ({
        valid: false,
        id: null,
        typeId: '',
        typeBlood: null,
        types: [
            {title: 'Rif'},
            {title: 'Cedula'},
            {title: 'Pasaporte'},
            {title: 'Licencia'},
        ],
        bloods: [
            {title: 'O+'},
            {title: 'O-'},
            {title: 'A+'},
            {title: 'A-'},
            {title: 'B+'},
            {title: 'B-'},
            {title: 'AB+'},
            {title: 'AB-'},
            {title: 'Desconocido'},
        ]
    }),
    methods: {
        ...mapActions([
            'sendValue', // mapeamos this.sendValue() a this.$store.dispatch('sendValue')
        ]),
        setBlood(value){
            console.log(this.typeId)
            this.sendValue(value)
            this.typeBlood = value.payload
        },
        setTypeId(value){
            this.sendValue({type: 'TYPE_ID', payload: value})
            this.typeId = value
        }
    },
   
};
</script>

<style lang="scss">
    .subtitle{
        color: #B3B3B3;
    }
    .btn-clickB{
        text-transform: capitalize !important;
        color: #6b6464;
        border: 1px solid currentColor;
        background: transparent!important;
        padding-top: 5px;
    }
    .btn-click-activeB{
        background: #26C6DA !important;
        border-color: #26C6DA;
        color: white;
        padding-top: 5px;
        text-transform: capitalize !important;
    }
    .listBlood{
        list-style: none;
        li, div{
            display: inline;
        }
    }
    .select {
        font-family:
        'Roboto','Helvetica','Arial',sans-serif;
        position: relative;
        top: 8px;
    }
    .select-text {
        position: relative;
        font-family: inherit;
        background-color: transparent;
        width: 350px;
        padding: 10px 10px 10px 0;
        font-size: 18px;
        border-radius: 0;
        border: none;
        border-bottom: 1px solid rgba(0,0,0, 0.12);
    }
    .select-text:focus {
        outline: none;
        border-bottom: 1px solid rgba(0,0,0, 0);
    }
    .select .select-text {
        appearance: none;
        -webkit-appearance:none
    }
    .select:after {
        position: absolute;
        top: 18px;
        right: 10px;
        width: 0;
        height: 0;
        padding: 0;
        content: '';
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid rgba(0, 0, 0, 0.12);
        pointer-events: none;
    }

    .select-label {
        color: rgba(0,0,0, 0.26);
        font-size: 18px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 0;
        top: 10px;
        transition: 0.2s ease all;
    }

    .select-text:focus ~ .select-label, .select-text:valid ~ .select-label {
        color: #B3B3B3;
        top: -20px;
        transition: 0.2s ease all;
        font-size: 14px;
    }

    .select-bar {
        position: relative;
        display: block;
        width: 350px;
    }

    .select-bar:before, .select-bar:after {
        content: '';
        height: 2px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: black;
        transition: 0.2s ease all;
    }

    .select-bar:before {
        left: 50%;
    }

    .select-bar:after {
        right: 50%;
    }

    .select-text:focus ~ .select-bar:before, .select-text:focus ~ .select-bar:after {
        width: 50%;
    }

    .select-highlight {
        position: absolute;
        height: 60%;
        width: 100px;
        top: 25%;
        left: 0;
        pointer-events: none;
        opacity: 0.5;
    }
</style>
