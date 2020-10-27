---
id: "image-source"
title: ImageSource
sidebar_label: ImageSource
---

import Status from "../../plugins/Status";

<Status level={ 1 } path="polyhorn_ui/assets/enum.ImageSource.html" />

An image source describes a source of PNG-encoded image data that can be
passed to e.g. the [Image](/components/image/) component. An image source can
either be a placeholder, an [Asset](./asset/) or a
[Bytes](https://docs.rs/bytes/latest/bytes/struct.Bytes.html) (3rd party
crate) object.

## Sources

### Placeholders

<div className="row">
<div className="col col--6">
<img src="/img/image-sources-without-placeholders-before.png" />
</div>
<div className="col col--6">
<img src="/img/image-sources-without-placeholders-after.png" />
</div>
</div>

If you're loading an remote image, you might want to show a placeholder instead.
The placeholder is entirely transparent (unless you give the containing
component an opaque background color) but does have a size. This size is
subsequently used in calculating the layout.

The benefit of this is that when the image is eventually completely loaded, and
the component re-renders to show that image, the rest of the layout will not
change because it already anticipated the correct size of the image.

<div className="row">
<div className="col col--6">
<img src="/img/image-sources-with-placeholders-before.png" />
</div>
<div className="col col--6">
<img src="/img/image-sources-with-placeholders-after.png" />
</div>
</div>

The estimated size is not a strict requirement. For example, if the image you
load turns out to have a different size than the placeholder size, we will
recalculate the layout and include the real dimensions of the image.

In other words: make an educated guess when providing placeholders with the
estimated size, but don't worry if the estimate is occasionally wrong: Polyhorn
will automatically correct the layout given the final dimensions.

:::note
Using placeholders might seem similar to setting the `width` and `height` CSS
attributes of the [Image](/components/image/) component, but there is a subtle
difference.

When you replace a placeholder with an image that does not have the estimated
size given to the placeholder, Polyhorn will adjust the layout to accommodate
the real dimensions of the image.

If you use the `width` and `height` CSS attributes instead of using a
placeholder, the layout will not be adjusted when the real dimensions of the
eventual image do not match the given CSS width and height.
:::

#### Related Example Code

- [examples/image-placeholders](https://github.com/polyhorn/examples/blob/master/image-placeholders/src/lib.rs)

### Assets

The easiest way to load icons directly from your app's bundle, is to use the
`asset!(...)` macro. You can read more about the macro's purpose
[here](/api/asset). Assuming you have a SVG file named "icon.svg" in your
`assets/` folder, this is all it takes to render it to screen:

```rust
<Image source=asset!("icon") />
```

#### Related Example Code

- [examples/image-placeholders](https://github.com/polyhorn/examples/blob/master/image-placeholders/src/lib.rs)

### Bytes

Every Polyhorn platform should also be able to decode and render PNG images.
This is a small example that shows how to render a PNG-encoded image:

```rust
let bytes = include_bytes!("../assets/emoji-polyhorn.png");

poly!(<Image source={ &bytes[..] } ... />)
```

However, if you're loading a local image, always use `asset!(...)` because it
comes with a few additional advantages (e.g. image assets implement
`ImageQuery` so you can measure their size ahead of time).

#### Remote Images

Networking is generally out of scope for the Polyhorn core itself. If you want
to load remote images, we recommend using the
[reqwest](https://docs.rs/reqwest) crate.

```rust
let source = use_reference!(manager, ImageSource::placeholder(96.0, 96.0));

// Turn it into a weak RC so we can modify
// its value asynchronously.
let weak_source = source.weak(manager);

use_async!(manager, async move {
    let bytes = reqwest::get("https://polyhorn.com/img/emoji-polyhorn.png")
        .await
        .unwrap()
        .bytes()
        .await
        .unwrap();

    weak_source.replace(bytes);
    weak_source.queue_rerender();
});

poly!(<Image source={ source.cloned(manager) } />)
```

#### Related Example Code

- [examples/image-bytes-png](https://github.com/polyhorn/examples/blob/master/image-bytes-png/src/lib.rs)
- [examples/image-reqwest](https://github.com/polyhorn/examples/blob/master/image-reqwest/src/lib.rs)
