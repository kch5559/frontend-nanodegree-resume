/*
This is empty on purpose! Your code to build the resume will go here.
 */


//$("#main").append(["Chohee Kim"]);

//var awesomeThoughts = "I'm Chohee Kim and I'm awesome";
//var funThoughts = awesomeThoughts.replace("awesome", "fun");

//$("#main").append(funThoughts);




var name = "Chohee Kim";
var job = "Software Engineer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedJob = HTMLheaderRole.replace("%data%", job);

$("#header").prepend(formattedJob);
$("#header").prepend(formattedName);


//objects - bio, education, work, and project - start here.
var bio = {
    "name" : "Chohee Kim",
    "role" : "CS Enthusiast",
    "contacts" : {
      "mobile" : "415-424-8666",
        "email" : "kch5559@gmail.com",
        "github" : "kch5559",
        "location" : "San Francisoc, CA",
        "website" : "http://chohee.me"
    },
    "welcomeMessage" : "Hello, world! I'm a thrid year student studying Computer Science at San Francisco State University.",
    "skills" : ["HTML/CSS", "JAVA", "JAVASCRIPT", "PYTHON", "C++", "BOOTSTRAP", "DJANGO"],
    "bioPic" : "images/fry.jpg"
};

var education = {
    "School" : {
        "name" : "San Francisco State University",
        "city" : "San Francisco, CA",
        "major" : "Computer Science",
        "years" : "2014-2018"
    },
    "onlineCourses" : [
        {
            "title" : "MongoDB for Java Developer",
            "School" : "MongoDB University",
            "date" : "May 2016"
        },
        {"title" : "Javascript Basics",
            "School" : "Udacity",
            "date" : "July 2016"},

        {"title" : "How To Use Git and Github",
            "School" : "Udacity",
            "date" : "July 2016"}
    ]
};


var project = {
    "projects" : [
        {
            "title" : "Chess game",
            "dates" : 2014,
            "description" : "A simple chess game that is played by two people on a given chess board with initial setup. It checks for illegal moves and position. The code is written in Java using 2D array."
        },
        {
            "title" : "Poker Game",
            "dates" : 2015,
            "description" : "A simple single poker game. I used ArrayList to track and save cards that are randomly generated for a player, and visualize it using Java Swing."
        },
        {
            "title" : "Bank Simulation",
            "dates" : 2015,
            "description" : "A program that analyzes and provides average waiting time, teller serving times, and so on, by a given time unit with random chance of customer showing up and random transaction time."
        }
    ]
};

var work = {
    "jobs" : [
        {"employer" : "Google",
            "title" : "CodeU Fellow at Google",
            "location" : "Mountain view, CA",
            "date" : "March 2016 - present",
            "description" : "Accepted to the Google exclusive development program for high potential students to strengthen skills and prepare to become successful candidates for future technical opportunities."},

        {"employer" : "Gongreung Middle School",
            "title" : "Mathematics Instructor",
            "location" : "Seoul, South Korea",
            "date" : "Augest 2012 - December 2012",
            "description" : "Mathematics instructor in an after-school tutoring program -  Algebra, Pre-calculus."}
    ]
};

//displaying fucntions

function displayBio() {
    $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));

    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts["mobile"]));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts["email"]));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts["github"]));
    $("#topContacts").append(HTMLhomepage.replace("%data%", bio.contacts["website"]));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts["location"]));

    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    if(bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = null;

        for(i = 0; i < bio.skills.length; i++) {
            formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);

        }
    }
}
function displayWork() {
    for(job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        formattedTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedTitle);

        var formattedData = HTMLworkDates.replace("%data%", work.jobs[job].date);
        $(".work-entry:last").append(formattedData);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescreption = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescreption);





    }
}
project.display = function() {

    for( curProject in project.projects) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[curProject].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDate = HTMLprojectDates.replace("%data%", project.projects[curProject].dates);
        $(".project-entry:last").append(formattedDate);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[curProject].description);
        $(".project-entry:last").append(formattedDescription);

    }

}
function displaySchool() {
    
    $("#education").append(HTMLschoolStart);
    
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.School["name"]);
    $(".education-entry:last").append(formattedSchoolName);
    
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.School.years);
    $(".education-entry:last").append(formattedSchoolDates);
    
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.School.major);
    $(".education-entry:last").append(formattedSchoolMajor);
    
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.School.city);
    $(".education-entry:last").append(formattedSchoolLocation);


    $("#education").append(HTMLonlineClasses);

    for( course in education.onlineCourses) {

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title );
        $(".education-entry").append(formattedOnlineTitle);

        var formattedOnlineData = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
        $(".education-entry").append(formattedOnlineData);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].School);
        $(".education-entry").append(formattedOnlineSchool);
    }
    
    
}

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

project.display();
displayBio();
displayWork();
displaySchool();



