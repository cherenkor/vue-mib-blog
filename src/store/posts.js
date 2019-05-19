import {
    SAVE_POSTS,
    SAVE_MORE_POSTS
} from './mutation-types';
import { reduce } from 'ramda';

import posts from '../data/posts.json';

export default {
    namespaced: true,
    state: {
        posts: []
    },
    getters: {
        getPostsMap: (state) => reduce(createPostsMap, {}, state.posts)
    },
    actions: {
        loadPosts ({ commit }) {
            setTimeout(() => commit(SAVE_POSTS, posts), 1000);
        },
        async loadMorePosts ({ commit }) {
            try {
                await new Promise((res) => {
                    setTimeout(() => {
                        commit(SAVE_MORE_POSTS, posts)
                        res();
                    }, 1000);
                });
            } catch (e) {
                console.log(e);
                return { error: e };
            }
        }
    },
    mutations: {
        [SAVE_POSTS] (state, posts) {
            state.posts = posts;
        },
        [SAVE_MORE_POSTS] (state, posts) {
            console.log(posts);
            state.posts = [...state.posts, ...posts];
        },
    }
}

function createPostsMap (acc, post) {
    acc[post.id] = post;
    return acc;
}