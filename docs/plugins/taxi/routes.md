---
id: "routes"
title: Routes
sidebar_label: Routes
hide_title: true
---

<span className="badge badge--danger">Unstable</span>

<h1 style={{ marginTop: 0 }}>Routes</h1>

### Example

```rust
#[derive(Routes)]
pub enum Routes {
    Welcome(WelcomeScreen),
}
```

:::info
**Caveat:** all screens' props must be serializable.
:::

In addition, if the routes are used for a tab navigator, all screens must
implement the `Default` trait and the `Routes` enum must derive this trait as
well. Intuitively, this makes sense because the tabs can be instantiated directly
by the user by pressing one of the tab buttons.

```diff
- #[derive(Routes)]
+ #[derive(Default, Routes)]
  pub enum Routes {
      Welcome(WelcomeScreen),
  }
```

:::info
There are some open issues that we would like to get some feedback on through
our [Github](https://github.com/polyhorn/polyhorn). Please chime in if you have
some thoughts.

1. The procedural macro for deriving `Routes` has not yet been implemented.
:::