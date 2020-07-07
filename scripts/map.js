(function () {
    ymaps.ready(function () {
            var myMap = new ymaps.Map("map", {
                center: [55.74368256307244,37.61706034861679],
                controls: [],
                zoom: 14
            })

            const chocoMarker = ymaps.templateLayoutFactory.createClass(
                '<svg class="map__marker icon">'+
                '<use xlink:href="img/icons/sprite/sprite.svg#marker" />'+
                '</svg>'
            )

            const emptyHint = {
                hintContent: '',
                balloonContent: ''
            }

            const icon = {
                iconLayout: chocoMarker
            }

            const cords = [
                [55.755,37.620],
                [55.749,37.604],
                [55.758,37.582],
                [55.742,37.580]
            ]

            cords.forEach(cord => {
                myMap.geoObjects
                    .add(new ymaps.Placemark(
                        cord,
                        emptyHint,
                        icon
                    ))
            })

            myMap.behaviors.disable('scrollZoom')
        }
    );
}) ()