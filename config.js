var config = {
    style: 'mapbox://styles/shovi/cmbdbv138002r01s79ql69r6n',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoic2hvdmkiLCJhIjoiY21iOTRpMGg2MGhhcDJrc2J0N2NqMTV6YyJ9.jBVX6qbelq6VDeupDgS00g',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'BIC Tenerife',
    subtitle: 'Bienes de interés cultural',
    byline: 'Lucía Desafío 2',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'RASCA',
            image: './assets/san-fran.jpeg',
            description: 'El faro de Punta de Rasca es un faro situado en la isla de Tenerife (Islas Canarias, España) que se encarga de balizar para la navegación marítima las costas del sur de la isla, en la franja de litoral que abarca desde la zona cubierta por el faro de Punta de Teno, al noroeste, y el faro de Punta Abona, ubicado al noreste.',
            location: {
                center: [-16.698432284528433, 28.00256858986609],
                zoom: 9.39,
                pitch: 60,
                bearing: 0
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
            title: 'ROQUE DE JAMA - LA CENTINELA',
            image: 'data:image/jpeg;base64,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',
            description: 'El Roque de Jama es una estructura de gran belleza, y representa un paisaje singular. La importancia de esta formación radica en su origen que está relacionado con la formación del macizo de Adeje. Contiene importantes hábitats de plantas que crecen en las rocas (rupícolas).',
            location: {
                center: [-16.645551354541531, 28.098765695332148],
                zoom: 9.39,
                pitch: 60,
                bearing: -43.2,
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
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'VILLA Y PUERTO DE GARACHICO',
            image: './assets/geneva.jpg',
            description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
            location: {
                center: [-16.756145891962451, 28.374100444497749],
                zoom: 9.39,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'LLANOS DE IFARA',
            image: './assets/buenos-aires.jpg',
            description: 'Buenos Aires, the capital of Argentina, is a dynamic city known for its European-inspired architecture, vibrant tango culture, and rich culinary scene. Often called the "Paris of South America," it blends historic charm with modern energy.  You can add as many chapters as you need, just copy the JSON data and make changes.',
            location: {
                center: [-16.50869988252785, 28.090112608108541],
                zoom: 9.39,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
