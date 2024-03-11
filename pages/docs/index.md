---
title: Using the Next.js plugin
description: Integrate Markdoc into your Next.js app
---

## Hackmamba Documentation Platform

{% grid %}
{% card size="full" %}
Markdoc is open-source—check out its [source](http://github.com/markdoc/markdoc) to see how it works.
{% /card %}

{% card size="full" %}
Markdoc is open-source—check out its [source](http://github.com/markdoc/markdoc) to see how it works.
{% /card %}

{% /grid %}

{% table %}
* Heading 1
* Heading 2
* Heading 2
---
* Row 1 Cell 1
* Row 1 Cell 2
* Row 2 Cell 3
---
* Row 2 Cell 1
* Row 2 cell 2
* Row 2 cell 3
{% /table %}

{% card size="sm" %}
Markdoc is open-source—check out its [source](http://github.com/markdoc/markdoc) to see how it works.
{% /card %}

{% card size="md" %}
Markdoc is open-source—check out its [source](http://github.com/markdoc/markdoc) to see how it works.
{% /card %}

{% card size="full" %}
Markdoc is open-source—check out its [source](http://github.com/markdoc/markdoc) to see how it works.
{% /card %}

{% tabs %}

{% tab label="React" %}
React content goes here jnjn
{% /tab %}

{% tab label="HTML" %}
HTML content goes herenji
{% /tab %}

{% tab label="Vue" %}
Vue.js content goes herenji
{% /tab %}

{% /tabs %}

## Full Next.js example

### Full Next.js example

#### Full Next.js example

##### Full Next.js example

###### Full Next.js example

**Bold**

_Italic_

[Links](/docs/nodes)

![Images](https://www.dropbox.com/paper/ep/redirect/image?url=https%3A%2F%2Fpaper-attachments.dropboxusercontent.com%2Fs_E1CBF4A45089EFC3D9C461B80BB9F97D882823FECDCA010DD86FEAC6EC26A79C_1706441400678_Screenshot%2B2024-01-28%2Bat%2B12.19.01.png&hmac=6htDoKMr799P2OnJ7fqzZUHIe9WJIDT3JPj63q70kzk%3D&width=1490)

Lists

-  Item 1
-  Item 1
-  Item 1


The quickest way to deploy your own version of this boilerplate is by deploying it with


> Next, we must add our database URL and API key as an environment variable. To do this, create `.env` file in the root directory and add the copied URL and API key.

`Inline code`

{% callout type="check" title="Hello from" %}
Markdoc is open-source—check out its [source](http://github.com/markdoc/markdoc) to see how it works.
{% /callout %}

```html
<div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
	<div class="col-span-2">01</div>
	<div class="col-span-2">02</div>
	<div>03</div>
	<div>04</div>
	<div>05</div>
</div>
```

```js
model Task {
    fields {
        description Text
    }

    actions {
        create createTask() with (description)
        get getTask(id)
        update updateTask(id) with (description)
        delete deleteTask(id)
        list listTask() {
            @orderBy(createdAt: desc)
        }
    }

    @permission(
        actions: [create, get, update, delete, list],
        expression: true
    )
}
```

```
Code fences
```


# Full Next.js example

{% callout %}
This is a full-featured boilerplate for a creating a documentation website using Markdoc and Next.js.
{% /callout %}

## Setup

First, clone this repo and install the dependencies required:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `index.md`. The page auto-updates as you edit the file.

## Deploy

The quickest way to deploy your own version of this boilerplate is by deploying it with [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com/) by clicking one of the buttons below.

### Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/markdoc/next.js-starter)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/markdoc/next.js-starter)
