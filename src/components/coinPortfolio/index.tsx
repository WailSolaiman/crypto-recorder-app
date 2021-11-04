import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

import Coin from '../coin'

import { CoinData } from '../../types/Coin.types'

import styles from '../../assets/scss/CoinPortfolio.module.scss'

type CoinPortfolioProps = {
  label: string
  portfolio: CoinData[] | null
}

const CoinPortfolio = ({ label, portfolio }: CoinPortfolioProps) => {
  return (
    <div className={styles.coinPortfolio}>
      <Box className={styles.coinContainer}>
        <Typography variant="h4" sx={{ margin: 1 }} gutterBottom component="div">
          {label}
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableBody>{portfolio && portfolio.map((coin) => <Coin key={coin.number} coin={coin} />)}</TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  )
}

export default CoinPortfolio
