(function() {

    var modalToggle = document.getElementById('modal-toggle');
    var menuBar = document.getElementsByClassName('menu-bar')[0];
    var sideBar = document.getElementsByClassName('sidebar')[0];
    var menuButtonClose = document.getElementById('menu-button-close');
    var container = document.getElementsByClassName('container')[0];
    var modal = document.getElementsByClassName('modal')[0];
    var modalInner = document.getElementsByClassName('modal-inner')[0];
    var modalExit = document.getElementsByClassName('modal-exit')[0];
    var sidebarFilter = document.getElementsByClassName('sidebar-filter')[0];
    var projectsContainer = document.getElementsByClassName('projects-container')[0];
    var scrollArrowWrapper = document.getElementsByClassName('scroll-arrow-wrapper')[0];
    var scrollArrow = document.getElementsByClassName('scroll-arrow')[0];
        
    // search modal
    modalToggle.addEventListener('click', function(e) {

        e.preventDefault();
        modal.style.display = 'block';
        modalInner.style.webkitTransform = "scale(1)";

    });

    modalExit.addEventListener('click', function(e) {
        
        e.preventDefault();    
        modal.style.display = 'none';
    })


    //sidebar open (add class hooks)
    menuBar.addEventListener('click', function(e) {

        e.preventDefault();
        sideBar.style.left = '0px';
        sidebarFilter.style.visibility = 'visible';
        

    });

    // sidebar close (add class hooks)
    menuButtonClose.addEventListener('click', function(e) {

        e.preventDefault();
        sideBar.style.left = '-400px';
        sidebarFilter.style.visibility = 'hidden';
        
    });


    // scroll arrow event
    window.addEventListener('scroll', function(e) {

        // console.log(screen.width);

        if(document.body.scrollTop > 100 && screen.width >= 800) {
            scrollArrowWrapper.style.display = 'block';
            scrollArrowWrapper.style.animationDuration = '2.3s';
            scrollArrowWrapper.style.animationName = 'test';
        } else {
            scrollArrowWrapper.style.display = 'none';
        }

        
    });

    // if screen is below 800px, remove the scroll to arrow
    window.addEventListener('resize', function(e) {

        if(screen.width < 800) {
            scrollArrowWrapper.style.display = 'none';
        }
    });


    scrollArrow.addEventListener('click', function(e) {

        e.preventDefault();
        window.scrollTo(0,0);


    });








    // var currentSelectionSmall = document.getElementsByClassName('project-nav-small')[0];
    // var currentSelectionLarge = document.getElementsByClassName('project-nav-large__item')[0];
    // currentSelectionSmall.className += ' active-project';
    // currentSelectionLarge.className += ' active-project';

    // var projectSelection = document.getElementsByClassName('project-selection')[0];
    // projectSelection.className += ' active-project';

    // projectsContainer.addEventListener('click',function(e) {

    //     console.log(e.target);

    //     if(isProjectSelection(e.target)) {
    //         console.log('works');
    //         setProjectActive(e.target);
    //     }
    // })




    // function isProjectSelection (input) {
    //     if(input.classList.contains('project-selection')) {
    //         return input;
    //     }
    // }

    // function setProjectActive(input) {

    //     projectSelection.classList.remove('active-project');
    //     projectSelection = input;
    //     projectSelection.className += ' active-project';
    // }


    
        









})(window);