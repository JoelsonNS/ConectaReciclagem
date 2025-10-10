function initMap() {
        // posição central (Pesqueira - PE)
        var centro = { lat: -8.3579, lng: -36.6961 };

        // cria o mapa
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: centro
        });

        // adiciona alguns pontos marcados
        var marcadores = [
          { lat: -8.3579, lng: -36.6961, nome: "Ponto de coleta 1"}, 
          { lat: -8.3595, lng: -36.6930, nome: "Ponto de coleta 2"}, 
          { lat: -8.3608, lng: -36.7000, nome: "Ponto de coleta 3"}
        ];

        marcadores.forEach(function(ponto) {
          const marker = new google.maps.Marker({
            position: ponto,
            map: map,
            label: {
                text: ponto.nome,
                color: "#EEEEEE",
                fontWeight: "bold",
                fontSize: "12px",
          }, 
          });

          marker.addListener('click', function() {
                window.location.href = "detalhes-coleta.html";
          });
        });
      }