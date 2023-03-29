import './index.scss'

export function Footer() {
  return (
    <section className="footer">
      <div className="container-center">
        <article className="content">
          <p>@ {new Date().getFullYear()} - Jônathas Bonfim</p>
        </article>
      </div>
    </section>
  )
}