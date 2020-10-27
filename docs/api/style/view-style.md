---
id: "view-style"
title: ViewStyle
sidebar_label: ViewStyle
---

import Status from "../../../plugins/Status";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Status level={ 1 } path="polyhorn_ui/styles/struct.ViewStyle.html" />

## Positioned Layout

### Relatively Positioned Layout

```css
position: relative;

flex-basis: <length> | <percentage> | auto;
flex-grow: <number>;
flex-shrink: <number>;
```

### Absolutely Positioned Layout

```css
position: absolute;

top:    <length> | <percentage> | auto;
right:  <length> | <percentage> | auto;
bottom: <length> | <percentage> | auto;
left:   <length> | <percentage> | auto;
```

## Box Model

Polyhorn uses the border box sizing behavior. This is different from regular
CSS, where the default is content box. In content box sizing, the width and
height of an element do not include the padding and border widths. In border box
sizing, the width and height of an element do include the padding and border
widths, even if either of those are percentages.

<div className="row">
    <div className="col col--6">
        <img src="/img/view-style-box-model-content-box.png" />
    </div>
    <div className="col col--6">
        <img src="/img/view-style-box-model-border-box.png" />
    </div>
</div>

### Padding

```css
padding: [ <length> | <percentage> ] (1..4);
```

### Margin

```css
margin: [ <length> | <percentage> ] (1..4);
```

### Size

The intrinsic size of an element can be set using:

```css
width:  <length> | <percentage> | auto;
height: <length> | <percentage> | auto;
```

The minimum width and height can be set using:

```css
min-width:  <length> | <percentage> | auto;
min-height: <length> | <percentage> | auto;
```

The maximum width and height can be set using:

```css
max-width:  <length> | <percentage> | auto;
max-height: <length> | <percentage> | auto;
```

### Overflow

This property controls what happens when the content of a view overflows its
bounds.

```css
overflow: visible | hidden;
```

When the overflow property is set to hidden, the view clips all of its contents.
However, combining overflow set to hidden with a non-zero border radius
currently leads to undefined behavior.

<div className="row">
    <div className="col col--6">
        <h4>Visible</h4>
        <img src="/img/view-style-overflow-visible.png" />
    </div>
    <div className="col col--6">
        <h4>Hidden</h4>
        <img src="/img/view-style-overflow-hidden.png" />
    </div>
</div>

There is another (almost) undocumented `scroll` value that is used by
[Scrollable](/components/scrollable/) internally. Setting overflow to `scroll`
doesn't actually render a scroll view. This simply signals to the layout
engine that the view is scrollable for bookkeeping purposes.

### Visibility

The visibility of a view can be controlled with by either setting it to
`visible` (the default) or `hidden`.

```css
visibility: visible | hidden;
```
An important aspect of the visibility property is the fact that it does not
affect the layout calculation of its super view. Specifically, the size that a
view consumes will still be allocated regardless of whether the view is actually
visible.

<div className="row">
    <div className="col col--6">
        <h4>Visible</h4>
        <img src="/img/view-style-visibility-visible.png" />
    </div>
    <div className="col col--6">
        <h4>Hidden</h4>
        <img src="/img/view-style-visibility-hidden.png" />
    </div>
</div>

On the other hand, setting visibility to hidden often gives better performance
than setting opacity to zero because the display compositor can immediately
skip views that are hidden whereas most platforms don't optimize the case where
opacity is zero. Another difference is that pointer events are not fired for
views that are hidden, whereas they are for views with zero opacity.

## Flexible Box Layout

### Flex Direction

This property controls in which direction content is layed out.

```css
flex-direction: column | column-reverse |
                row    | row-reverse;
```

By default, Polyhorn lays out content in a vertical direction: either column for
a top-to-bottom layout or column-reverse for a bottom-to-top layout.

<div className="row">
    <div className="col col--6">
        <h4>Column</h4>
        <img src="/img/view-style-flex-direction-column.png" />
    </div>
    <div className="col col--6">
        <h4>Column Reverse</h4>
        <img src="/img/view-style-flex-direction-column-reverse.png" />
    </div>
</div>

Alternatively, Polyhorn can also lay out content in a horizontal direction:
either row for a left-to-right layout or row-reverse for a right-to-left layout.

<div className="row">
    <div className="col col--6">
        <h4>Row</h4>
        <img src="/img/view-style-flex-direction-row.png" />
    </div>
    <div className="col col--6">
        <h4>Row Reverse</h4>
        <img src="/img/view-style-flex-direction-row-reverse.png" />
    </div>
</div>

Keep in mind that setting `direction: rtl` will effectively flip the meaning of
row and row-reverse respectively.

### Align Items

This property controls the alignment of items within a flex box.

```css
align-items: flex-start | center | flex-end | stretch;
```

The exact behavior of this property depends on the chosen `flex-direction`.
Select one of the supported directions below to view the behavior of this
property for each value.

<Tabs groupId="flex-direction" defaultValue="column" values={[
    {label: 'Column', value: 'column'},
    {label: 'Column Reverse', value: 'column-reverse'},
    {label: 'Row', value: 'row'},
    {label: 'Row Reverse', value: 'row-reverse'},
]}>
    <TabItem value="column">
        <p>
            The first three options are very similar to the text-align property.
        </p>
        <div className="row">
            <div className="col col--6">
                <h4>Flex Start</h4>
                <img src="/img/view-style-align-items-column-flex-start.png" />
            </div>
            <div className="col col--6">
                <h4>Flex End</h4>
                <img src="/img/view-style-align-items-column-flex-end.png" />
            </div>
        </div>
        <p>
            When set to stretch, the items of a flex box are stretched to fill
            the entire width of their container.
        </p>
        <div className="row">
            <div className="col col--6">
                <h4>Center</h4>
                <img src="/img/view-style-align-items-column-center.png" />
            </div>
            <div className="col col--6">
                <h4>Stretch</h4>
                <img src="/img/view-style-align-items-column-stretch.png" />
            </div>
        </div>
    </TabItem>
    <TabItem value="column-reverse">
        <p>
            The first three options are very similar to the text-align property.
        </p>
        <div className="row">
            <div className="col col--6">
                <h4>Flex Start</h4>
                <img src="/img/view-style-align-items-column-reverse-flex-start.png" />
            </div>
            <div className="col col--6">
                <h4>Flex End</h4>
                <img src="/img/view-style-align-items-column-reverse-flex-end.png" />
            </div>
        </div>
        <p>
            When set to stretch, the items of a flex box are stretched to fill
            the entire width of their container.
        </p>
        <div className="row">
            <div className="col col--6">
                <h4>Center</h4>
                <img src="/img/view-style-align-items-column-reverse-center.png" />
            </div>
            <div className="col col--6">
                <h4>Stretch</h4>
                <img src="/img/view-style-align-items-column-reverse-stretch.png" />
            </div>
        </div>
    </TabItem>
    <TabItem value="row">
        <p>
            The first three options are very similar to the text-align property.
        </p>
        <div className="row">
            <div className="col col--6">
                <h4>Flex Start</h4>
                <img src="/img/view-style-align-items-row-flex-start.png" />
            </div>
            <div className="col col--6">
                <h4>Flex End</h4>
                <img src="/img/view-style-align-items-row-flex-end.png" />
            </div>
        </div>
        <p>
            When set to stretch, the items of a flex box are stretched to fill
            the entire width of their container.
        </p>
        <div className="row">
            <div className="col col--6">
                <h4>Center</h4>
                <img src="/img/view-style-align-items-row-center.png" />
            </div>
            <div className="col col--6">
                <h4>Stretch</h4>
                <img src="/img/view-style-align-items-row-stretch.png" />
            </div>
        </div>
    </TabItem>
    <TabItem value="row-reverse">
        <p>
            The first three options are very similar to the text-align property.
        </p>
        <div className="row">
            <div className="col col--6">
                <h4>Flex Start</h4>
                <img src="/img/view-style-align-items-row-reverse-flex-start.png" />
            </div>
            <div className="col col--6">
                <h4>Flex End</h4>
                <img src="/img/view-style-align-items-row-reverse-flex-end.png" />
            </div>
        </div>
        <p>
            When set to stretch, the items of a flex box are stretched to fill
            the entire width of their container.
        </p>
        <div className="row">
            <div className="col col--6">
                <h4>Center</h4>
                <img src="/img/view-style-align-items-row-reverse-center.png" />
            </div>
            <div className="col col--6">
                <h4>Stretch</h4>
                <img src="/img/view-style-align-items-row-reverse-stretch.png" />
            </div>
        </div>
    </TabItem>
</Tabs>

Keep in mind that the meaning of flex-start and flex-end depends on the
current layout direction. Specifically, their meaning is flipped when
`direction: rtl`.

### Justify Content

This property controls how content is justified within a flex box.

```css
justify-content: flex-start | center | flex-end |
                 space-between | space-around | space-evenly;
```

The exact behavior of this property depends on the chosen `flex-direction`.
Select one of the supported directions below to view the behavior of this
property for each value.

<Tabs groupId="flex-direction" defaultValue="column" values={[
    {label: 'Column', value: 'column'},
    {label: 'Column Reverse', value: 'column-reverse'},
    {label: 'Row', value: 'row'},
    {label: 'Row Reverse', value: 'row-reverse'},
]}>
    <TabItem value="column">
        <p>
            The first three options are very similar to the text-align property.
        </p>
        <div className="row">
            <div className="col col--4">
                <h4>Flex Start</h4>
                <img src="/img/view-style-justify-content-column-flex-start.png" />
            </div>
            <div className="col col--4">
                <h4>Center</h4>
                <img src="/img/view-style-justify-content-column-center.png" />
            </div>
            <div className="col col--4">
                <h4>Flex End</h4>
                <img src="/img/view-style-justify-content-column-flex-end.png" />
            </div>
        </div>
        <p>
            When set to stretch, the content of a flex box is stretched to fill
            the entire space of their container. When set to space between, the
            remaining space in a container is concentrated in the center of the
            container. When set to space around, the remaining space is divided
            evenly between the items and half of it is added to both sides of
            the container.
        </p>
        <div className="row">
            <div className="col col--4">
                <h4>Space Between</h4>
                <img src="/img/view-style-justify-content-column-space-between.png" />
            </div>
            <div className="col col--4">
                <h4>Space Around</h4>
                <img src="/img/view-style-justify-content-column-space-around.png" />
            </div>
            <div className="col col--4">
                <h4>Space Evenly</h4>
                <img src="/img/view-style-justify-content-column-space-evenly.png" />
            </div>
        </div>
    </TabItem>
    <TabItem value="column-reverse">
        <p>
            The first three options are very similar to the text-align property.
        </p>
        <div className="row">
            <div className="col col--4">
                <h4>Flex Start</h4>
                <img src="/img/view-style-justify-content-column-reverse-flex-start.png" />
            </div>
            <div className="col col--4">
                <h4>Center</h4>
                <img src="/img/view-style-justify-content-column-reverse-center.png" />
            </div>
            <div className="col col--4">
                <h4>Flex End</h4>
                <img src="/img/view-style-justify-content-column-reverse-flex-end.png" />
            </div>
        </div>
        <p>
            When set to stretch, the content of a flex box is stretched to fill
            the entire space of their container. When set to space between, the
            remaining space in a container is concentrated in the center of the
            container. When set to space around, the remaining space is divided
            evenly between the items and half of it is added to both sides of
            the container.
        </p>
        <div className="row">
            <div className="col col--4">
                <h4>Space Between</h4>
                <img src="/img/view-style-justify-content-column-reverse-space-between.png" />
            </div>
            <div className="col col--4">
                <h4>Space Around</h4>
                <img src="/img/view-style-justify-content-column-reverse-space-around.png" />
            </div>
            <div className="col col--4">
                <h4>Space Evenly</h4>
                <img src="/img/view-style-justify-content-column-reverse-space-evenly.png" />
            </div>
        </div>
    </TabItem>
    <TabItem value="row">
        <p>
            The first three options are very similar to the text-align property.
        </p>
        <div className="row">
            <div className="col col--4">
                <h4>Flex Start</h4>
                <img src="/img/view-style-justify-content-row-flex-start.png" />
            </div>
            <div className="col col--4">
                <h4>Center</h4>
                <img src="/img/view-style-justify-content-row-center.png" />
            </div>
            <div className="col col--4">
                <h4>Flex End</h4>
                <img src="/img/view-style-justify-content-row-flex-end.png" />
            </div>
        </div>
        <p>
            When set to stretch, the content of a flex box is stretched to fill
            the entire space of their container. When set to space between, the
            remaining space in a container is concentrated in the center of the
            container. When set to space around, the remaining space is divided
            evenly between the items and half of it is added to both sides of
            the container.
        </p>
        <div className="row">
            <div className="col col--4">
                <h4>Space Between</h4>
                <img src="/img/view-style-justify-content-row-space-between.png" />
            </div>
            <div className="col col--4">
                <h4>Space Around</h4>
                <img src="/img/view-style-justify-content-row-space-around.png" />
            </div>
            <div className="col col--4">
                <h4>Space Evenly</h4>
                <img src="/img/view-style-justify-content-row-space-evenly.png" />
            </div>
        </div>
    </TabItem>
    <TabItem value="row-reverse">
        <p>
            The first three options are very similar to the text-align property.
        </p>
        <div className="row">
            <div className="col col--4">
                <h4>Flex Start</h4>
                <img src="/img/view-style-justify-content-row-reverse-flex-start.png" />
            </div>
            <div className="col col--4">
                <h4>Center</h4>
                <img src="/img/view-style-justify-content-row-reverse-center.png" />
            </div>
            <div className="col col--4">
                <h4>Flex End</h4>
                <img src="/img/view-style-justify-content-row-reverse-flex-end.png" />
            </div>
        </div>
        <p>
            When set to stretch, the content of a flex box is stretched to fill
            the entire space of their container. When set to space between, the
            remaining space in a container is concentrated in the center of the
            container. When set to space around, the remaining space is divided
            evenly between the items and half of it is added to both sides of
            the container.
        </p>
        <div className="row">
            <div className="col col--4">
                <h4>Space Between</h4>
                <img src="/img/view-style-justify-content-row-reverse-space-between.png" />
            </div>
            <div className="col col--4">
                <h4>Space Around</h4>
                <img src="/img/view-style-justify-content-row-reverse-space-around.png" />
            </div>
            <div className="col col--4">
                <h4>Space Evenly</h4>
                <img src="/img/view-style-justify-content-row-reverse-space-evenly.png" />
            </div>
        </div>
    </TabItem>
</Tabs>

Keep in mind that the meaning of flex-start and flex-end depends on the
current layout direction. Specifically, their meaning is flipped when
`direction: rtl`.

## Writing Modes

### Direction

```css
direction: inherited | ltr | rtl;
```

## Backgrounds and Borders

### Background Color

```css
background-color: <color>;
```

### Border

You can add a border to a view by using a non-width border-width.

```css
border: <length-percentage> <border-style> <color>;
where
    <border-style>: solid | dotted | dashed;
```

Polyhorn currently supports three different border styles.

<div className="row">
    <div className="col col--4">
        <h4>Solid</h4>
        <img src="/img/view-style-border-style-solid.png" />
    </div>
    <div className="col col--4">
        <h4>Dotted</h4>
        <img src="/img/view-style-border-style-dotted.png" />
    </div>
    <div className="col col--4">
        <h4>Dashed</h4>
        <img src="/img/view-style-border-style-dashed.png" />
    </div>
</div>

The dash width and gap of the dashed border style is currently not configurable
and platform-dependent.

### Border Radius

In order to get rounded corners, use a non-zero border radius.

```css
border-radius: <length-percentage> (1..4)
           [ / <length-percentage> (1..4) ]?;
```

It's important to note that the border-radius is calculated with respect to the
outside of the border. For example, if the border-width is 3px, and the
border-radius is 4px, the outside of the border will be a circle with 4px
radius and the inside of the border will be a circle of 1px radius.

<div className="row">
    <div className="col col--6">
        <img src="/img/view-style-border-radius.png" />
    </div>
    <div className="col col--6">
        <img src="/img/view-style-border-radius-asymmetrical.png" />
    </div>
</div>

It's also possible to specify a border-radius in each direction independently
by separating the values with a slash. All values before the slash apply to the
horizontal direction, and all values after the slash apply to the vertical
direction. For example, the corner above (right) would be `6px / 3px`.

## Opacity

```css
opacity: <number>;
```

## Transform

```css
transform: none | ( <transform> [ <transform> ]* )
```
