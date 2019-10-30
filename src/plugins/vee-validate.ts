import Vue from "vue";
import VeeValidate from "vee-validate";
import VueValidationEs from 'vee-validate/dist/locale/es';
Vue.use(VeeValidate, {
    inject: false,
    locale: 'es',
    dictionary: {
        es: VueValidationEs
    }
})