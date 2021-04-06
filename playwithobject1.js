//```markdown
// 1. Play with CSV and object

// We have a collection of product and price with CSV formats:

// ```csv
// NAME, CATEGORY, PRICE
// Xiaomi Redmi 5A, Smartphone, 1199000
// Macbook Air, Laptop, 13775000
// Samsung Galaxy J7, Smartphone, 3549000
// DELL XPS 13, Laptop, 26799000
// Xiaomi Mi 6, Smartphone, 5399000
// LG V30 Plus, Smartphone, 10499000
// ```

// **Sort by price** and **transforms** those collection into object within an array like this format:


[
  {
    "name": "Macbook Air",
    "price": "Rp13.775.000",
    "category": "Laptop"
  },
  {
    "name": "Xiaomi Redmi 5A",
    "price": "Rp1.199.000",
    "category": "Smartphone"
  },
  {
    "name": "Samsung Galaxy J7",
    "price": "Rp3.549.000",
    "category": "Smartphone"
  },
  {
    "name": "LG V30 Plus",
    "price": "Rp10.499.000",
    "category": "Smartphone"
  },
  {
    "name": "DELL XPS 13",
    "price": "Rp26.799.000",
    "category": "Laptop"
  },
  {
    "name": "Xiaomi Mi 6",
    "price": "Rp5.399.000",
    "category": "Laptop"
  }
]


// > Notice the `price` use currency format.
