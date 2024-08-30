const routes = [
    // '/' GET
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage'
        }
    },

    // '/' any
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak bisa diakses dengan method tersebut';
        },
    },

    // '/about' GET
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },

    // '/about' any

    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },

    },

    // 'any' any

    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },










];

module.exports = routes;


// testing
//     curl -X GET http://localhost:3000