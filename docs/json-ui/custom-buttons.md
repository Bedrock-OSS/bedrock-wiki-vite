---
title: Creating Custom Toggles
category: Tutorials
tags:
    - beginner
mentions:
    - TheoristMC
description: In this tutorial, you will learn how toggles works.
---

## Overview

:::warning
This page is for people that have a basic understanding of JSON-UI, you may check the [JSON UI Documentation](/json-ui/json-ui-documentation) if you haven't.
:::

Creating custom buttons is a frequently asked question regarding JSON-UI. This guide provides an explanation of their functionality and the steps required to create them.

Currently, two types of buttons are available: toggles and standard buttons. Although toggles are distinct, they operate similarly to buttons and are more customizable, making them the focus of this guide.

## Toggles

<CodeHeader>*/ui/your_file.json</CodeHeader>
```json
{
  "toggle_template": {
    "type": "toggle",

    "$toggle_name|default": "Tutorial",
    "$toggle_default_state|default": false,

    "toggle_name": "$toggle_name", // Adviseable to make toggle name's be different on each toggles
    "toggle_default_state": "$toggle_default_state" // Is boolean, the default state of toggle

    "sound_name": "random.click", // Sound when a toggle is clicked
    "sound_volume": 1.0 // Sound volume
    "sound_pitch": 1.0 // Sound pitch

    "checked_control": "@namespace.img_element", // When toggle is checked
    "unchecked_control": "@namespace.img_element", // When toggle is unchecked
    "checked_hover_control": "@namespace.img_element", // When toggle is checked and hovered
    "unchecked_hover_control": "@namespace.img_element", // When toggle is unchecked and hovered
    "checked_locked_control": "@namespace.img_element", // When toggle is checked and locked
    "unchecked_locked_control": "@namespace.img_element", // When toggle is unchecked and locked
    "checked_locked_hover_control": "@namespace.img_element", // When a locked and checked toggle is hovered
    "unchecked_locked_hover_control": "@namespace.img_element", // When a locked and unchecked is hovered

    "$use_grouped_toggle|default": false,
    "$toggle_group_index|default": 0,

    "radio_toggle_group": "$use_grouped_toggle" // Is boolean, when used will allow grouped toggles on which case only one toggle can be toggled
    "toggle_group_forced_index": "$toggle_group_index" // It's indices of each toggle that differentiates one to the other

    // Button mapping to do something when the toggle is clicked
    // It can also be used for keybinding
    "button_mappings": [
      {
        "from_button_id": "button.menu_select",
        "to_button_id": "button.menu_select",
        "mapping_type": "pressed"
      },
      {
        "from_button_id": "button.menu_ok",
        "to_button_id": "button.menu_ok",
        "mapping_type": "focused"
      }
    ]
  }
}

````
While there are additional properties available, they are unnecessary for beginners and are excluded to avoid confusion.

Although the structure may initially seem complex, it is relatively straightforward upon closer examination. Each property is clearly labeled to indicate its functionality. For custom toggles, it is essential to toggle a custom element, which involves panels and bindings.

<CodeHeader>*/ui/your_file.json</CodeHeader>
```json
"main_toggle_template": {
  "type": "panel", // Element being panel is optional but panel is adviseable

  "$toggle_state_reference|default": "tutorial_toggle", // A name reference for our toggle that can be used to track toggle's state
  "$template_toggle": "namespace.toggle_template", // Toggle template we want to use

  "controls": [
    {
      "$toggle_state_reference@$template_toggle"
    }
  ]
}
````

Referencing the toggle in another element enables tracking its state, whether it is turned on or off.

## Example Usage:

The following example demonstrates how to use a toggle state reference:

<CodeHeader>*/ui/another_one_of_your_file.json</CodeHeader>
```json
{
  "our_toggle@namespace.main_toggle_template": {
    "$toggle_state_reference": "wiki_tutorial_toggle",

    "size": [ 120, 24 ]
  },

  "our_toggled_element": {
    "type": "image",
    "texture": "textures/items/apple",

    "size": [ 32, 32 ],

    "bindings": [
      {
        "binding_type": "view",
        "source_control_name": "wiki_tutorial_toggle", // As you can see we clearly referenced it from our toggle
        "source_property_name": "#toggle_state", // Is the binding for toggle's state, it returns boolean and can be used for alot of things
        "target_property_name": "#visible" // Now our toggle that returns boolean toggles our image visibility that accepts boolean
      }
    ]
  }
}

```

This configuration creates a toggle-able image of an apple.

If the concept of source_control_name seems unclear, it functions as a receiver that retrieves data bound to the specified element name. A more in-depth explanation of this functionality falls outside the scope of this tutorial.
