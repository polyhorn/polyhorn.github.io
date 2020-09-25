---
id: "animated-presence"
title: AnimatedPresence
sidebar_label: AnimatedPresence
hide_title: true
---

<span className="badge badge--danger">Unstable</span>

<h1 style={{ marginTop: 0 }}>AnimatedPresence</h1>

:::note
If you're familiar with [Framer Motion](https://framer.com/motion/), you'll know
that is a child element is removed from AnimatedPresence and added again before
it finishes unmounting, the underlying component will be reused (i.e. the
unmounting is cancelled).

In our experience, this can easily lead to bugs that are hard to debug. Instead,
we guarantee that once the AnimatedPresence component starts unmounting a
component, it will never cancel or remount that element.
:::