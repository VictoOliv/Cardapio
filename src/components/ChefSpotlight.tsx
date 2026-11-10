import { assetUrl } from '../utils'

export function ChefSpotlight() {
  return (
    <section
      className="chef-spotlight-section menu-section"
      aria-labelledby="chef-titulo"
    >
      <h2 id="chef-titulo" className="section-title">
        O chef
      </h2>
      <figure className="chef-spotlight">
        <div className="chef-spotlight-media">
          <img
            src={assetUrl('img/chefe-victor.webp')}
            alt="Master chefe Victor, de chapéu e uniforme de cozinha"
            width={320}
            height={320}
            loading="lazy"
          />
        </div>
        <figcaption>
          <span className="chef-spotlight-lead">
            Tudo preparado pelo master chefe Victor.
          </span>
          <span className="chef-spotlight-sub">O mais renomado da casa</span>
        </figcaption>
      </figure>
    </section>
  )
}
