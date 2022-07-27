# Shop

The online Shop was built using React class components, Apollo Client, and React Router according to the [design](https://www.figma.com/file/hbaskiAyANvQktv0sK9kw8/Shop-pages-design?node-id=0%3A1)

The Shop includes:
- PLP - product listing page, a.k.a. category page
- PDP - product description page, a.k.a. product page
- Cart page + Cart overlay (minicart)



Users can add/remove products and change their amounts in the cart - on the cart page itself, PLP, and PDP. For products that have different options (attributes), the user can add them to the cart only if all attributes are selected. Products that don't have any attributes (like AirTag) can be added to the cart directly from PLP.

The selected attributes of added-to-cart products are visible in the cart overlay and in the cart page. Swatch attribute (type = swatch) is represented like the color itself (not "blue" or "0000FF"). 

Products were filtered by category name for all of the categories from BE.
The descriptions provided in HTML format are parsed and presented as HTML, not as plain text.
Users can change the currency of the store to one of the available currencies

For better user experience I created loading sceletons, modal windows for accepting user actions, and some of the edge cases (a category not found, product not found, 404 page). In addition, the Shop is responsive and I implemented it based on the desktop first approach.



Used: React, Apollo Client, React Router
