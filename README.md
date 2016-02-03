# Example "Rate and Review" usage

This repo exposes usage of [EPAM's Rate and Review](https://github.com/EPAM-YAAS/ratenreview) ui components

## Get Started

**1.** Subscribe your application to EPAM's Rate and Review package on [YAAS Market](https://market.yaas.io/commercial/).

**2.** Download YAAS storefront from https://github.com/SAP/yaas-storefront

**3.** Change `PROJECT_ID` and `CLIENT_ID` in `gruntfile.js` to the credentials of your app

**4.** Add dependency to `bower.json`
```json
  "dependencies": {
    "epam-rate-n-review": "1.0.0"
  } 
```

**5.** Run `npm install`. After task finishes you will have `epam-rate-n-review` package in `public/js/app/vendor` folder

**6.** Add css and js dependencies to `index.html`

```html
<link href="js/vendor/epam-rate-n-review/dist/review.min.css" rel="stylesheet">
```
```html
<script src="js/vendor/epam-rate-n-review/dist/review.min.js"></script>
```

**7.** Modify `product-detail.html`. Add review form and list of reviews.

```html
<review-list product-id="product.product.id"></review-list>
```
```html
<review-form product-id="product.product.id" product-name="product.product.name"/>
```

**8.** Modify `product-detail-ctrl.js`. Inject `ReviewSvc` to controller and get total review count for the product

```js
  .controller('ProductDetailCtrl', [..., 'ReviewSvc',
        function(..., ReviewSvc) {
```
```js
ReviewSvc.getReviewQuantityFor($scope.product.product.id, function(data) {
  $scope.reviewsQuantity = data.value;
});
```

**9.** Added reviews will appear in Builder of your apllication.

### Good luck and use Rate and Review!

![ScreenShot](https://raw.github.com/EPAM-YAAS/ratenreview-showcase/master/images/rate-review-directives.png)
