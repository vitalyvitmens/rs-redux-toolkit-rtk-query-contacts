export const generateBreadcrumbItems = (pathNames: string[]) => {
  return pathNames.map((name, index) => {
    const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`
    const isLast = index === pathNames.length - 1

    return { name, routeTo, isLast }
  })
}
