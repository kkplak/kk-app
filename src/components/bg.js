import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { polygonPathName, loadPolygonPath } from "tsparticles-path-polygon";


export default function BG() {
  const particlesInit = useCallback(async (engine) => {
    await loadPolygonPath(engine);
  }, []);

  return (
    <Particles
      options={{
        fpsLimit: 50,
        particles: {
          color: {
            value: "#00FFFF",
            animation: {
              enable: false,
              speed: 10
            }
          },
          move: {
            attract: {
              enable: true,
              rotate: {
                distance: 100,
                x: 2000,
                y: 2000
              }
            },
            direction: "none",
            enable: true,
            outModes: {
              default: "destroy"
            },
            path: {
              clamp: false,
              enable: true,
              delay: {
                value: 0
              },
              generator: polygonPathName,
              options: {
                sides: 6,
                turnSteps: 30,
                angle: 30
              }
            },
            random: false,
            speed: 2,
            straight: false,
            trail: {
              fillColor: "#000",
              length: 20,
              enable: true
            }
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 0
          },
          opacity: {
            value: 1
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 1
          }
        },
        background: {
          color: "#00"
        },
        fullScreen: {
          zIndex: -1
        },
        detectRetina: true,
        emitters: {
          direction: "none",
          rate: {
            quantity: 4,
            delay: 0.1
          },
          size: {
            width: 0,
            height: 0
          },
          position: {
            x: 50,
            y: 0
          }
        }
      }}
      init={particlesInit}
    />
  );
}
