import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../imports/ui/js/main.js';

FlowRouter.route('/',{
  action : function(){
    BlazeLayout.render('main',{content : 'home'});
  }
});
FlowRouter.route('/calendar',{
  action : function(){
    BlazeLayout.render('main',{content : 'calendar'});
  }
});
FlowRouter.route('/codes',{
  action : function(){
    BlazeLayout.render('main',{content : 'codeBank'})
  }
});
FlowRouter.route('/codes/:id',{
  action : function(params,queryParams){
    BlazeLayout.render('main',{
      content : 'codeBankShow',
      params : params
    })
  }
});
FlowRouter.route('/notes',{
  action : function(){
    BlazeLayout.render('main',{content : 'noteBook'})
  }

});
FlowRouter.route('/categorys/',{
  action : function(){
    BlazeLayout.render('main',{content : 'category'});
  }
});