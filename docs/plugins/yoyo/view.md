---
id: "view"
title: View
sidebar_label: View
hide_title: true
---

<span className="badge badge--danger">Unstable</span>

<h1 style={{ marginTop: 0 }}>View</h1>

View is the component counterpart of [Variants](/plugins/yoyo/variants/).
yoyo views have the exact same interface as the core [View](/components/view/)
component, with a few additions:

```rust
pub struct View<T> where T: Variants {
    presence: Option<Box<dyn DynPresence>>,
    variant: T,
    // ... props from core View ...
}
```

If the view is nested in an
[AnimatedPresence](/plugins/yoyo/animated-presence/), the UsePresence hook's
result can be passed into the `presence` property. The yoyo view will take
care of animating the exit transition and invoking the SafeToRemove handle.

The yoyo view is generic with respect to `T`: an enum (or other type) that
implements the [Variants](/plugins/yoyo/variants/) trait. The easiest way to do
this, is to use our `yoyo!(...)` macro that accepts a css-like syntax.