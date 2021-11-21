menulist_array = ["Chiken Tandoori Pizza",
                "Veg Supreme Pizza",
                "Paneer Tikka Pizza",
                "Delux Veggie Pizza",
                "Veg Extravanganza Pizza"];
function getmenu(){
    var htmldata;
    htmldata = "<ol class='menu_list'>"
    menulist_array.sort();
    for(var i=0;i<menulist_array.length;i++){
        htmldata=htmldata+'<li>' + menulist_array[i] + '<li>'
    }
    htmldata=htmldata+"<ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item(){
    var item=document.getElementById("add_item").value;
    menulist_array.push(item);
    menulist_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menulist_array.length;i++){
        htmldata=htmldata+'<div class="card">' +'<img src="images/pizzalmg.png">' + menulist_array[i] + '</div>'
    }
    htmldata=htmldata+'</section>'
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}