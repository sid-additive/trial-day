# JavaScript Challenges

The following tasks aim to assess you JavaScript knowledge. This tasks are again
presented as [Codepens](https://codepen.io/). In order to complete the challenges you have to
[fork](https://blog.codepen.io/documentation/forks/) the respective codepen, follow the instructions to complete the task,
save it, and paste the link into the given spaces. In the end you can commit and push the changes to your Github repository.

### True length

In this challenge you have to create a function which returns the number of true values there are in an array.

Examples:

```js
countTrue([true, false, true, false])
-> 2

countTrue([false])
-> 0
```

[Codepen](https://codepen.io/readonlyadditive/pen/gOmgLQY?editors=1112)

```
function countTrue(array) {
  var count= 0;
  for (let i = 0; i < array.length; i++) {
  if(array[i] == true){
    count++;
  }
}
  return count;
}
```

### jQuery Hell

In this challenge you have refactor code by replacing jQuery with vanilla JavaScript and possibly some CSS.

[Codepen](https://codepen.io/readonlyadditive/pen/wvJgoNK)

```
const form = document.getElementById('newItemForm');
form.onsubmit = function(event) {
  event.preventDefault();
  
  var text = document.getElementById('input').value;
  if(!text){
    alert("Geben Sie text ein!");
  }else {
let ul = document.getElementById("list");
 var li = document.createElement("li");
 ul.appendChild(li);
 li.innerHTML = text;
  }
}

function add(event){
  console.log(event);
  event.preventDefault();
  var text = document.getElementById('input').value;
  if(!text){
    alert("Geben Sie text ein!");
  }else {
let ul = document.getElementById("list");
 let li = document.createElement("li");
 ul.appendChild(li);
 li.innerHTML = text;
 document.getElementById("input").value = '';
 li.addEventListener('click', function(){
   li.remove();
 });   
  }
}

<ul id="list">
    <!-- list items go here -->
</ul>

<input type="submit" id="button" value="Add Item" onclick="add()"/>
```

### Price in Euro

In this challenge you have given a function that takes an array of objects as parameter. Each object
contains a property `priceInCent`. Your task is to add a property `priceInEuro`, which contains the formatted
(e.g. 15,00 €) price in euro, to each of the objects.

Example:

```js
appendFormattedPrice([{title: 'Offer 1', priceInCent: 15000}, {title: 'Offer 2', priceInCent: 17050}])
-> [{title: 'Offer 1', priceInCent: 15000, priceInEuro: '150.00 €'}, {title: 'Offer 2', priceInCent: 17050, priceInEuro: '170.50 €'}]
```

[Codepen](https://codepen.io/readonlyadditive/pen/OJpWWPM?editors=0011)

```
function appendFormattedPrice(array) {
  var num = array[1].substr(13, array[1].length) / Math.pow(10, 2);
  array.push("priceInEuro: "+num+" €");
  for(var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}
```

### Date Validation

In this challenge you have to fix the validation of two datepickers. The start and end date should be validated using the
following rules:

- Start date should be in the future, today included.
- The end date must be after the start date.
- The end date must be before the end of the current year.
- Error messages must be displayed.

[Codepen](https://codepen.io/readonlyadditive/pen/JjWEEdw)

`Insert your completed codepen here.`
