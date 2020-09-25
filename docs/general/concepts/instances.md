---
id: "instances"
title: Instances
sidebar_label: Instances
---

The first time Polyhorn encounters a particular element, it will create a new
corresponding Instance. On each subsequent render, it will update the existing
Instance with the new specification from the corresponding element.

For example, imagine two subsequent renders:

```rust
pub struct MountainView {
    pub residents: Vec<String>,
}

// First render:
<MountainView residents={ vec!["Steve Jobs"] } />

// Second render:
<MountainView residents={ vec![] } />
```

First of all, observe that there is only one
[component](/docs/concepts/components/): MountainView. At each render, a new
[element](/docs/concepts/elements/) is created. An instance is created during
the first render (with a non-empty residents vector). At the second render,
Polyhorn automatically recognizes that these elements are related and updates
the existing instance to reflect the now-empty residents vector. This is called
reconciliation: relating potentially new elements with existing instances.