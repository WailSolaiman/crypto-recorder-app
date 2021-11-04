import React from 'react'
import Container from '@mui/material/Container'

import Footer from '../footer'
import Header from '../header'

import styles from '../../assets/scss/Layout.module.scss'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <React.Fragment>
      <Header title="Crypto Recorder App" />
      <Container maxWidth="lg" className={styles.container}>
        {props.children}
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
