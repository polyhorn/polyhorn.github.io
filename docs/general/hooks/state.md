---
id: "state-hooks"
title: State Hooks
sidebar_label: State Hooks
---

## Overview

By default, components are pure functions of their properties (i.e. `&self`).
However, often we want to add some state to components. For example, forms
should be able to save the text that is entered into a text field. The state
hook facilitates this.

## Declaration

The state hook is declared with a `UseState` trait. The hook can be used on
any type that implements this trait.

```rust title="Definition"
pub trait UseState {
    fn use_state<T, F>(&mut self, key: Key, initializer: F) -> State<T>
    where
        T: Serialize + Deserialize + 'static,
        F: FnOnce() -> T;
}
```

It is recommended to use the macro instead of interfacing with the trait
directly. The macro will generate a unique invocation ID and wrap the default
value in a closure so that it is only called during the initial render.

```rust title="Definition"
use_state!($manager:expr, $default_value:expr) => {
    UseState::use_state($manager, use_id!(), || $default_value)
}
```

## Usage

The ```use_state!(...)``` macro returns a ```State<T>``` value. The generic
parameter ```T``` is automatically inferred when you use it. For example:

```rust title="Example"
let clicked = use_state!(manager, false);

poly!(
    <View on_pointer_up={ |_|
        clicked.replace(true);
    } ... />
)
```

In this case, the Rust compiler will automatically infer that `clicked` is a
`State<bool>`.

Keep in mind that (in a future version of Polyhorn) the entire state will be
serialized when the user closes your app. This means that everything you
store in your state, must be serializable. Specifically: don't use state to
store WebSockets or API clients.

## API Reference

State objects hold a weak pointer to an entry in the state map of
[an instance](/docs/concepts/instances/). Since it is impossible to obtain a
reference to the instance itself, this eliminates any risk of introducing a
reference cycle.

However, as a consequence, it is up to the developer to ensure that the state is
no longer used after its corresponding component is unmounted. If any of the
methods are called after the component is unmounted, Polyhorn will `panic!`.

```rust title="Definition"
impl State<T> where T: Serialize + Deserialize {
    /// Replaces the current value with the given value and returns the old
    /// value afterwards.
    pub fn replace(&self, value: impl Into<T>) -> T;

    /// Clones the current value and returns it.
    pub fn to_owned(&self) -> T::Owned where T: ToOwned;
}
```

## Roadmap

:::info
We're still working on a better API for state. If you have thoughts, please
let us know on [our Github](https://github.com/polyhorn/polyhorn). For example:

1. Currently, `State<T>` is not `Copy`, which makes it a bit less ergonomic
   when passing it to callbacks (since it requires cloning). We might want to
   consider an arena-based approach where `State<T>` simply contains the index
   of an instance's state entry and requires a manager to obtain a value.
2. Similarly, since state is accessed through a weak pointer and stored in
   `RefCell`s, it's not very ergonomic to obtain a reference to its value.
   Specifically: we can't return the `RefCell`'s `RefMut` since its lifetime is
   tied to the weak pointer's upgrade, which is bound to the accessor function:

   ```rust
   impl State<T> {
       // Hypothetical implementation of `get_mut`.
       fn get_mut(&self) -> RefMut<'_, T> {
           // Upgrade the weak pointer to a strong pointer.
           let instance: Rc<Instance> = self.weak.upgrade().unwrap();

           // Obtain the state's entry.
           let entry: &'instance RefCell<T> = instance.state.get(&self.key);

           // Borrow its value mutably.
           let borrow: BorrowMut<'entry, T> = entry.borrow_mut();

           // ERR: the borrow is tied to the entry, which is tied to the
           // instance, which is dropped once we return.
           borrow
       }
   }
   ```
3. `State<T>` should be valid during its entire lifetime: it should never panic.
   This could potentially be solved as a consequence of 1).
:::