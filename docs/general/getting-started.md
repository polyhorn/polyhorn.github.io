---
id: "getting-started"
title: Getting Started
sidebar_label: Getting Started
---

**Polyhorn** is a Rust library for building user interfaces. For users familiar
with React or React Native, this library will be very similar in purpose.

It also comes with its own command line interface that makes it easy to start a
new project and to build and run existing projects.

Colloquially, both are called Polyhorn.

## Installation

Installation of Polyhorn is easy and takes just a few seconds. If you're new to
Rust, you also need to install Rust first with step 1 below. If you're already
using Rust, you can skip step 1 and install Polyhorn with step 2.

1. **If you don't already have Rust installed,** install Rust with rustup.
   ```shell
   curl -sSf https://sh.rustup.rs | sh
   ```
2. Now, install Polyhorn with cargo, the Rust-provided package manager.
   ```shell
   cargo install polyhorn
   ```

## Start a Project

Starting a new project from one of our built-in templates is easy. For an
almost blank project, run:

```shell
polyhorn new hello-world
```

You can replace `hello-world` with the name of your app. Make sure it contains
only alphanumerical characters and dashes.

This will generate a directory with the following structure:

```k
hello-world/
├── Cargo.toml
├── Polyhorn.toml
├── assets
│   └── .gitkeep
└── src
    └── lib.rs
```

This is the content of `src/lib.rs`:

```rust
```rust
use polyhorn::prelude::*;

#[derive(Default)]
pub struct App {}

impl Component for App {
    fn render(&self, _manager: &mut Manager) -> Element {
        poly!(<Window>
            <View style=!{
                align-items: center;
                justify-content: center;
                background-color: red;
                height: 100%;
            }>
                <Text style=!{ color: white; }>
                    "Welcome to your Polyhorn app!"
                </Text>
            </View>
        </Window>)
    }
}

polyhorn::render!(<App />);
```

## Run a Project

In your command line, navigate to your project. For example, if you followed the
instructions above, you should now be in ```hello-world/```. Then, decide on
which platform you want to run. Note that all platforms share the same codebase,
so you don't need to plan ahead.

### Running on iOS

If you want to run your app on an iOS simulator, run this command:

```shell
$ polyhorn run ios
```

It will ask you to select an available simulator.

## Roadmap

:::info
It's not yet as easy to run the app on a physical device. It requires
building the runtime library for all iOS architectures supported by Rust and
bundling them into a fat library using `cargo-lipo`. Then, drag the resulting
library into the project that is generated for the simulator build (replacing
the existing library), select a target device and run your app.

Suffices to say: this will be fixed very soon (less than one week after you
read this).
:::
