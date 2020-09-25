---
id: "color"
title: Color
sidebar_label: Color
hide_title: true
---

<span className="badge badge--danger">Unstable</span>

<h1 style={{ marginTop: 0 }}>Color</h1>

## Declaration

```rust title="Definition"
pub trait Color: Send + Sync {
    fn from_rgba(red: u8, green: u8, blue: u8, alpha: f32) -> Self;
    fn from_rgb(red: u8, green: u8, blue: u8) -> Self;
    fn from_hexa(hex: u32, alpha: f32) -> Self;
    fn from_hex(hex: u32) -> Self;
}
```

## Roadmap

:::info
Currently, colors are implemented through a shared `Color` trait in the
`polyhorn-style` crate. In turn, platforms simply wrap a native color object
(such as `UIColor` on iOS) in a unit struct. Although effective, this has
several drawbacks:

1. Colors do not implement `Copy`, even though it is a simple type (basically
   `[f32; 4]`).
2. Platform implementations must ensure that the native color object is
   thread-safe. Apple in particular does not unambiguously confirm whether this
   is the case.
3. It's one of the few surfaces where we call native code on the Polyhorn
   thread.
4. "Named" colors (such as `Color::gray()`) are platform-dependent.
:::