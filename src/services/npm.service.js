const apiURL = "https://api.npms.io/v2"

export async function getPackages(pkgName) {
    const response = await fetch(`${apiURL}/search?q=${pkgName}`)
    const packages = await response.json()

    return packages.results.map((pkg) => ({
        name: pkg.package.name,
        version: pkg.package.version,
        publisher: pkg.package.publisher.username,
        description: pkg.package.description
    }))
}