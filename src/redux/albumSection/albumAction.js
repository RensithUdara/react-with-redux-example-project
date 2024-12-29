import axios from "axios";
import { FETCH_ALBUM_LOADING, FETCH_ALBUM_SUCCESS, FETCH_ALBUM_ERROR } from "./albumTypes";

function fettchAlbumLoading(isLoading) {
    return {
        type: 'FETCH_ALBUM_LOADING',
        payload: isLoading
    }
}

function fetchAlbumSuccess(albums) {
    return {
        type: 'FETCH_ALBUM_SUCCESS',
        payload: albums
    }
}

function fetchAlbumError(error) {
    return {
        type: 'FETCH_ALBUM_ERROR',
        payload: error
    }
}

export function fetchAlbums() {
    return async function (dispatch, getState) {
        dispatch(fetchAlbumLoading(true));
        try {
            const results = await axios.get('https://jsonplaceholder.typicode.com/albums');
            dispatch(fetchAlbumSuccess(results.data));
        } catch (error) {
            dispatch(fetchAlbumError(error.message));
        }
        dispatch(fetchAlbumLoading(false));
    }
}