---
id: "elements"
title: Elements
sidebar_label: Elements
---

## Types of Elements

1. **Built-Ins.** Built-ins are provided by the `Platform` and represent
   native UI elements (e.g. DOM elements, UIViews, etc.) Built-in elements can
   have only one child element, but this can be a fragment.
2. **Components.** Components are implementations of the `Component` trait and
   can be written by anyone. Component elements can have only one child element,
   but this can be a fragment.
3. **Context Providers.** Context providers are special elements that insert
   values into the context tree. The context tree is a linked list of type maps.
   ```rust
   Element::context::<T>(value: T)
   ```
4. **Fragments.** Fragments are arrays of elements.
5. **Strings.** String elements are mainly used for the
   [Text](/components/text/) component.

## Syntactic Sugar

We recommend using the ```poly!(...)``` macro to write your UI. This macro is
similar to JSX when using React. The result of this macro will always be an
`Element`. The macro must be given only one root element.

```rust
poly!(<Window title="Hello World!" />)
```

## Roadmap

:::info
There are some remaining issues with elements (and in particular the
short-hand syntax). We would really appreciate your input at our
[Github](https://github.com/polyhorn/polyhorn).

1. For elements of components that implement the `Default` trait, we offer a
   [short-hand syntax](/docs/concepts/components#default-values) for
   initializing the remaining properties. However, since this is so commonly the
   case, we might want to make it opt-out instead of opt-in.
2. The reason we need the special syntax for 1) is that the syntactic sugar is
   desugared during the macro expansion phase of Rust compilation and we don't
   yet know at that point if a type implements `Default` or not (so we cannot
   infer automatically).
3. On the other hand, we're not sure what the consequences will be of
   assuming that all components will always implement `Default`.
4. Short-hand syntax does not (effectively) support higher-order components.
   For example, our animated library provides a wrapper around `View` that
   accepts the same properties as the core `View` and directly forwards most
   properties to that core `View`. It has to do that manually. A possible syntax
   construction might be the following:

   ```rust
   pub struct RedView(View);

   impl Component for RedView {
      fn render(&self, manager: &mut Manager) -> Element {
         poly!(<View style={ Style {
            background_color: Color::red(),
            ..self.0.style
         } } ..self.0 />)
      }
   }
 
   poly!(<RedView(View) style={ ... } on_pointer_down={ ... } />)
   ```
:::
