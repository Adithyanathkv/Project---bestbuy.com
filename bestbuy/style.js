// localStorage.setItem("dodArr",JSON.stringify(objdealoftheday))
var objdealoftheday=JSON.parse(localStorage.getItem("dodArr")) || [];

var objdealoftheday=[ 
    {
    image_url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6489/6489665_sd.jpg;maxHeight=640;maxWidth=550",
    name:"Infinity - Celebrity Massage Chair - Brown",
    starimage:"https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratenum:"(117)",
    price:3299.00,
    save:"save $4700",
    was:"was $",
    strikeofprices:"7999.00",
    
    },
    {
    image_url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427196_rd.jpg;maxHeight=640;maxWidth=550",
    name:"Bowflex Treadmill 10 - Black",
    starimage:"https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratenum:"(117)",
    price:1499.00,
    save:"save $1300",
    was:"was $",
    strikeofprices:"2799.00",
    
    },
    {
    image_url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6405/6405080_sd.jpg;maxHeight=640;maxWidth=550",
    name:"Schwinn - 270 Recumbent Exercise Bike - Black",
    starimage:"https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratenum:"(309)",
    price:499.99,
    save:"save $300",
    was:"was $",
    strikeofprices:"799.99",
    
    },
    {
    image_url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6412/6412320_sd.jpg;maxHeight=640;maxWidth=550",
    name:"Bella Pro Series - 2-qt. Analog Air Fryer - Matte Black",
    starimage:"https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratenum:"(1225)",
    price:19.99,
    save:"save $20",
    was:"was $",
    strikeofprices:"39.99",
    
    },
    {
    image_url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6337/6337720_sd.jpg;maxHeight=640;maxWidth=550",
    name:"Insignia™ - 4-Slice Toaster Oven - Stainless Steel",
    starimage:"https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratenum:"(395)",
    price:19.99,
    save:"save $20",
    was:"was $",
    strikeofprices:"39.99",
    
    },
    {
    image_url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427551_sd.jpg;maxHeight=300;maxWidth=450",
    name:"Save up to 47% on select SanDisk and WD external solid state drives.",
    starimage:"https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratenum:"(307)",
    price:899.10,
    save:"save $90",
    was:"was $",
    strikeofprices:"99.69",
    
    },
    {
    image_url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6415/6415287_sd.jpg;maxHeight=300;maxWidth=450",
    name:"Save up to $170 on Arozzi gaming ultrawide gaming desk and Milano or Mugello gaming chairs.",
    starimage:"https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratenum:"(117)",
    price:99.90,
    save:"save $47",
    was:"was $",
    strikeofprices:"99.00",
    
    },
    {
    image_url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6369/6369455_sd.jpg;maxHeight=640;maxWidth=550",
    name:"PowerXL - 7QT Digital Air Fryer - Black",
    starimage:"https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratenum:"(297)",
    price:79.99,
    save:"save $70",
    was:"was $",
    strikeofprices:"149.99",
    
    },
    {
    image_url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6473/6473905_sd.jpg;maxHeight=640;maxWidth=550",
    name:"Beats by Dr. Dre - Geek Squad Certified Refurbished Beats Studio Buds Totally Wireless Noise",
    starimage:"https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratenum:"(45)",
    price:33.99,
    save:"save $10",
    was:"was $",
    strikeofprices:"43.99",
    
    },
    {
    image_url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6434/6434560_sd.jpg;maxHeight=640;maxWidth=550",
    name:"Tineco - Floor One S3 Wet/Dry Hard Floor Cordless Vacuum with iLoop Smart Sensor Technology -",
    starimage:"https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratenum:"(276)",
    price:329.99,
    save:"save $70",
    was:"was $",
    strikeofprices:"399.99",
    
    },
    {
    image_url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6471/6471758cv11d.jpg;maxHeight=640;maxWidth=550",
    name:"Arcade1Up - The Simpsons 30th Edition Arcade with matching stool",
    starimage:"https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratenum:"(41)",
    price:499.99,
    save:"save $200",
    was:"was $",
    strikeofprices:"699.00",
    
    },
    {
    image_url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6476/6476205_sd.jpg;maxHeight=640;maxWidth=550",
    name:"Soundcore - by Anker Life Note 3 XR True Wireless Noise Cancelling In-Ear Headphones - Black",
    starimage:"https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratenum:"(111)",
    price:59.99,
    save:"save $40",
    was:"was $",
    strikeofprices:"99.99",
    
    },
    {
    image_url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6476/6476201_sd.jpg;maxHeight=640;maxWidth=550",
    name:"Soundcore - By Anker Life Note 3 XR True Wireless Noise Cancelling In-Ear Headphones - Blue",
    starimage:"https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratenum:"(111)",
    price:59.99,
    save:"save $40",
    was:"was $",
    strikeofprices:"99.99",
    
    },
    {
    image_url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6473/6473343_sd.jpg;maxHeight=640;maxWidth=550",
    name:"BEBIRD - Wireless Visual Ear Cleaner with Magnetic Charging Base, which Holds Accessories an",
    starimage:"https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratenum:"(117)",
    price:69.99,
    save:"save $30",
    was:"was $",
    strikeofprices:"99.00",
    
    },
    {
    image_url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6422/6422377cv11d.jpg;maxHeight=300;maxWidth=450",
    name:"Save up to $20 on select Etekcity smart lights, switches and plugs.",
    starimage:"https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratenum:"(117)",
    price:32.99,
    save:"save $4",
    was:"was $",
    strikeofprices:"79.99",
    
    },
    
    ]

    localStorage.setItem("dodArr",JSON.stringify(objdealoftheday))

    var objdealoftheday=JSON.parse(localStorage.getItem("dodArr")) || [];



    // localStorage.setItem("dodcartdata", JSON.stringify(dodcartArr));
  var dodcartArr=JSON.parse(localStorage.getItem("dodcartdata")) || [];


    display()
    function display(){
     document.querySelector("#objmaindiv").innerHTML = "";

    
    objdealoftheday.map(function(element,index){
    
    
    
    var div1=document.createElement("div")
    div1.setAttribute("id", ("div1"))
    // 1
    var image=document.createElement("img")
    image.setAttribute("src", element.image_url)
    image.setAttribute("id", ("image"))
    
    
    // 2
    var name=document.createElement("h3")
    name.innerText=element.name
    name.setAttribute("id", ("name"))
    
    var div4rate=document.createElement("div")
    
    var div4star=document.createElement("div")
    
    var starimage=document.createElement("img")
    starimage.setAttribute("src", element.starimage)
    starimage.setAttribute("id", ("starimage"))
    div4star.append(starimage)
    
    
    var divratenum=document.createElement("div")
    
    var ratenum=document.createElement("p")
    
    divratenum.append(ratenum)
    ratenum.innerText=element.ratenum
    ratenum.setAttribute("id", ("ratenum"))
    // 3
    div4rate.append(div4star, divratenum)
    
    // 4
    var price=document.createElement("h3")
    price.innerText=element.price
    price.setAttribute("id", ("price"))
    
    var divbtn=document.createElement("div")
    
    var div1btn=document.createElement("div")
    
    var save=document.createElement("p")
    save.innerText=element.save
    save.setAttribute("id", ("save"))
    
    div1btn.append(save)
    
    var div2btn=document.createElement("div")
    
    var was=document.createElement("p")
    was.innerText=element.was
    was.setAttribute("id", ("was"))
    
    div2btn.append(was)
    
    var div3btn=document.createElement("div")
    
    var strikeofprices=document.createElement("p")
    strikeofprices.innerText=element.strikeofprices
    strikeofprices.setAttribute("id", ("strikeofprices"))
    div3btn.append(strikeofprices)
    // 5
    
    divbtn.append(div1btn,div2btn,div3btn)
    
    // 6
    
    var addtocart=document.createElement("button");
    addtocart.innerText="🛒Add to Cart"
    addtocart.setAttribute("id", ("addtocart"))
    addTocart.addEventListener("click",function(){
    funaddTocart(element)
    })
    
    
    div1.append(image,name,div4rate,price,divbtn,addtocart)
    document.querySelector("#objmaindiv").append(div1)
    
    })
}
function funaddTocart(element){

    element.quant = 1;
    dodcartArr.push(element);
    localStorage.setItem("dodcartdata", JSON.stringify(dodcartArr));
    }
  