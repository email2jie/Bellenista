## Component Hierarchy


* **App**
  * **Product-Category**
    * Search
    * CategoryId
  * **Product**
    * Search
    * ProductIndex
    * **ProudctDetail**
      * ProductTags
      * Reviews
      * Extra Info


## Routes

* **component:** `App` **path:** `/`
  * **component:** `Product-Category` **path:** index
  	* **component:** `Product` **path:** `product-category/:categoryId`
    	* **component:** `ProductDetail` **path:** `product/:productId`


