document.getElementById('load-api-data').addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data => displaydata(data))
})
function displaydata(data){
    const container = document.getElementById('parent-container');
    console.log(data);
    for(const post of data){
        
    }
}