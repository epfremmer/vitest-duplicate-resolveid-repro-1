/**
 * From https://vitejs.dev/guide/api-plugin#virtual-modules-convention
 */
export default function myPlugin() {
  const virtualModuleId = 'virtual:my-module'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'my-plugin', // required, will show up in warnings and errors
    resolveId(id: string) {
      if (id === resolvedVirtualModuleId) {
        throw new Error(`resolveId called a second time with the resolved ${JSON.stringify(resolvedVirtualModuleId)}???`)
      }

      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id: string) {
      if (id === resolvedVirtualModuleId) {
        return `export const msg = "from virtual module"`
      }
    },
  }
}