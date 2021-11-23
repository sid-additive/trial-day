# CSS Challenges

The following tasks aim to assess you CSS knowledge. This tasks, as well as the following JavaScript tasks,
are presented as [Codepens](https://codepen.io/). In order to complete the challenges you have to
[fork](https://blog.codepen.io/documentation/forks/) the respective codepen, follow the instructions to complete the task,
save it, and paste the link into the given spaces. In the end you can commit and push the changes to your Github repository.

### Awesome List

In this task you have to transform a list into a responsive layout. You are only allowed to change the CSS.

[Codepen](https://codepen.io/readonlyadditive/pen/vYxgyGz)

```
body {
  font-family: Helvetica;
  max-width: 600px;
  margin: 0 auto;
}

.description {
  font-size: 20px;
  line-height: 1.4em;
  margin-bottom: 48px;
}

.description ul {
  margin-top: 16px;
  padding-left: 20px;
}

.items {
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 8px;
}

.items .item {
  width: 100%;
  height: 120px;
  padding: 16px;
  font-size: 24px;
  background: #f2f2f2;
  border-radius: 3px;
  box-sizing: border-box;
}

.items .item-2 {
  top: 128px;
}

.items .item-3 {
  top: 256px;
}

.items .item-4 {
  top: 384px;
}

.items .item-5 {
  top: 512px;
}

.items .item-6 {
  top: 640px;
}

.items .item-7 {
  top: 768px;
}

.items .item-8 {
  top: 896px;
}
```

### Navbar Layout

In this task you have to implement a Navbar layout using a screenshot as a reference. You are only allowed to change
the CSS.

[Codepen](https://codepen.io/readonlyadditive/pen/BaWZBmO)


```
.navbar {
  border-style: solid;
  margin: 0px 20px;
  display: flex;
  justify-content: flex-end;
}

.item {
  padding: 10px;
  margin-left: 10px;
}

.start {
  background-color: red;
}nav

.products {
  background-color: green;
}

.about {
  background-color: blue;
}
```

### Form Validation

In this task you have to style some input fields depending on whether they are valid or not. You are only allowed to change
the CSS.

[Codepen](https://codepen.io/readonlyadditive/pen/qBrRqXo)

```
input:valid {
  border-color: green;
}

input:invalid {
  border-color: red;
}
```

### Hover List

In this task you have to fix the styles of list items when you hover them. You are only allowed to change
the CSS.

[Codepen](https://codepen.io/readonlyadditive/pen/BaWpQqy)

```
.container { 
	display: flex;
}

.user-list {
  flex: 1;
  margin: 1em;
}

.user-item {
  background-color: #cbe9f5;
  border-radius: 0.3em;
  padding: 0.4em;
}

.user-item:hover {
  background-color: #efefd7;
  border: 2px solid #a7a784;
  margin: -4px 0px;
}

.user-item + .user-item {
  margin-top: 0.5em
}
```