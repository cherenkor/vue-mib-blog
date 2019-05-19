import Vue from 'vue';
import { path } from 'ramda';

Vue.mixin({
    data() {
        return {
            lazyImage: '/img/img-placeholder.png',
            colors: {
                default: '#999999',
                light: '#FAFAF9',
                dark: '#87928B',
                primary: '#d9ac98',
                info: '#927060',
                success: '#76ae66',
                warning: '#f49e2e',
                danger: '#f44336',
            }
        }
    },
    methods: {
        goToPage (settings) {
            this.$router.push(settings);
        },
        get (pathDotString, object) {
            return path(pathDotString.split('.'), object);
        },
        goBack () {
            this.$router.go(-1);
        }
    }
});