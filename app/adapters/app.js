//import ApplicationAdapter from './application';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://ember_telen-api-kovatszoltan.c9users.io',
    namespace: ''
});
