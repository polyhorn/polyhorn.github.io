---
id: "modal"
title: Modal
sidebar_label: Modal
hide_title: true
---

<span className="badge badge--danger">Unstable</span>

<h1 style={{ marginTop: 0 }}>Modal</h1>

```rust title="Definition"
pub struct Modal {
    pub visible: bool,
    pub on_dismiss: EventListener<()>,
}
```

## Roadmap

:::info
There are some open issues that we would like to get some feedback on through
our [Github](https://github.com/polyhorn/polyhorn). Please chime in if you have
some thoughts.

1. Currently, `on_dismiss` is also called when the modal is hidden explicitly
   by changing visible from `true` to `false`. The event listener is not passed
   any context to indicate if the dismissal was programmatic or user-initiated.
2. Currently, the modal's dismissal is only animated if hidden through the
   `visible` property. Specifically: if it is unmounted while its still visible,
   its dismissal will not be animated. This is due to the fact all children of
   the modal are immediately unmounted by Polyhorn. An empty modal remains, and
   that's before the dismissal animation is issued by the OS. We should probably
   properly document this behavior and verify if this is also the case with
   other UI frameworks. As a work-around, wrap the modal in an
   `AnimatedPresence` and call the `SafeToRemove` function in the `on_dismiss`
   event listener.
:::