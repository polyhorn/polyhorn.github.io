---
id: "reference-hooks"
title: Reference Hooks
sidebar_label: Reference Hooks
---

## Overview

Sometimes, you might want to write imperative code to manipulate a component.
For example, we might want to automatically focus a text field after it is
mounted. Or we might want to associate a WebSocket with a component. This can
be done with references. Conceptually, references are quite similar to state
with one notable difference: references don't have to be serializable.

## Declaration

The reference hook is declared via a `UseReference` trait. The hook can be used
on any type that implements this trait.

```rust title="Definition"
pub trait UseReference {
    fn use_reference<T>(&mut self, key: Key);
}
```

It is recommended to use the macro instead of interfacing with the trait
directly. The macro will generate a unique invocation ID that is used as its
key.

```rust title="Definition"
use_reference!($manager:expr) => {
    UseReference::use_reference($manager, use_id!())
}
```

## Usage

### Imperative Component Handles

We start by writing an implementation of a form field component. The form field
has a property `reference` that users of this component can pass a `Reference`
to. The reference itself is owned by the form and usually contains a weak
pointer to the handle's state.

```rust title="Example"
pub struct Field {
    reference: Reference<FieldHandle>,
}

pub struct FieldHandle(...);

impl FieldHandle {
    pub fn focus(&mut self);
}

impl Component for Field {
    fn render(&self, manager: &mut Manager) -> Element {
        self.reference.replace(FieldHandle(...));

        ...
    }
}
```

Next, we implement the form. For illustrative purposes, we also implement an
effect that will call `FieldHandle::focus` after the form is mounted but
before it is shown to the user.

```rust title="Example"
pub struct Form;

impl Component for Form {
    fn render(&self, manager: &mut Manager) -> Element {
        let field_ref = use_reference!(manager);
 
        use_effect!(manager, {
            let field_ref = field_ref.clone();

            move |_| {
                field_ref.apply(|handle| handle.focus());
            }
        })

        poly!(<Field reference=field_ref />)
    }
}
```

### Auxiliary References

We can also use reference hooks to store other imperative resources, such as
web sockets. In this example, we connect to a web socket and store it in a
reference. The web socket is automatically dropped when the component is
unmounted.

```rust title="Example"
fn render(&self, manager: &mut Manager) -> Element {
    let websocket_ref = use_reference!(manager);
 
    if websocket_ref.is_none() {
        websocket_ref.replace(WebSocket::connect("..."));
    }
 
    ...
}
```

## API Reference

```rust title="Definition"
pub struct Reference<T> { ... }

impl<T> Reference<T> {
    pub fn is_some(&self) -> bool;
    pub fn is_none(&self) -> bool;

    /// Replaces the current value with the given value and returns the old
    /// value. Returns None if the reference has expired.
    pub fn replace(&self, value: T) -> Option<T>;

    /// Invokes the given closure with a mutable reference to the reference's
    /// value. If the reference has expired (i.e. the owning component is
    /// unmounted), this function returns `None` without invoking the closure.
    pub fn apply<F, O>(&self, transform: F) -> Option<O>
    where
        F: FnOnce(&mut T) -> O;
}
```

## Roadmap

:::info
There are some open issues related to the memory model of context. If you have
thoughts, please let us know on
[our Github](https://github.com/polyhorn/polyhorn).

1. References are currently similar to shared `Option<T>`s and initialized
   with `None`. In order to initialize a reference with a specific value, 
   currently this is needed:
   ```rust
   let ws = use_reference!(manager);

   if ws.is_none() {
       ws.replace(WebSocket::connect("..."));
   }
   ```
   Clearly, there are a few common use cases that don't need the reference to
   behave like an `Option<T>`. We need to address those and build a more
   ergonomic way to initialize references.
2. Unlike [state](/docs/hooks/state-hooks), references fail silently if accessed
   after they expire (i.e. after the owning component is unmounted).
:::