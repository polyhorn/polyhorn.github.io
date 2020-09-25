---
id: "overview"
title: Overview
sidebar_label: Overview
slug: /
---

| Name | Description |
|:-----|:------------|
| [Color](/api/color/) | Point in a color space. |
| [Font](/api/font/) | Typesetting information. |
| [ImageSource](/api/image-source/) | Virtual image data. |
| [Style](/api/style/) | Specification of the layout and appearance of an element. |

## Roadmap

:::info
We're still missing some essential APIs. Please join our
[Github](https://github.com/polyhorn/polyhorn) to share your thoughts.

1. Obtaining push tokens to facilitate push notifications.
2. Imperative keyboard API to dismiss an open keyboard.
3. Registering for changes of the current user interface appearance (e.g.
   light or dark mode).

Additionally, there is some room for other improvements too:

1. We're currently exporting all potentially useful types from the crate root
   and advising developers to add `use polyhorn::*;` to the top of their files.
   It might be a good idea to narrow down the list of necessary types and put
   them in `use polyhorn::prelude::*;`. All other types can then be accessed
   through submodules of the root.
:::