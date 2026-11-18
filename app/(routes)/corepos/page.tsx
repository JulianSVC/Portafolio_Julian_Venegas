import CorePOSClient from "./CorePOSClient"

export const metadata = {
  title: "CorePOS | Sistema de Punto de Venta",
  description:
    "Sistema de punto de venta local para tiendas en Colombia. Control de ventas, inventario y reportes avanzados.",
}

export default function CorePOSPage() {
  return <CorePOSClient />
}