import Typography from '@mui/material/Typography'

import styles from '../../assets/scss/Header.module.scss'

type HeaderProps = {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <Typography variant="h2" sx={{ padding: 2 }} gutterBottom component="div">
        {title}
      </Typography>
    </div>
  )
}

export default Header
