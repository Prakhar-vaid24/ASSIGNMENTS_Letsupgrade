let characters=[
{
    image:"https://static.zerochan.net/Eren.Jaeger.full.1628821.jpg",
    value:1,
    status:"closed"
},
{
    image:"https://static.zerochan.net/Eren.Jaeger.full.1628821.jpg",
    value:1,
    status:"closed"
},
{
    image:"http://images5.fanpop.com/image/photos/30700000/Hidan-akatsuki-naruto-shippuden-30732620-700-800.jpg",
    value:2,
    status:"closed"
},
{
    image:"http://images5.fanpop.com/image/photos/30700000/Hidan-akatsuki-naruto-shippuden-30732620-700-800.jpg",
    value:2,
    status:"closed"
},
{
    image:"https://lh4.googleusercontent.com/proxy/64a92DUnghFR5Qi1aY5nlv5BYY2y5b5JnPIVWYvCpiZnhE5HuDAHWk1i4gcJlA4WH3dAhNMKFUP0I7Kp1AV_gEPe8w-B7ee-kTznwrK1fbh8nycVagLV45Vy1ZN-OmnHpvNaihfnZmQx_li39yq2=s0-d",
    value:3,
    status:"closed"
},
{
    image:"https://lh4.googleusercontent.com/proxy/64a92DUnghFR5Qi1aY5nlv5BYY2y5b5JnPIVWYvCpiZnhE5HuDAHWk1i4gcJlA4WH3dAhNMKFUP0I7Kp1AV_gEPe8w-B7ee-kTznwrK1fbh8nycVagLV45Vy1ZN-OmnHpvNaihfnZmQx_li39yq2=s0-d",
    value:3,
    status:"closed"
},
{
    image:"http://images2.fanpop.com/images/photos/6800000/-Shinigami-shinigami-6850110-800-637.jpg",
    value:4,
    status:"closed"
},
{
    image:"http://images2.fanpop.com/images/photos/6800000/-Shinigami-shinigami-6850110-800-637.jpg",
    value:4,
    status:"closed"
},
{
    image:"https://i.pinimg.com/736x/16/95/90/16959098827c468eba4d10bc9f9585a5.jpg",
    value:5,
    status:"closed"
},
{
    image:"https://i.pinimg.com/736x/16/95/90/16959098827c468eba4d10bc9f9585a5.jpg",
    value:5,
    status:"closed"
},
{
    image:"https://wallpapercave.com/wp/wp2256134.jpg",
    value:6,
    status:"closed"
},
{
    image:"https://wallpapercave.com/wp/wp2256134.jpg",
    value:6,
    status:"closed"
},
]

let temp;
for(let i=characters.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=characters[i];
    characters[i]=characters[j];
    characters[j]=temp;
}


let characterscopy=characters;
function displaycharacters(data){

    let charactersstring="";

    data.forEach(function(character,index){
        
        charactersstring+=`
        
        <div class="character" style="background-image:url('${character.image}')">
            <div class=" overlay ${character.status}" onclick="opencard(${index})">
            </div>
        </div>

        `;
    });

    document.getElementById('characters').innerHTML=charactersstring;

}


displaycharacters(characters);

let cardcount=1;
let val1=null,val2=null;
let score=0;
function opencard(index){

    characters[index].status="opened";
    if(cardcount===1){
        val1=characters[index].value;
        cardcount++;
    }

    else if(cardcount===2){
        val2=characters[index].value;
        
        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;
            console.log(score);
            val1=null;
            val2=null;
            cardcount=1;    
        }

        else{
            alert("GAME OVER");
            location.reload();
        }

    }
    
    displaycharacters(characters);

}