function initMap() {
        var nairn = {lat: 57.586422, lng: -3.868475};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: nairn
        });

        var contentString = "<b>Nairn</b> (/ˈnɛərn/ nairn; Gaelic: Inbhir Narann) is a town and former burgh in the Highland council area of Scotland. It is an ancient fishing port and market town around 16 miles (26 km) east of Inverness. It was the county town of the wider county of Nairn also known as Nairnshire.The town is now best known as a seaside resort, with two golf courses, award winning beaches, a community centre/mid-scale arts venue (Nairn Community & Arts Centre),[3] a small theatre (called The Little Theatre[4]) and one small museum, providing information on the local area and incorporating the collection of the former Fishertown museum.";

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: nairn,
          map: map,
          title: 'Nairn, Scotland'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }

window.onload = initMap;