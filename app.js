// The following example creates complex markers to indicate locations near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 48.8831397, lng: 2.2417722 },
  });
  setMarkers(map);
}

/**
 *
 * Locations
 *
 */
// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
const locations = [
  ["Bondi", 48.8831397, 2.2417722, 4],
  ["Coogee", 48.6308151, -2.0655663, 5],
  // ["Cronulla Beach", -34.028249, 151.157507, 3],
  // ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
  // ["Maroubra Beach", -33.950198, 151.259302, 1],
];

function setMarkers(map) {
  /**
   *
   * Position Pins in the Map
   *
   */
  for (let i = 0; i < locations.length; i++) {
    /**
     *
     * Add an Info Window
     *
     */
    const contentString =
      "<div class='parent-card-pin'" +
      ' onclick="window.tc_events_3(' +
      "undefined," +
      "'ga_click'," +
      "{ga_category: 'navigation', ga_action: 'click', ga_label: 'liste::carte_voir_annonce', ga_value: undefined }" +
      ')"' +
      ">" +
      "<div" +
      ' class="card-pin"' +
      ' itemscope=""' +
      ' itemtype="http://schema.org/Residence"' +
      ' data-reactroot=""' +
      ">" +
      "<meta" +
      ' itemprop="url"' +
      ' content="/programme/detail-14991621?prevUrl=/programme/immobilier-france-promoteur-1"' +
      "/><a" +
      ' href="/programme/detail-14991621?prevUrl=/programme/immobilier-france-promoteur-1"' +
      ' itemscope=""' +
      ' itemtype="http://schema.org/Place"' +
      '><figure role="group">' +
      "<img" +
      ' class="classified-image"' +
      ' src="https://lh3.googleusercontent.com/NCB6C0ie8hqtkMB6qAG7uRpK378w9XRHbsXZXU1VKdrbS1Gg_15HI7q5g6BQR-f3cckZRpmzaAbUZT2SEaxMdNjA=rj-w350-h264-l80"' +
      ' itemprop="image"' +
      ' alt="BOTANIA"' +
      "/>" +
      '<figcaption class="classified-image-caption">' +
      locations[i][0] +
      "</figcaption>" +
      '<div class="cartouche cartouche-promo">' +
      "Livraison immédiate" +
      "</div>" +
      "</figure></a" +
      ">" +
      '<div class="card-pin__infos">' +
      "<div" +
      ' class="container-price"' +
      ' itemprop="offers"' +
      ' itemtype="http://schema.org/Offer"' +
      ">" +
      '<span class="info-price prix-nc">Prix non communiqué</span>' +
      "</div>" +
      "<a" +
      ' href="/programme/detail-14991621?prevUrl=/programme/immobilier-france-promoteur-1"' +
      ' class="card-pin-title"' +
      ' itemscope=""' +
      ' itemtype="http://schema.org/Place"' +
      '><span class="name program-name">' +
      locations[i][0] +
      "</span" +
      '><span class="rooms">2 pièces<!-- --> </span' +
      "><span" +
      ' itemprop="address"' +
      ' itemtype="http://schema.org/PostalAddress"' +
      ' class="localisation-all"' +
      "><meta" +
      ' itemprop="addressLocality"' +
      ' content="Concarneau (29)"' +
      '/><span class="localisation-address">Concarneau (29)</span' +
      '><span class="localisation-city"' +
      ">Concarneau (29)</span" +
      "></span" +
      ">" +
      '<div class="delivery">' +
      "Livraison <!-- -->" +
      '<strong class="date">immediat</strong>' +
      "</div></a" +
      ">" +
      "</div>" +
      "</div>" +
      "</div>";

    // The Info Window Initial Content
    var infowindow = new google.maps.InfoWindow({
      content: "",
    });

    const location = locations[i];
    const marker = new google.maps.Marker({
      position: { lat: location[1], lng: location[2] },
      map,
      // icon: image,
      // shape: shape,
      title: location[0],
      zIndex: location[3],

      // Style
      icon: "images/ic_localisation_default.svg",
      maxWidth: 247,
    });

    // Add the Listener
    marker.addListener("click", () => {
      infowindow.close();
      infowindow.setContent(contentString);
      infowindow.open(map, marker);
    });
  }
}
