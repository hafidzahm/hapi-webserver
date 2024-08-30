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

    // '/hello/{params-optional?}' GET
    // '/hello/{params?}={query} GET

    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "stranger" } = request.params;
            //QUERY PARAMS
            const { lang } = request.query;

            if (lang === 'id') {
            return `Hai, ${name}!`;
            }

            return `Hello, ${name}`;
        }
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