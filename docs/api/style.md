---
id: "style"
title: Style
sidebar_label: Style
hide_title: true
---

<span className="badge badge--danger">Unstable</span>

<h1 style={{ marginTop: 0 }}>Style</h1>

## Declaration

Styles in Polyhorn are modelled after CSS due to the fact that most developers
are already familiar with it.

```rust title="Definition"
pub struct Style {
    /// Layout
    pub position: Position,
    pub flex_direction: FlexDirection,
    pub align_items: AlignItems,
    pub justify_content: JustifyContent,
    pub flex_basis: Dimension,
    pub flex_grow: f32,
    pub flex_shrink: f32,
    pub min_width: Dimension,
    pub min_height: Dimension,
    pub width: Dimension,
    pub height: Dimension,
    pub max_width: Dimension,
    pub max_height: Dimension,
    pub margin: Margin,
    pub padding: Padding,

    /// Appearance
    pub background_color: Color,
    pub border_radius: BorderRadius,
    pub opacity: f32,
    pub visibility: Visibility,
}
```

Positions are used by the layout algorithm to determine if the size of an
element should affect the layout of others. If an element has a absolute
position, it is not included in the layout computation. Of course, the children
of an absolute element are included in the layout computation as long as they
are relative.

```rust title="Definition"
pub enum Position {
    Absolute,
    Relative,
}
```

Dimensions are like CSS units. They can be undefined (which is the default), or
auto (which is similar, sometimes), pixels (absolute) or a percentage
(relative). The difference between undefined and auto depends on the use case.
For example, an undefined margin-left is equivalent to `0px`, whereas an auto
margin-left will push the element as far to the right as possible. Refer to the
CSS reference for more information.

```rust title="Definition"
pub enum Dimension {
    Undefined,
    Auto,
    Pixels(f32),
    Percent(f32),
}
```

Border radius is used to add rounded corners to an element and defined as a
structure of four dimensions (one for each corner).

```rust title="Definition"
pub struct BorderRadius {
    pub top_leading: Dimension,
    pub top_trailing: Dimension,
    pub bottom_trailing: Dimension,
    pub bottom_leading: Dimension,
}
```

In the future, we might want two dimensions for each corner (one for the
horizontal radius and another for the vertical radius).

## Roadmap

:::info
1. Currently, `Style<P>` is actually generic with respect to a `Platform` that
   provides a `Color` and `Font` using associated types. It might be worth
   considering making style entirely platform-independent.
2. Due to the fact that [Color](/api/color/) is not yet copy-able, style in its
   entirety is not.
3. The actual layout algorithm is located in `polyhorn-layout` and converts
   types like `AlignItems` either to corresponding types of
   [Stretch](https://github.com/vislyhq/stretch) or
   [Yoga (rs)](https://github.com/bschwind/yoga-rs). Unfortunately, Stretch is
   not fast enough when dealing with dynamically sized leaf nodes (such as text)
   and Yoga itself is written in (unsafe) C++ and its bindings are written in
   an older version of Rust and uses an incompatible version of bindgen.
4. Many variants of our layout parameters (e.g. `AlignItems::*`) are available
   in both Stretch and Yoga, but not yet exported through `polyhorn-style` until
   we have a proper method of testing them.
:::