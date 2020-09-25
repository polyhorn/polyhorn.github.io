---
id: "variants"
title: Variants
sidebar_label: Variants
hide_title: true
---

<span className="badge badge--danger">Unstable</span>

<h1 style={{ marginTop: 0 }}>Variants</h1>

```rust
use yoyo::*;

yoyo!(States, {
    opacity: 1.0;

    :hover {
        opacity: 0.5;
    }

    :initial:from(:hover) {
        transition_opacity: ease_in_out(0.5);
    }
});

poly!(<View::<States> ... />)
```
