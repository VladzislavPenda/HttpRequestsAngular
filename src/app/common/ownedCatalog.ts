export interface OwnedCatalog {
  id: string,
  name: string,
  parent?: OwnedCatalog,
  child?: OwnedCatalog
}
