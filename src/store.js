import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    	profile: {
    		name: (localStorage.getItem('NAME')) ? localStorage.getItem('NAME') : null,
			lastname: (localStorage.getItem('LASTNAME')) ? localStorage.getItem('LASTNAME') : null,
			gender: (localStorage.getItem('GENDER')) ? localStorage.getItem('GENDER') : null,
			id: (localStorage.getItem('ID')) ? localStorage.getItem('ID') : null,
			typeId: (localStorage.getItem('TYPE_ID')) ? localStorage.getItem('TYPE_ID') : '',
			typeBlood: (localStorage.getItem('TYPE_BLOOD')) ? localStorage.getItem('TYPE_BLOOD') : null,
			email: (localStorage.getItem('EMAIL')) ? localStorage.getItem('EMAIL') : null,
            phone: (localStorage.getItem('PHONE')) ? localStorage.getItem('PHONE') : '',
            type: (localStorage.getItem('TYPE')) ? localStorage.getItem('TYPE') : '',
            code: (localStorage.getItem('CODE')) ? localStorage.getItem('CODE') : '',
            typeImage: (localStorage.getItem('TYPE_IMAGE')) ? localStorage.getItem('TYPE_IMAGE') : '',
			image: (localStorage.getItem('BASE_64')) ? localStorage.getItem('BASE_64') : '',
    	}
    },
    mutations: {
    	setData(state, payload){
    		switch (payload.type) {
		        case payload.type:
		        	let aux = localStorage.getItem(payload.type);
		        	if(aux){
		        		localStorage.removeItem(payload.type);
		        		localStorage.setItem(payload.type, payload.payload);
		        	}else{
		        		localStorage.setItem(payload.type, payload.payload);
		        	}
		            break
		        default:
		            return state
		    }
    	},
    	allData(state){
    		state.profile = {
    			name: (localStorage.getItem('NAME')) ? localStorage.getItem('NAME') : null,
    			lastname: (localStorage.getItem('LASTNAME')) ? localStorage.getItem('LASTNAME') : null,
    			gender: (localStorage.getItem('GENDER')) ? localStorage.getItem('GENDER') : null,
    			id: (localStorage.getItem('ID')) ? localStorage.getItem('ID') : null,
				typeId: (localStorage.getItem('TYPE_ID')) ? localStorage.getItem('TYPE_ID') : '',
				typeBlood: (localStorage.getItem('TYPE_BLOOD')) ? localStorage.getItem('TYPE_BLOOD') : null,
				email: (localStorage.getItem('EMAIL')) ? localStorage.getItem('EMAIL') : null,
                phone: (localStorage.getItem('PHONE')) ? localStorage.getItem('PHONE') : '',
                type: (localStorage.getItem('TYPE')) ? localStorage.getItem('TYPE') : '',
				code: (localStorage.getItem('CODE')) ? localStorage.getItem('CODE') : '',
                typeImage: (localStorage.getItem('TYPE_IMAGE')) ? localStorage.getItem('TYPE_IMAGE') : '',
                image: (localStorage.getItem('BASE_64')) ? localStorage.getItem('BASE_64') : '',
    		}
    	}
    },
    actions: {
    	sendValue({state, commit, rootstate}, value){
    		commit('setData', value)
    		commit('allData')
    	},
    }
})
