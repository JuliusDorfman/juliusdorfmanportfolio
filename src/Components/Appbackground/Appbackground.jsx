import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './Appbackground.sass';

export const Appbackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // console.log("Engine 1", engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  // eslint-disable-next-line no-unused-vars
  const particlesLoaded = useCallback(async (container) => {
    // await console.log("container 2", container);
  }, []);

  const randomNumber = (num) => {
    Math.floor(Math.random() * num);
  };
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
          size: 'cover'
        },
        ZIndex: -100,
        fpsLimit: 90,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: randomNumber(5),
            },
            repulse: {
              distance: 150,
              duration: 10,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: .2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 20,
          },
          opacity: {
            value: .1,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 7 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Appbackground;