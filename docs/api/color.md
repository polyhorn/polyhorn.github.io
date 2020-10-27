---
id: "color"
title: Color
sidebar_label: Color
---

import Status from "../../plugins/Status";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const Color = ({ hex, name }) => {
    return <div style={{
        border: "1px solid #f0f1f2",
        marginBottom: -1,
        padding: 4,
        display: "flex",
        alignItems: "center"
    }}>
        <div style={{
            backgroundColor: hex,
            flexShrink: 0,
            width: 64,
            height: 24,
            border: "1px solid rgba(0, 0, 0, 0.25)",
            borderRadius: 4,
            display: "inline-block",
            marginRight: 10
        }} />
        <div style={{
            backgroundColor: "var(--ifm-code-background)",
            borderRadius: "var(--ifm-code-border-radius)",
            color: "var(--ifm-code-color)",
            fontFamily: "var(--ifm-font-family-monospace)",
            fontSize: "var(--ifm-code-font-size)",
            margin: 0,
            wordBreak: "break-all",
            padding: "var(--ifm-code-padding-vertical) var(--ifm-code-padding-horizontal)"
        }}>{ name }</div>
    </div>;
};

<Status level={ 1 } path="polyhorn_ui/color/struct.Color.html" />

Polyhorn is _color managed_, which essentially means that we keep track of color
spaces when working with colors. This helps developers and designers using
Polyhorn to get a uniform color presentation regardless of the display that
their design is rendered to. We do this using the 3rd-party
[palette](https://crates.io/crates/palette) crate.

## Color Spaces

Different displays have different characteristics. For example, recent iPhones
have been able to show a shade of red that is more vivid than was previously
possible. On the other hand, older computer displays might not be able to
represent all colors very well.

In order to get a uniform color presentation, we work with color spaces. In a
nutshell, if the designer of your app selects one of the supported color
spaces in their visual editor (e.g. Figma or Sketch), then their colors will
look exactly the same on any other physical display that your Polyhorn app
runs on.

### sRGB

Standard RGB (sRGB) is the default color space on all platforms. When you
specify a color in our [style](/api/style/view-style/) macro using the
`hex(...)`, `rgb(...)`, `rgba(...)`, `hsl(...)` or `hsla(...)` functions,
your color is assumed to be in sRGB color space.

:::note Tip for Designers
It is recommended to use sRGB in your design stage to make sure that the
colors you see in your design application (Figma, Sketch, etc.) are identical
to the colors you will see when it is running on your phone or a different
screen.

<Tabs defaultValue="figma" values={[
    {label: 'Figma', value: 'figma'},
    {label: 'Sketch', value: 'sketch'},
]}>
    <TabItem value="figma">
        <h3>On macOS:</h3>
        <ol>
            <li>
                Open <strong>Figma.app</strong> and
                select <strong>Figma</strong> in the main menu bar (in the
                top left corner of your screen).
            </li>
            <li>
                Select <strong>Color Space</strong> and make
                sure <strong>sRGB</strong> is checked. Make sure
                that <strong>Unmanaged</strong> is unchecked.
            </li>
        </ol>
    </TabItem>
    <TabItem value="sketch">
        <h3>New documents:</h3>
        <ol>
            <li>
                Open <strong>Sketch.app</strong> and
                select <strong>Sketch</strong> in the main menu bar (in the
                top left corner of your screen).
            </li>
            <li>
                Select <strong>Preferences</strong> to open the preferences
                window.
            </li>
            <li>
                If necessary, go to the <strong>General</strong> tab.
            </li>
            <li>
                Next to <strong>Color Profile</strong>,
                select <strong>sRGB IEC61966-2.1</strong>.
            </li>
        </ol>
        <h3>Existing documents:</h3>
        <ol>
            <li>
                Open your document in <strong>Sketch.app</strong> and
                select <strong>File</strong> in the main menu bar (in the top
                left corner of your screen).
            </li>
            <li>
                Select <strong>Change Color Profile</strong>.
            </li>
            <li>
                Next to <strong>Color Profile</strong>,
                select <strong>sRGB IEC61966-2.1</strong>.
            </li>
            <li>
                Next to <strong>Change</strong>, make sure to
                select <strong>Convert</strong> to preserve the colors you have
                used.
            </li>
            <li>
                Confirm by clicking on <strong>Change Profile</strong>.
            </li>
        </ol>
    </TabItem>
</Tabs>
:::

#### Named Colors

The following colors are in sRGB color space and can be referred to by name.

```rust
<View style=!{
    background: lightsalmon;
} />
```

<div className="row">
<div className="col col--6">

<Color hex="#F0F8FF" name="aliceblue" />
<Color hex="#FAEBD7" name="antiquewhite" />
<Color hex="#00FFFF" name="aqua" />
<Color hex="#7FFFD4" name="aquamarine" />
<Color hex="#F0FFFF" name="azure" />

<Color hex="#F5F5DC" name="beige" />
<Color hex="#FFE4C4" name="bisque" />
<Color hex="#000000" name="black" />
<Color hex="#FFEBCD" name="blanchedalmond" />
<Color hex="#0000FF" name="blue" />
<Color hex="#8A2BE2" name="blueviolet" />
<Color hex="#A52A2A" name="brown" />
<Color hex="#DEB887" name="burlywood" />

<Color hex="#5F9EA0" name="cadetblue" />
<Color hex="#7FFF00" name="chartreuse" />
<Color hex="#D2691E" name="chocolate" />
<Color hex="#FF7F50" name="coral" />
<Color hex="#6495ED" name="cornflowerblue" />
<Color hex="#FFF8DC" name="cornsilk" />
<Color hex="#DC143C" name="crimson" />
<Color hex="#00FFFF" name="cyan" />

<Color hex="#00008B" name="darkblue" />
<Color hex="#008B8B" name="darkcyan" />
<Color hex="#B8860B" name="darkgoldenrod" />
<Color hex="#A9A9A9" name="darkgray" />
<Color hex="#006400" name="darkgreen" />
<Color hex="#A9A9A9" name="darkgrey" />
<Color hex="#BDB76B" name="darkkhaki" />
<Color hex="#8B008B" name="darkmagenta" />
<Color hex="#556B2F" name="darkolivegreen" />
<Color hex="#FF8C00" name="darkorange" />
<Color hex="#9932CC" name="darkorchid" />
<Color hex="#8B0000" name="darkred" />
<Color hex="#E9967A" name="darksalmon" />
<Color hex="#8FBC8F" name="darkseagreen" />
<Color hex="#483D8B" name="darkslateblue" />
<Color hex="#2F4F4F" name="darkslategray" />
<Color hex="#2F4F4F" name="darkslategrey" />
<Color hex="#00CED1" name="darkturquoise" />
<Color hex="#9400D3" name="darkviolet" />
<Color hex="#FF1493" name="deeppink" />
<Color hex="#00BFFF" name="deepskyblue" />
<Color hex="#696969" name="dimgray" />
<Color hex="#696969" name="dimgrey" />
<Color hex="#1E90FF" name="dodgerblue" />

<Color hex="#B22222" name="firebrick" />
<Color hex="#FFFAF0" name="floralwhite" />
<Color hex="#228B22" name="forestgreen" />
<Color hex="#FF00FF" name="fuchsia" />

<Color hex="#DCDCDC" name="gainsboro" />
<Color hex="#F8F8FF" name="ghostwhite" />
<Color hex="#FFD700" name="gold" />
<Color hex="#DAA520" name="goldenrod" />
<Color hex="#808080" name="gray" />
<Color hex="#008000" name="green" />
<Color hex="#ADFF2F" name="greenyellow" />
<Color hex="#808080" name="grey" />

<Color hex="#F0FFF0" name="honeydew" />
<Color hex="#FF69B4" name="hotpink" />

<Color hex="#CD5C5C" name="indianred" />
<Color hex="#4B0082" name="indigo" />
<Color hex="#FFFFF0" name="ivory" />

<Color hex="#F0E68C" name="khaki" />

<Color hex="#E6E6FA" name="lavender" />
<Color hex="#FFF0F5" name="lavenderblush" />
<Color hex="#7CFC00" name="lawngreen" />
<Color hex="#FFFACD" name="lemonchiffon" />
<Color hex="#ADD8E6" name="lightblue" />
<Color hex="#F08080" name="lightcoral" />
<Color hex="#E0FFFF" name="lightcyan" />
<Color hex="#FAFAD2" name="lightgoldenrodyellow" />
<Color hex="#D3D3D3" name="lightgray" />
<Color hex="#90EE90" name="lightgreen" />
<Color hex="#D3D3D3" name="lightgrey" />

</div>
<div className="col col--6">

<Color hex="#FFB6C1" name="lightpink" />
<Color hex="#FFA07A" name="lightsalmon" />
<Color hex="#20B2AA" name="lightseagreen" />
<Color hex="#87CEFA" name="lightskyblue" />
<Color hex="#778899" name="lightslategray" />
<Color hex="#778899" name="lightslategrey" />
<Color hex="#B0C4DE" name="lightsteelblue" />
<Color hex="#FFFFE0" name="lightyellow" />
<Color hex="#00FF00" name="lime" />
<Color hex="#32CD32" name="limegreen" />
<Color hex="#FAF0E6" name="linen" />

<Color hex="#FF00FF" name="magenta" />
<Color hex="#800000" name="maroon" />
<Color hex="#66CDAA" name="mediumaquamarine" />
<Color hex="#0000CD" name="mediumblue" />
<Color hex="#BA55D3" name="mediumorchid" />
<Color hex="#9370DB" name="mediumpurple" />
<Color hex="#3CB371" name="mediumseagreen" />
<Color hex="#7B68EE" name="mediumslateblue" />
<Color hex="#00FA9A" name="mediumspringgreen" />
<Color hex="#48D1CC" name="mediumturquoise" />
<Color hex="#C71585" name="mediumvioletred" />
<Color hex="#191970" name="midnightblue" />
<Color hex="#F5FFFA" name="mintcream" />
<Color hex="#FFE4E1" name="mistyrose" />
<Color hex="#FFE4B5" name="moccasin" />

<Color hex="#FFDEAD" name="navajowhite" />
<Color hex="#000080" name="navy" />

<Color hex="#FDF5E6" name="oldlace" />
<Color hex="#808000" name="olive" />
<Color hex="#6B8E23" name="olivedrab" />
<Color hex="#FFA500" name="orange" />
<Color hex="#FF4500" name="orangered" />
<Color hex="#DA70D6" name="orchid" />

<Color hex="#EEE8AA" name="palegoldenrod" />
<Color hex="#98FB98" name="palegreen" />
<Color hex="#AFEEEE" name="paleturquoise" />
<Color hex="#DB7093" name="palevioletred" />
<Color hex="#FFEFD5" name="papayawhip" />
<Color hex="#FFDAB9" name="peachpuff" />
<Color hex="#CD853F" name="peru" />
<Color hex="#FFC0CB" name="pink" />
<Color hex="#DDA0DD" name="plum" />
<Color hex="#B0E0E6" name="powderblue" />
<Color hex="#800080" name="purple" />

<Color hex="#663399" name="rebeccapurple" />
<Color hex="#FF0000" name="red" />
<Color hex="#BC8F8F" name="rosybrown" />
<Color hex="#4169E1" name="royalblue" />

<Color hex="#8B4513" name="saddlebrown" />
<Color hex="#FA8072" name="salmon" />
<Color hex="#F4A460" name="sandybrown" />
<Color hex="#2E8B57" name="seagreen" />
<Color hex="#FFF5EE" name="seashell" />
<Color hex="#A0522D" name="sienna" />
<Color hex="#C0C0C0" name="silver" />
<Color hex="#87CEEB" name="skyblue" />
<Color hex="#6A5ACD" name="slateblue" />
<Color hex="#708090" name="slategray" />
<Color hex="#708090" name="slategrey" />
<Color hex="#FFFAFA" name="snow" />
<Color hex="#00FF7F" name="springgreen" />
<Color hex="#4682B4" name="steelblue" />
<Color hex="#D2B48C" name="tan" />
<Color hex="#008080" name="teal" />
<Color hex="#D8BFD8" name="thistle" />
<Color hex="#FF6347" name="tomato" />
<Color hex="#40E0D0" name="turquoise" />
<Color hex="#EE82EE" name="violet" />
<Color hex="#F5DEB3" name="wheat" />
<Color hex="#FFFFFF" name="white" />
<Color hex="#F5F5F5" name="whitesmoke" />
<Color hex="#FFFF00" name="yellow" />
<Color hex="#9ACD32" name="yellowgreen" />

</div>
</div>

### Display-P3

Display-P3 is an RGB-based color space used by Apple on iOS devices.
Display-P3 uses the same transfer function as sRGB, but uses a different set
of primaries. What it means practically, is that colors in this color space can
be more vivid than in sRGB. For example: the most vivid red in Display-P3 is
much more vivid than in sRGB.

```rust
<View style=!{
    background: color(display_p3, 1.0, 0.0, 0.0, 1.0);
} />
```

If you choose to specify colors in Display-P3 color space, but the user has an
incompatible display, Polyhorn automatically converts those colors to sRGB and
applies clamping if necessary. For vivid colors in Display-P3 that do not
exist in sRGB (and cannot be shown on the user's display), this means that we
choose a color that is less vivid but resembles the original color as closely
as possible.

## Light Linearity

_This section is a short summary of
[What Every Coder Should Know About Gamma](https://blog.johnnovak.net/2016/09/21/what-every-coder-should-know-about-gamma/).
This article is definitely worth reading if you want to know more about the
technical implementation of colors._

There are a few more subtleties that we need to address when it comes to
blending colors.

### Color Blending

When you mix two colors together using one of the Polyhorn Color APIs, we
automatically convert your color to linear light before applying the
operation, and convert back to non-linear light afterwards.

<div className="row">
    <div className="col col--6">
        <img src="/img/color-blending-srgb.png" />
    </div>
    <div className="col col--6">
        <img src="/img/color-blending-linear-srgb.png" />
    </div>
</div>

Left shows the result of naively averaging over each channel in sRGB space.
Because the sRGB space is non-linear with respect to lightness, the shade of
the purple intersection is much darker than it should be. On the right, the
result of applying gamma correction to the blending operation: the purple
intersection has the same light intensity as the average of the blue and red
sections. (You can verify this by using the built-in __Digital Color Meter__ on
macOS and switching to __L\*a*b\*__ where __L\*__ is lightness).

<div className="row">
    <div className="col col--6">
        <img src="/img/color-blending-srgb-grayscale.png" />
    </div>
    <div className="col col--6">
        <img src="/img/color-blending-linear-srgb-grayscale.png" />
    </div>
</div>

The problem becomes even more apparent when we convert the colors to grayscale.

:::note Tip for Designers

Unfortunately, most design software doesn't support gamma-correct blending.
If you use color blending in your design documents, it probably looks like the
gamma-incorrect examples on the left.

:::

### Compositing

For alpha blending, we're at the mercy of the target platform's display
compositor. On Apple's OSes, this is
[Quartz Compositor](https://en.wikipedia.org/wiki/Quartz_Compositor).

Unfortunately, most OSes do not support gamma-correct blending.

For that reason, we strongly disrecommend using translucent colors. Instead,
try to pre-compute the color you want by blending them at compile-time. Here
is an example of how to convert existing code to pre-computed code:

```diff
  <View style=!{
      background: red;
  }>
      <Text style=!{
-         color: rgba(black, 50%);
+         color: mix(black, red, 50%);
      }>
          "Hello World!"
      </Text>
  </View>
```

Additionally, for large surface areas, specifying an opaque color instead of
translucent colors will result in drastically improved performance of your app
due to the fact that the renderer can skip rendering views that are behind the
opaque background.

## Images

We currently do not yet make guarantees about the color precision of images you
show in your app (this includes both pictures and icons).

## Related Work

- This API is modelled after the
  [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/) working draft.
- This is by far one of the best overviews of gamma-correction, (non)linear light and more: [What Every Coder Should Know About Gamma](https://blog.johnnovak.net/2016/09/21/what-every-coder-should-know-about-gamma/).
