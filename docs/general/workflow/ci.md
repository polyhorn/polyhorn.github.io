---
id: "ci"
title: Continuous Integration
sidebar_label: Continuous Integration
---

import Status from "../../../plugins/Status";

<Status level={ 0 } />

## Organization

In general, tests should be stored in a module `tests` that accompanies the
code that it tests. It is recommended to prepend the `#[cfg(test)]` attribute
to the module to make sure that your test code does not get included in
production builds. For example:

```rust
fn fib(n: usize) -> usize { ... }

#[cfg(test)]
mod tests {
    use super::*;

    #[polyhorn::test]
    fn test_fib() {
        assert_eq!(test_fib(2), 4);
    }
}
```

Running `polyhorn test` will run this test on the default device of each
platform that you enable in your `Polyhorn.toml`. You can extend the set of
devices that your app is tested on by updating the
[device matrix](#device-matrix) in your `Polyhorn.toml`.

## Device Matrix

It is recommended to explicitly specify a set of devices to test your app on
when you run `polyhorn test`.

```toml title="Polyhorn.toml"
...

[tests]
ios.devices = [ "iPhone Xs + iOS 14.0" ]
android.devices = [ "Pixel + Android 10.0" ]
```



## Snapshot Testing

Snapshot testing is best explained using an example. In this example, we first
write a simple component called `App`.

```rust
use polyhorn::prelude::*;

#[derive(Default)]
pub struct App {}

impl Component for App {
    fn render(&self, manager: &mut Manager) -> Element { ... }
}
```

Now, we can return an element from our test and turn it into a snapshot test:

```rust
#[polyhorn::test]
fn test_app() -> Element {
    poly!(<App />)
}
```

Alternatively, the same test can also be generated in one line with
`polyhorn::snapshot!(test_app, <App />)`.

Generated snapshots are stored in `target/polyhorn-snapshots/`. An index is
stored in `target/polyhorn-snapshots/Snapshots.toml` and looks like this:

```toml
[9733c3f71057ecc1ee6def2539b7212e3e45ae98]
device = 'iPhone SE (2nd generation)'
os = 'iOS'
os_version = '14.0'
os_appearance = 'light'
test_name = 'image_bytes_png::tests::test_app'
snapshot_name = 'example'

[...]
...
```

For each snapshot, this file stores metadata about the device and test that
generated the snapshot. The screenshot itself is stored in
`target/polyhorn-snapshots/[id].png`.

Note: Polyhorn does not compare the snapshots against previous versions. As
such, __snapshot tests never fail__. This is a design choice that originates
from the observation that snapshot changes are often deliberate.

It is not recommended to include the snapshots in git. Instead, if you want
to integrate snapshot testing in a CI pipeline, write a custom program to
interpret the results from `target/polyhorn-snapshots`. For example, you might
want to store the snapshots in S3.

In the future, we will release software that we use to compare snapshots across
different commits in git and to notify when snapshots change.

## UI Automation

We can also write more complicated multi-stage snapshot tests that involve
simulating input events to automate the user interface.

For this, we write a Polyhorn test based on an asynchronous function with a
single argument (the `Automator`). The automator can be used to control the
user interface as well as the device itself.

```rust
#[polyhorn::test]
async fn test_app(automator: &mut Automator) {
    // Take a snapshot of the initial state.
    automator.render(|| <App />).await;
    automator.snapshot("home").await;

    // Simulate a touch event for a button named "Settings".
    automator.ui()
        .button("Settings")
        .click()
        .await;
    automator.snapshot("settings").await;
}
```

### Opening URLs

If you want to validate that your URL scheme works, you can use a test like
this:

```rust
#[polyhorn::test]
async fn test_url_scheme(automator: &mut Automator) {
    automator.open_url("myscheme://settings").await;
    
    // Verify that the text "Settings" is shown.
    assert!(automator.ui().text("Settings").is_some());
}
```

Similarly, you can test your domain mapping with a test like this:

```rust
#[polyhorn::test]
async fn test_domain(automator: &mut Automator) {
    automator.open_url("https://mydomain.com/settings").await;
    
    // Verify that the text "Settings" is shown.
    assert!(automator.ui().text("Settings").is_some());
}
```

### Sending Push Notifications

If you want to simulate a push notification, you can use a test like this:

```rust
#[polyhorn::test]
async fn test_push(automator: &mut Automator) {
    automator.push()
        .message("Hello World!")
        .send()
        .await;
    
    // Verify that the text "New Message" is shown.
    assert!(automator.ui().text("New Message").is_some());
}
```
