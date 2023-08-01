<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# inheritedNonEnumerablePropertySymbols

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an array of an object's inherited non-enumerable [symbol][@stdlib/symbol/ctor] properties.



<section class="usage">

## Usage

<!-- eslint-disable id-length -->

To use in Observable,

```javascript
inheritedNonEnumerablePropertySymbols = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherited-nonenumerable-property-symbols@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var inheritedNonEnumerablePropertySymbols = require( 'path/to/vendor/umd/utils-inherited-nonenumerable-property-symbols/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherited-nonenumerable-property-symbols@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.inheritedNonEnumerablePropertySymbols;
})();
</script>
```

#### inheritedNonEnumerablePropertySymbols( obj\[, level] )

Returns an `array` of an object's inherited non-enumerable [symbol][@stdlib/symbol/ctor] properties.

```javascript
var defineProperty = require( '@stdlib/utils-define-property' );
var hasSymbolSupport = require( '@stdlib/assert-has-symbol-support' );
var Symbol = require( '@stdlib/symbol-ctor' );

var hasSymbols = hasSymbolSupport();
var symbols;
var f;

function Foo() {
    if ( hasSymbols ) {
        defineProperty( this, Symbol( 'a' ), {
            'configurable': false,
            'enumerable': false,
            'writable': false,
            'value': 'a'
        });
    }
    return this;
}

if ( hasSymbols ) {
    defineProperty( Foo.prototype, Symbol( 'b' ), {
        'configurable': false,
        'enumerable': false,
        'writable': false,
        'value': 'b'
    });
}

f = new Foo();
symbols = inheritedNonEnumerablePropertySymbols( f );
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

```javascript
var symbols = inheritedNonEnumerablePropertySymbols( [], 1 );
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Property order is not guaranteed, as `object` property enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s properties, thus allowing for deterministic extraction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-symbol-support@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/symbol-ctor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherited-nonenumerable-property-symbols@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var hasSymbols = hasSymbolSupport();
var symbols;
var obj;

function Foo() {
    this.a = 'a';
    defineProperty( this, 'b', {
        'configurable': false,
        'enumerable': false,
        'writable': true,
        'value': 'b'
    });
    if ( hasSymbols ) {
        this[ Symbol( 'a' ) ] = 'a';
        defineProperty( this, Symbol( 'b' ), {
            'configurable': false,
            'enumerable': false,
            'writable': false,
            'value': 'b'
        });
    }
    return this;
}

Foo.prototype.c = 'c';
defineProperty( Foo.prototype, 'd', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'd'
});
if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'c' ) ] = 'c';
    defineProperty( Foo.prototype, Symbol( 'd' ), {
        'configurable': false,
        'enumerable': false,
        'writable': false,
        'value': 'd'
    });
}

obj = new Foo();
symbols = inheritedNonEnumerablePropertySymbols( obj );

console.log( symbols );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-inherited-nonenumerable-properties`][@stdlib/utils/inherited-nonenumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited non-enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils-inherited-nonenumerable-property-names`][@stdlib/utils/inherited-nonenumerable-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils-nonenumerable-properties`][@stdlib/utils/nonenumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own non-enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils-nonenumerable-property-names`][@stdlib/utils/nonenumerable-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's own non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils-nonenumerable-property-symbols`][@stdlib/utils/nonenumerable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own non-enumerable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils-nonenumerable-property-symbols-in`][@stdlib/utils/nonenumerable-property-symbols-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited non-enumerable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils-property-symbols`][@stdlib/utils/property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own symbol properties.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-inherited-nonenumerable-property-symbols.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-inherited-nonenumerable-property-symbols

[test-image]: https://github.com/stdlib-js/utils-inherited-nonenumerable-property-symbols/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-inherited-nonenumerable-property-symbols/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-inherited-nonenumerable-property-symbols/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-inherited-nonenumerable-property-symbols?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-inherited-nonenumerable-property-symbols.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-inherited-nonenumerable-property-symbols/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-inherited-nonenumerable-property-symbols/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-inherited-nonenumerable-property-symbols/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-inherited-nonenumerable-property-symbols/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-inherited-nonenumerable-property-symbols/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-inherited-nonenumerable-property-symbols/main/LICENSE

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

[@stdlib/symbol/ctor]: https://github.com/stdlib-js/symbol-ctor/tree/umd

<!-- <related-links> -->

[@stdlib/utils/inherited-nonenumerable-properties]: https://github.com/stdlib-js/utils-inherited-nonenumerable-properties/tree/umd

[@stdlib/utils/inherited-nonenumerable-property-names]: https://github.com/stdlib-js/utils-inherited-nonenumerable-property-names/tree/umd

[@stdlib/utils/nonenumerable-properties]: https://github.com/stdlib-js/utils-nonenumerable-properties/tree/umd

[@stdlib/utils/nonenumerable-property-names]: https://github.com/stdlib-js/utils-nonenumerable-property-names/tree/umd

[@stdlib/utils/nonenumerable-property-symbols]: https://github.com/stdlib-js/utils-nonenumerable-property-symbols/tree/umd

[@stdlib/utils/nonenumerable-property-symbols-in]: https://github.com/stdlib-js/utils-nonenumerable-property-symbols-in/tree/umd

[@stdlib/utils/property-symbols]: https://github.com/stdlib-js/utils-property-symbols/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
