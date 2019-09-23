export interface pagosInterface{
    id?:  number;
    detalle?: string;
    ingresos?: number;
    egresos?: number;
    cantidadTotal?: number;
    monto?: number;
    fecha?: Date;
}