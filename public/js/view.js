// Getting todos from database when page loads
  getTodos();

  // This function resets the todos displayed with new todos from the database
  function initializeRows() {
    todoContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < todos.length; i++) {
      rowsToAdd.push(createNewRow(todos[i]));
    }
    todoContainer.prepend(rowsToAdd);
  }

  // This function grabs todos from the database and updates the view
  function getTodos() {
    $.get("/api/todos", function(data) {
      console.log("Todos", data);
      todos = data;
      initializeRows();
    });
  }











function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
       	zoom: 10,
        center: {lat: 32, lng: -81}
    });

   	var bikeLayer = new google.maps.BicyclingLayer();
        bikeLayer.setMap(map);
    

    function populateMap(db) {


    }; //end populateMap

}; //end initMap