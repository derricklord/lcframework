    angular.module('lcCalendar')

        // =========================================================================
        // CALENDAR WIDGET
        // =========================================================================

        .directive('lcFullCalendar', function(){
            return {
                restrict: 'A',
                link: function(scope, element) {
                    element.fullCalendar({
                        contentHeight: 'auto',
                        theme: true,
                        header: {
                            right: '',
                            center: 'prev, title, next',
                            left: ''
                        },
                        defaultDate: '2014-06-12',
                        editable: true,
                        events: [
                            {
                                title: 'All Day',
                                start: '2014-06-01',
                                className: 'bgm-cyan'
                            },
                            {
                                title: 'Long Event',
                                start: '2014-06-07',
                                end: '2014-06-10',
                                className: 'bgm-orange'
                            },
                            {
                                id: 999,
                                title: 'Repeat',
                                start: '2014-06-09',
                                className: 'bgm-lightgreen'
                            },
                            {
                                id: 999,
                                title: 'Repeat',
                                start: '2014-06-16',
                                className: 'bgm-blue'
                            },
                            {
                                title: 'Meet',
                                start: '2014-06-12',
                                end: '2014-06-12',
                                className: 'bgm-teal'
                            },
                            {
                                title: 'Lunch',
                                start: '2014-06-12',
                                className: 'bgm-gray'
                            },
                            {
                                title: 'Birthday',
                                start: '2014-06-13',
                                className: 'bgm-pink'
                            },
                            {
                                title: 'Google',
                                url: 'http://google.com/',
                                start: '2014-06-28',
                                className: 'bgm-bluegray'
                            }
                        ]
                    });
                }
            }
        })


        // =========================================================================
        // MAIN CALENDAR
        // =========================================================================

        .directive('lcCalendar', function($compile){
            return {
                restrict: 'EA',
                scope: {
                    select: '&',
                    actionLinks: '=',
                },
                link: function(scope, element, attrs) {

                    var date = new Date();
                    var d = date.getDate();
                    var m = date.getMonth();
                    var y = date.getFullYear();

                    //Generate the Calendar
                    element.fullCalendar({
                        header: {
                            right: '',
                            center: 'prev, title, next',
                            left: ''
                        },

                        theme: true, //Do not remove this as it ruin the design
                        selectable: true,
                        selectHelper: true,
                        editable: true,

                        //Add Events
                        events: [
                            {
                                title: 'Hangout with friends',
                                start: new Date(y, m, 1),
                                end: new Date(y, m, 2),
                                className: 'bgm-cyan'
                            },
                            {
                                title: 'Meeting with client',
                                start: new Date(y, m, 10),
                                allDay: true,
                                className: 'bgm-red'
                            },
                            {
                                title: 'Repeat Event',
                                start: new Date(y, m, 18),
                                allDay: true,
                                className: 'bgm-blue'
                            },
                            {
                                title: 'Semester Exam',
                                start: new Date(y, m, 20),
                                end: new Date(y, m, 23),
                                className: 'bgm-green'
                            },
                            {
                                title: 'Soccor match',
                                start: new Date(y, m, 5),
                                end: new Date(y, m, 6),
                                className: 'bgm-purple'
                            },
                            {
                                title: 'Coffee time',
                                start: new Date(y, m, 21),
                                className: 'bgm-orange'
                            },
                            {
                                title: 'Job Interview',
                                start: new Date(y, m, 5),
                                className: 'bgm-dark'
                            },
                            {
                                title: 'IT Meeting',
                                start: new Date(y, m, 5),
                                className: 'bgm-cyan'
                            },
                            {
                                title: 'Brunch at Beach',
                                start: new Date(y, m, 1),
                                className: 'bgm-purple'
                            },
                            {
                                title: 'Live TV Show',
                                start: new Date(y, m, 15),
                                end: new Date(y, m, 17),
                                className: 'bgm-orange'
                            },
                            {
                                title: 'Software Conference',
                                start: new Date(y, m, 25),
                                end: new Date(y, m, 28),
                                className: 'bgm-blue'
                            },
                            {
                                title: 'Coffee time',
                                start: new Date(y, m, 30),
                                className: 'bgm-orange'
                            },
                            {
                                title: 'Job Interview',
                                start: new Date(y, m, 30),
                                className: 'bgm-dark'
                            },
                        ],

                        //On Day Select
                        select: function(start, end, allDay) {
                            scope.select({
                                start: start, 
                                end: end
                            });
                        }
                    });


                    //Add action links in calendar header
                    //var x = $compile(scope.$eval(attrs.actionLinks))(scope);
                    //element.find('.fc-toolbar').append($compile(scope.actionLinks)(scope));
                }
            }
        })


        //Change Calendar Views
        .directive('lcCalendarView', function(){
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    element.on('click', function(){
                        $('#calendar').fullCalendar('changeView', attrs.calendarView);  
                    })
                }
            }
        });

