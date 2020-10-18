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
        ctx.fillStyle = 'rgba(230, 230, 230, .19)';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFNLE1BQU0sR0FBRyxFQUFFO0FBQ2pCLElBQU0sWUFBWSxHQUFHLDBCQUEwQjtBQUUvQztJQUtJLGVBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFjO1FBQzVDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLFlBQVk7SUFDdEMsQ0FBQztJQUVNLHNCQUFNLEdBQWIsVUFBYyxLQUFZO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLG9CQUFJLEdBQVgsVUFBWSxLQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFJLENBQUMsSUFBRyxVQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFJLENBQUMsRUFBQztJQUN2RSxDQUFDO0lBRU0sc0JBQU0sR0FBYixVQUFjLEdBQTZCO1FBQ3ZDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFDMUIsR0FBRyxDQUFDLFNBQVMsRUFBRTtRQUNmLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDL0MsR0FBRyxDQUFDLElBQUksRUFBRTtJQUNkLENBQUM7SUFFTCxZQUFDO0FBQUQsQ0FBQztBQUVEO0lBSUksY0FBWSxDQUFRLEVBQUUsQ0FBUTtRQUMxQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDZCxDQUFDO0lBRU0scUJBQU0sR0FBYixVQUFjLEdBQTZCO1FBQ3ZDLEdBQUcsQ0FBQyxTQUFTLEVBQUU7UUFDZixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsR0FBRyxDQUFDLE1BQU0sRUFBRTtJQUNoQixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUM7QUFFRDtJQUtJLGtCQUFZLENBQVEsRUFBRSxDQUFRLEVBQUUsQ0FBUTtRQUNwQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDZCxDQUFDO0lBRU8seUJBQU0sR0FBZDtRQUNJLElBQUksT0FBTyxHQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzFELElBQUksT0FBTyxHQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzFELE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUN0QyxDQUFDO0lBRU0seUJBQU0sR0FBYixVQUFjLFFBQWtCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVNLHlCQUFNLEdBQWIsVUFBYyxHQUE2QjtRQUN2QyxHQUFHLENBQUMsU0FBUyxHQUFHLDBCQUEwQjtRQUMxQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUk7UUFDdEIsR0FBRyxDQUFDLFNBQVMsRUFBRTtRQUNmLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsR0FBRyxDQUFDLElBQUksRUFBRTtJQUNkLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQztBQUUrQjs7Ozs7Ozs7Ozs7OztBQ2pGaEM7QUFBQTtBQUE0QztBQUU1QyxJQUFNLE1BQU0sR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7QUFDbkUsSUFBTSxHQUFHLEdBQTZCLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO0FBRTdELElBQUksd0JBQXdCLEdBQUcsR0FBRztBQUVsQyxJQUFNLEtBQUssR0FBRztJQUNWLGVBQWUsRUFBRSxTQUFTO0lBQzFCLGFBQWEsRUFBRSxTQUFTO0NBQzNCO0FBRUcsU0FBb0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQXpDLEtBQUssVUFBRSxNQUFNLFFBQTRCO0FBQzlDLElBQUksTUFBTSxHQUFZLEVBQUU7QUFDeEIsSUFBSSxTQUFTLEdBQWUsRUFBRTtBQUU5QixTQUFTLGNBQWM7SUFDbkIsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM5RCxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsZUFBZSxDQUFDO0lBQ2pELFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUM7SUFDN0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxRQUFRO0lBQ3hCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDO0FBQ3JDLENBQUM7QUFFRCxTQUFTLGVBQWU7SUFDcEIsSUFBSSxTQUFTLEdBQUcsRUFBRTtJQUNsQixLQUFtQixVQUFNLEVBQU4saUJBQU0sRUFBTixvQkFBTSxFQUFOLElBQU0sRUFBRTtRQUF0QixJQUFJLE1BQU07UUFDWCxLQUFtQixVQUFNLEVBQU4saUJBQU0sRUFBTixvQkFBTSxFQUFOLElBQU0sRUFBRTtZQUF0QixJQUFJLE1BQU07b0NBQ0YsTUFBTTtnQkFDWCxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFO29CQUM3RCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsd0JBQXdCO3dCQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLHdCQUF3QixFQUFFO3dCQUNoRCxJQUFNLFVBQVEsR0FBYSxJQUFJLGtEQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7d0JBQy9ELElBQU0sWUFBWSxHQUFZLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBSyxJQUFJLGlCQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7d0JBQzFGLElBQUksQ0FBQyxZQUFZOzRCQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBUSxDQUFDO3FCQUM5QztpQkFDSjs7WUFSTCxLQUFtQixVQUFNLEVBQU4saUJBQU0sRUFBTixvQkFBTSxFQUFOLElBQU07Z0JBQXBCLElBQUksTUFBTTt3QkFBTixNQUFNO2FBU2Q7U0FDSjtLQUNKO0lBQ0QsT0FBTyxTQUFTO0FBQ3BCLENBQUM7QUFFRCxTQUFTLE1BQU07SUFDWCxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQztJQUNsQyxjQUFjLEVBQUU7SUFDaEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBYixDQUFhLENBQUM7SUFDbEMsR0FBRyxDQUFDLElBQUksRUFBRTtJQUNWLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQWIsQ0FBYSxDQUFDO0lBQ3JDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7QUFFakIsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLEdBQUc7O0lBQ1osS0FBa0IsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBeEQsS0FBSyxVQUFFLE1BQU0sU0FBNEM7SUFDMUQsS0FBZ0MsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQTlDLE1BQU0sQ0FBQyxLQUFLLFVBQUUsTUFBTSxDQUFDLE1BQU0sU0FBb0I7SUFDaEQsY0FBYyxFQUFFO0FBQ3BCLENBQUM7QUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFdBQUM7SUFDOUIsSUFBTSxLQUFLLEdBQVUsSUFBSSwrQ0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNsQixTQUFTLEdBQUcsZUFBZSxFQUFFO0lBQzdCLE1BQU0sRUFBRTtBQUNaLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImNvbnN0IHJhZGl1cyA9IC4xXG5jb25zdCBkZWZhdWx0Q29sb3IgPSAncmdiYSgyNTAsIDI1MCwgMjUwLCAwLjUpJ1xuXG5jbGFzcyBQb2ludCB7XG4gICAgcHVibGljIHg6IG51bWJlclxuICAgIHB1YmxpYyB5OiBudW1iZXJcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZ1xuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3IgfHwgZGVmYXVsdENvbG9yXG4gICAgfVxuXG4gICAgcHVibGljIGVxdWFscyhwb2ludDogUG9pbnQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gcG9pbnQueCAmJiB0aGlzLnkgPT09IHBvaW50LnlcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzdChwb2ludDogUG9pbnQpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCh0aGlzLnggLSBwb2ludC54KSAqKiAyICsgKHRoaXMueSAtIHBvaW50LnkpICoqIDIpXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvclxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgcmFkaXVzLCAwLCAyICogTWF0aC5QSSlcbiAgICAgICAgY3R4LmZpbGwoKVxuICAgIH1cblxufVxuXG5jbGFzcyBMaW5lIHtcbiAgICBwdWJsaWMgYTogUG9pbnRcbiAgICBwdWJsaWMgYjogUG9pbnRcblxuICAgIGNvbnN0cnVjdG9yKGE6IFBvaW50LCBiOiBQb2ludCkge1xuICAgICAgICB0aGlzLmEgPSBhXG4gICAgICAgIHRoaXMuYiA9IGJcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHgubW92ZVRvKHRoaXMuYS54LCB0aGlzLmEueSlcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLmIueCwgdGhpcy5iLnkpXG4gICAgICAgIGN0eC5zdHJva2UoKVxuICAgIH1cbn1cblxuY2xhc3MgVHJpYW5nbGUge1xuICAgIHB1YmxpYyBhOiBQb2ludFxuICAgIHB1YmxpYyBiOiBQb2ludFxuICAgIHB1YmxpYyBjOiBQb2ludFxuXG4gICAgY29uc3RydWN0b3IoYTogUG9pbnQsIGI6IFBvaW50LCBjOiBQb2ludCkge1xuICAgICAgICB0aGlzLmEgPSBhXG4gICAgICAgIHRoaXMuYiA9IGJcbiAgICAgICAgdGhpcy5jID0gY1xuICAgIH1cblxuICAgIHByaXZhdGUgY2VudGVyKCk6IFBvaW50IHtcbiAgICAgICAgbGV0IGNlbnRlclg6IG51bWJlciA9ICh0aGlzLmEueCArIHRoaXMuYi54ICsgdGhpcy5jLngpIC8gM1xuICAgICAgICBsZXQgY2VudGVyWTogbnVtYmVyID0gKHRoaXMuYS55ICsgdGhpcy5iLnkgKyB0aGlzLmMueSkgLyAzXG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQoY2VudGVyWCwgY2VudGVyWSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZXF1YWxzKHRyaWFuZ2xlOiBUcmlhbmdsZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jZW50ZXIoKS5lcXVhbHModHJpYW5nbGUuY2VudGVyKCkpXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjMwLCAyMzAsIDIzMCwgLjE5KSdcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMC4wOFxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLmEueCwgdGhpcy5hLnkpXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5iLngsIHRoaXMuYi55KVxuICAgICAgICBjdHgubGluZVRvKHRoaXMuYy54LCB0aGlzLmMueSlcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLmEueCwgdGhpcy5hLnkpXG4gICAgICAgIGN0eC5maWxsKClcbiAgICB9XG59XG5cbmV4cG9ydCB7IFBvaW50LCBUcmlhbmdsZSwgTGluZSB9XG4iLCJpbXBvcnQgeyBQb2ludCwgVHJpYW5nbGUgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5jb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhcycpXG5jb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbmxldCB0cmlhbmdsZXNEZXRlY3Rpb25SYWRpdXMgPSAyMDBcblxuY29uc3QgY29sb3IgPSB7XG4gICAgYmFja2dyb3VuZFN0YXJ0OiAnIzAxNTc5YicsXG4gICAgYmFja2dyb3VuZEVuZDogJyMwMDFmMzgnXG59XG5cbmxldCBbd2lkdGgsIGhlaWdodF06IFtudW1iZXIsIG51bWJlcl0gPSBbMCwgMF1cbmxldCBwb2ludHM6IFBvaW50W10gPSBbXVxubGV0IHRyaWFuZ2xlczogVHJpYW5nbGVbXSA9IFtdXG5cbmZ1bmN0aW9uIGNyZWF0ZUdyYWRpZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIGhlaWdodCwgd2lkdGgsIDApXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuNSwgY29sb3IuYmFja2dyb3VuZFN0YXJ0KVxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBjb2xvci5iYWNrZ3JvdW5kRW5kKVxuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudFxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUcmlhbmdsZXMoKTogVHJpYW5nbGVbXSB7XG4gICAgbGV0IHRyaWFuZ2xlcyA9IFtdXG4gICAgZm9yIChsZXQgcG9pbnQxIG9mIHBvaW50cykge1xuICAgICAgICBmb3IgKGxldCBwb2ludDIgb2YgcG9pbnRzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwb2ludDMgb2YgcG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBvaW50MSAhPT0gcG9pbnQyICYmIHBvaW50MiAhPT0gcG9pbnQzICYmIHBvaW50MyAhPT0gcG9pbnQxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2ludDEuZGlzdChwb2ludDIpIDwgdHJpYW5nbGVzRGV0ZWN0aW9uUmFkaXVzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludDIuZGlzdChwb2ludDMpIDwgdHJpYW5nbGVzRGV0ZWN0aW9uUmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmlhbmdsZTogVHJpYW5nbGUgPSBuZXcgVHJpYW5nbGUocG9pbnQxLCBwb2ludDIsIHBvaW50MylcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFscmVhZHlFeGlzdDogYm9vbGVhbiA9IHRyaWFuZ2xlcy5maWx0ZXIob3RoZXIgPT4gdHJpYW5nbGUuZXF1YWxzKG90aGVyKSkubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhbHJlYWR5RXhpc3QpIHRyaWFuZ2xlcy5wdXNoKHRyaWFuZ2xlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cmlhbmdsZXNcbn1cblxuZnVuY3Rpb24gcmVuZGVyKCk6IHZvaWQge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodClcbiAgICBjcmVhdGVHcmFkaWVudCgpXG4gICAgcG9pbnRzLmZvckVhY2gocCA9PiBwLnJlbmRlcihjdHgpKVxuICAgIGN0eC5zYXZlKClcbiAgICB0cmlhbmdsZXMuZm9yRWFjaCh0ID0+IHQucmVuZGVyKGN0eCkpXG4gICAgY3R4LnJlc3RvcmUoKVxuXG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgW3dpZHRoLCBoZWlnaHRdID0gW3dpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHRdO1xuICAgIFtjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRdID0gW3dpZHRoLCBoZWlnaHRdO1xuICAgIGNyZWF0ZUdyYWRpZW50KClcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgY29uc3QgcG9pbnQ6IFBvaW50ID0gbmV3IFBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKVxuICAgIHBvaW50cy5wdXNoKHBvaW50KVxuICAgIHRyaWFuZ2xlcyA9IGNyZWF0ZVRyaWFuZ2xlcygpXG4gICAgcmVuZGVyKClcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==