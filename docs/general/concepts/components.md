---
id: "components"
title: Components
sidebar_label: Components
---

Components are declared by implementing a simple trait:

```rust
pub trait Component {
    fn render(self, manager: &mut Manager) -> Element;
}
```

:::note
If you're familiar with React, this should look familiar. One noticeable
difference is the `manager` parameter. Unlike React, we don't use global state to
facilitate [hooks](/docs/hooks/). Instead, we use a manager to expose
that functionality.
:::


## Properties

### Example

We start by defining a new struct called `Animal`. Please note that the
`Component` trait must also be implemented for this new type, but we will
come back to that in [Rendering](#rendering).

All fields of this struct must be public if you want to be able to construct
elements of this component in other modules. Also note that Rust naming
convention dictates that all field members are in `snake_case`. For example,
`onPress` in React is `on_press` in Polyhorn.

```rust title="src/animal.rs"
pub struct Animal {
    pub name: String,
    pub is_endangered: bool,
}

impl Component for Animal { ... }
```

The component `Animal` can be used to build an element with xml-like syntax.
Read more about elements [here](/docs/concepts/elements), or
[get an overview](/docs/concepts/#overview) of the relationships between
components, elements and instances.

```rust title="src/main.rs"
poly!(<Animal name="Polar Bear" is_endangered=true />)
```

### Default Values

Sometimes, you don't want to have to provide all values to a component. If a
component implements the `Default` trait (which can be done automatically by
deriving it), we can use default syntax when constructing an element of this
component.

```rust {1} title="src/animal.rs"
#[derive(Default)]
pub struct Animal {
    pub name: String,        // default = ""
    pub is_endangered: bool, // default = false
}
```

The default syntax refers to the `...` at the end of an element. After the `...`,
no other properties are allowed. This only works if the component has implemented
or derived `Default`.

```rust title="src/main.rs"
poly!(<Animal name="Polar Bear" ... />)
```

#### Custom Default Values

The default value for any type is provided by `T::default()`. For example, for
booleans, this is `bool::default() = false`. Sometimes, you might want it to be
`true` instead. Or you want a default string value. In those cases, we recommend
using the [`smart-default` crate](https://crates.io/crates/smart-default),
which is fully compatible with Polyhorn.

## Rendering

### Children

```rust title="src/example.rs"
fn render(self, manager: &mut Manager) -> Element {
    poly!(<View style={ style! {
        background_color: Color::red()
    } }>
        { manager.children() }
    </View>)
}
```

## Roadmap

:::info
There are some remaining issues with components. We would really appreciate
your input at our [Github](https://github.com/polyhorn/polyhorn).

1. Currently, children are accessed through the manager. In React, children are
   properties instead. For example, this is how Polyhorn currently works:
   ```rust
   pub struct MountainView {
       // Empty
   }

   impl Component for MountainView {
       fn render(&self, manager: &mut Manager) -> Element {
           poly!(<View>
               { manager.children() }
           </View>)
       }
   }
   ```
   And this is how Polyhorn would work according to React's original
   implementation:
   ```rust
   pub struct MountainView {
       pub children: Element,
   }

   impl Component for MountainView {
       fn render(&self, manager: &mut Manager) -> Element {
           poly!(<View>
               { self.children }
           </View>)
       }
   }
   ```
   React's implementation has several advantages:
   1. It's possible to write components that do not accept children (like
      [StatusBar](/components/status-bar/)). Polyhorn would be able to generate
      a compile-time error when children are passed to components that
      do not accept them.
   2. Children do not necessarily have to be elements at all. For example, this
      might hypothetically be allowed in the future:
      ```rust
      pub struct MountainView {
          pub children: Vec<u32>,
      }

      poly!(<MountainView>
        { vec![1984] }
      </MountainView>)
:::