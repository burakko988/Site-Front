import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const Particle = () => {
  const optionValue: any = {
    name: 'Snow',
    fullScreen: {
      zIndex: -1,
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
        },
      },
      color: {
        value: '#2ED87B',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 1,
      },
      size: {
        value: 11,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'bottom',
        straight: true,
      },
      wobble: {
        enable: true,
        distance: 10,
        speed: 10,
      },
      zIndex: {
        value: {
          min: 0,
          max: 30,
        },
        opacityRate: 10,
        sizeRate: 10,
        velocityRate: 10,
      },
    },
    background: {
      color: '#222f3e',
    },
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);
  return <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={optionValue} />;
};

export default Particle;
