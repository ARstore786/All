# A&R Store Website

A complete responsive HTML/CSS/JavaScript storefront for A&R Store.

## Included
- Responsive homepage
- A&R Store logo and all supplied product imagery
- 4 featured products
- Price set to Rs. 1,500 for every product
- Product order modal
- Customer name, phone, email, address, quantity and notes
- Automatic total calculation
- Mobile navigation
- Order form configured for `alphasasb58@gmail.com`

## IMPORTANT: Email orders
The website uses FormSubmit's AJAX endpoint so a static HTML/CSS/JS site can forward order details to your Gmail.

1. Upload the whole folder to your hosting (Netlify, Vercel, GitHub Pages with the form endpoint, cPanel hosting, etc.).
2. Open the website and submit a test order.
3. FormSubmit may send an activation/confirmation email to `alphasasb58@gmail.com`. Confirm it once.
4. After activation, customer order details will be forwarded to that email.

### If you want a completely self-hosted email system
A browser-only website cannot safely log directly into Gmail/SMTP. For a production setup, use a small Node.js/PHP backend with an email provider or Gmail SMTP/App Password. Never put a Gmail password or API secret inside `script.js`.

## Files
- `index.html` — website
- `style.css` — design
- `script.js` — ordering and form logic
- `assets/` — supplied logo/product images

## Customize
Search `Rs. 1,500` or `PRICE = 1500` if you want to change the price later.
