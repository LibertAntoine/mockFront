import Vue from 'vue';
import Vuex from 'vuex';
import test from './modules/test';
//import network from './modules/network';
import neuron from './modules/neuron';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		server: 'http://localhost:3000'
	},
	modules: {
		test,
		neuron
	}
})
