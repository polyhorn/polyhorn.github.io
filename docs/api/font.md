---
id: "font"
title: Font
sidebar_label: Font
---

import Status from "../../plugins/Status";

<Status level={ 0 } path="polyhorn-ui/struct.Font.html" />

Fonts, like colors, are more complicated than it might seem at first glance.

## Font Families

### Generic Font Families

Polyhorn provides a few generic font families that can be used to get a font
in a particular category that looks best on a user's display.

<div className="row">
    <div className="col col--4">
        <h4>Serif</h4>
        <img src="/img/fonts-serif.png" />
    </div>
    <div className="col col--4">
        <h4>Sans-Serif</h4>
        <img src="/img/fonts-sans-serif.png" />
    </div>
    <div className="col col--4">
        <h4>Monospace</h4>
        <img src="/img/fonts-monospace.png" />
    </div>
</div>

### Organization

A single font family (e.g. _Proxima Nova_) consists of a matrix of font styles
and font weights. Each entry in this matrix is a type face and is stored in its
own file.

|         | Normal | Italic | ... |
|:--------|:-------|:-------|:----|
| __Regular__ | `*-regular.otf` | `*-italic.otf` | ... |
| __Bold__ | `*-bold.otf` | `*-italic-bold.otf` | ... |
| __...__ | ... | ... | ... |

It's important to note that a font file only contains a single type face (i.e.
a single combination of a font style and a font weight). If you want to use both
normal and italic, or regular and bold text in your app, you must make sure to
bundle all required variations.

## Font Styles

Most fonts come in one to three styles: a normal style and one or two slanted
styles. Below is an example of the difference between normal, oblique and
italic font styles of [Victor Mono](https://rubjo.github.io/victor-mono/), an
open-source monospace font.

<div className="row">
    <div className="col col--4">
        <h4>Normal</h4>
        <img src="/img/fonts-normal.png" />
    </div>
    <div className="col col--4">
        <h4>Oblique</h4>
        <img src="/img/fonts-oblique.png" />
    </div>
    <div className="col col--4">
        <h4>Italic</h4>
        <img src="/img/fonts-italic.png" />
    </div>
</div>

The __normal__ font style is the default font style used for text. The
__oblique__ font style (if present) is a slanted version with the same glyphs.
Specifically, notice that the r, s and f are the same glyph in both the normal
and oblique font styles (but with a different angle). An __italic__ font style
is made from a separate set of glyphs: observe that the r, s and f are
completely different glyphs than those in the normal font style.

Most fonts do not offer both an oblique and italic font styles. Oblique fonts
are an inexpensive way to get a slanted version of a normal font, whereas italic
fonts might cost as much time as the original font to make.

## Related Work

- This API is modelled after the
  [CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4/) working draft.
