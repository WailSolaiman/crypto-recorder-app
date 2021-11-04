export interface InvestmentData {
  coin: CoinData
  investment: string
  boughtAt: string
  soldAt?: string
  quantity: string
  profit: string
  status?: 'Active' | 'History'
}

export interface CoinData {
  number: number
  name: string
  symbol: string
  price: string
	marketCap: string
	volume?: string
}

export interface AuthUser {
  username: string | null
  password: string | null
  email: string | null
}

export interface UserPortfolio {
  user: AuthUser
  investmentData: InvestmentData[] | null
  portfolio: CoinData[] | null
}

export enum CoinRecoederType {
  Active = 'Active',
  History = 'History',
}
