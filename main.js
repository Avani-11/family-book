var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/SsGtfk14/grandfather-1.png", "https://i.postimg.cc/bNCqTcSY/grandpa-1.png", "https://i.postimg.cc/L6bMPtGn/grandmother-1.png", "https://i.postimg.cc/xdrDx0fQ/grandma-1.png", "https://i.postimg.cc/d1wMF4ZS/papa-2.png", "https://i.postimg.cc/PJ5BpJ4W/mummy-2.png", "https://i.postimg.cc/xTqw9kqY/Avani-1.png", "https://i.postimg.cc/NFnPK4Lt/manu-1.png"];
var names = ["Fmaily Book","Jagdish Meshram" , "Ramesh Ramteke", "Sharda Ramteke", "Hivanka Meshram" , "Ramesh Meshram" , "Shubhangi Meshram" , "Avani Meshram" , "Manasvi Meshram"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 8
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images [i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names [i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
