---
id: "text-style"
title: TextStyle
sidebar_label: TextStyle
---

import Status from "../../../plugins/Status";

<Status level={ 1 } path="polyhorn_ui/styles/struct.TextStyle.html" />

## Color

```css
color: <color>;
```

## Fonts

### Font Family

```css
font-family: <generic-font-family> | <string>;
```

<div className="row">
    <div className="col col--4">
        <h4>Serif</h4>
        <img src="/img/fonts-serif.png" />
    </div>
    <div className="col col--4">
        <h4>Sans-Serif</h4>
        <img src="/img/fonts-sans-serif.png" />
    </div>
    <div className="col col--4">
        <h4>Monospace</h4>
        <img src="/img/fonts-monospace.png" />
    </div>
</div>

### Font Weight

```css
font-weight: inherited | <number> | <named-font-weight>,
where
    <named-font-weight>: thin | extra-light | light |
                         normal | medium | semi-bold |
                         bold | extra-bold | black;
```

### Font Style

<div className="row">
    <div className="col col--4">
        <h4>Normal</h4>
        <img src="/img/fonts-normal.png" />
    </div>
    <div className="col col--4">
        <h4>Oblique</h4>
        <img src="/img/fonts-oblique.png" />
    </div>
    <div className="col col--4">
        <h4>Italic</h4>
        <img src="/img/fonts-italic.png" />
    </div>
</div>

```css
font-style: inherited | normal | oblique | italic;
```

### Font Size

```css
font-size: inherited | <length-percentage> | <named-font-size>,
where
    <named-font-size>: extra-extra-small | extra-small | small |
                       medium | large | extra-large |
                       extra-extra-large | extra-extra-extra-large;
```

## Text

### Text Align

```css
text-align: inherited | left | center | right;
```
