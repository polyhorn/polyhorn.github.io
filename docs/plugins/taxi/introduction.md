---
id: "introduction"
title: Taxi 🚕
sidebar_label: Overview
slug: "/taxi/"
---

Taxi 🚕 is the recommended way to add navigation to your Polyhorn apps.

There are three types of navigation to choose from: stack navigation, tab
navigation and modal navigation.

<div class="row">
    <div class="col col--4">
        <h3><a href="stacks/">Stacks</a></h3>
        <img src="/img/taxi-stacks.gif" />
        <p>
            Screens slide in from the right.
        </p>
    </div>
    <div class="col col--4">
        <h3><a href="tabs/">Tabs</a></h3>
        <img src="/img/taxi-tabs.gif" />
        <p>
            Screens are toggled with a tab bar.
        </p>
    </div>
    <div class="col col--4">
        <h3><a href="modals/">Modals</a></h3>
        <img src="/img/taxi-modals.gif" />
        <p>
            Screens slide in from below.
        </p>
    </div>
</div>

:::note
These animations are for illustrative purposes only (Figma 💪). The actual animations are
dependent on the platform they run on: Polyhorn apps feel and behave exactly as
any other native app written in Swift or Java.
:::

All navigation types are generic with respect to a `Routes` type (called
`T`). Regardless of what type of navigation you choose, you can control its
behavior using the navigator hook (replace `T` with your `Routes` type):

```rust
impl<T> Navigator<T> {
    /// Navigate to the given screen.
    pub fn push(&self, screen: T) { ... }
 
    /// Go back to the previous screen.
    pub fn pop(&self) { ... }
}
 
let navigator: Navigator<T> = use_navigator!(manager);
navigator.push(...);
navigator.pop();
```

:::note Mutability

Navigation can be controlled without mutable references (i.e. `Navigator<T>`
uses _interior mutability_). Instead, borrows are tracked _at runtime_. There
are several safe guards in place:
1. If you request a navigation (either through `push(...)` or `pop()`) after
   the navigator has been unmounted, your request is silently ignored.
2. Navigators cannot be sent to or shared with other threads.
3. Navigation requests are atomic and self-contained: concurrent mutable borrows
   cannot happen. No callbacks are invoked while the navigator's internal
   state is mutably borrowed.
:::