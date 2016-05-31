import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';
import { Mongo } from 'meteor/mongo';
import './main.html';
Chats = new Mongo.Collection('chats');
var thumbTarget = "";
var clicked = 0;
var prevDiv = ".lizardDescription";
var caughtInTheCrossfireCount = 0;
var theBallCount = 0;
var snowflakesCount = 0;
var followMeCount = 0;
var swanSongCount = 0;
var completeCount = 0;
var letMeInCount = 0;
var bittersweetCount = 0;
var heroesCount = 0;
var ramblingsCount = 0;
var optimistCount = 0;
var justBreatheCount = 0;
var eventId= "";
var currentPage = "page1"
var ballCurrentPage = "newPage1";
var myPics = ["venice", "lizard_woman","Swiss_stream","beach","Brandeis_fall","cat","Colorize","compositing_fun","mountains_water","swiss_view","swiss_mounatins_lens_flare","swissDE2","FlowerDE","into_the_sunset","SwissDE1"];
var caughtInTheCrossfirePages = ["page1","page2","page3","page4","page5","page6","page7", "page8"];
var theBallPages = ["newPage1","newPage2","newPage3","newPage4","newPage5","newPage6","newPage7","newPage8","newPage9","newPage10","newPage11","newPage12","newPage13"];
Router.route('/photoshop');
Router.route('/originals');
Router.route('/stories');
Router.route('/lyrics');
Router.route('/about');
//Router.route('/contact');
Router.route('/', {
    name: 'home',
	template: 'home'
});
Router.configure({
    layoutTemplate: 'main'
});
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

Template.main.helpers({	
   comment() {
    // Show newest tasks at the top
    return Chats.find({}, { sort: { createdAt: -1 } });
  },
});
Template.main.events({
  'click .edit'(){
	if(isLoggedIn==1 && Meteor.user().username == "jeremy"){
		$("div.deleteButton").show();
	}
  },
  'click .delete'() {
    Chats.remove(this._id);
  },
  'click .new-comment': function(){  
		var isLoggedIn = 0;
		try {
			if(Meteor.user().username){
			isLoggedIn = 1;
			}
		}
		catch(err) {
		}
		
		if(isLoggedIn==0){
			alert("Please login to comment");
		}
  },
  'click .btn.btn-default.cancel': function(){
		console.log("hi");
		$('#new-comment').trigger("reset");
  },
  'click .btn.btn-primary.submit': function(){   
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const text = $("#exampleTextarea").val();
 
    // Insert a task into the collection
    Chats.insert({
      text,
      createdAt: new Date(), // current time
	  owner: Meteor.userId(),
      username: Meteor.user().username,
    });
	$('#new-comment').trigger("reset");
  },
});

Template.photoshop.events({ 
	
  'click .thumbnail': function(){  
		clicked = 1;
		var image = document.getElementById('galleryImage');
		eventId = event.target.id;	
		console.log("id is" + eventId);
		image.src = "/images/" + eventId + ".jpg";
	    $(".gray").show();
		console.log("event id is" + eventId);
		$("body").css("overflow", "hidden");
		console.log(image.src);
		console.log(eventId);
		showDescriptions(event.target.id);	
    },
	'click #remove': function(){ 
		//console.log("clicked");
		$(".gray").hide();
		$("body").css("overflow-y", "scroll");
		var image = document.getElementById('galleryImage');
		image.src = "";
	},
	'click #nextPic': function(){ 
		var image = document.getElementById('galleryImage');
		if(eventId=="SwissDE1"){
				image.src = "/images/venice.jpg";
				eventId = "venice";
		}else{
		for (var i = 0; i < myPics.length-1; i++) { 
			if(myPics[i]==(eventId)){
				image.src = "/images/" + myPics[i+1] + ".jpg";
				eventId= myPics[i+1];
				break;
			}
		}
		}
		showDescriptions(eventId);	
	},
	'click #prevPic': function(){ 
		var image = document.getElementById('galleryImage');
		if(eventId=="venice"){
				//console.log(eventId);
				image.src = "/images/SwissDE1.jpg";
				eventId = "SwissDE1";
		}else{
		for (var i = 0; i < myPics.length; i++) { 
			if(myPics[i]==(eventId)&&i>0){
				image.src = "/images/" + myPics[i-1] + ".jpg";
				eventId= myPics[i-1];
				break;
			}
		}}
		
		showDescriptions(eventId);
	},
	
});
//class for formatting id for page selection
Template.stories.events({
	'click #showCaughtInTheCrossfire': function(){
		if(caughtInTheCrossfireCount == 0){
			//console.log("yo");
			$("div.caughtInTheCrossfire").show();
			caughtInTheCrossfireCount ++;
		}else{
			$("div.caughtInTheCrossfire").hide();
			caughtInTheCrossfireCount = 0;
		}	
	},
	'click #showTheBall': function(){
		if(theBallCount == 0){
			//console.log("yo");
			$("div.theBall").show();
			theBallCount ++;
		}else{
			$("div.theBall").hide();
			theBallCount = 0;
		}	
	},
	'click #nextPage': function(){   
		for (var i = 0; i < caughtInTheCrossfirePages.length-1; i++) {
			if(caughtInTheCrossfirePages[i]==currentPage){
				//console.log("#"+ currentPage);
				//console.log("i is " + i);
				$("#"+caughtInTheCrossfirePages[i]).hide();
				$("#"+caughtInTheCrossfirePages[i+1]).show();
				currentPage = caughtInTheCrossfirePages[i+1];
				break;
			} 
		}
			if(currentPage == "page8"){
				//console.log("hey");
				$(".glyphicon.glyphicon-chevron-right.crossfire").hide();
			}
			if(currentPage != "page1"){
				//console.log("hey");
				$(".glyphicon.glyphicon-chevron-left.crossfire").show();
			}
    },
	'click #prevPage': function(){   		
		for (var i = 0; i < caughtInTheCrossfirePages.length; i++) {
			if(caughtInTheCrossfirePages[i]==currentPage&&i>0){
				$("#"+caughtInTheCrossfirePages[i-1]).show();
				$("#"+caughtInTheCrossfirePages[i]).hide();
				currentPage = caughtInTheCrossfirePages[i-1];
				break;
			} 
		}
		if(currentPage=="page7"){
				$(".glyphicon.glyphicon-chevron-right.crossfire").show();
		}
		if(currentPage=="page1"){
				$(".glyphicon.glyphicon-chevron-left.crossfire").hide();
		}
    },
	'click #nextPage1': function(){   
		for (var i = 0; i < theBallPages.length-1; i++) {
			if(theBallPages[i]==ballCurrentPage){
				$("#"+theBallPages[i]).hide();
				$("#"+theBallPages[i+1]).show();
				ballCurrentPage = theBallPages[i+1];
				break;
			} 
		}
			if(ballCurrentPage == "newPage13"){
				//console.log("onPage13");
				$(".glyphicon.glyphicon-chevron-right.ball").hide();
			}
			if(ballCurrentPage != "newPage1"){
				//console.log("notOnPage1");
				$(".glyphicon.glyphicon-chevron-left.ball").show();
			}		
    },
	
	'click #prevPage1': function(){   
		for (var i = 0; i < theBallPages.length; i++) {
			if(theBallPages[i]==ballCurrentPage&&i>0){
				$("#"+theBallPages[i-1]).show();
				$("#"+theBallPages[i]).hide();
				ballCurrentPage = theBallPages[i-1];
				break;
			} 
		}
		if(ballCurrentPage=="newPage12"){
				$(".glyphicon.glyphicon-chevron-right.ball").show();
		}
		if(ballCurrentPage=="newPage1"){
				$(".glyphicon.glyphicon-chevron-left.ball").hide();
		}
    },
});

Template.stories.onRendered(function () {
		//console.log("bye");
		if(theBallCount == 1){
			$("div.theBall").show();
			$("#"+ballCurrentPage).show();
			if(ballCurrentPage!="newPage1"){
				$(".glyphicon.glyphicon-chevron-left.ball").show();
			}
			if(ballCurrentPage == "newPage13"){
				$(".glyphicon.glyphicon-chevron-right.ball").hide();
			}
		}
		
		if(caughtInTheCrossfireCount == 1){
			$("div.caughtInTheCrossfire").show();
			$("#"+currentPage).show();
			if(currentPage!="page1"){
				$(".glyphicon.glyphicon-chevron-left.crossfire").show();
			}
			if(currentPage == "page8"){
				$(".glyphicon.glyphicon-chevron-right.crossfire").hide();
			}
		}	
 
});
Template.lyrics.events({
	'click #showSnowflakes': function(){
		if(snowflakesCount == 0){
			//console.log("yo");
			$("div.snowflakes").show();
			snowflakesCount ++;
		}else{
			$("div.snowflakes").hide();
			snowflakesCount = 0;
		}	
	},
	'click #showFollowMe': function(){
		if(followMeCount == 0){
			//console.log("yo");
			$("div.followMe").show();
			followMeCount ++;
		}else{
			$("div.followMe").hide();
			followMeCount = 0;
		}	
	},
	'click #showSwanSong': function(){
		if(swanSongCount == 0){
			//console.log("yo");
			$("div.swanSong").show();
			 swanSongCount++;
		}else{
			$("div.swanSong").hide();
			swanSongCount = 0;
		}
	}	
	,
	'click #showComplete': function(){
		if(completeCount == 0){
			//console.log("yo");
			$("div.complete").show();
			 completeCount++;
		}else{
			$("div.complete").hide();
			completeCount = 0;
		}
	}
	,
	'click #showLetMeIn': function(){
		if(letMeInCount == 0){
			//console.log("yo");
			$("div.letMeIn").show();
			 letMeInCount++;
		}else{
			$("div.letMeIn").hide();
			letMeInCount = 0;
		}
	}
	,
	'click #showBittersweet': function(){
		if(bittersweetCount == 0){
			//console.log("yo");
			$("div.bittersweet").show();
			 bittersweetCount++;
		}else{
			$("div.bittersweet").hide();
			bittersweetCount = 0;
		}
	}
	,
	'click #showHeroes': function(){
		if(heroesCount == 0){
			//console.log("yo");
			$("div.heroes").show();
			 heroesCount++;
		}else{
			$("div.heroes").hide();
			heroesCount = 0;
		}
	}
	,
	'click #showRamblings': function(){
		if(ramblingsCount == 0){
			//console.log("yo");
			$("div.ramblings").show();
			 ramblingsCount++;
		}else{
			$("div.ramblings").hide();
			ramblingsCount = 0;
		}
	}
	,
	'click #showOptimist': function(){
		if(optimistCount == 0){
			//console.log("yo");
			$("div.optimist").show();
			 optimistCount++;
		}else{
			$("div.optimist").hide();
			optimistCount = 0;
		}
	}
	,
	'click #showJustBreathe': function(){
		if(justBreatheCount == 0){
			//console.log("yo");
			$("div.justBreathe").show();
			 justBreatheCount++;
		}else{
			$("div.justBreathe").hide();
			justBreatheCount = 0;
		}
	}
	,
});
Template.originals.events({
	'click .imagePlaceholder': function(){
		$(thumbTarget).css("-webkit-filter", "brightness(1)");
		$(thumbTarget).css("filter", "brightness(1)");
		eventId = event.target.id;	
		var target = document.getElementById(eventId);
		video = $(target).attr('data-video');
		var vid = document.getElementById('currentVideo').src;
        document.getElementById('currentVideo').src = video;
		var thumbId = getThumbId(eventId);
		console.log("thumb id is " + thumbId);
		thumbTarget = document.getElementById(thumbId);
		$(thumbTarget).css("-webkit-filter", "brightness(0.25)");
		$(thumbTarget).css("filter", "brightness(0.25)");
	},
});
Template.lyrics.onDestroyed(function () {
		snowflakesCount = 0;
		followMeCount = 0; 
		swanSongCount = 0;
		completeCount = 0; 
		letMeInCount = 0;
		bittersweetCount = 0; 
		heroesCount = 0;
		ramblingsCount = 0; 
		optimistCount = 0;
		justBreatheCount = 0;  
});
function getThumbId(eventId){
		var thumbId = "";
		console.log(eventId);
		if(eventId == "imagePlaceholder1"){
			thumbId = "thumb1";
			return thumbId;
		}
		if(eventId == "imagePlaceholder2"){
			console.log("hi");
			thumbId = "thumb2";
			return thumbId;
		}
		return thumbId;
}
function showDescriptions(eventId) {
     if(eventId=="venice"){
			if(clicked == 1){
			$(prevDiv).hide();
			}
			$(".veniceDescription").show();
			prevDiv = ".veniceDescription";
			console.log("prev div is " + prevDiv);
		}
		if(eventId=="lizard_woman"){
			console.log("prev div is " + prevDiv);
			if(clicked == 1){
			$(prevDiv).hide();
			}
			$(".lizardDescription").show();
			prevDiv = ".lizardDescription";
		}
		if(eventId=="Swiss_stream"){
			if(clicked == 1){
			$(prevDiv).hide();
			}
			$(".streamDescription").show();
			prevDiv = ".streamDescription";
			console.log("prev div is " + prevDiv);
		}
		if(eventId=="beach"){
			console.log("prev div is " + prevDiv);
			if(clicked == 1){
			$(prevDiv).hide();
			}
			$(".acDescription").show();
			prevDiv = ".acDescription";
		}
		if(eventId=="Brandeis_fall"){
			if(clicked == 1){
			$(prevDiv).hide();
			}
			$(".brandeisDescription").show();
			prevDiv = ".brandeisDescription";
			console.log("prev div is " + prevDiv);
		}
		if(eventId=="cat"){
			console.log("prev div is " + prevDiv);
			if(clicked == 1){
			$(prevDiv).hide();
			}
			$(".catDescription").show();
			prevDiv = ".catDescription";
		}
		if(eventId=="Colorize"){
			if(clicked == 1){
			$(prevDiv).hide();
			}
			$(".colorizeDescription").show();
			prevDiv = ".colorizeDescription";
			console.log("prev div is " + prevDiv);
		}
		if(eventId=="compositing_fun"){
			console.log("prev div is " + prevDiv);
			if(clicked == 1){
			$(prevDiv).hide();
			}
			$(".compositingDescription").show();
			prevDiv = ".compositingDescription";
		}
		if(eventId=="mountains_water"){
			if(clicked == 1){
			$(prevDiv).hide();
			}
			$(".mountains_waterDescription").show();
			prevDiv = ".mountains_waterDescription";
			console.log("prev div is " + prevDiv);
		}
		if(eventId=="swiss_view"){
			console.log("prev div is " + prevDiv);
			if(clicked == 1){
			$(prevDiv).hide();
			}
			$(".swiss_viewDescription").show();
			prevDiv = ".swiss_viewDescription";
		}
		if(eventId=="swiss_mounatins_lens_flare"){
			if(clicked == 1){
			$(prevDiv).hide();
			}
			$(".swiss_mounatins_lens_flareDescription").show();
			prevDiv = ".swiss_mounatins_lens_flareDescription";
			console.log("prev div is " + prevDiv);
		}
		if(eventId=="swissDE2"){
			console.log("prev div is " + prevDiv);
			if(clicked == 1){
			$(prevDiv).hide();
			}
			$(".swissDE2Description").show();
			prevDiv = ".swissDE2Description";
		}
		if(eventId=="FlowerDE"){
			console.log("prev div is " + prevDiv);
			if(clicked == 1){
			$(prevDiv).hide();
			}
			$(".FlowerDEDescription").show();
			prevDiv = ".FlowerDEDescription";
		}
		if(eventId=="into_the_sunset"){
			if(clicked == 1){
			$(prevDiv).hide();
			}
			$(".into_the_sunsetDescription").show();
			prevDiv = ".into_the_sunsetDescription";
			console.log("prev div is " + prevDiv);
		}
		if(eventId=="SwissDE1"){
			console.log("prev div is " + prevDiv);
			if(clicked == 1){
			$(prevDiv).hide();
			}
			$(".SwissDE1Description").show();
			prevDiv = ".SwissDE1Description";
		}
}
