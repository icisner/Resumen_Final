
var eduaction={
"schools":[
    {
      "name":"ESPE",
      "city":"Quito/Ecuador",
      "degree":"BA",
      "majors":"CS",
      "dates":1994,
      "url":"http://www.espe.edu.ec/"

    },
    {
      "name":"test2",
      "city":"city2"
    }
  ],
  "onlineCourses":[
    {
      "title":"Front Web Developer",
      "school":"Udacity",
      "dates":2015,
      "url":"http://www.udacity.com"
    }
    ]
}

var work={
  "jobs":[
  {
    "employer":"Porta",
    "title":"RF Manager",
    "dates":"07/1994 - 05/2000",
    "description":"RF Manager Network"
  },
  {
    "employer":"LCC",
    "title":"RF Engineerr",
    "dates":"05/2000 - 01/2002",
    "description":"RF Manager Network"
  },
  {
    "employer":"AT&T",
    "title":"RF Engineerr",
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
      "images":[
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
    "mobile":"210-237-8527",
    "email":"icisner@yahoo.com",
    "github":"icisneros",
    "twitter":"@icisner",
    "location":"San Antonio"
     },
  "WelcomeMessage":"ALSJLKJSLKJSLJS alkjskjdskjd cdlsjcfdlskfj",
  "skills":["awesomeness","programming","teaching","JS"],
  "bioPic":"images/fry.jpg"
};

        var sEmail= HTMLemail.replace("%data%".bio.contacts.email);
        $("#topContacts").append(sEmail);

bio.display =function()
    {
        var sRole=HTMLheaderRole.replace("%data%",bio.role);        
        $("#header").prepend(sRole);
     
        var sName=HTMLheaderName.replace("%data%",bio.name);
        $("#header").prepend(sName);

        var pic=HTMLbioPic.replace("%data%",bio.bioPic);
        $("#header").append(pic);

        /*var nMobile = HTMLmobile.replace("%data%".bio.contacts.mobile);
        $("#topContacts").append(nMobile);*/

        /*var sEmail= HTMLemail.replace("%data%".bio.contacts.email);
        $("#topContacts").append(sEmail);*/

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

bio.display();
work.display();
projects.display();

//initializeMap();
// $("#mapDiv").append(googleMap);
   

 