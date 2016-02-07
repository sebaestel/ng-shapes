# ng-shapes
Angular directive to create basic shapes using d3

## Environment Setup

1. Node Version Manager [NVM](https://github.com/creationix/nvm)

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
```

2. Node 0.10.35

```
nvm install 0.10.35
```

3. [Bower](http://www.bower.io). (globally)

````
 npm install -g bower
````

## Install

- Clone repository

```
git clone git@github.com:admetricks/basquiat.git
```

- Node 0.10.35

```
nvm use 0.10.35
```

- NPM and Bower dependencies

```
npm install && bower install
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
