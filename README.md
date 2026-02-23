# 📑 Answer to the associated questions with ❝Assignment-04❞

## 1️⃣ Answer To The Question No 1:
### 🎯 Difference between `getElementById`, `getElementsByClassName`, `querySelector` & `querySelectorAll` in DOM
- `getElementById()` → Selects **one element by id**.
- `getElementsByClassName()` → Selects **multiple elements by class** (returns HTMLCollection).
- `querySelector()` → Selects **first matching element** using CSS selector.
- `querySelectorAll()` → Selects **all matching elements** (returns NodeList).


**Here is the code-snap for their syntex**
```js
const box = document.getElementById("box");

const items = document.getElementsByClassName("item");

const firstItem = document.querySelector(".item");

const allItems = document.querySelectorAll(".item");
