
# Ver sombreado.
.nav__content:hover {
  box-shadow: var(--shadow-elevation-medium);
  background-color: var(--bg-navbar-02);
  transition-duration: 0.15s;
}


# Hero
```css
.hero {
  /* Jade */
  background: radial-gradient(
    ellipse at bottom,
    hsla(155, 41%, 16%, 0.99) 0%,
    hsla(155, 40%, 10%, 1) 50%,
    hsla(0, 0%, 4%, 1) 100%
  );

  /* Anterio */
    background: radial-gradient(
    ellipse at bottom,
    hsla(0, 0%, 13%, 0.95) 0%,
    hsla(0, 0%, 7%, 1) 100%
  );
}
```

```css
.hero__text-wrapper h1 {
  /* Jade */
  color: var(--ff-color-01);
  text-shadow: 0 0 5px rgb(212, 175, 55, 0.3); /* todo ver estilo */

  
  /* Antes  */
  color: var(--text-white);
  text-shadow: 0 0 5px rgb(101, 236, 218, 0.3); /* todo ver estilo */
}
```