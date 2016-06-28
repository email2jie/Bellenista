## Component Hierarchy


* **App**
  * **Product-Category**
    * Search
    * CategoryId
  * **ProductIndex**
    * Search
    * **ProductIndexItem**
      * ProductTags
      * Reviews
      * Extra Info


## Routes

* **component:** `App` **path:** `/`
  * **component:** `Product-Category` **IndexRoute** 
 	* **component:** `ProductCategory` **path:** `product-category/:categoryId`
  * **component:** `ProductIndexItem` **path:** `product/:productId`


