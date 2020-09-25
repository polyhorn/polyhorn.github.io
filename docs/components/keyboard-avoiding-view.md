---
id: "keyboard-avoiding-view"
title: KeyboardAvoidingView
sidebar_label: KeyboardAvoidingView
hide_title: true
---

<span className="badge badge--danger">Unstable</span>

<h1 style={{ marginTop: 0 }}>KeyboardAvoidingView</h1>

```rust title="Definition"
pub struct KeyboardAvoidingView {
    pub transform: Arc<dyn Fn(f32) -> LayoutAdjustment + Send + Sync>,
}
```

## Roadmap

:::info
There are some open issues that we would like to get some feedback on through
our [Github](https://github.com/polyhorn/polyhorn). Please chime in if you have
some thoughts.

1. We're considering integrating the behavior of `KeyboardAvoidingView` with the
   base `View` component. Specifically, we are considering adding a
  `keyboard_adjustment` property to the `View` component that replaces the
  `KeyboardAvoidingView` altogether.
2. The transformation function must be thread-safe because it is executed on
   the main thread. (Note that `Arc<T>` requires `T: Send + Sync`.) The
   transformation is done on the main thread because it is the only way to
   "piggyback" on iOS's keyboard sliding animation. Although this is an
   effective workaround, it might look better if we can abstract away this
   complex type signature.
3. It should not be necessary to write a custom transformation function for most
   use cases. This should probably me an enum variant `Transform::Custom(...)`
   instead.
:::