import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

import '../html/category.html';
import '../../../lib/collections/categoryCol.js';

const tempCatCol = new Mongo.Collection(null);//this will used for temporary selected categorys

Template.category.helpers({
  listCategorys : function(){
    return Meteor.CatColMethods.list();
  }
});
Template.category.events({
  'submit #newCategory': function(e){
    e.preventDefault();
    Meteor.CatColMethods.insert($('#categoryName').val());
    $('#categoryName').val("");
  },
  'click #categoryRemove': function(e){
    Meteor.CatColMethods.remove(this._id);
  },
});

Template.categorySelect.onCreated(function categorySelectOnCreated(){
  this.searchQuery = ReactiveVar("");
});
Template.categorySelect.helpers({
  listSearched : function(){
    return Meteor.CatColMethods.list();
  },
  listAdded : function(){
    return tempCatCol.find();
  },
  getSearchQuery : function(){
    return Meteor.CatColMethods.search(Template.instance().searchQuery.get(),3);
  }
});
Template.categorySelect.events({
  'input #categorySelectInput':function(e){
    Template.instance().searchQuery.set($("#categorySelectInput").val());
  },
  'click #categorySelectAdd' : function(e){
    tempCatCol.insert(this);
  },
  'click #categoryRemove' : function(e){
    tempCatCol.remove(this._id);
  }


});
