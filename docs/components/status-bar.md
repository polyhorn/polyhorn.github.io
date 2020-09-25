---
id: "status-bar"
title: StatusBar
sidebar_label: StatusBar
hide_title: true
---

<span className="badge badge--danger">Unstable</span>

<h1 style={{ marginTop: 0 }}>StatusBar</h1>

```rust title="Definition"
pub enum StatusBarStyle {
    Default,
    LightContent,
    DarkContent,
}

pub struct StatusBar {
    pub style: StatusBarStyle,
}
```

## Roadmap

:::info
There are some open issues that we would like to get some feedback on through
our [Github](https://github.com/polyhorn/polyhorn). Please chime in if you have
some thoughts.

1. The order in which status bar styles are applied if multiple `StatusBar`s are
   mounted at the same time is currently undefined.
2. We're missing some essential properties, like a boolean to control the
   activity indicator on iOS.
:::