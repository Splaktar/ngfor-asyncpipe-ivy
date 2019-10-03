# Ivy Template Check Issue

Reproduction of an issue building a template that uses the combination of the following
1. `*ngFor`
1. `| async`
1. `HttpClient`

With the following build configuration
1. `"enableIvy": true`
1. `"strictNullChecks": true`
1. `"fullTemplateTypeCheck": true,`

Disabling any of these build options will allow for a successful build.
With all of the options enabled, it generates this error:
```ts
ERROR in src/app/version-picker.html(6,25): Type 'VersionInfo[] | null' is not assignable to type 'VersionInfo[] | Iterable<VersionInfo> | undefined'.
src/app/version-picker.html(8,8): Object is of type 'unknown'.
```
