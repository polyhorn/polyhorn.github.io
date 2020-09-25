---
id: "view"
title: View
hide_title: true
sidebar_label: View
---

<span className="badge badge--danger">Unstable</span>

<h1 style={{ marginTop: 0 }}>View</h1>

```rust title="Definition"
pub struct View {
    pub style: Style,
    pub on_pointer_cancel: EventListener<()>,
    pub on_pointer_down: EventListener<()>,
    pub on_pointer_up: EventListener<()>,
    pub reference: Option<Reference<ViewHandle>>,
}
```

:::info
There are some open issues that we would like to get some feedback on through
our [Github](https://github.com/polyhorn/polyhorn). Please chime in if you have
some thoughts.

1. Event listeners are implemented, but the events are void because we haven't
   decided on a particular event API yet. This means it is possible to get a
   callback when a view is pressed, but no context is provided as to where the
   view is pressed.
2. It might be worthwhile to consider merging the functionality of either
   [KeyboardAvoidingView](/components/keyboard-avoiding-view/) and/or
   [ScrollView](/components/scroll-view/) with this component.
:::