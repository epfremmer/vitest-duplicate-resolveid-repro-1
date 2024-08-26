# Vitest Virtual Import Issue Reproduction

Minimal reproduction to demonstrate secondary calls to `resolveId` on plugins which use virtual modules

# Steps to reproduce

* `yarn install`
* `yarn test`

I've modified the [example plugin](https://vitejs.dev/guide/api-plugin#virtual-modules-convention) from
the docs slightly to throw an error when resolveId is called a second time with the previously
resolved module id.

I'm not sure if this is the expected behavior, but it seems odd that the resolved module id
would be attempted to be resolved a second time.
