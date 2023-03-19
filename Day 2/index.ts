import { Point2D, Point3D } from './Shapes';

// 1
function printValue(val: number | string) {
    console.log(`${val} is of type ${typeof val}`);
}

printValue(4);

// 2-3
var _2dPoint: Point2D = new Point2D(4, 4);
var _3dPoint: Point3D = new Point3D(4, 4, 4);

console.log(_2dPoint.calculateLength());
console.log(_3dPoint.calculateLength());

// 4
interface Props<T> {
    names: T[];
    id: number
}

class PropsImpl<T> implements Props<T> {
    names: T[];
    id: number
}
 
let person: PropsImpl<string> = {
    names: ["1", "2"], id: 123
}
 
console.log(person);