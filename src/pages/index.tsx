// index.tsx - reemplaza el bloque <main> completo

import type {ReactNode} from 'react';
import {useState, useEffect, useCallback} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
const MOCKUPS = [
  {
    src: '/img/mockups/Mapa de tiendas.png',
    title: 'Mapa de tiendas',
    description: 'Encuentra comercios cercanos a ti en un mapa interactivo y accede a sus escaparates.',
  },
  {
    src: '/img/mockups/Escaparate Cliente.png',
    title: 'Escaparate del comercio',
    description: 'Explora los productos de cada tienda con una experiencia visual atractiva y ordenada.',
  },
  {
    src: '/img/mockups/Escaparate Cliente con Promoción.png',
    title: 'Promociones destacadas',
    description: 'Descubre ofertas y promociones activas de los comercios que sigues.',
  },
  {
    src: '/img/mockups/Colecciones.png',
    title: 'Colecciones',
    description: 'Navega por colecciones temáticas y encuentra exactamente lo que buscas.',
  },
  {
    src: '/img/mockups/Conjuntos.png',
    title: 'Conjuntos',
    description: 'Inspírate con conjuntos y combinaciones creadas por los propios comercios.',
  },
  {
    src: '/img/mockups/Detalles de conjunto.png',
    title: 'Detalle de producto',
    description: 'Consulta toda la información de cada artículo antes de añadirlo a tu cesta.',
  },
  {
    src: '/img/mockups/Cesta.png',
    title: 'Tu cesta de compra',
    description: 'Gestiona tus artículos seleccionados y realiza tu pedido de forma sencilla.',
  },
  {
    src: '/img/mockups/Chat.png',
    title: 'Chat con el comercio',
    description: 'Contacta directamente con la tienda para resolver cualquier duda al instante.',
  },
  {
    src: '/img/mockups/Notificaciones.png',
    title: 'Notificaciones',
    description: 'Mantente al día con alertas de tus tiendas favoritas, pedidos y promociones.',
  },
  {
    src: '/img/mockups/Nuevas promociones.png',
    title: 'Nuevas promociones',
    description: 'Recibe avisos en tiempo real cuando un comercio lance una nueva oferta.',
  },
];

function MockupSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  }, [animating]);

  const prev = () => goTo((current - 1 + MOCKUPS.length) % MOCKUPS.length);
  const next = () => goTo((current + 1) % MOCKUPS.length);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(c => (c + 1) % MOCKUPS.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const mockup = MOCKUPS[current];

  return (
    <section className={styles.sliderSection}>
      <h2 className={styles.sliderTitle}>Descubre la app</h2>

      <div className={styles.sliderWrapper}>
        <button className={styles.sliderBtn} onClick={prev} aria-label="Anterior">
          ‹
        </button>

        <div className={clsx(styles.sliderContent, animating && styles.sliderFadeOut)}>
          <div className={styles.phoneFrame}>
            <img
              src={mockup.src}
              alt={mockup.title}
              className={styles.mockupImg}
            />
          </div>
          <div className={styles.mockupCaption}>
            <h3 className={styles.mockupTitle}>{mockup.title}</h3>
            <p className={styles.mockupDesc}>{mockup.description}</p>
          </div>
        </div>

        <button className={styles.sliderBtn} onClick={next} aria-label="Siguiente">
          ›
        </button>
      </div>

      <div className={styles.dots}>
        {MOCKUPS.map((_, i) => (
          <button
            key={i}
            className={clsx(styles.dot, i === current && styles.dotActive)}
            onClick={() => goTo(i)}
            aria-label={`Ir a diapositiva ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}{' '}
          <img
            src="/img/logo_fondo_blanco.png"
            alt="Logo de DondeSiempre"
            style={{ height: 48, width: 'auto', verticalAlign: 'middle', borderRadius: 12 }}
          />
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Conócenos
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title} Docs`} description="Documentación de DondeSiempre">
      <HomepageHeader />
      <main>
        <MockupSlider />
          {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}