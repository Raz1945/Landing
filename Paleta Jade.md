```markdown
# Paleta de Colores "Jade Noir Elegante"

Una combinación sofisticada de **jade, negro, crema y dorado** para diseños de alta gama.

## Colores Principales

| Muestra | Nombre               | HEX       | RGB              | Uso Recomendado           |
|---------|----------------------|-----------|------------------|---------------------------|
| ![#18392b](https://via.placeholder.com/15/18392b/000000?text=+) | Jade Profundo       | `#18392b` | `rgb(24,57,43)`  | Fondos principales, acentos estructurales |
| ![#0a0a0a](https://via.placeholder.com/15/0a0a0a/000000?text=+) | Negro Aterciopelado | `#0a0a0a` | `rgb(10,10,10)`  | Textos, bordes, elementos de contraste |
| ![#f5f0e6](https://via.placeholder.com/15/f5f0e6/000000?text=+) | Crema Marfil        | `#f5f0e6` | `rgb(245,240,230)` | Fondos claros, espacios negativos |
| ![#d4af37](https://via.placeholder.com/15/d4af37/000000?text=+) | Dorado Antiguo      | `#d4af37` | `rgb(212,175,55)` | Elementos interactivos, destacados |

## Colores Secundarios

| ![#2a5c4a](https://via.placeholder.com/15/2a5c4a/000000?text=+) | Jade Medio         | `#2a5c4a` | `rgb(42,92,74)`  | Hover states, elementos secundarios |
| ![#fffcf5](https://via.placeholder.com/15/fffcf5/000000?text=+) | Blanco Nácar       | `#fffcf5` | `rgb(255,252,245)` | Textos sobre fondos oscuros |

## Variables CSS

```css
:root {
  /* Colores base */
  --jade-deep: #18392b;
  --black-velvet: #0a0a0a;
  --ivory-cream: #f5f0e6;
  --antique-gold: #d4af37;
  
  /* Colores auxiliares */
  --jade-medium: #2a5c4a;
  --pearl-white: #fffcf5;
  
  /* Efectos especiales */
  --gold-glow: rgba(212, 175, 55, 0.3);
}
```

## Combinaciones Destacadas

### 1. Esquema Nocturno Elegante
```css
.night-elegance {
  background-color: var(--black-velvet);
  color: var(--ivory-cream);
  border: 1px solid var(--jade-deep);
}

.night-elegance .accent {
  color: var(--antique-gold);
}
```

### 2. Tema Natural de Lujo
```css
.natural-luxury {
  background-color: var(--ivory-cream);
  color: var(--jade-deep);
}

.natural-luxury button {
  background-color: var(--jade-medium);
  color: var(--pearl-white);
}
```

### 3. Contraste Dorado-Jade
```css
.gold-jade {
  background-color: var(--jade-deep);
  color: var(--pearl-white);
}

.gold-jade .highlight {
  border-bottom: 2px solid var(--antique-gold);
}
```

## Guía de Aplicación

- **Jerarquía visual**:  
  - Usar dorado (`#d4af37`) solo para elementos prioritarios (máx. 10% de la interfaz)
  - Jade profundo como color estructural principal
  - Negro para elementos que requieran máximo contraste

- **Tipografía**:
  - Texto oscuro sobre crema: `#0a0a0a` sobre `#f5f0e6`
  - Texto claro sobre jade: `#fffcf5` sobre `#18392b`

- **Efectos**:
  ```css
  .gold-effect {
    box-shadow: 0 4px 12px var(--gold-glow);
    transition: all 0.3s ease;
  }
  ```

> **Nota**: Esta paleta funciona mejor con espacios generosos y tipografía delgada. Evitar saturación de elementos dorados.
``` 

Este archivo `.md` incluye:
1. Tablas organizadas con códigos de color
2. Variables CSS listas para copiar
3. Combinaciones predefinidas
4. Guía de aplicación práctica
5. Formatos para visualización en GitHub o editores Markdown