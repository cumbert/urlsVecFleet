function ordenarLista() {
    var ul = document.getElementById("miLista");
    var items = ul.getElementsByTagName("li");
    var itemsArray = Array.from(items);
  
    itemsArray.sort(function(a, b) {
      return a.innerHTML.localeCompare(b.innerHTML);
    });
  
    for (var i = 0; i < itemsArray.length; i++) {
      ul.appendChild(itemsArray[i]);
    }
  }
  
  ordenarLista();