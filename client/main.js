import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
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
Router.route('/', {
    name: 'home',
	template: 'home'
});
Router.configure({
    layoutTemplate: 'main'
});

Template.photoshop.events({ 
  'click .thumbnail': function(){   
		var image = document.getElementById('galleryImage');
		eventId = event.target.id;	
		//console.log("id is" + eventId);
	    $(".gray").show();
        image.src = "/images/" + eventId + ".jpg";
    },
	'click #remove': function(){ 
		//console.log("clicked");
		$(".gray").hide();
	},
	'click #nextPic': function(){ 
		var image = document.getElementById('galleryImage');
		for (var i = 0; i < myPics.length-1; i++) { 
			if(myPics[i]==(eventId)){
				image.src = "/images/" + myPics[i+1] + ".jpg";
				eventId= myPics[i+1];
				break;
			}
		}
		if(eventId=="SwissDE1"){
				image.src = "/images/venice.jpg";
				eventId = "venice";
		}
	},
	'click #prevPic': function(){ 
		var image = document.getElementById('galleryImage');
		for (var i = 0; i < myPics.length; i++) { 
			if(myPics[i]==(eventId)&&i>0){
				image.src = "/images/" + myPics[i-1] + ".jpg";
				eventId= myPics[i-1];
				break;
			}
		}
		if(eventId=="venice"){
				//console.log(eventId);
				image.src = "/images/SwissDE1.jpg";
				eventId = "SwissDE1";
		}
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
