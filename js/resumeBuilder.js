
var education={
"schools":[
    {
      "name":"ESPE",
      "location":"Quito/Ecuador",
      "degree":"BA",
      "majors":"Computer Science",
      "dates":1994,
      "url":"http://www.espe.edu.ec/"

    },
    {
      "name":"LCC RF Design",
      "location":"Seven Corners, VA",
      "degree":"RF Certification",
      "majors":"RAN RF Design",
      "dates":2000,
      "url":"http://www.lcc.com"
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
      "url":"http://www.neisd.net"
    } 
    ]
}

var work={
  "jobs":[
  {
    "employer":"Porta",
    "title":"RF Manager",
    "location":"Quito Ecuador",
    "dates":"07/1994 - 05/2000",
    "description":"RF Manager Network for North part of country encharge of overall RF RAN Performance"
  },
  {
    "employer":"LCC",
    "title":"RF Engineerr",
    "location":"Cincinnati, OH",
    "dates":"05/2000 - 01/2002",
    "description":"RF Planning Engineer encharged of RF Design for XM Radio Terrestrial Network Design and optimization"
  },
  {
    "employer":"AT&T Mobility",
    "title":"RF Engineerr",
    "location":"San Antonio, TX",
    "dates":"01/2002 - Present",
    "description":"RAN Planning Engineer main roll include to look for Long Term Planning Network opportunities to improve Network Performance"
  }
  ]
}

var projects={
  "projects":[
    {
      "title":"Project 1",
      "dates":"2015",
      "description":"South Texas AT&T Mobility with three major cities as Houston, San Antonio RAN Optimization and Asutin and Planning using multiple prediction and GEO location tools to assest new potential locations and evalute existing node to improve service and capacity related forecast volumes",
      "images":
        [
          "images/img1_v1.jpg",
          "images/img2_v1.jpg"
        ]        
    },
    {
      "title":"Project 2",
      "dates":"2015",
      "description":"Drive Test ananlysis for WCDMA (3G) and LTE (4G) using multiple sources and competitor comparison to locate areas where service can be improve with multiple RF design recommendations",
      "images":
        [
          "images/img2_1_v1.jpg",
          "images/img2_2_v1.jpg"
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
  "WelcomeMessage":"RF Engineering with Computer Science skills",
  "skills":["RF RAN Planning","Programming","RF Tools","RF Drive Test tools"],
  "bioPic":"images/Ivan_315.jpg"
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
        $("#footerContacts").append(nMobile);

        var sEmail= HTMLemail.replace("%data%",bio.contacts.email);
        $("#topContacts").append(sEmail);
        $("#footerContacts").append(sEmail);
        
        var sGitHub= HTMLgithub.replace("%data%",bio.contacts.github);
        $("#topContacts").append(sGitHub); 
        $("#footerContacts").append(sGitHub); 

        var sTwitter= HTMLtwitter.replace("%data%",bio.contacts.twitter);
        $("#topContacts").append(sTwitter);       
        $("#footerContacts").append(sTwitter);
        
        var sLocation= HTMLlocation.replace("%data%",bio.contacts.location);
        $("#topContacts").append(sLocation);
        $("#footerContacts").append(sLocation);
        
        var sMsg= HTMLwelcomeMsg.replace("%data%",bio.WelcomeMessage);
        $("#header").append(sMsg);

        $('#header').append(HTMLskillsStart);

        for (i in bio.skills)
        {
          var sK=HTMLskills.replace("%data%",bio.skills[i]);
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
        
        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        
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
      $("#education").append(HTMLschoolStart);

  
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
   

 