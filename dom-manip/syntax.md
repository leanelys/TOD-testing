### select a specific div
```const container = document.querySelector("#container");```

### create element for whatever div you selected
```const div = document.createElement("div");```

### edit div style
```div.style.color = "blue";```

```div.style.cssText = "color: blue; background: white;";```

```div.setAttribute("style", "color: blue; background: white;");```

### classes

```
// adds class "new" to your new div
div.classList.add("new");
```

```
// removes "new" class from div
div.classList.remove("new");
```

```
// if div doesn't have class "active" then add it, or if it does, then remove it
div.classList.toggle("active");
```

### text

```// creates a text node containing "Hello World!" and inserts it in div
div.textContent = "Hello World!";
```