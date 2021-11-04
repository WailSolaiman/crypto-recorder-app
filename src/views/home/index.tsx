import Grid from '@mui/material/Grid'

import CoinRecoeder from '../../components/coinRecorder'
import CoinPortfolio from '../../components/coinPortfolio'
import Search from '../../components/search'
import SearchResults from '../../components/searchResults'

import { UserPortfolio, AuthUser, CoinData, CoinRecoederType, InvestmentData } from '../../types/Coin.types'

import styles from '../../assets/scss/Home.module.scss'

const user: AuthUser = {
  username: 'willard82',
  password: '44125544',
  email: 'wail@hotmail.com',
}

const cryptos: CoinData[] = [
  {
    number: 1,
    name: 'BitCoin',
    symbol: 'BTC',
    price: '$63,089.72',
    marketCap: '$1,189,013,567,172',
    volume: '$1,189,013,567,172',
  },
  {
    number: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$4,447.25',
    marketCap: '$523,640,194,956',
    volume: '$1,189,013,567,172',
  },
  {
    number: 3,
    name: 'Binance Coin',
    symbol: 'BNB',
    price: '$547.00',
    marketCap: '$91,298,293,850',
    volume: '$1,189,013,567,172',
  },
  {
    number: 4,
    name: 'Tether',
    symbol: 'USDT',
    price: '$1.00',
    marketCap: '$70,564,975,004',
    volume: '$1,189,013,567,172',
  },
  {
    number: 5,
    name: 'Cardano',
    symbol: 'ADA',
    price: '$1.99',
    marketCap: '$65,652,351,285',
    volume: '$1,189,013,567,172',
  },
  {
    number: 6,
    name: 'BitCoin',
    symbol: 'BTC',
    price: '$63,089.72',
    marketCap: '$1,189,013,567,172',
    volume: '$1,189,013,567,172',
  },
  {
    number: 7,
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$4,447.25',
    marketCap: '$523,640,194,956',
    volume: '$1,189,013,567,172',
  },
  {
    number: 8,
    name: 'Binance Coin',
    symbol: 'BNB',
    price: '$547.00',
    marketCap: '$91,298,293,850',
    volume: '$1,189,013,567,172',
  },
  {
    number: 9,
    name: 'Tether',
    symbol: 'USDT',
    price: '$1.00',
    marketCap: '$70,564,975,004',
    volume: '$1,189,013,567,172',
  },
  {
    number: 10,
    name: 'Cardano',
    symbol: 'ADA',
    price: '$1.99',
    marketCap: '$65,652,351,285',
    volume: '$1,189,013,567,172',
  },
]

const portfolio: CoinData[] = [
  {
    number: 1,
    name: 'BitCoin',
    symbol: 'BTC',
    price: '$63,089.72',
    marketCap: '$1,189,013,567,172',
    volume: '$1,189,013,567,172',
  },
  {
    number: 5,
    name: 'Cardano',
    symbol: 'ADA',
    price: '$1.99',
    marketCap: '$65,652,351,285',
    volume: '$1,189,013,567,172',
  },
]

const active: InvestmentData[] = [
  {
    coin: { number: 3, name: 'Binance Coin', symbol: 'BNB', price: '$547.00', marketCap: '$91,298,293,850' },
    investment: '$1000.00',
    boughtAt: '$547.00',
    soldAt: '$647.00',
    quantity: '2 (BNB)',
    profit: '$4250,00',
  },
  {
    coin: { number: 3, name: 'Binance Coin', symbol: 'BNB', price: '$547.00', marketCap: '$91,298,293,850' },
    investment: '$1000.00',
    boughtAt: '$547.00',
    soldAt: '$647.00',
    quantity: '2 (BNB)',
    profit: '$4250,00',
  },
]

const history: InvestmentData[] = [
  {
    coin: { number: 3, name: 'Binance Coin', symbol: 'BNB', price: '$547.00', marketCap: '$91,298,293,850' },
    investment: '$1000.00',
    boughtAt: '$547.00',
    soldAt: '$647.00',
    quantity: '2 (BNB)',
    profit: '$4250,00',
  },
]

const userPortfolio: UserPortfolio = {
  user,
  portfolio,
  investmentData: null,
}

const Home = () => {
  return (
    <Grid container spacing={4} className={styles.container}>
      <Grid item xs={12}>
        <Search id="search-crypto" label="Search Crypto" />
      </Grid>
      <Grid item xs={12}>
        <SearchResults cryptos={cryptos} title="Today's Cryptocurrency Prices by MarketCap" />
      </Grid>
      <Grid item xs={12}>
        <CoinPortfolio portfolio={userPortfolio.portfolio} label="Portfolio" />
      </Grid>
      <Grid item xs={12} xl={6}>
        <CoinRecoeder recorder={CoinRecoederType.Active} recorderData={active} />
      </Grid>
      <Grid item xs={12} xl={6}>
        <CoinRecoeder recorder={CoinRecoederType.History} recorderData={history} />
      </Grid>
    </Grid>
  )
}

export default Home
