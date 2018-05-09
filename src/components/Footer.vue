<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">Datos de contacto</h3>
                    </div>
                </v-card-title>
                <v-form v-model="valid">
                    <v-container>
                        <v-layout row wrap>
                            <v-flex xs1 m1 class="paddin-right">
                                <div class="select">
                                    <select v-model="type" @change="setType(type)" class="select-text">
                                        <option 
                                            v-for="type in types" 
                                            v-bind:value="type.text"
                                            >
                                            {{type.text}}
                                        </option>
                                    </select>
                                    <span class="select-highlight"></span>
                                    <span class="select-bar1"></span>
                                    <label class="select-label">Tipo</label>
                                </div>
                            </v-flex>
                            <v-flex xs2 m2 class="paddin-right paddin-left">
                                <div class="select">
                                    <select v-model="code" @change="setCode(code)" class="select-text">
                                        <option 
                                            v-for="code in codes" 
                                            v-bind:value="code.text"
                                            >
                                            {{code.text}}
                                        </option>
                                    </select>
                                    <span class="select-highlight"></span>
                                    <span class="select-bar2"></span>
                                    <label class="select-label">Codigo</label>
                                </div>
                            </v-flex>
                            <v-flex xs4 m4 class="paddin-left">
                                <v-text-field
                                  v-model="phone"
                                  type="number"
                                  :rules="phoneRules"
                                  @keyup="setPhone(phone)"
                                  label="Telefono"
                                ></v-text-field>
                            </v-flex>
                             <v-flex xs5 m5>
                                <v-text-field
                                  v-model="email"
                                  :rules="emailRules"
                                  required
                                  @keyup="setEmail(email)"
                                  label="Correo"
                                ></v-text-field>
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
    name: "footerC",
    mounted(){
        this.email = this.$store.state.profile.email
        this.phone = this.$store.state.profile.phone
        this.type = this.$store.state.profile.type
        this.code = this.$store.state.profile.code
    },
    data: () => ({
        valid: false,
        type: null,
        code: null,
        phone: 'null',
        phoneRules: [
            v => v.length === 7 || 'Debe tener 7 caracteres.'
        ],
        email: null,
        emailRules: [
            v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Correo no valido.'
        ],
        types: [
            { text: 'Phone' },
            { text: 'Home' },
        ],
        codes: [
            { text: '0414' },
            { text: '0424' },
            { text: '0412' },
            { text: '0416' },
            { text: '0426' },
        ],
    }),
    methods: {
        ...mapActions([
            'sendValue', // mapeamos this.sendValue() a this.$store.dispatch('sendValue')
        ]),
        setEmail(value){
            let exp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
            if(exp){
                this.sendValue({type: 'EMAIL', payload: value})
            }
        },
        setPhone(value){
            if(value.length === 7){
                this.sendValue({type: 'PHONE', payload: value})
            }
        },
        setType(value){
            this.sendValue({type: 'TYPE', payload: value})
            this.type = value
        },
        setCode(value){
            this.sendValue({type: 'CODE', payload: value})
            this.code = value
        }
    },
};
</script>

<style lang="scss">
    .paddin-left{
        padding-left: 0px !important;
    }
    .paddin-right{
        padding-right: 0px !important;
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
    .select-bar2 {
        position: relative;
        display: block;
        width: 132px;
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
