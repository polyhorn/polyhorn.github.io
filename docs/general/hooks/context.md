---
id: "context-hooks"
title: Context Hooks
sidebar_label: Context Hooks
---

## Overview

Sometimes, you might want to pass properties down several levels deep. This
quickly becomes cumbersome. Instead, context hooks facilitate a way of passing
values down the tree with minimal overhead.

This is the recommended way to pass websockets, local database handles,
themes, etc.

## Declaration

Context hooks consist of two parts: one provider and zero or more consumers.
A provider can supply Polyhorn with a value by using the built-in
ContextProvider component. Consumers can retrieve that value by using the
UseContext hook.

### Provider

A provider can supply Polyhorn with a value by using the built-in
ContextProvider component. The ContextProvider is generic with respect to `T`:
the context type.

```rust title="definition"
pub struct ContextProvider<T> {
    pub value: T,
}
```

### Consumers

The context hook is declared via a `UseContext` trait. The hook can be used on
any type that implements this trait.

```rust title="Definition"
pub trait UseContext {
    fn use_context<T>(&mut self);
}
```

It is recommended to use the macro instead of interfacing with the trait
directly.

```rust title="Definition"
use_context!($manager:expr) => {
    UseContext::use_context($manager);
}
```

## Roadmap

:::info
There are some open issues related to the memory model of context. If you have
thoughts, please let us know on
[our Github](https://github.com/polyhorn/polyhorn).

1. Should `T` be cloned once and made available to downstream components as a
   regular reference? Or should it be reference counted? If it is reference
   counted, who is responsible for creating the `Rc<T>`?
2. We should make it easier to pass a `Reference<T>` as the value of a
   `ContextProvider<T>`, since this will probably be a common construct:
   ```rust
   let ws = use_reference!(manager, WebSocket::connect("..."));

   poly!(<ContextProvider value=ws>
       ...
   </ContextProvider>)
   ```
:::