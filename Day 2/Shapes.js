var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
export var ShadeStyle;
(function (ShadeStyle) {
    ShadeStyle[ShadeStyle["Shaded"] = 0] = "Shaded";
    ShadeStyle[ShadeStyle["Bold"] = 1] = "Bold";
    ShadeStyle[ShadeStyle["Plain"] = 2] = "Plain";
})(ShadeStyle || (ShadeStyle = {}));
var Point2D = /** @class */ (function () {
    function Point2D(_dimensionX, _dimensionY) {
        this.dimensionX = _dimensionX;
        this.dimensionY = _dimensionY;
    }
    Point2D.prototype.calculateLength = function () {
        return Math.sqrt(Math.pow(this.dimensionX, 2) + Math.pow(this.dimensionY, 2));
    };
    return Point2D;
}());
export { Point2D };
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(_dimensionX, _dimensionY, _dimensionZ) {
        var _this = _super.call(this, _dimensionX, _dimensionY) || this;
        _this.dimensionZ = _dimensionZ;
        return _this;
    }
    Point3D.prototype.calculateLength = function () {
        return Math.sqrt(Math.pow(this.dimensionX, 2) + Math.pow(this.dimensionY, 2) + Math.pow(this.dimensionZ, 2));
    };
    return Point3D;
}(Point2D));
export { Point3D };
