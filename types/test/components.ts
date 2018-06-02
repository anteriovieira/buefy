import Vue from 'vue'
import Buefy, { Autocomplete } from '../';

Vue.use(Buefy)

Vue.component('BAutocomplete', Autocomplete)

const app = new Vue()
