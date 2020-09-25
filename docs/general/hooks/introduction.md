---
id: "introduction"
title: Hooks
sidebar_label: Overview
slug: /hooks/
---

## Background

In Polyhorn, all components are backed by a stateless render function.

```rust title="src/counter.rs"
pub struct Counter;

impl Component for Counter {
    fn counter(&self, manager: &mut Manager) -> Element {
        poly!(
            <Button title={ format!("Increment") } />
        )
    }
}
```

Obviously, this is problematic because we need to capture some statefulness to
get a useful application. In order to enable that, Polyhorn provides "hooks". For
users familiar with React or React Native, they're exactly the same thing.

Let's look at how we can use a ```use_state!(...)``` hook to make the
previous example interactive.

```rust {5} title="src/counter.rs"
pub struct Counter;

impl Component for Counter {
    fn render(manager: &mut Manager -> Element {
        let value = use_state!(manager, 0);

        poly!(
            <Button title={ format!("Increment {}", &value) }
                 on_press={ |_| value.replace(value.to_owned() + 1) } />
        )
    }
}
```

Hooks are extremely expressive and can capture any additional non-reactive logic
you might need.

### Keys

Unlike React, Polyhorn developers don't have to provide a name for their
hooks, nor do we use globals or indices to track uniqueness. Specifically, we
use macros to automatically assign unique identifiers to each invocation of a
hook at compile-time:

```rust
let a = use_state!(manager);
let b = use_state!(manager);
```

In order to distinguish between two calls, the macro creates an anonymous type
and uses ```std::any::TypeId::of::<T>()```.

```rust
let a = manager.use_state({ struct ID; std::any::TypeId::of::<ID>() });
let b = manager.use_state({ struct ID; std::any::TypeId::of::<ID>() });
```

The compiler assigns a number to each unique type, which assists Polyhorn in
distinguishing between the two hooks. It also means that you can use hooks
even in conditional logic, since the IDs are stable.

```rust
let a = if self.condition {
    Some(use_state!(manager))
} else {
    None
};
```

## Roadmap

:::info

1. There are two useful undocumented hooks (`UseAsync` in `polyhorn-core` and
   `UseChannel` in `polyhorn-channel`) that will need to be stabilized before
   documentation.
:::