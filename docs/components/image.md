---
id: "image"
title: Image
sidebar_label: Image
hide_title: true
---

<span className="badge badge--danger">Unstable</span>

<h1 style={{ marginTop: 0 }}>Image</h1>


```rust title="Definition"
pub struct Image {
    pub source: Option<ImageSource>,
    pub tint_color: Option<Color>,
}
```

## Examples

### Showing a Local Image

Assuming that there is an image called `welcome.svg` or `welcome.png` in the
`assets/` folder of your project, you can use the following code to render it on
your screen.

```rust
poly!(<Image source={ asset!("welcome") } ... />)
```

### Colorizing a Grayscale Icon

In this example, we load a grayscale image called `chevron.svg` or
`chevron.png` from the `assets/` folder of a project and colorize it at runtime.
For example, this technique is used to colorize the icons in header and bottom
bars of navigator UIs.

```rust
poly!(<Image source={ asset!("chevron") }
         tint_color={ Color::from_hex(0x0073FF) } />)
```

## Roadmap

:::info
There are some open issues that we would like to get some feedback on through
our [Github](https://github.com/polyhorn/polyhorn). Please chime in if you have
some thoughts.

1. The `asset!(...)` macro has not yet been implemented. Use
   `ImageSource::with_name(...)` directly. See [ImageSource](/api/image-source/)
   for more information.
2. We're still adding some essential properties to the `Image` component.
   Specifically: `Image`s are not yet styled and don't generate pointer events
   by themselves unless wrapped in a `View`.
:::