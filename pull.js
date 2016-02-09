$(document).ready(function(){
var items = [];


$.ajax({
type: 'GET',
url: "http://api.hotukdeals.com/rest_api/v2/?key=30e239c6392165edc19ba1b3b40d8d35&output=json&merchant=Argos&results_per_page=10",
success: function (object) 

{
$(object.deals.items).each(function(index)
{
document.getElementById('object'+index+'info').innerHTML='Title: '+ this.title + '<br><br> Description: '+ this.description +  '<br> Price: £'+ this.price + '<br>Temperature: '+ this.temperature + '<br> Merchant: '+ 'Argos'+'<br>Deal Link :'+ this.deal_link +'<br><br><br>';



 
items.push(this);


/*image get has stopped working commented out to stablise the rest of the website
var img = document.createElement("image");
img.setAttribute('src',this.deal_image);
img.setAttribute("height",175);
img.setAttribute("width",150);

var dealimglink = document.createElement("a");
dealimglink.setAttribute('href',this.deal_image_highres);
dealimglink.setAttribute('target','_blank');
dealimglink.appendChild(img);
document.getElementById('deal'+index+'image').appendChild('dealimglink'); */

});
}

});

var data = [];

$.ajax({
type: 'GET',
url: 'https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=LOGIN&email=benisgr8@hotmail.co.uk&password=BENNYd93&developerkey=A7K0vntoMZFL45EC5r6B&applicationkey=ABC3876734E3E04E8FCE',
success: function (object1) 

{

$(object1).each(function()
{
document.getElementById('objectresult').innerHTML='This Key is for the Tesco API left it in here to show this part of the code is working for the tesco API.<br><br>Session Key:'+ this.SessionKey;
data.push(this);


});
}
})
});



/* did attempt to pull products from Tesco but i couldn't figure out why it won't work, I apologise */
/* As a result could not do the price comparison for each of the products from both API's */



/*  $( "#go" ).click(function() {
var product = [];
var textBox = document.getElementById('search');
var key = document.getElementById('objectresult');
$.ajax({
type: 'GET',
url: "https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&searchtext=" + textBox + "&page=1&sessionkey="+key,
success: function (object3) 

{

$(object3.Products).each(function(i)
{
document.getElementById('product'+i+'result').innerHTML='Title:'+ this.name+ '<br> Price: £'+this.Price;
product.push(this);
console.log(data);

});
}

});


}); */
