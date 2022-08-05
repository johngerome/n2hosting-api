"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    auth: {
        secret: env('ADMIN_JWT_SECRET', 'fa799ada4028489ae9a83908691484df'),
    },
    apiToken: {
        salt: env('API_TOKEN_SALT', 'O1Bay0t/rOmBoSiZcLhuRQ==')
    }
});
