import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

import { CoinData } from '../../types/Coin.types'

import styles from '../../assets/scss/SearchResults.module.scss'

type SearchResultsProps = {
	cryptos: CoinData[]
	title: string
}

const SearchResults = ({ cryptos, title }: SearchResultsProps) => {
  return (
    <div className={styles.searchResults}>
      <Typography variant="h4" gutterBottom component="div">
        {title}
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" width="2%">
                #
              </TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">MarketCap</TableCell>
              <TableCell align="center">Volume</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cryptos.map((icon) => (
              <TableRow key={icon.number}>
                <TableCell align="center" width="2%">
                  {icon.number}
                </TableCell>
                <TableCell align="center">
                  {icon.name} <span>{icon.symbol}</span>
                </TableCell>
                <TableCell align="center">{icon.price}</TableCell>
                <TableCell align="center">{icon.marketCap}</TableCell>
                <TableCell align="center">{icon.volume}</TableCell>
                <TableCell align="center">
                  <Button color="primary" variant="text" size="large">
                    ADD
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default SearchResults
