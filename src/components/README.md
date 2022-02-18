## Components [:arrow_heading_up:](./../../Contributing.md)

<!-- key:

- :heavy_check_mark: : Completed
- :x: : Incomplete

| Component name |    Is completed    |
| -------------- | :----------------: |
| bo-login-card  | :heavy_check_mark: |
|                |                    | -->

## Contributions

For making a component we will be using the **'Comopsition API'** instead of the 'Options API'.

Also the structure for creating the component is as such:

```
 components                                         // A folder that contains all of the components
    ├── bo-[prefix]-exammplebutton                  // This is a folder with a specific component
    │ ├── bo-[prefix]-exammplebutton.vue            // The actual component using kebab case
    │ ├── scripts                                   // Any code used by the component
    │ │ ├── bo-[prefix]-examplebutton-click.ts      // Example code file for this component
    │ │ └── README.md                               // Documentation on the scripts for this component
    │ └── README.md                                 // Documentation on the component
    └── README.md                                   // Documentation of all the components (Live and being developed)
```
