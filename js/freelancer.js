/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

var $FRONT_END_SKILLS = [['Skill', 'Proficiency'], ['JavaScript', 70], ['HTML', 60], ['CSS', 55], ['jQuery', 65], ['AngularJS', 70]];

var $BACK_END_SKILLS = [['Skill', 'Proficiency'], ['Java', 85], ['C++', 85], ['Python', 65], ['SQL', 55], ['Ruby', 50], ['MySQL', 50], ['MongoDB', 80], ['PostgreSQL', 50]];

var $SOFTWARE_SKILLS = [['Skill', 'Proficiency'], ['Visual Studio', 70], ['Linux', 50], ['Git', 85], ['Emacs', 90], ['Eclipse', 70], ['Android Studio',80], ['IntelliJ', 75]];

var $PHILLIPS66 = {
    'img':'img/phillips66.jpg',
    'title':'IT Intern',
    'location': 'Bartlesville, Oklahoma',
    'date': 'May - August 2014',
    'group':'Data Integration & B2B',
    'description':'I had two projects in this internship. The first one was to use Informatica PowerCenter, a data integration tool, ' +
	'to create two data files that expedite cross referencing information. In my second project, ' +
	'I collaborated with the Information Management group to populate a new database that facilitates the Record Management process.'
};

var $CISCO = {
    'img':'img/cisco.png',
    'title':'Software Engineering Intern',
    'location': 'San Jose, California',
    'date': 'May - August 2015',
    'group':'Collaboration Technology',
    'description':'I had two projects in this internship. The first one was to design and implement a phone viewer web application that gives ' +
	'a snapshot of all VoIP phone statuses. The second project was to design and implement a test report web application that ' +
	'shows statuses of phone tests. Data is stored in PostgreSQL and Redis databases. I used HTML, CSS, JavaScript, jQuery for front end and Python Flask framework for back end.'};

var $TAMU = {
    'img':'img/tamu.png',
    'title':'Peer Teacher',
    'location': 'College Station, Texas',
    'date': 'August 2015 - May 2016',
    'group':'Computer Science & Engineering Department',
    'description':'I tutored CSCE 313, an introductory class in computer systems, and CSCE 221, data structures and algorithms. I helped students debug and come up with algorithms to solve low-level system problems such as memory allocation, thread utilization, socket programming, etc.'};

var $CAPITALONE = {
    'img':'img/capitalone.png',
    'title':'Software Engineer',
    'location':'Plano, Texas',
    'date': 'July 2016 - Present',
    'group': 'Auto Finance',
    'description': 'I recently finished implementing from scratch the latest Auto Loan Pre-approval website using AngularJS, Spring Boot, and PostgreSQL. I implemented several API services and worked heavily on wiring the front-end with the back-end. Please check out my work here at autopreapproval.capitalone.com'
};

var $SIMPLE_SALE = {
    'img':'img/simple-sale-logo-512.jpg',
    'name': 'Simple Sale',
    'description': 'An Android and web application that generates QR code to make payment for sale items. Perfect for garage sale.',
    'url': 'http://simplesale.herokuapp.com/'
};

var $DEAR_DIARY = {
    'img':'img/dear-diary-promo-graphic.png',
    'name': 'Dear Diary',
    'description': 'A simple web application for writing diary.',
    'url': 'http://deardiary-2016.herokuapp.com/'
};

var $AUTO_PREAPPROVAL = {
    'img':'img/pa-promo-graphic.png',
    'name': 'Capital One Auto Loan Pre-approval Website',
    'description': "Customers who are pre-approved for an auto loan can sign in to this website, view dealers' inventory, save favorite cars, and register for a sale event.",
    'url': 'https://autopreapproval.capitalone.com'
};

$(document).ready(function(){
    $('.col-animate').fadeIn(1500);

    drawChart('front-end-pie', $FRONT_END_SKILLS, 'Front End');
    drawChart('back-end-pie', $BACK_END_SKILLS, 'Back End');
    drawChart('software-pie', $SOFTWARE_SKILLS, 'Software');
});

function openInNewPage(url){
    window.open(url);
}

function drawChart(id, dataList, pieTitle) {
    var data = google.visualization.arrayToDataTable(dataList);
    var options = {
        pieHole: 0.5,
        pieSliceText:'label',
        legend:'none',
        title: pieTitle,
        titleTextStyle:{
            fontSize:20
        },
        tooltip:{
            text:'percentage'
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById(id));
    chart.draw(data, options);
}

function populateJobModal(company){
    switch(company){
    case 'phillips66':
	makeJobModal($PHILLIPS66);
	break;
    case 'cisco':
	makeJobModal($CISCO);
	break;
    case 'tamu':
	makeJobModal($TAMU);
	break;
    case 'capitalone':
	makeJobModal($CAPITALONE);
	break;
    }

    return false;
}

function makeJobModal(jobInfo){
    $('#job-image').attr('src', jobInfo.img);
    $('#job-title').text(jobInfo.title);
    $('#job-location').text(jobInfo.location);
    $('#job-date').text(jobInfo.date);
    $('#job-group').text(jobInfo.group);
    $('#job-description').text(jobInfo.description);
}

function populateProjectModal(project){
    switch(project){
        case "simplesale":
        	makeProjectModal($SIMPLE_SALE);
        	break;
        case "deardiary":
        	makeProjectModal($DEAR_DIARY);
            break;
        case "autopreapproval":
            makeProjectModal($AUTO_PREAPPROVAL);
            break;
        default:
            break;
    }

    return false;
}

function makeProjectModal(projectInfo){
    $('#project-image').attr('src', projectInfo.img);
    $('#project-name').text(projectInfo.name);
    $('#project-description').text(projectInfo.description);
    $('#project-link').attr('href', projectInfo.url);
}
