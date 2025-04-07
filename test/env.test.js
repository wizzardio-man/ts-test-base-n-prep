const assert = require('assert');

describe('Environment Variable Test', () => {
    before(() => {
        console.log('Before step')
    });

    it('should log the ENV_VAR and run test', () => {
        const envVar = process.env.BASE_URL || 'Not defined';
        console.log('LOG BASE_URL:', envVar);
        assert.ok(envVar);
    });
});