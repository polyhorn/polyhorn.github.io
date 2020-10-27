---
id: "editors"
title: Editors
sidebar_label: Editors
---

This guide will help you set up your editor to write apps that run on a
different platform. This requires a bit more work because in the traditional
workflow, you write programs on the same platform that runs them (PC), whereas
now, you're writing apps that run on a mobile device (or a simulator).

## Visual Studio Code

If you're using VS Code with rust-analyzer (which we recommend), make sure to
correctly configure the target. If you're targeting iOS, use the
`x86_64-apple-ios` target (or any other `*-apple-ios` target).

```json title=".vscode/settings.json"
{
    "rust-analyzer.cargo.target": "x86_64-apple-ios"
}
```

If you're targeting both iOS and Android, you can choose either target. If
you're writing platform-specific code, you can also switch between targets.
