import { Module } from "@medusajs/framework/utils"
import { MeasurementsService } from "./service"

export const MEASUREMENTS_MODULE = "measurements"

const measurementsModule = Module(MEASUREMENTS_MODULE, {
  service: MeasurementsService,
})

export default measurementsModule

export class MeasurementsModule {}