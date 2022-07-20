const categoryUrl="http://localhost:9860/category";
const locationUrl=" http://localhost:9860/location" ;

function getCategory()
{
fetch(categoryUrl, {method:'GET', headers : {
    'access-control-allow-origin': '*',
}}, )
.then((res) => res.json())
.then((data) => {
    data[0].category.map((item) => {
    let element = document.createElement('option')
    let text =document.createTextNode(item.category)
    element.appendChild(text)
    element.value = item.category_id
    document.getElementById('category').appendChild(element)
})
})
}
 
function getLocation()
{ 
fetch(locationUrl,{method:'GET'})
.then((res) => res.json())
.then((data) => 
{
    data[0].location.map((item) => 
    {
    let element = document.createElement('option')
    let text = document.createTextNode(item.location)
    element.appendChild(text)
    element.value = item.state_id
    document.getElementById('location').appendChild(element)
})
})
}