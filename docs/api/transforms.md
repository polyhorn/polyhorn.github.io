---
id: "transforms"
title: Transforms
sidebar_label: Transforms
---

import Status from "../../plugins/Status";

<Status level={ 0 } path="polyhorn_ui/linalg/struct.Transform3D.html" />

## Functions

### Translation

### Rotation

### Scale

### Skew

### Perspective

## Squashing

## Decomposition

## Interpolation

## Recomposition

## Animation

When animating the transform property, we recommend decomposing the origin
and target transformation matrix using the aforementioned algorithm. Then, we
setup a curve for each of the decomposed properties individually: translation,
rotation, scale, skew, perspective. This also allows you to use a different
timing function for different properties of the transform.

If you use [Yoyo](/plugins/yoyo/) 🪀, this is done automatically for you!

### Velocity
