import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import './covers.html';
var eventId= "";
var currentPage = "page1";
var newCurrentPage = "newPage1";
var myPics = ["venice", "lizard_woman","Swiss_stream","beach","Brandeis_fall","cat","Colorize","compositing_fun","mountains_water","swiss_view","swiss_mounatins_lens_flare","swissDE2","FlowerDE","into_the_sunset","SwissDE1"];
var caughtInTheCrossfirePages = ["page1","page2","page3","page4","page5","page6","page7"];
var theBallPages = ["newPage1","newPage2","newPage3","newPage4","newPage5","newPage6","newPage7","newPage8","newPage9","newPage10","newPage11","newPage12","newPage13"];
Router.route('/photoshop');
Router.route('/originals');
Router.route('/stories');
Router.route('/covers');
Router.route('/lyrics');
Router.route('/', {
    name: 'home',
	template: 'home'
});
Router.configure({
    layoutTemplate: 'main'
});

Template.covers.events({
  'click .thumbnail': function(){   
		var eventId = event.target.id;
		var image = document.getElementById('galleryImage');
	    $(".gray").show();
        image.src = "/images/" + eventId + ".jpg";
    },
	'click #remove': function(){ 
		console.log("clicked");
		$(".gray").hide();
	}	
});
Template.photoshop.events({
  'click .thumbnail': function(){   
		var image = document.getElementById('galleryImage');
		eventId = event.target.id;
		console.log("id is" + eventId);
	    $(".gray").show();
        image.src = "/images/" + eventId + ".jpg";
    },
	'click #remove': function(){ 
		console.log("clicked");
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
	}
	
});
//class for formatting id for page selection
Template.stories.events({
	'click #nextPage': function(){   
		for (var i = 0; i < caughtInTheCrossfirePages.length-1; i++) {
			if(caughtInTheCrossfirePages[i]==currentPage){
				//console.log("#"+ myPages[i+1]);
				//console.log("i is " + i);
				$("#"+caughtInTheCrossfirePages[i+1]).show();
				currentPage = caughtInTheCrossfirePages[i+1];
				break;
			} 
		}		
    },
	'click #prevPage': function(){   
		for (var i = 0; i < caughtInTheCrossfirePages.length; i++) {
			if(caughtInTheCrossfirePages[i]==currentPage&&i>0){
				$("#"+caughtInTheCrossfirePages[i]).hide();
				currentPage = caughtInTheCrossfirePages[i-1];
				break;
			} 
		}
    },
	'click #nextPage1': function(){   
		for (var i = 0; i < theBallPages.length-1; i++) {
			if(theBallPages[i]==newCurrentPage){
				console.log(theBallPages[i+1]);
				$("#"+theBallPages[i+1]).show();
				newCurrentPage = theBallPages[i+1];
				break;
			} 
		}		
    },
	
	'click #prevPage1': function(){   
		for (var i = 0; i < theBallPages.length; i++) {
			if(theBallPages[i]==newCurrentPage&&i>0){
				$("#"+theBallPages[i]).hide();
				newCurrentPage = theBallPages[i-1];
				break;
			} 
		}
    },
});

