## Styles [:arrow_heading_up:](./../../Contributing.md)

<!-- key:

- :heavy_check_mark: : Completed
- :x: : Incomplete

| Service name     | Folder Location |    Is completed    |
| ---------------- | --------------- | :----------------: |
| \_colours.less   |                 | :heavy_check_mark: |
| \_variables.less |                 | :heavy_check_mark: |
| index.less       |                 | :heavy_check_mark: |
|                  |                 |                    |
|                  |                 |                    |
|                  |                 |                    |
|                  |                 |                    |
|                  |                 |                    | -->

## Contributing

To contribute any .less files you add will need to added to the index.less file.

All colours stay withing the \_colours.less file.

All required variables must be stored in the \_variables.less file.

## Naming convention

The naming structure that the project will be following is:

- [BEM Naming](http://getbem.com/naming/)

This uses the concept of:

- Blocks
- Elements
- Modifiers

Example: html

```html
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input class="form__submit form__submit--disabled" type="submit" />
</form>
```

Css

```css
.form {
}
.form--theme-xmas {
}
.form--simple {
}
.form__input {
}
.form__submit {
}
.form__submit--disabled {
}
```

### Folder structure

```
 styles                                         // All the global styles
   ├── bo-[prefix]-example-buttonstyles         // Folder container a certain style
   │ └── _bo-[prefix]-background-colour.less    // A set style with class tags and less coding. This also used kebab casing
   ├── _colours.less                            // The less file that contains all the colours used
   ├── _variables.less                          // The less file that contains all the css variables used
   ├── index.less                               // this compiles all the styles into one file which is imported into the app.vue
   └── README.md                                // The readme list of all services
```
