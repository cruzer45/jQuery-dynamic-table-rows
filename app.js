var id = 0;

function addrow(){
  var prototype = $("#prototype").clone(true, true);
  //console.log(prototype);
  prototype.attr("id","");
  prototype.hide().insertBefore($("#lastRow")).fadeToggle("slow");
  
}

function removeRow(btn){
  //console.log(btn);
  btn.closest("tr").fadeToggle((function(){
    btn.closest("tr").fadeToggle().remove();
  }));
  
  
}

jQuery(document).ready(function($) {

  $("button.btnRemove").on("click",function(){
    //console.log("Remove Row Clicked");
    removeRow($(this));
  });

  $("#btnAddRow").on("click",function(){
    //console.log("Add Row Clicked");
    addrow();
  });

  addrow();
});