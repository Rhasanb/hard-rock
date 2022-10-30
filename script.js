document.getElementById('search').addEventListener("click", searchResult);


function searchResult(){
    document.getElementById('list-item').innerHTML='';
   const songTitle = document.getElementById('input-box').value;
     
fetch(`https://api.lyrics.ovh/suggest/${songTitle}`)
.then(res=> res.json())
.then(data=> {

    fetchData = data;
    
    for(  i = 0 ; i<data.data.length; i++){
        const title = data.data[i].title;
        const artist = data.data[i].artist.name;

        
        const ul = document.getElementById('list-item');
        const Li = document.createElement('li');
        Li.innerHTML += ` ${title} ${artist}`
        ul.appendChild(Li);

        

     const anchor =   document.createElement('a');
        anchor.setAttribute('href', "#lyrics");
        Li.appendChild(anchor);
        
        var span = document.createElement('span');
        span.innerHTML = '<button onClick="getLyrics([i])">get lyrics</button>';

        anchor.appendChild(span);
       



        if( i==5){
            break;
        }
    
    }});
    
}


function getLyrics(index){
    const title = fetchData.data[index].title;
    const artist = fetchData.data[index].artist;
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res=> res.json())
    .then(data=> {
        const lyrics = data.lyrics;
        document.getElementById('lyrics').innerHTML= `$lyrics`;
        

    })
}








//    const NewTag = document.createElement('h3');

//    NewTag.setAttribute('list-item');

//    NewTag.appendChild('list-item');





        


// function searchLyrics (){

//     fetch('https://api.lyrics.ovh/suggest/${title_name}')
//     .then(res=> res.json())
//     .then(data=> {

//         // document.getElementById('')
//     console.log(data);
// })
// }

//  const searchResult = searchLyrics();

// console.log(searchResult);
