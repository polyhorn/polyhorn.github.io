---
id: "touchable-opacity"
title: TouchableOpacity
sidebar_label: TouchableOpacity
hide_title: true
---

<span className="badge badge--danger">Unstable</span>

<h1 style={{ marginTop: 0 }}>TouchableOpacity</h1>

TouchableOpacity is a trivial wrapper around the core [View
component](/components/view/) that lowers its opacity to 50% once it is
pressed, and smoothly animates it back to 100% opacity once it is released.

Its implementation is actually quite compact:

```rust
use polyhorn::*;
use yoyo::{View, yoyo};

pub struct TouchableOpacity {
    // ... props from core View ...
}

impl Component for TouchableOpacity {
    fn render(&self, manager: &mut Manager) -> Element {
        yoyo!(States, {
            :initial {
                opacity: 1.0;
            }

            :pressed {
                opacity: 0.5;
            }

            :initial:from(:pressed) {
                transition_opacity: ease_in_out(0.4);
            }
        });

        <View::<States>
            // ... props from core View ...
            >
            { manager.children() }
        </View>
    }
}
```