export enum ShadeStyle {
    Shaded,
    Bold,
    Plain
}

export interface IPoint {
    dimensionX: number;
    dimensionY: number;

    calculateLength(): number;
}

export class Point2D implements IPoint {
    dimensionX: number;
    dimensionY: number;

    constructor(_dimensionX: number, _dimensionY: number) {
        this.dimensionX = _dimensionX;
        this.dimensionY = _dimensionY;
    }

    calculateLength(): number {
        return Math.sqrt(Math.pow(this.dimensionX, 2) + Math.pow(this.dimensionY, 2));
    }
}

export class Point3D extends Point2D {
    dimensionZ: number;
    
    constructor(_dimensionX: number, _dimensionY: number, _dimensionZ: number) {
        super(_dimensionX, _dimensionY);
        this.dimensionZ = _dimensionZ;
    }

    calculateLength(): number {
        return Math.sqrt(Math.pow(this.dimensionX, 2) + Math.pow(this.dimensionY, 2) + Math.pow(this.dimensionZ, 2));
    }
}
