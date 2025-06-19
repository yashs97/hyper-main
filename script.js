// const rightArrow = document.querySelector('.arrow-right');



function arrowInvert(){

    const rightArrow = document.querySelector('.arrow-right');
    rightArrow.style.rotate = '130deg';
}


var options = {
          series: [
          {
            name: 'Actual',
            group: 'budget',
            data: [32500, 29500, 40000, 40500, 28000, 44500, 20000, 16000, 32500, 29500, 40000, 40500]
          },
          
          {
            name: 'Projection',
            group: 'budget',
            data: [44500, 20000, 16000, 32500, 29500, 40000, 40500, 28000, 44500, 20000, 32500, 29500]
          },
         
        ],
          chart: {
          type: 'bar',
          height: 240,
          stacked: true,
        },
        stroke: {
          
          colors: ['#fff']
        },
        dataLabels:{
          enabled:false
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth:"20%"
          }
        },
        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul', 
            'Aug', 
            'Sep', 
            'Oct', 
            'Nov',
            'Dec',
          ]
        },
        fill: {
          opacity: 1
        },
        colors: ['#727cf5', '#d6d6d6'],
        yaxis: {
          labels: {
            formatter: (val) => {
              return val / 500 + 'K'
            }
          }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render()


// Chart 2

var options = {
          series: [{
          name: 'Current Week',
          data: [10, 20, 15, 25, 20, 30, 20]
        }, {
          name: 'Previous Week',
          data: [0, 15, 10, 30, 15, 35, 25]
        }],
          chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#747df2', '#10cd98'],
         yaxis: {
          labels: {
            formatter: (val) => {
              return Math.trunc(val / 1.11) + 'K'
            }
          }
        },
        stroke: {
          curve: 'smooth'
        },
         xaxis: {
          categories: [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun'
          ]
        },
        };

        var chart = new ApexCharts(document.querySelector("#chart-two"), options);
        chart.render();


// Map

// var map = new jsVectorMap({
  
// });

const map = new jsVectorMap({ 
  selector: "#map",
  map: "world",
  markers: [
    { name: 'Singapore', coords: [1.3521, 103.8198] },
    { name: 'Sydney', coords: [-33.8688, 151.2093] },
    { name: 'San Francisco', coords: [37.7749, -122.4194] }, 
    { name: 'New York', coords: [40.7128, -74.0060] }, 
  ]
})



// Chart Pie

 var options = {
          series: [44, 55, 41, 17],
          name: 'Direct',
          chart: {
          type: 'donut',
          height:200,
        },
        colors: ['#727cf5', '#10cd98', '#fa5c7c', '#ffbc00'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 100,
              height:200,
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#chart-pie"), options);
        chart.render();



// JS on page

const hamIcon = document.getElementById('ham-icon');

const sidebarContent = document.querySelector('.left-sidebar-content');

const sidebar = document.querySelector('.left-sidebar');

const smallSidebar = document.querySelector('.sidebar-toggle');

// const leftMargin = document.querySelector('.left-margin');

const navBar = document.querySelector('.navigation-bar');

const navTwo = document.querySelector('.nav-two');

const thirdSection = document.querySelector('.third-section');

const fourthSection = document.querySelector('.fourth-section');

const fifthSection = document.querySelector('.fifth-section');

const finalFoot = document.querySelector('.final-foot');



// Navbar on toggle

let navToggle = 1

hamIcon.addEventListener('click', ()=>{
  if(navToggle === 1){
      navToggle = 2;
      navBar.style.marginLeft = '104px';
      navTwo.style.marginLeft = '115px';
      thirdSection.style.marginLeft = '115px';
      fourthSection.style.marginLeft = '115px';
      fifthSection.style.marginLeft = '115px';
      finalFoot.style.marginLeft = '115px';
      sidebar.style.display='none';
      smallSidebar.style.display='block'

  }else if( navToggle === 2){
      navToggle = 1;
      navBar.style.marginLeft = '280px';
      navTwo.style.marginLeft = '280px';
      thirdSection.style.marginLeft = '280px';
      fourthSection.style.marginLeft = '280px';
      fifthSection.style.marginLeft = '280px';
      finalFoot.style.marginLeft = '280px';
      sidebar.style.display='block';
      smallSidebar.style.display='none'
  }
})


const countryNav = document.querySelector('.country-nav');
const languages = document.querySelector('.languages')
const langs = document.querySelector('#langs')

countryNav.addEventListener('click', ()=>{
  langs.classList.toggle('languages')

});


const socialIcons = document.getElementById('social-icons');
const socialIconsTop = document.querySelector('.social-icons-top');
const socialIconsBtn = document.querySelector('.social-icons-btn');


socialIconsBtn.addEventListener('click', ()=>{
  socialIcons.classList.toggle('social-icons-top')
})


const notif = document.getElementById('notif');
const notification = document.querySelector('.notification')
const notificationIcon = document.querySelector('.notification-bell');


notificationIcon.addEventListener('click', ()=>{
  notif.classList.toggle('notification')
})




// if()