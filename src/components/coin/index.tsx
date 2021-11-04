import Button from '@mui/material/Button'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { CoinData } from '../../types/Coin.types'

import styles from '../../assets/scss/Coin.module.scss'

type CoinComponentProps = {
  coin: CoinData
}

const Coin = ({ coin }: CoinComponentProps) => {
  return (
    <TableRow key={coin.name} className={styles.coin}>
      <TableCell align="center">
        {coin.name} <span>({coin.symbol})</span>
      </TableCell>
      <TableCell align="center">
        <span>($)</span> {coin.price}
      </TableCell>
      <TableCell align="center">
        <span>(MC.)</span> {coin.marketCap}
      </TableCell>
      <TableCell align="center">
        <span>(Vol.)</span> {coin.volume}
      </TableCell>
      <TableCell align="center">
        <Button variant="contained" color="success" size="large">
          BUY
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default Coin
