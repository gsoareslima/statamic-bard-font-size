# Statamic Bard Font Size

> Statamic Bard Font Size is a Statamic addon that adds a font size picker to the Bard Editor

## Features

Adds a font size picker to the Bard editor.  Sizes are based on the Tailwind defaults for text-sm through text-9xl

## How to Install

You can search for this addon in the `Tools > Addons` section of the Statamic control panel and click **install**, or run the following command from your project root:

``` bash
composer require gsoareslima/statamic-bard-font-size
```

After installation run

``` bash
php artisan vendor:publish --tag=bard-font-size
```

## How to Use

On the bard editor, highlight the text you want to change the size of.  Click the font-size button and select a size from the list.
