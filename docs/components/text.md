---
id: "text"
title: Text
sidebar_label: Text
hide_title: true
---

<span className="badge badge--danger">Unstable</span>

<h1 style={{ marginTop: 0 }}>Text</h1>

```rust title="Definition"
pub struct Text {
    pub style: TextStyle,
}
```

:::info
There are some open issues that we would like to get some feedback on through
our [Github](https://github.com/polyhorn/polyhorn). Please chime in if you have
some thoughts.

1. Like React Native, `Text`s can be nested and as such allow text with markup,
   e.g.:
   ```rust
   poly!(<Text>
       "Hello "
       <Text style={ TextStyle {
           font: Font::bold_system_font(14.0),
           ..Default::default()
       } } />
       "!"
   </Text>)
   ```
   However, there is a subtle peculiarity: text components do not use the
   flexbox algorithm to layout child elements. This is true for React Native as
   well. This is simply because nested texts aren't rendered to their own
   native elements at all. Instead, they get flattened to a single
   `NSAttributedString` on iOS and Mac, or `SpannedString` on Android.

   Unfortunately, this usually is not clear to newcomers who expect margin,
   borders, etc. to work for nested text elements as well.

   This is why we limit the scope of text's style property to those properties
   that work even when nested. Unfortunately, this also means that the root text
   element can't have margin, even though that would be a legitimate use case
   that appears quite often, e.g.:

   ```rust
   poly!(<View>
       <View style={ Style {
           margin: (0.px(), 0.px(), 20.px(), 0.px()).into(),
           ..Default::default()
       } } ...>
           <Text ...>"Title"</Text>
       </View>
       <Text ...>"Subtitle"</Text>
   </View>)
   ```
   
   This is what's currently needed to render a 20px margin below a heading,
   which is clearly more verbose than it should be.
:::