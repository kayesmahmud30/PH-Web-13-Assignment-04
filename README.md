# 📑 Answer to the associated questions with ❝Assignment-04❞

## 1️⃣ Answer To The Question No 1:

### 🎯 Difference between `getElementById`, `getElementsByClassName`, `querySelector` & `querySelectorAll` in DOM

- `getElementById()` → Selects **one element by id**.
- `getElementsByClassName()` → Selects **multiple elements by class** (returns HTMLCollection).
- `querySelector()` → Selects **first matching element** using CSS selector.
- `querySelectorAll()` → Selects **all matching elements** (returns NodeList).

**Here is the code-snap for their syntax**

```js
const box = document.getElementById("box");

const items = document.getElementsByClassName("item");

const firstItem = document.querySelector(".item");

const allItems = document.querySelectorAll(".item");
```

---

## 2️⃣ Answer To The Question No 2:

### 🎯 How to Create and Insert a New Element into the DOM

**3 Steps...**

**1. Create element by** `document.createElement()`

**2. Add content by** `.innerText` or `.innerHTML`

**3. Insert into DOM by** `appendChild()` or `append()`

**Here is the code-snap to understand the syntax**

```js
const newDiv = document.createElement("div");
newDiv.innerText = "Hello DOM!";

document.body.appendChild(newDiv);
```

---

## 3️⃣ Answer To The Question No 3:

### 🎯 Event Bubbling

- Event Bubbling means an event moves from child to parent.
- If you click a child element, its parent’s event also runs.

**Here is the code-snap to understand the syntax**

```js
document.getElementById("child").addEventListener("click", function () {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent clicked");
});

// If we click the child, the child runs first then parent will run.
```

---

## 4️⃣ Answer To The Question No 4:

### 🎯 Event Delegation and it's workflow in DOM

- Event Delegation means adding a listener to a parent element instead of multiple children.
- It works because of event bubbling.
- Useful for better performance and handling multiple children in a single parent element,

**Here is the code-snap to understand the syntax**

```js
document.getElementById("list").addEventListener("click", function (event) {
  if (event.target.tagName === "li") {
    console.log("Item clicked:", event.target.innerText);
  }
});
```

---

## 5️⃣ Answer To The Question No 5:

### 🎯 Difference Between preventDefault() and stopPropagation() methods

- `preventDefault()` is used for stopping browser default behavior (like form reload).
- `stopPropagation()` is used for stopping event from bubbling to parent.

```js
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Stops the page reload
});

document.getElementById("child").addEventListener("click", function (event) {
  event.stopPropagation(); // Stops it's parent click event.
});
```
