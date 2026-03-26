# Laundry Booking App

This is a simple laundry booking web app made using HTML, CSS, and JavaScript.
Users can select services, see the total amount, and book their order. After booking, an email is sent using EmailJS.

---

## What this project does

* Shows laundry services
* Lets user add services to cart
* Calculates total price
* Takes user details (name, email, phone)
* Sends booking details on email
* Generates a simple order ID

---

## Technologies used

* HTML
* CSS
* JavaScript
* EmailJS

---

## How to run the project

1. Download or clone the project
2. Open the folder
3. Open `index.html` in your browser

---

## Email setup (important)

To make email work, you need EmailJS:

1. Go to EmailJS website

2. Create account

3. Create service and template

4. Copy:

   * Public Key
   * Service ID
   * Template ID

5. Add them in your project (config file or script)

---

## Example env file

```txt
EMAILJS_PUBLIC_KEY=your_key
EMAILJS_SERVICE_ID=your_service
EMAILJS_TEMPLATE_ID=your_template
```

---

## Email template variables

Use these inside EmailJS template:

```
{{name}}
{{email}}
{{phone}}
{{services}}
{{total}}
{{order_id}}
```

---

## Limitations

* Email keys are in frontend (not secure)
* No database (data not saved)
* Basic validation only

---

## What I learned

* How to use JavaScript with HTML
* How to create a cart system
* How to validate form input
* How to send emails using EmailJS

