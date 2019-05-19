import {
    ADD_POST,
    RESET_POST,
    SAVE_POST,
    SAVE_POSTS
} from './mutation-types';

import { reduce } from 'ramda';
import { safeRequest } from '@/utils/requestHandler';
import {
    addPost,
    getPosts,
    getPostById
} from '@/services/api';

export default {
    namespaced: true,
    state: {
        post: {
            id: null,
            title: '',
            image: '',
            content: '',
            createdAt: ''
        },
        posts: []
    },
    getters: {
        getPostsMap: (state) => reduce(createPostsMap, {}, state.posts)
    },
    actions: {
        async loadPosts ({ commit }) {
                const posts = await safeRequest(getPosts);

                if (posts.error) return posts.error;
                    
                commit(SAVE_POSTS, posts);
                return { success: true };
        },
        async loadPostById({ commit }, id) {
            const post = await safeRequest(getPostById(id));

            if (post.error) return post.error;

            commit(ADD_POST, post);
            return { success: true };
        },
        async savePost ({ commit }, post) {
            const res = await safeRequest(addPost(post));

            if (res.error) return res.error;

            commit(SAVE_POST, post);
            return { success: true };
        },
        resetPost ({ commit }) {
            commit(RESET_POST);
        }
    },
    mutations: {
        [SAVE_POSTS] (state, posts) {
            state.posts = posts;
        },
        [SAVE_POST] (state, post) {
            state.posts = [post, ...state.posts];
        },
        [ADD_POST](state, post) {
            state.post = post;
        },
        [RESET_POST](state) {
            state.post = {
                id: null,
                title: '',
                image: '',
                content: '',
                createdAt: ''
            };
        },
    }
}

function createPostsMap (acc, post) {
    acc[post.id] = post;
    return acc;
}