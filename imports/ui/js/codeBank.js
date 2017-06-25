import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router'

import '../html/codeBank.html';
import './category.js';

import '../../../lib/collections/codeCol.js';

Template.codeBankLeft.helpers({
    listCodes : function(){
        return Meteor.CodeColMethods.list();
    }
});
Template.codeBankLeft.events({
    'click #delete-code' : function(e){
        Meteor.CodeColMethods.remove(this._id);
    }

});
Template.codeBank.events({
    "submit #newCode" : function(e){
        e.preventDefault();
        var name = $("#codeName").val();
        var content = $("#codeContent").val();
        var tags = "empty";
        Meteor.CodeColMethods.insert(name,content,tags);
        $("#newCode :input").each(function(){
            $(this).val("");
        });
    },
});

Template.codeBankShow.helpers({
    getActiveCode : function(){
        var id = FlowRouter.getParam('id');
        //console.log( Meteor.CodeColMethods.getById(id));
        return Meteor.CodeColMethods.getById(id);
    }
});