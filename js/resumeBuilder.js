
var education={
"schools":[
    {
      "name":"ESPE",
      "location":"Quito/Ecuador",
      "degree":"BA",
      "majors":"CS",
      "dates":1994,
      "url":"http://www.espe.edu.ec/"

    },
    {
      "name":"test2",
      "location":"Reston, VA",
      "degree":"BA",
      "majors":"CS",
      "dates":2000,
      "url":"http://www.google.com"
    }
  ],
  "onlineCourses":[
    {
      "title":"Front Web Developer",
      "school":"Udacity",
      "dates":2015,
      "url":"http://www.udacity.com"
    },
    {
      "title":"C++",
      "school":"Online",
      "dates":2015,
      "url":"http://www.google.com"
    } 
    ]
}

var work={
  "jobs":[
  {
    "employer":"Porta",
    "title":"RF Manager",
    "location":"Chicago",
    "dates":"07/1994 - 05/2000",
    "description":"RF Manager Network"
  },
  {
    "employer":"LCC",
    "title":"RF Engineerr",
    "location":"Cincinnati",
    "dates":"05/2000 - 01/2002",
    "description":"RF Manager Network"
  },
  {
    "employer":"AT&T",
    "title":"RF Engineerr",
    "location":"San Antonio",
    "dates":"01/2000 - Present",
    "description":"RAN Planning Engineer"
  }
  ]
}

var projects={
  "projects":[
    {
      "title":"Project 1",
      "dates":"2014",
      "description":"Test description",
      "images":
        [
          "images/197x148.gif",
          "images/197x148.gif"
        ]        
    },
    {
      "title":"Project 2",
      "dates":"2015",
      "description":"Test description",
      "images":
        [
          "images/197x148.gif",
          "images/197x148.gif"
        ]        
    
    }
  ]
}

var bio={
  "name":"Ivan Cisneros",
  "role":"Web Developer",
  "contacts":{
    "mobile":"210-111-1111",
    "email":"icisneros_999@yahoo.com",
    "github":"icisneros",
    "twitter":"@icisner",
    "location":"San Antonio"
     },
  "WelcomeMessage":"Test message there is one circle",
  "skills":["awesomeness","programming","teaching","JS"],
  "bioPic":"images/fry.jpg"
};

     
bio.display =function()
    {
        var sRole=HTMLheaderRole.replace("%data%",bio.role);        
        $("#header").prepend(sRole);
        var sName=HTMLheaderName.replace("%data%",bio.name);
        $("#header").prepend(sName);
        var pic=HTMLbioPic.replace("%data%",bio.bioPic);
        $("#header").append(pic);
        var nMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        $("#topContacts").append(nMobile);
        var sEmail= HTMLemail.replace("%data%",bio.contacts.email);
        $("#topContacts").append(sEmail);
        var sGitHub= HTMLgithub.replace("%data%",bio.contacts.github);
        $("#topContacts").append(sGitHub); 
        var sTwitter= HTMLtwitter.replace("%data%",bio.contacts.twitter);
        $("#topContacts").append(sTwitter);
        var sLocation= HTMLlocation.replace("%data%",bio.contacts.location);
        $("#topContacts").append(sLocation);
        
        var sMsg= HTMLwelcomeMsg.replace("%data%",bio.WelcomeMessage);
        $("#header").append(sMsg);

        $('#header').append(HTMLskillsStart);

        for (i in bio.skills)
        {
          var sK=HTMLskills.replace("%data",bio.skills[i]);
          $('#header').append(sK);

        }
    }


work.display = function()
    {
      for (job in work.jobs) 
      {
        $("#workExperience").append(HTMLworkStart);
        
        var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);

        var formattedEmployerTitle=formattedEmployer+formattedTitle;
        $(".work-entry:last").append (formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
      }
     } 

projects.display = function () 
  {
    for(project in projects.projects)
      {
        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);  

        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);  

      if (projects.projects[project].images.length > 0) 
          {
            for (image in projects.projects[project].images) 
              {
                var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
              }
          }
       }
    }

   education.display =function()
   {
      for (j in education.schools)
      {
              $("#education").append(HTMLschoolStart);
              var sSchool=HTMLschoolName.replace("%data%",education.schools[j].name);
              $(".education-entry:last").append(sSchool);
              var sDegree=HTMLschoolDegree.replace("%data%",education.schools[j].degree);
              $(".education-entry:last").append(sDegree);
              var sDates=HTMLschoolDates.replace("%data%",education.schools[j].dates);
              $(".education-entry:last").append(sDates);
              var sLocation=HTMLschoolLocation.replace("%data%",education.schools[j].location);
              $(".education-entry:last").append(sLocation);
              var sMajor=HTMLschoolMajor.replace("%data%",education.schools[j].majors);
              $(".education-entry:last").append(sMajor);
      }

$("#education").append(HTMLonlineClasses);
      for (k in education.onlineCourses)
      {

      

              var sOTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[k].title);
              $(".education-entry:last").append(sOTitle);
              var sOSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[k].school);
              $(".education-entry:last").append(sOSchool);
              var sODates=HTMLonlineDates.replace("%data%",education.onlineCourses[k].dates);
              $(".education-entry:last").append(sODates);
              var sOUrl=HTMLonlineURL.replace("%data%",education.onlineCourses[k].url);
              $(".education-entry:last").append(sOUrl);

      }

   }


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
   

 