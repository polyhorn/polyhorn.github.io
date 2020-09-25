---
id: "introduction"
title: Introduction
sidebar_label: Introduction
slug: /concepts/
---

## Overview

### Annotated Example

#### Components

Components are the basic building blocks that you use to create an app.
Components are created by implementing the `Component` trait on a type. For
more information about the required associated render function,
[read more about components](./components).

```rust title="component.rs"
pub struct Button;

impl Component for Button { ... }
```

#### Elements

Elements are specifications of a component by using an xml-like syntax. This
xml-like syntax is not regular Rust syntax. It is syntactic sugar provided by
the `poly!(...)` macro. Elements are re-created at every re-render: they are
cheap specifications of what you want a component to be. For more information
about elements, [read this](./elements).

```rust title="element.rs"
poly!(<Button />) // = Element::new(Button, ...)
```

#### Instances

The renderer will create a new instance of a component for each element that it
encounters during the first render. Upon subsequent renders, it will attempt to
reconcile these elements: it tries to update existing instances with new
elements. Only if that doesn't work will it create new instances.

```rust title="instance.rs"
let instance = render(poly!(<Button />), &mut Container::new());
```