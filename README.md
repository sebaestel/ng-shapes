
# ng-shapes
![alt tag](http://res.cloudinary.com/dfnwoj5c8/image/upload/v1454817956/Captura_de_pantalla_2016-02-07_a_las_1.03.48_k2zyxm.png)
Angular directive to create basic shapes using d3

## Install

- Clone repository

```
git clone git@github.com:sebaestel/ng-shapes.git
```

or use bower

```
bower install ng-shapes
```

## Usage

Add dependencie in your  module
```
angular.module('yourModule', ['ng-shapes']) ...

```
In view
```
    <shape
        shape-options="{{ data }}"
        id="shape-id">
    </shape>

```
In controller
```
    $scope.data = [
        {
            'type': 'circle',
            'image': 'http://lorempixel.com/500/500/nature/'
        }
    ];
```
## Options
- **type**: [required] circle, square or triangle
- **image**: path to background image
- **color**: color in hexadecimal
