const fetch = require('node-fetch');

async function getComments() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        const comments = await response.json();
        console.log("Комментарии с четным id:");
        comments.forEach(comment => {
            if (comment.id % 2 === 0) {
                console.log(comment);
            }
        });
    } catch (error) {
        console.error('Ошибка при получении комментариев:', error);
    }
}

async function getPhotos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        const photos = await response.json();
        console.log("Фотографии с названием, начинающимся на 'a':");
        photos.forEach(photo => {
            if (photo.title.startsWith('a')) {
                console.log(photo);
            }
        });
    } catch (error) {
        console.error('Ошибка при получении фотографий:', error);
    }
}

async function getAlbums() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1/albums');
        const albums = await response.json();
        console.log("Альбомы с id > 5:");
        const filteredAlbums = albums.filter(album => album.id > 5);
        console.log(filteredAlbums);
    } catch (error) {
        console.error('Ошибка при получении альбомов:', error);
    }
}

getComments();
getPhotos();
getAlbums();
