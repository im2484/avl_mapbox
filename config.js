var config = {
    style: 'mapbox://styles/imelchor/cm2v1lfy8008q01pafoj73dja',//mapbox://styles/imelchor/cm2v1lfy8008q01pafoj73dja,mapbox://styles/mapbox/dark-v11
    accessToken: 'pk.eyJ1IjoiaW1lbGNob3IiLCJhIjoiY20ydWg5dTU1MDE3MTJrcTF4eHpjMDl6cSJ9.mYb62Z76ksJIeujostps2g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: 'Source: videos donated by survivors, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',


    
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: '',
            //image: 'C:/Users/im2484/OneDrive - Princeton University/Desktop/High_WaterMark/Documentary/Asheville_MapBox/MapBox_tutorial/biltmore_mcdonalds.png',
            description: '<video autoplay muted width="325px" height="200px"controls loop = "controls"><source src= "C:/Users/im2484/OneDrive - Princeton University/Desktop/High_WaterMark/Documentary/Asheville_MapBox/MapBox_tutorial/McDonalds_ruins1.mp4" type = "video/mp4"></video>  12 foot high floods hit Biltmore Village on September 29, 2024. The video features <a href="https://www.ashevillenc.gov/department/public-works/stormwater-services-utility/flood-information/" target="_blank" class="custom-toolkit" data-bs-toggle="tooltip" title="A 100-year floodplain is an area with a 1% chance of flooding annually, used in planning and risk assessments, and does not mean a flood occurs only once every 100 years." style="color: #459cf2; font-weight: bold"> disaster from a 500-year flood event (500 year floodplain)</a>',
            location: {
                center: [-82.543662,35.568323], 
                zoom: 13.5,
                pitch: 30,
                bearing: -5,
                speed: 1,
                curve: 1.5,
                easing: (t) => t * (2 - t)
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'RIVER ARTS DISTRICT',
            videoUrl: 'https://www.youtube.com/embed/4-bz0ZHtsgI',
            image: 'C:/Users/im2484/OneDrive - Princeton University/Desktop/High_WaterMark/Documentary/Asheville_MapBox/MapBox_tutorial/river_arts_marquee.png',
            description: '<video autoplay muted width="325px" height="200px"controls loop = "controls"><source src= "C:/Users/im2484/OneDrive - Princeton University/Desktop/High_WaterMark/Documentary/Asheville_MapBox/MapBox_tutorial/abigail_in_the_distance_rad.mp4" type = "video/mp4"></video> toxic mud and dust threatens public health in the area',
            location: {
                center: [-82.566355,35.585429],
                zoom: 14.7,
                pitch: 29,
                bearing: 0,
                speed: 1,
                curve: 1.5
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]

    
}
