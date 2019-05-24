new Vue ({
    el: '.container-fluid',

    data: {  
        featprojects: [
             {   title: 'Control Admin System for College', 
                description: `A complex system of control to my College maded on 
                Internships. The tecnologies used were HTML5, CSS, PHP,
                Javascript, and more.`,
                photo:'img/is/IS.png',
                id: "fis"
            },
            {   title:'This Static Page', 
                description:`The development of this page was made using 
                new HTML5 and CSS3 and more to provided a beautiful design. `,
                photo: 'img/portfolio/portfolio.png',
                id: 'fportfolio'
            }
        ],
        
        completeprojects: [
            {   id: "is",
                title: 'Control Admin System for College',
                description: `
                As part, of my internships, i maded a project to keep control to multiple
                behaviors that my College coordinacion needs. This necesidades includes
                control of asistence, upload notas, register students, send mails automatically,
                and generate diferents documents about control. 
                The project is actually working in the College intranet around the country.
                `,
                vendors: [
                    'PHP (CodeIgniter)',
                    'MySQL',
                    'Apache Server',
                    'HTML5-CSS3',
                    'Bootstrap, Animate CSS, Font-Awesome and Sass',
                    'Javascript (jQuery, PopperJS)',
                    'PHP Libraries (PHPExcel, MDPF, Email)',
                    'GitHub'
                ],
                photo:'img/is/IS.png',
                otherphotos: [
                    'img/portfolio/portfolio2.png',
                    'img/portfolio/portfolio3.png',
                    'img/portfolio/portfolio4.png',
                    'img/portfolio/portfolio5.png'
                ]

            },
            {   id: 'portfolio',
                title: 'A Web-Porfolio',
                description: ` 
                To show all my skills and my projects, i created this page to show with a 
                beautiful and responsive design my personal place.
                `,
                vendors: [
                    'HTML5-CSS3',
                    'Bootstrap, Animate CSS',
                    'Javascript (jQuery, PopperJS, Vue JS, Waypoint)',
                    'Github'
                ],
                photo: 'img/portfolio/portfolio.png',
                // otherphotos: [
                //     ''
                // ]

            }

        ]
    },
    
});



// Scroll
jQuery('a[name="projects"]').click(function(e){
    e.preventDefault();

    jQuery('html,body').animate({
        scrollTop:jQuery('.projects').offset().top
    }, 1000);
}
);
jQuery('a[name="skills"]').click(function(e){
    e.preventDefault();

    jQuery('html,body').animate({
        scrollTop:jQuery('.skills').offset().top
    }, 1000);
}
);
jQuery('a[name="contact"]').click(function(e){
    e.preventDefault();

    jQuery('html,body').animate({
        scrollTop:jQuery('.contact').offset().top
    }, 1000);
}
);

jQuery('div#fis').click(function(){
    jQuery('html,body').animate({
        scrollTop:jQuery('#is').offset().top
    }, 1000);
}
);
jQuery('div#fportfolio').click(function(){
    jQuery('html,body').animate({
        scrollTop:jQuery('#portfolio').offset().top
    }, 1000);
}
);

//Waypoint
jQuery('div.contact').waypoint(function(){
    jQuery('div.contact').children('h1').addClass('fadeIn');
    jQuery('.contact4').addClass('fadeInDown');
    jQuery('li').addClass('fadeInDown');
},{offset: '100%'});
jQuery('div.projects').waypoint(function(){
    jQuery('div.projects').children('h1').addClass('fadeIn');
    jQuery('div.project').addClass('animated delay-2s fadeInDown');
},{offset: '100%'});
jQuery('div.skills').waypoint(function(){
    jQuery('div.skills').children('h1').addClass('fadeIn');
    jQuery('.skills2').addClass('fadeInDown');
    jQuery('.skillsdiv').addClass('fadeInDown');
},{offset: '100%'});