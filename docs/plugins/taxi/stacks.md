---
id: "stacks"
title: Stacks
sidebar_label: Stacks
hide_title: true
---

<span className="badge badge--danger">Unstable</span>

<h1 style={{ marginTop: 0 }}>Stacks</h1>

<img src="/img/taxi-stacks.gif" style={{
    float: "right",
    marginLeft: 20,
    marginBottom: 20,
    width: 120
}} />

With stack navigation, you can direct users to different screens by using the
`use_navigator` hook. For more information about the different types of
navigation, look at the [overview](/plugins/taxi/).

An interactive header bar that lets users go back to the previous screen is
built into Taxi, provided by default and fully customizable. By customizing
the header bar, you ensure a uniform look and feel across all platforms that
you target (whereas the default style is platform-dependent).

<div style={{ clear: "both" }} />

```rust
use polyhorn::*;
use taxi::*;
 
#[derive(Routes)]
pub enum Routes {
    #[stack(title = "Welcome", initial)]
    Home(HomeScreen),
 
    #[stack(title = "Detail")]
    Second(SecondScreen),
}
 
poly!(<stack::Navigator::<Routes> ... />)
```

## Route Attributes

These arguments can be given to the `#[stack(...)]` route attribute.

| Name | Description |
|:-----|:------------|
| `title` | *Optional.* Title that will be shown in the header. If not present, the name of the enum variant will be used instead. |
| `initial` | *Optional.* Indicates that this tab should be the initial screen. If not present, the first enum variant will be considered the initial. |

:::important
The initial route **must** implement the `Default` trait (either by deriving
or by manual implementation).
:::