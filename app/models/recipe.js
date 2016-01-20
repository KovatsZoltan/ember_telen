import DS from 'ember-data';

export default DS.Model.extend({
   name: DS.attr('string'),
   level: DS.attr('string'),
   ingredients: DS.hasMany('ingredient', {async: true})
});
