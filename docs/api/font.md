---
id: "font"
title: Font
sidebar_label: Font
hide_title: true
---

<span className="badge badge--danger">Unstable</span>

<h1 style={{ marginTop: 0 }}>Color</h1>

## Declaration

```rust title="Definition"
pub trait Font: Send + Sync {
    fn system_font(size: f32) -> Self;
    fn bold_system_font(size: f32) -> Self;
}
```

## Roadmap

:::info
Currently, fonts are implemented through a shared `Font` trait in the
`polyhorn-style` crate. In turn, platforms simply wrap a native font object
(such as `UIFont` on iOS) in a unit struct. Although effective, this has
several drawbacks:

1. As a result, fonts do not implement `Copy` (e.g. `UIFont` is reference
   counted), even though it is a simple type<sup>1</sup>.
2. Platform implementations must ensure that the native font object is
   thread-safe. Apple in particular does not unambiguously confirm whether this
   is the case.
3. It's one of the few surfaces where we call native code on the Polyhorn
   thread.

<sup>1</sup> Except when working with non-system fonts. Which is another open
issue: it's not yet possible to load custom fonts.
:::