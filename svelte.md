# To figure out
 - [ ] Theming (dark/light)
 - [ ] Routing
 - [ ] How do pieces fit together?

# Components

The "UI" namespace includes ready-made components that can be composed easily to make up an application. It also contains utility and convenient Components.

These components themselves use other types such as Controls and Layout components and implement behavior and logic specific for each use-case.

 - **UIView | UIViewChild | UIViewAction**
 
   Exports: `getActive`, ``setActive``, ``addChild``, ``removeChild``
 - **UIAlert | UIAlertAction**
 - **UIPortal**
 
 	Render content out of the document flow
 - **UIBackdrop**
 
   Supports: Blur, Image (w/ lazy loading), color shading, gradients

 - **UIImage**

	Supports: lazy loading, loading placeholder, aspect ratio

 - ? **UIList | UIListChild**
 - ? **UITooltip**
 - ? **UIIcon**

	``hiddenLabel`` uses VisuallyHidden
 - ? **UIRow**
 - **UIHeading** automatically renders the correct `<h*>` element

## Controls

Controls are interaction components. They allow the user to interact with the app in some way.

 - **ControlText**. Get siple text-based input from the user
 	
	Types: Text, Number, Password

 - **ControlSelect**. Let users choose from a pre-defined set of options
	
	Types: Date, Time, Text, File, Custom

 - **ControlToggle**. Binary switch
 - **ControlButton**
	
	Supports: Icons, different modes/weights (minimal, full, outline)
	
 - **ControlTabs**
 - **ControlSlider**

## Layout

Layout components make it easy to implement specific types of patterns, such as Grids, Lists and custom definitions (Auto). Layouts are containers that handle a visual parent-child relationship. They have no intrinsic interaction.

Children of Layout components automatically opt into text-height normalization.

 - **LayoutAuto**
   
   Low-level primitive that handles spacing (gap), alignment and responsive behaviors. LayoutAuto is designed for single-axis alignments, which do not wrap when resized. If you need a wrapping layout, consider LayoutGrid.
   
   Props: `direction`, `gap`, `align`, `justify`
   
 - **LayoutGrid**
	
	Allows you to build anything from image grids to 2 columns landing page layout.
   
 - **LayoutCenter**
 
	Horizontal and optionally also vertical centering, with max-width
	
 
 - **LayoutChild**

	A layout child should only operate inwards and never apply margin - The layout relationship to the other children should be handled by the parent. Still it can be difficult to get the childs details right. Fixed padding markes trouble with icons that are higher than text.
   
 - LayoutInline 
 
( - **LayoutGrid**
 - **LayoutList**)
 

## Views

 - ViewContextMenu
 - ViewOverlay

# Theming


# Overview

Interface design comes with all sorts of challenges, especially on the web. Modern users expect your website to be everything from a simple wiki with mainly text, to a full-blown graphics editor with advanced interactions and controls.

Design Kit is split into different parts that do not rely on each other *at all*:

**Layout**

  Simple primitives to simplify vast majority of layout use cases. Grids, columns, text, navbars, etc. Design Kit's layout components handle **spacing and alignment**, and nothing else.

**Controls**

  
**Views**

  View are high-level design patterns, that expose simple APIs to quickly build low-friction, high-quality interactions. Think modals, pages, main->child split view, etc.

**Animation**

Design Kit provides spring-based animation tools that use a normalized scale for easier development. The Animation module also provides shared-transition capabilities.

For a high-level overview of the advantages of springs (and other things), see [link to apple talk].

---

You can progressively expand and make use of features that enable App-like experiences, like Views, ContextMenus and Routing.

Design Kit is not your typical Framework. You can create Web Apps that feel very native. But the design primitives also give you the power to create a website that is just that: a website.

As your app grows over time, you can still add advanced controls to it.

Most importantly: **Design Kit is not an all-or-nothing choice**. Pick and choose however you like. We don't try to cover every use-case. We don't try to bind you.


TLDR;

 - No Internet Explorer support
 - Use modern tech (CSS Variables, CSS Grid, CSS touch-action)
 - Stay vanilla where possible (naming, conventions, API)
 - Approach that meets the web: Diversity and powerful applications
