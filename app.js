let accessKey='7jsg4dtMRWDuYETwKi0kxCcb5o4vNXfqvkXZlplLgFA';
let mainDiv=document.querySelector('.main-div');
let input=document.querySelector('.inp');
let btn=document.querySelector('.btn');
let page=1;

async function gettingAPI(){
    let value=input.value;
    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${value}&client_id=${accessKey}`;
    let response=await fetch(url);
    let data=await response.json();
    let array=data.results;
    mainDiv.innerHTML='';
    array.map((oneValue)=>{
        console.log(oneValue);
        let imgDiv=document.createElement('div');
        imgDiv.className='img-div';
        let image=document.createElement('img');
        image.src=oneValue.urls.small;
        let title=document.createElement('span');
        title.innerText=oneValue.alt_description;
        mainDiv.append(imgDiv);
        imgDiv.append(image);
        imgDiv.append(title);
    }) 
}
gettingAPI();


btn.addEventListener('click',gettingAPI);