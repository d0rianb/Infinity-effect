/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/geometry.ts":
/*!*************************!*\
  !*** ./src/geometry.ts ***!
  \*************************/
/*! exports provided: Point, Triangle, Line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Triangle", function() { return Triangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
var radius = .1;
var defaultColor = 'rgba(250, 250, 250, 0.5)';
var Point = /** @class */ (function () {
    function Point(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color || defaultColor;
    }
    Point.prototype.equals = function (point) {
        return this.x === point.x && this.y === point.y;
    };
    Point.prototype.dist = function (point) {
        return Math.sqrt(Math.pow((this.x - point.x), 2) + Math.pow((this.y - point.y), 2));
    };
    Point.prototype.render = function (ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
        ctx.fill();
    };
    return Point;
}());
var Line = /** @class */ (function () {
    function Line(a, b) {
        this.a = a;
        this.b = b;
    }
    Line.prototype.render = function (ctx) {
        ctx.beginPath();
        ctx.moveTo(this.a.x, this.a.y);
        ctx.lineTo(this.b.x, this.b.y);
        ctx.stroke();
    };
    return Line;
}());
var Triangle = /** @class */ (function () {
    function Triangle(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Triangle.prototype.center = function () {
        var centerX = (this.a.x + this.b.x + this.c.x) / 3;
        var centerY = (this.a.y + this.b.y + this.c.y) / 3;
        return new Point(centerX, centerY);
    };
    Triangle.prototype.equals = function (triangle) {
        return this.center().equals(triangle.center());
    };
    Triangle.prototype.render = function (ctx) {
        ctx.fillStyle = 'rgba(230, 230, 230, .15)';
        ctx.globalAlpha = 0.08;
        ctx.beginPath();
        ctx.moveTo(this.a.x, this.a.y);
        ctx.lineTo(this.b.x, this.b.y);
        ctx.lineTo(this.c.x, this.c.y);
        ctx.lineTo(this.a.x, this.a.y);
        ctx.fill();
    };
    return Triangle;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometry */ "./src/geometry.ts");

var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
var trianglesDetectionRadius = 200;
var color = {
    backgroundStart: '#01579b',
    backgroundEnd: '#001f38'
};
var _a = [0, 0], width = _a[0], height = _a[1];
var points = [];
var triangles = [];
function createGradient() {
    var gradient = ctx.createLinearGradient(0, height, width, 0);
    gradient.addColorStop(0.5, color.backgroundStart);
    gradient.addColorStop(1, color.backgroundEnd);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
}
function createTriangles() {
    var triangles = [];
    for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
        var point1 = points_1[_i];
        for (var _a = 0, points_2 = points; _a < points_2.length; _a++) {
            var point2 = points_2[_a];
            var _loop_1 = function (point3) {
                if (point1 !== point2 && point2 !== point3 && point3 !== point1) {
                    if (point1.dist(point2) < trianglesDetectionRadius &&
                        point2.dist(point3) < trianglesDetectionRadius) {
                        var triangle_1 = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Triangle"](point1, point2, point3);
                        var alreadyExist = triangles.filter(function (other) { return triangle_1.equals(other); }).length > 0;
                        if (!alreadyExist)
                            triangles.push(triangle_1);
                    }
                }
            };
            for (var _b = 0, points_3 = points; _b < points_3.length; _b++) {
                var point3 = points_3[_b];
                _loop_1(point3);
            }
        }
    }
    return triangles;
}
function render() {
    ctx.clearRect(0, 0, width, height);
    createGradient();
    points.forEach(function (p) { return p.render(ctx); });
    ctx.save();
    triangles.forEach(function (t) { return t.render(ctx); });
    ctx.restore();
}
window.onload = function () {
    var _a, _b;
    _a = [window.innerWidth, window.innerHeight], width = _a[0], height = _a[1];
    _b = [width, height], canvas.width = _b[0], canvas.height = _b[1];
    createGradient();
};
window.addEventListener('click', function (e) {
    var point = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](e.clientX, e.clientY);
    points.push(point);
    triangles = createTriangles();
    render();
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFNLE1BQU0sR0FBRyxFQUFFO0FBQ2pCLElBQU0sWUFBWSxHQUFHLDBCQUEwQjtBQUUvQztJQUtJLGVBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFnQjtRQUM5QyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxZQUFZO0lBQ3RDLENBQUM7SUFFTSxzQkFBTSxHQUFiLFVBQWMsS0FBWTtRQUN0QixPQUFPLElBQUksQ0FB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Q2xDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7SUFDVixTQUFTLENBQUMsT0FBTyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFiLENBQWEsQ0FBQztJQUNyQyxHQUFHLENBQUMsT0FBTyxFQUFFO0FBRWpCLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxHQUFHOztJQUNaLEtBQWtCLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQXhELEtBQUssVUFBRSxNQUFNLFNBQTRDO0lBQzFELEtBQWdDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUE5QyxNQUFNLENBQUMsS0FBSyxVQUFFLE1BQU0sQ0FBQyxNQUFNLFNBQW9CO0lBQ2hELGNBQWMsRUFBRTtBQUNwQixDQUFDO0FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxXQUFDO0lBQzlCLElBQU0sS0FBSyxHQUFVLElBQUksK0NBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbEIsU0FBUyxHQUFHLGVBQWUsRUFBRTtJQUM3QixNQUFNLEVBQUU7QUFDWixDQUFDLENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJjb25zdCByYWRpdXMgPSAuMVxuY29uc3QgZGVmYXVsdENvbG9yID0gJ3JnYmEoMjUwLCAyNTAsIDI1MCwgMC41KSdcblxuY2xhc3MgUG9pbnQge1xuICAgIHB1YmxpYyB4OiBudW1iZXJcbiAgICBwdWJsaWMgeTogbnVtYmVyXG4gICAgcHVibGljIGNvbG9yOiBzdHJpbmdcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvciA/IDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3IgfHwgZGVmYXVsdENvbG9yXG4gICAgfVxuXG4gICAgcHVibGljIGVxdWFscyhwb2ludDogUG9pbnQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gcG9pbnQueCAmJiB0aGlzLnkgPT09IHBvaW50LnlcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzdChwb2ludDogUG9pbnQpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCh0aGlzLnggLSBwb2ludC54KSoqMiArICh0aGlzLnkgLSBwb2ludC55KSoqMilcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxuICAgICAgICBjdHguZmlsbCgpXG4gICAgfVxuXG59XG5cbmNsYXNzIExpbmUge1xuICAgIHB1YmxpYyBhOiBQb2ludFxuICAgIHB1YmxpYyBiOiBQb2ludFxuXG4gICAgY29uc3RydWN0b3IoYTogUG9pbnQsIGI6IFBvaW50KSB7XG4gICAgICAgIHRoaXMuYSA9IGFcbiAgICAgICAgdGhpcy5iID0gYlxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5hLngsdGhpcy5hLnkpXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5iLngsIHRoaXMuYi55KVxuICAgICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG59XG5cbmNsYXNzIFRyaWFuZ2xlIHtcbiAgICBwdWJsaWMgYTogUG9pbnRcbiAgICBwdWJsaWMgYjogUG9pbnRcbiAgICBwdWJsaWMgYzogUG9pbnRcblxuICAgIGNvbnN0cnVjdG9yKGE6IFBvaW50LCBiOiBQb2ludCwgYzogUG9pbnQpIHtcbiAgICAgICAgdGhpcy5hID0gYVxuICAgICAgICB0aGlzLmIgPSBiXG4gICAgICAgIHRoaXMuYyA9IGNcbiAgICB9XG5cbiAgICBwcml2YXRlIGNlbnRlcigpOiBQb2ludHtcbiAgICAgICAgbGV0IGNlbnRlclg6IG51bWJlciA9ICh0aGlzLmEueCArIHRoaXMuYi54ICsgdGhpcy5jLngpIC8gM1xuICAgICAgICBsZXQgY2VudGVyWTogbnVtYmVyID0gKHRoaXMuYS55ICsgdGhpcy5iLnkgKyB0aGlzLmMueSkgLyAzXG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQoY2VudGVyWCwgY2VudGVyWSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZXF1YWxzKHRyaWFuZ2xlOiBUcmlhbmdsZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jZW50ZXIoKS5lcXVhbHModHJpYW5nbGUuY2VudGVyKCkpXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjMwLCAyMzAsIDIzMCwgLjE1KSdcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMC4wOFxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLmEueCwgdGhpcy5hLnkpXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5iLngsIHRoaXMuYi55KVxuICAgICAgICBjdHgubGluZVRvKHRoaXMuYy54LCB0aGlzLmMueSlcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLmEueCwgdGhpcy5hLnkpXG4gICAgICAgIGN0eC5maWxsKClcbiAgICB9XG59XG5cbmV4cG9ydCB7IFBvaW50LCBUcmlhbmdsZSwgTGluZSB9IiwiaW1wb3J0IHsgUG9pbnQsIFRyaWFuZ2xlIH0gZnJvbSAnLi9nZW9tZXRyeSdcblxuY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMnKVxuY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG5sZXQgdHJpYW5nbGVzRGV0ZWN0aW9uUmFkaXVzID0gMjAwXG5cbmNvbnN0IGNvbG9yID0ge1xuICAgIGJhY2tncm91bmRTdGFydDogJyMwMTU3OWInLFxuICAgIGJhY2tncm91bmRFbmQ6ICcjMDAxZjM4J1xufVxuXG5sZXQgW3dpZHRoLCBoZWlnaHRdOiBbbnVtYmVyLCBudW1iZXJdID0gWzAsIDBdXG5sZXQgcG9pbnRzOiBQb2ludFtdID0gW11cbmxldCB0cmlhbmdsZXM6IFRyaWFuZ2xlW10gPSBbXVxuXG5mdW5jdGlvbiBjcmVhdGVHcmFkaWVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBoZWlnaHQsIHdpZHRoLCAwKVxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjUsIGNvbG9yLmJhY2tncm91bmRTdGFydClcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgY29sb3IuYmFja2dyb3VuZEVuZClcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnRcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodClcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHJpYW5nbGVzKCk6IFRyaWFuZ2xlW10ge1xuICAgIGxldCB0cmlhbmdsZXMgPSBbXVxuICAgIGZvciAobGV0IHBvaW50MSBvZiBwb2ludHMpIHtcbiAgICAgICAgZm9yIChsZXQgcG9pbnQyIG9mIHBvaW50cykge1xuICAgICAgICAgICAgZm9yIChsZXQgcG9pbnQzIG9mIHBvaW50cykge1xuICAgICAgICAgICAgICAgIGlmIChwb2ludDEgIT09IHBvaW50MiAmJiBwb2ludDIgIT09IHBvaW50MyAmJiBwb2ludDMgIT09IHBvaW50MSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnQxLmRpc3QocG9pbnQyKSA8IHRyaWFuZ2xlc0RldGVjdGlvblJhZGl1cyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQyLmRpc3QocG9pbnQzKSA8IHRyaWFuZ2xlc0RldGVjdGlvblJhZGl1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJpYW5nbGU6IFRyaWFuZ2xlID0gbmV3IFRyaWFuZ2xlKHBvaW50MSwgcG9pbnQyLCBwb2ludDMpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbHJlYWR5RXhpc3Q6IGJvb2xlYW4gPSB0cmlhbmdsZXMuZmlsdGVyKG90aGVyID0+IHRyaWFuZ2xlLmVxdWFscyhvdGhlcikpLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYWxyZWFkeUV4aXN0KSB0cmlhbmdsZXMucHVzaCh0cmlhbmdsZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJpYW5nbGVzXG59XG5cbmZ1bmN0aW9uIHJlbmRlcigpOiB2b2lkIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpXG4gICAgY3JlYXRlR3JhZGllbnQoKVxuICAgIHBvaW50cy5mb3JFYWNoKHAgPT4gcC5yZW5kZXIoY3R4KSlcbiAgICBjdHguc2F2ZSgpXG4gICAgdHJpYW5nbGVzLmZvckVhY2godCA9PiB0LnJlbmRlcihjdHgpKVxuICAgIGN0eC5yZXN0b3JlKClcblxufVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIFt3aWR0aCwgaGVpZ2h0XSA9IFt3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0XTtcbiAgICBbY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XSA9IFt3aWR0aCwgaGVpZ2h0XTtcbiAgICBjcmVhdGVHcmFkaWVudCgpXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGNvbnN0IHBvaW50OiBQb2ludCA9IG5ldyBQb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSlcbiAgICBwb2ludHMucHVzaChwb2ludClcbiAgICB0cmlhbmdsZXMgPSBjcmVhdGVUcmlhbmdsZXMoKVxuICAgIHJlbmRlcigpXG59KSJdLCJzb3VyY2VSb290IjoiIn0=