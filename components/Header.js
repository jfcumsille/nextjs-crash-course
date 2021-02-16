import headerStyles from '../styles/Header.module.css'

const Header = () => {
  const x = 2
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Prueba Iframe</span>
      </h1>
    </div>
  )
}

export default Header