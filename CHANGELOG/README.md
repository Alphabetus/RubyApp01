#Changelog
For better tutoring all significant changes will be kept under this log.

## [v0.15 - 05/feb/19] > Mailer switch to private domain 

- Patch environment to use private domain as email server instead of sendgrid plugin.

## [v0.14 - 05/feb/19] > 5.3 > Mailers

- Add responsive contact form.
- Add `ActionMailer` to handle email delivery.
- Add simple email template.

## [v0.13 - 05/feb/19] > 5.2 > Search form, GET requests & Carousel small fix

- Add search box to locate similar entries.
- Style search box with bootstrap classes.
- Redirect to product list row anchor when submitting search.
- Fix carousel controls height to avoid overlap over divs below.

## [v0.12 - 04/feb/19] > 5.1 > Reroute & Redirect

- Switch root from webApp for products view.
- Change redirect path on products successful actions.

## [v0.11] > Optimisation and code cleanup

- Move `JS` external libraries to `vendor/assets/javascripts`.
- Cleanup `application.scss`.
- Patch data display format with callbacks and remove redundant code.
- Add helper to handle `Orders` status icons.
- Use `routes.rb` established paths on `orders index` to avoid location errors.
- Patch `routes.rb` to remove unused call for `orders/#show`.
- Rename and patch `_products_display` to `_product` and use rails association to fetch `Product` controller.
- Patch landing page to reduce needed logic into minimalistic readable entries.

## [v0.11] > 4.7 > Responsive layout for products, patch controllers & linking

- Add responsive view for single products.
- Patch product controller to sanitise output.
- Add direct linking for singular product page through carousel images & product table images.

## [v0.10] > 4.6 > Order Controller and Views

- Add views for orders index and show pages.
- Make referred output responsive.
- Patch `seed.rb` to face dummy orders by default.

## [v0.9] > Carousel dynamic sizing & Controls

### [v0.9.3] > Code cleanup with variables at products.scss

### [v0.9.2] > Fix carousel height on small devices

### [v0.9.1]
- Format carousel caption content according to different screen sizes.
- Remove scale effect from carousel controls on small screens.

## [v0.8] > Carousel styling & Control on swipe

- Position text to the right on carousel's price tag.
- Add swipe left / right as carousel control.
- Integrate plugin jQuery touchSwipe.

## [v0.7] > 4.5 > Add dynamic carousel for latest products & controller patch

### [v0.7.2] > Fix javascript concatenation II > Heroku fail to compile

### [v0.7.1] > Fix javascript concatenation & delete trash file

### [v0.7.0]
- Add dynamic carousel to display the newest items on the shop.
- Patch simple_pages controller & product controller to sanitise output data to face needs.
- Migrate css variables to stylesheets/variables.css.
- Style featured products' carousel.
- Break views into partial renders for better organisation.
- Sanitise output from products & simple_pages controllers.

## [v0.6.4] > Fix product image nil scenarios

- Fix exception where product image data-attribute was nil due to lack of image.

## [v0.6.3] > Define default product picture

- Attribute default product picture if none is found in our records.
- Patch seed to include scenarios without picture.

## [v0.6.2] > Fix asynchronous loading of product images

- Patch asynchronous script to face production environment.

## [v0.6.1] > Fix pipeline asset

- Fix javascript syntax to face asset pipeline requirements and avoid errors.

## [v0.6] > 4.4 > Icon fix, Product image async loading script & orders DB structure

- Fix webApp icon positioning.
- Add order model.
- Update product model.
- Apply DB migration to design the structure for order table.
- Prepare DB seed to avoid entry duplication on initial dummy content.
- Add JavaScript asynchronous loading script to product images.
- Associate Order & Product classes.
- Update graphical content.

## [v0.5] > 4.3 > Add manual controller & actions for orders view

- Add controller and actions to handle orders view without using rails generator.
- Enable order index view on routes.
- Enable order show on routes.

## [v0.4] > 4.2 > Database Migrations

- Add migration to insert price field.
- Add migration to rename colour field to colour.
- Add seed to populate db.
- Design basic responsive product display layout.

## [v0.3] > 4.1 > Scaffolding products

- Create db table and respective model to handle data.
- Design the product table list and add product form.
- Added product dummy listings.
- Require css tree after custom css styling.
- Require js tree after custom js import.
- Fix routes.rb to avoid redundant call.

## [v0.2] > Handle database environment

- Enable PostgresSQL for production;
- Enable Sqlite3 for development;

## [v0.1] > Link Bootstrap, add menu and footer, display images

- Enable bootstrap gem;
- Define navigation on global layout;
- Style navigation and footer elements;
- Display responsive images using ruby methods;
