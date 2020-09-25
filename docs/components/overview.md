---
id: "overview"
title: Overview
sidebar_label: Overview
slug: /
---

## Built-in Components

These components are built into Polyhorn and accessible through:

```rust
use polyhorn::*;
```

| Name | Description |
|:-----|:------------|
| [Image](/components/image/) | Renders an [ImageSource](/api/image-source/). |
| [KeyboardAvoidingView](/components/keyboard-avoiding-view/) | Automatically adjusts its position, size or padding when the system keyboard appears. |
| [Modal](/components/modal/) | Renders a view in a system-provided modal window. |
| [ScrollView](/components/scroll-view/) | Implements scrolling gestures to facilitate layouts that exceed screen sizes. |
| [StatusBar](/components/status-bar/) | Controls the system status bar on iOS and Android. |
| [Text](/components/text/) | Renders (rich) text. |
| [TextInput](/components/text-input/) | Accepts user input. |
| [View](/components/view/) | The base component. |
| [Window](/components/window/) | The root component. |

## Roadmap

:::info
There are some open issues that we would like to get some feedback on through
our [Github](https://github.com/polyhorn/polyhorn). Please chime in if you have
some thoughts.

1. Currently, components are implemented by each platform individually.
   Conformance to this specification is not checked statically. Potentially a
   better way to do this, would be to move the structs to the `polyhorn` crate,
   and leave the component implementations in each platform's own crate. This
   does not violate the orphan rule since each platform must also define its own
   "platform-erased" component trait (at least until trait aliases land in Rust
   stable).
2. Many components have some properties in common. For example, we want Image,
   KeyboardAvoidingView, ScrollView, Text, TextInput and View to receive at
   least a common subset of event listeners. However, currently each component
   implements that logic individually. We need to either:

   1. Find a way to share common logic between components in an ergonomic way.
   2. Reduce the number of components by merging overlapping components.
:::