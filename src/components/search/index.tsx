import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import styles from '../../assets/scss/Search.module.scss'

type SearchProps = {
  id: string
  label: string
}

const Search = ({ id, label }: SearchProps) => {
  return (
    <div className={styles.search}>
      <Box component="form" noValidate autoComplete="off">
        <TextField id={id} fullWidth label={label} variant="outlined" />
      </Box>
    </div>
  )
}

export default Search
