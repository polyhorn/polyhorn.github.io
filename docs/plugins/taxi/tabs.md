---
id: "tabs"
title: Tabs
sidebar_label: Tabs
hide_title: true
---

<span className="badge badge--danger">Unstable</span>

<h1 style={{ marginTop: 0 }}>Tabs</h1>

<img src="/img/taxi-tabs.gif" style={{
    float: "right",
    marginLeft: 20,
    marginBottom: 20,
    width: 120
}} />

With tab navigation, users can switch between screens by using a bottom bar.
Screens are replaced without animations, as is customary on all platforms we
target. For more information about the different types of navigation, look at
the [overview](/plugins/taxi/).

An interactive bottom bar that lets users switch to a different screen is built
into Taxi, provided by default and fully customizable. By customizing the bottom
bar, you ensure an uniform look and feel across all platforms that you target
(whereas the default style is platform-dependent).

<div style={{ clear: "both" }} />

```rust
use polyhorn::*;
use taxi::*;
 
#[derive(Routes)]
pub enum Routes {
    #[tab(icon = "frontpage", initial)]
    Home(HomeScreen),
 
    #[tab(icon = "gears")]
    Settings(SettingsScreen),
}
 
poly!(<tabs::Navigator::<Routes> ... />)
```

## Route Attribute

These arguments can be given to the `#[tab(...)]` route attribute.

| Name | Description |
|:-----|:------------|
| `icon` | **Required.** Name of an image asset that will be used as an icon for this tab. |
| `title` | *Optional.* Title that will be shown below the icon for this tab. If not present, the name of the enum variant will be used instead. |
| `initial` | *Optional.* Indicates that this tab should be the initial tab. If not present, the first enum variant will be considered the initial tab. |

:::important
All tab routes **must** implement the `Default` trait (either by deriving or
by manual implementation).
:::