import {
    GET_POSTS_SUCCESS, GET_POSTS_ERROR,
    SUBMIT_POST_SUCCESS, SUBMIT_POST_ERROR

} from "../../constants";

const defaultState = {
    posts: null
};

export const postsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            return { ...state, posts: action.payload.reverse() };
        case GET_POSTS_ERROR:
            return state;
        case SUBMIT_POST_SUCCESS:
            return { ...state, posts: [action.payload, ...state.posts] };
        case SUBMIT_POST_ERROR:
            return state;

        default:
            return state;
    }
};
