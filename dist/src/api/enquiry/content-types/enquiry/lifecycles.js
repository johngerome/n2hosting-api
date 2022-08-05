"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ApplicationError, ValidationError } = require('@strapi/utils').errors;
const regexValidIp = /^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$/;
exports.default = {
    beforeCreate(event) {
        const { data, where, select, populate } = event.params;
        if (!regexValidIp.test(event.params.data.ip_address)) {
            throw new ValidationError('Invalid IP Address');
        }
    },
    beforeUpdate(event) {
        const { data, where, select, populate } = event.params;
        if (!regexValidIp.test(event.params.data.ip_address)) {
            throw new ValidationError('Invalid IP Address');
        }
    }
};
