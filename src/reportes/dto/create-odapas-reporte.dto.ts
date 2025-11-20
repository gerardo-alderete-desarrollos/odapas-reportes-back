export class CreateOdapasReporteDto {
  folio: string;
  nombre: string;
  telefono: string;
  categoria: string;
  subcategoria: string;
  ubicacion: string;
  descripcion: string;
  evidencia_url: string;
  estado: string;
  fecha?: Date;
  usuario_asignado: string;
  area: string;
}
