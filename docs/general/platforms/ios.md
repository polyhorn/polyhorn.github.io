---
id: "ios"
title: iOS
sidebar_label: iOS
---

## Development

Make sure you have [Xcode](https://developer.apple.com/xcode/) installed.

### Running on iOS Simulator

If you want to run your new app on the iOS Simulator, you don't need an Apple ID.

### Running on an iOS Device

If you want to run your app on your own iOS device, you need to create a free
[Apple developer account](https://developer.apple.com/).

:::warning Unimplemented
Running on an iOS device is not yet automated.
:::

## Distribution

## Device Support

Rust has [demoted 32-bit support](https://blog.rust-lang.org/2020/01/03/reducing-support-for-32-bit-apple-targets.html) in v. 1.42.0.
As such, Polyhorn is only supported on 64-bit iOS devices. The table below lists
all devices that support every component and dependency of Polyhorn.

| Name                | Min. OS | Max. OS        | Market Share[^3] |
|:--------------------|:-------:|:--------------:|:----------------:|
| iPhone 2G to 5      | -       | -              | n.a.             |
| iPhone 5s           | iOS 8.0 | iOS 12.4.8[^2] | 1.27%            |
| iPhone 6 (Plus)     | *       | iOS 12.4.8[^2] | 4.16%            |
| iPhone 6s (Plus)    | *       | *              | 4.88%            |
| iPhone SE 1         | *       | *              | 2.33%            |
| iPhone 7 (Plus)     | *       | *              | 8.39%            |
| iPhone 8 (Plus)     | *       | *              | 5.70%            |
| iPhone X            | *       | *              | 3.43%            |
| iPhone XR           | *       | *              | 0.66%            |
| iPhone XS (Max)     | *       | *              | 1.84%            |
| iPhone 11           | *       | *              | n.a.             |
| iPhone 11 Pro (Max) | *       | *              | n.a.             |
| iPhone SE 2         | *       | *              | n.a.             |
|                     |         |                | 32.66%[^1]       |

[^2]: Last iOS version provided by Apple.

[^1]: Percentages are relative to all phones (incl. Android).

[^3]: Data provided by [DeviceAtlas](https://deviceatlas.com/blog/most-popular-iphones).