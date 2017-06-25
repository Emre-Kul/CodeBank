import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


import '../html/calendar.html';
import '../../../lib/collections/calendarCol.js';

Template.calendar.helpers({
  listEvents : function(){
    return Meteor.CalColMethods.list();
  },
});
Template.calendar.rendered = function() {
  //$.datepicker.parseDate( "yy-mm-dd", "2007-01-26" );
};
//$('#eventDate').datepicker();
Template.calendar.events({
  'submit #newEvent': function(e){
    e.preventDefault();
    Meteor.CalColMethods.insert($('#eventTitle').val(),$('#eventDesc').val(),$('#eventDate').val());
      $("#newEvent :input").each(function(){
            $(this).val("");
        });
  },
  'click #deleteEvent' : function(e){
      Meteor.CalColMethods.remove(this._id);
  },

});
