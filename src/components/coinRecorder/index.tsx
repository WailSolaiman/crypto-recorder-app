import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

import Investment from '../investment'

import { CoinRecoederType, InvestmentData } from '../../types/Coin.types'

import styles from '../../assets/scss/CoinRecorder.module.scss'

type CoinRecorderProps = {
  recorder: CoinRecoederType
  recorderData: InvestmentData[]
}

const CoinRecorder = ({ recorder, recorderData }: CoinRecorderProps) => {
  return (
    <div className={styles.coinRecorder}>
      <Box className={styles.coinContainer}>
        <Typography variant="h4" sx={{ margin: 1 }} gutterBottom component="div">
          {recorder}
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableBody>
              {recorderData &&
                recorderData.map((record) => (
                  <Investment key={record.coin.number} recorder={recorder} investmentData={record} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  )
}

export default CoinRecorder
