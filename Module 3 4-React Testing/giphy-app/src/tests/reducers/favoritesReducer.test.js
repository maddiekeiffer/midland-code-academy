import React from 'react';
import '@testing-library/jest-dom';
import { favoritesReducer,
ADD_FAVORITE,
REMOVE_FAVORITE,
CLEAR_FAVORITES} from '../../reducers/favoritesReducer';

describe('Favorites Reducer', () => {
    it('should add one favorite at a time', () => {
        let startingState = [];
        let state = favoritesReducer(startingState, {
            type: ADD_FAVORITE,
            payload: { title: "First", url: "a", gif_id: "1" },
        });

        expect(state.length).toBe(1);
        expect(state).toEqual([{ title: "First", url: "a", gif_id: "1" }]);

        state = favoritesReducer(state, {
            type: ADD_FAVORITE,
            payload: { title: "Second", url: "b", gif_id: "2" },
        });

        expect(state.length).toBe(2);
        expect(state).toEqual([
        { title: "First", url: "a", gif_id: "1" },
        { title: "Second", url: "b", gif_id: "2" },
        ]);

        expect(state).not.toBe(startingState);
    });

    it('should remove correct favorite gif', () => {
        const startingState = [
            { title: "First", url: "a", gif_id: "1" },
            { title: "Second", url: "b", gif_id: "2" },
            { title: "Third", url: "c", gif_id: "3" },
        ];
        let state = favoritesReducer(startingState, {
            type: REMOVE_FAVORITE,
            payload: "2",
        });

        expect(state.length).toBe(2);
        expect(state).toEqual([
            { title: "First", url: "a", gif_id: "1" },
            { title: "Third", url: "c", gif_id: "3" },
        ]);
        expect(state).not.toBe(startingState);

    });

    it('should clear favorites', () => {
        const startingState = [
            { title: "First", url: "a", gif_id: "1" },
            { title: "Second", url: "b", gif_id: "2" },
            { title: "Third", url: "c", gif_id: "3" },
        ];
        let state = favoritesReducer(startingState, {
            type: CLEAR_FAVORITES,
        });
        expect(state.length).toBe(0);
        expect(state).not.toBe(startingState);
    });

});

