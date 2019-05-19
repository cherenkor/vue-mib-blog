import {
    SIGN_IN,
    SIGN_OUT
} from './mutation-types';

import { safeRequest } from '@/utils/requestHandler';
import {
    signInWithEmail
} from '@/services/api';

export default {
    namespaced: true,
    state: {
        isAuthenticated: false
    },
    getters: {
        
    },
    actions: {
        async signIn ({ commit }, credentials) {
                const res = await safeRequest(signInWithEmail(credentials));
                console.log(res);

                if (res.error) return res.error;
                    
                commit(SIGN_IN, res);
                return { success: true };
        },
        signOut ({ commit }) {
            commit(SIGN_OUT);
        }
    },
    mutations: {
        [SIGN_IN] (state) {
            state.isAuthenticated = true;
        },
        [SIGN_OUT](state) {
            state.isAuthenticated = false;
        },
    }
};