---
id: "effect-hooks"
title: Effect Hooks
sidebar_label: Effect Hooks
---

## Overview

Sometimes, you might want to run some imperative code after a component is
mounted. With effect hooks, you can schedule closures for execution at the end
of a render cycle.

## Declaration

The effect hook is declared via a `UseEffect` trait. The hook can be used on any
type that implements this trait.

```rust title="Definition"
pub trait UseEffect<P> where P: Platform {
    fn use_effect<F>(&mut self, key: Key, condition: Option<Key>, effect: F)
    where
        F: FnOnce(&mut P::CommandBuffer) + 'static;
}
```

Effects are closures that accept a mutable reference to the platform's command
buffer. The command buffer can be used to queue commands that are executed on
the main thread and interface directly with native elements (such as `UIView`s
on iOS). All commands generated in effects are queued in the buffer and
committed atomically (i.e. jitter-free) only after the entire render has
finished.

The `'static` lifetime required stems from the fact that the effect is scheduled
to run after the render function has returned. Specifically: it may not hold any
references to local variables of the render function.

It is recommended to use the macro instead of interfacing with the trait
directly. The macro will generate a unique invocation ID that is used as its
key.

```rust title="Definition"
use_effect!($manager:expr, $effect:expr) => {
    UseEffect::use_effect($manager, use_id!(), None, $effect);
}
```

## Usage

Effects can be used in conjunction with references to run imperative code after
components are mounted but before they are shown to the user.

```rust
fn render(&self, manager: &mut Manager) -> Element {
    let button_ref = use_reference!(manager);
 
    // The reference is `None` until it mounts.
    assert_eq!(button_ref.is_some(), false);
 
    use_effect!(manager, {
        let button_ref = button_ref.clone();
 
        move |_| {
            // The reference is `Some(...)` within the effect.
            assert_eq!(button_ref.is_some(), true)
        }
    });
 
    poly!(<Button reference=button_ref ... />)
}
```

Unfortunately, references still need to be cloned, which makes this example more
verbose than it could be. It's one of the open issues with
[reference hooks](/docs/hooks/reference-hooks/).

## Roadmap

:::info
There are some open issues related to the behavior of effect hooks. If you have
thoughts, please let us know on
[our Github](https://github.com/polyhorn/polyhorn).

1. Unlike React, we don't distinguish between regular effects and layout
   effects.
2. The behavior of our regular effects is identical to layout effects of React.
3. Effect closures currently always accept the platform's command buffer even
   though this should only be accessed by one of the platform crates (e.g.
   `polyhorn-ios`).
4. We currently do not yet support conditional effects through our macro
   syntax.
:::