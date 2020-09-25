---
id: "image-source"
title: ImageSource
sidebar_label: ImageSource
hide_title: true
---

<span className="badge badge--danger">Unstable</span>

<h1 style={{ marginTop: 0 }}>ImageSource</h1>

## Declaration

An image source can be constructed through the `with_name(...)` function. Keep
in mind that all local images are namespaced by crate name. For example, if
your crate is called `example-app` and your icon is located in
`assets/icon.png`, use `ImageSource::with_name("example-app/icon")`.

```rust title="Definition"
pub struct ImageSource {
    fn with_name(name: &str) -> Option<ImageSource>;

    fn width(&self) -> f32;
    fn height(&self) -> f32;
}
```

## Roadmap

:::info
Currently, image sources are implemented by each platform directly. In turn,
platforms simply wrap a native image object (such as `UIImage` on iOS) in a
unit struct. Although effective, this has several drawbacks:

1. Platform implementations must ensure that the native image object is
   thread-safe. Apple in particular does not unambiguously confirm whether this
   is the case.
2. It's one of the few surfaces where we call native code on the Polyhorn
   thread.
:::