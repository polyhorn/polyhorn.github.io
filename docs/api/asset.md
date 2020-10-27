---
id: "asset"
title: Asset
sidebar_label: Asset
---

import Status from "../../plugins/Status";

<Status level={ 0 } path="polyhorn_ui/assets/trait.Asset.html" />

Most apps contain assets: icons, pictures, fonts, etc. In Polyhorn projects,
these assets should be stored in the `assets/` folder.

## Inference

Whenever you invoke the `asset!(...)` macro with the name of an asset
(excluding its extension), Polyhorn will automatically infers the type of the
asset based on its original suffix (see table). Note that, as a consequence,
assets must be unique regardless of their suffix / extension.

| Suffix  | Type   |
|:--------|:-------|
| `*.png` | [Images](#images) |
| `*.svg` | [Images](#images) |
| `*.ttf` | [Fonts](#fonts) |

### Accepted Characters

Assets may contain lowercase letters and dashes only.

### Namespacing

The macro will automatically recognize and distinguish the calling package.
Specifically: different packages are allowed to have assets with an identical
name. Conversely, packages cannot access assets that originate from a
different package. If you want to know the name of the package that an asset
originated from, you can use the `package()` function of the `Asset` trait.

Polyhorn does not accept aliasing dependencies with assets, as it would
results in undefined behavior if the original name clashes with another
dependency's name.

## Images

When you add image assets to the `assets/` folder of your Polyhorn project, we
will automatically convert your images to improve their appearance on different
devices and (if necessary) transcode them to the format of preference on a
particular platform.

Images must be in either scalable vector graphics (SVG) or portable network
graphics (PNG) format. Other formats are not supported.

```rust
<Image source=asset!("back-icon") />
```

### Multi-DPI Assets

If you want your app to look perfect on every possible display, you have to
consider different DPIs too. Dots Per Inch (DPI) refers to the density of
LEDs on a display. Higher DPIs mean that there are more LEDs on the same
surface area, which in turn means that assets can look sharper, provided that
a few basic guidelines are followed.

If you want your icons to look good on both low-DPI and high-DPI with minimal
effort, we recommend saving your assets as scalable vector graphics (SVG). This
is the easiest way to get good results. You save a single SVG that serves as the
base from which we derive multiple higher (and lower) DPI versions.

If you want to maintain control over this scaling procedure, you can manually
export your icons with DPI suffices. Specifically:

1. If your asset is named `icon.svg`, we automatically convert it to PNGs for
   all DPIs we need. The source SVG will not be present in the resulting app
   bundle.
2. If your asset is named `icon.png`, we will not generate multi-DPI versions.
   Instead, the icons will be resized at runtime. This will most likely result
   in [pixelation](https://en.wikipedia.org/wiki/Pixelation) and is generally
   not appreciated. _This is not recommended._
3. If your asset is named `icon@___.png`, we will automatically generate
   multi-DPI versions for all DPIs that are lower than the file's suffix
   indicates.

| Suffix  | Scale | DPI       | | Suffix     | Scale | DPI  |
|:--------|:------|:----------|-|:-----------|:------|:-----|
| _Apple_ |       |           | | _Android_  |       |      |
|         |       |           | | `@ldpi`    | 0.75x | ~120 |
| `@1x`   | 1.0x  | 132 / 163 | | `@mdpi`    | 1.0x  | ~160 |
|         |       |           | | `@hdpi`    | 1.5x  | ~240 |
| `@2x`   | 2.0x  | 264 / 326 | | `@xhdpi`   | 2.0x  | ~320 |
| `@3x`   | 3.0x  | 401 / 458 | | `@xxhdpi`  | 3.0x  | ~480 |
|         |       |           | | `@xxxhdpi` | 4.0x  | ~640 |

### App Icons and Artwork

:::note Tip for Designers

__Do not__ apply rounded corners to your icons.

:::

### Queries

Image assets implement the
[ImageQuery](https://docs.rs/polyhorn-ui/*/polyhorn_ui/queries/trait.ImageQuery.html)
trait, so you can easily retrieve the width, height and color space (and some
more characteristics) at compile-time. _(Note: although this information is
known at compile-time, constant functions in Rust traits have not yet landed
in stable and therefore, this information cannot yet be queried from within
constant functions.)_

## Fonts

### Queries

Font assets implement the
[FontQuery](https://docs.rs/polyhorn-ui/*/polyhorn_ui/queries/trait.FontQuery.html)
trait, and as such you can easily retrieve the name, style, weight etc. of a
font.
