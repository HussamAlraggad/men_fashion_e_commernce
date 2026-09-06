import { Module } from "@medusajs/framework/utils"
import { TryOnService } from "./service"

export const TRY_ON_MODULE = "try_on"

const tryOnModule = Module(TRY_ON_MODULE, {
  service: TryOnService,
})

export default tryOnModule

export class TryOnModule {}