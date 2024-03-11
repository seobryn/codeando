import styles from './PackageList.module.css'

export function PackageList({ packages = [], isEmptyList = false }) {

    const [selectedPackage, setSelectedPackage] = useState({})

    const onClickPkg = (pkg) => {
        setSelectedPackage(pkg)
    }

    return (
        <ul className={styles.list}>
            {
                packages.map((pkg, idx) => (
                    <li key={`package_${idx}`} className={styles['list-item']} role="button">
                        <span className={styles.name}>{pkg.name}</span>
                        <span className={styles.version}>{pkg.version}</span>
                    </li>
                ))
            }
            {
                isEmptyList && <span className={styles.empty}>No se encontró este paquete en NPM</span>
            }
        </ul>
    )

}