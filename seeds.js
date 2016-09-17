var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis erat eu turpis aliquet rutrum. Fusce dapibus eget nunc a scelerisque. Aliquam sit amet quam venenatis, gravida augue vitae, laoreet lectus. Quisque ut dui nunc. Proin pellentesque lacus diam, at sollicitudin metus hendrerit a. Pellentesque malesuada placerat bibendum. Nunc a ultrices magna. Etiam vel facilisis lacus. Curabitur ornare, urna sit amet ornare placerat, sapien arcu posuere felis, at lobortis ipsum odio non est. Etiam sodales ut sem vel feugiat. Sed interdum, nibh vitae vehicula finibus, lacus sem imperdiet velit, quis aliquet elit nisi nec massa. Donec non dapibus justo. Aenean fermentum tincidunt ligula, sollicitudin dapibus nisl ultrices et. Maecenas sed vestibulum nibh."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis erat eu turpis aliquet rutrum. Fusce dapibus eget nunc a scelerisque. Aliquam sit amet quam venenatis, gravida augue vitae, laoreet lectus. Quisque ut dui nunc. Proin pellentesque lacus diam, at sollicitudin metus hendrerit a. Pellentesque malesuada placerat bibendum. Nunc a ultrices magna. Etiam vel facilisis lacus. Curabitur ornare, urna sit amet ornare placerat, sapien arcu posuere felis, at lobortis ipsum odio non est. Etiam sodales ut sem vel feugiat. Sed interdum, nibh vitae vehicula finibus, lacus sem imperdiet velit, quis aliquet elit nisi nec massa. Donec non dapibus justo. Aenean fermentum tincidunt ligula, sollicitudin dapibus nisl ultrices et. Maecenas sed vestibulum nibh."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis erat eu turpis aliquet rutrum. Fusce dapibus eget nunc a scelerisque. Aliquam sit amet quam venenatis, gravida augue vitae, laoreet lectus. Quisque ut dui nunc. Proin pellentesque lacus diam, at sollicitudin metus hendrerit a. Pellentesque malesuada placerat bibendum. Nunc a ultrices magna. Etiam vel facilisis lacus. Curabitur ornare, urna sit amet ornare placerat, sapien arcu posuere felis, at lobortis ipsum odio non est. Etiam sodales ut sem vel feugiat. Sed interdum, nibh vitae vehicula finibus, lacus sem imperdiet velit, quis aliquet elit nisi nec massa. Donec non dapibus justo. Aenean fermentum tincidunt ligula, sollicitudin dapibus nisl ultrices et. Maecenas sed vestibulum nibh."
    }
];

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;

