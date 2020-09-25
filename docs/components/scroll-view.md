---
id: "scroll-view"
title: ScrollView
sidebar_label: ScrollView
hide_title: true
---

<span className="badge badge--danger">Unstable</span>

<h1 style={{ marginTop: 0 }}>ScrollView</h1>

```rust title="Definition"
pub enum ScrollViewIndicatorStyle {
    Default,
    Black,
    White,
}

pub struct ScrollView {
    pub style: Style,
    pub content_insets: Insets<f32>,
    pub indicator_style: ScrollViewIndicatorStyle,
    pub indicator_insets: Insets<f32>,
}
```

## Roadmap

:::info
There are some open issues that we would like to get some feedback on through
our [Github](https://github.com/polyhorn/polyhorn). Please chime in if you have
some thoughts.

1. Most style properties are ignored. We need to find an efficient way to
   share much of the components' internal logic between several components. For
   example, many of the appearance-related style fields (e.g. background-color,
   opacity) are identical across most components but require separate code for
   each.
2. Scroll views only work horizontally.
3. On recent versions of iOS, it is now possible to set indicator insets for the
   horizontal and vertical indicators separately. It might be worthwhile to
   consider doing this too. However, it's not clear what the fallback should be.
4. There are many properties still missing: `always_bounce`,
   `deceleration_rate`, etc.
5. It might be worthwhile to briefly consider if we can merge `ScrollView` and
   `View`, i.e. to make it a property (just like css):
   ```rust
   poly!(<View style={ style! { overflow: scroll; } } />)
   ```
   But it is not yet clear how much overhead this would add.
:::