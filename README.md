# Min Modal JS

<h2>Feuatures</h2>
<ul>
  <li>Written in vanilla javascript, no dependencies needed</li>
  <li>Lightweight JS+CSS(minified: ~1.22kb)</li>
  <li>No restrictions on the number of buttons and modal windows</li>
  <li>Modal closed if you press ESC(you can replace event.code or off it) or click in outside modal (you can off it). Default all features turn on</li>
  <li>MinModalJS haves three methods modalOpen(), modalDestroy() and modalClose()</li>
</ul>
You can see the code of any key on the site https://keycode.info/ you need a event.code
<br>
<br>
<h2>Instalation</h2>
<h3>npm</h3>

```
npm i min-modal-js --save-dev
```
<h3>HTML</h3>

```html
  <link rel="stylesheet" href="min-modal-js.min.css">
  <script src="min-modal-js.min.js"></script>
```
<br>
<h2>Example</h2>
<h3>HTML</h3>

```html
<div class="modal-btn">
    this is button can open modal
</div>
<div class="modal-inner">
    <div class="modal__closeBtn">this is button can close modal</div>
    content modal
</div>
```
<h3>JavaScript</h3>

```javascript
const newModal = new minModalJS('.modal-inner', {
    buttonsActive: '.modal-btnOpen',
    buttonsDisActive: '.modal-btnClose',
    keyOpen: 'Your key code', // Or false
    modalOutsideClick: false // if true, modal closed when you click outside content modal
});
```
<br>
<h2>Methods: openModal(); modalDestroy() and closeModal()</h2>

```javascript
const newModal = new minModalJS('.modal-inner', 

newModal.modalOpen() // When you will open page. This modal window will open
newModal.modalOpen() // When you will open page. This modal window will close
newModal.modalDestroy() //  When you will open page. This modal window with inner content will removed
```
