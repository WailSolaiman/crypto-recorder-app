import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { InvestmentData, CoinRecoederType } from '../../types/Coin.types'

import styles from '../../assets/scss/Investment.module.scss'

type InvestmentDataProps = {
  recorder: CoinRecoederType
  investmentData: InvestmentData
}

const Investment = ({ recorder, investmentData }: InvestmentDataProps) => {
  const { coin, investment, boughtAt, soldAt, quantity, profit, status = recorder } = investmentData
  return (
    <TableRow key={coin.name} className={styles.investment}>
      <TableCell align="center">
        {coin.name} <span>({coin.symbol})</span>
        <Divider variant="middle" />
        <span>Bought At:</span> {boughtAt}
        {status === 'History' ? (
          <div>
            <Divider variant="middle" />
            <span>Sold At:</span> {soldAt}
          </div>
        ) : null}
      </TableCell>
      <TableCell align="center">
        {status === 'Active' ? (
          <div>
            <span>Investment:</span> {investment}
            <Divider variant="middle" />
          </div>
        ) : null}
        <span>Quantity:</span> {quantity}
        <Divider variant="middle" />
        <span>Profit:</span> {profit}
      </TableCell>
      <TableCell align="center">
        {status === 'Active' ? (
          <Button variant="contained" color="error" size="large">
            SELL
          </Button>
        ) : (
          <Button variant="contained" color="warning" size="large">
            REMOVE
          </Button>
        )}
      </TableCell>
    </TableRow>
  )
}

export default Investment
