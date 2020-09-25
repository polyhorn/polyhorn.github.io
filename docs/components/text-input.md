---
id: "text-input"
title: TextInput
sidebar_label: TextInput
hide_title: true
---

<span className="badge badge--danger">Unstable</span>

<h1 style={{ marginTop: 0 }}>TextInput</h1>

```rust title="Definition"
pub struct TextInput {
    pub placeholder_style: TextStyle,
    pub placeholder: String,
}
```

:::info
There are some open issues that we would like to get some feedback on through
our [Github](https://github.com/polyhorn/polyhorn). Please chime in if you have
some thoughts.

1. This component is not yet in a usable state: there are no event listeners,
   since we haven't settled on a specific event API yet. It's current purpose
   is to demonstrate how
   [KeyboardAvoidingView](/components/keyboard-avoiding-view/) works.
:::