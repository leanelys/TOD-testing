# Universal Selector
```
* {
  color: purple;
}
```

# Type Selector
```
div {
  color: white;
}
```

# Class Selector
```
.class-name {
    color: red;
}
```

# ID Selector
```
#id-name {
    background-color:red;
}
```

# Grouping Selector
```
.read,
.unread {
  color: white;
  background-color: black;
}

.read {
  /* several unique declarations */
}

.unread {
  /* several unique declarations */
}
```

# Chaining Selectors
```
.subsection.header {
  color: red;
}

.subsection#preview {
  color: blue;
}
```

# Descendant Combinator
```
.ancestor .contents {
  /* some declarations */
}
```