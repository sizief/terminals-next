import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <>first page header </>
      <main>{children}</main>
      <Footer />
    </>
  )
}
