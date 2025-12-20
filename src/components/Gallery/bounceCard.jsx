import { useEffect } from 'react';
import { gsap } from 'gsap';
import './bounceCard.css';

export default function BounceCards({
  className = '',
  images = [],
  links = [], 
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [
    'rotate(10deg) translate(-170px)',
    'rotate(-3deg)',
    'rotate(2deg) translate(170px)'
  ],
  enableHover = true
}) {
  useEffect(() => {
    gsap.fromTo(
      '.card',
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay
      }
    );
  }, [animationStagger, easeType, animationDelay]);

  const getNoRotationTransform = transformStr => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)');
    }
    return transformStr === 'none'
      ? 'rotate(0deg)'
      : `${transformStr} rotate(0deg)`;
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);

    if (match) {
      const currentX = parseFloat(match[1]);
      return baseTransform.replace(
        translateRegex,
        `translate(${currentX + offsetX}px)`
      );
    }

    return baseTransform === 'none'
      ? `translate(${offsetX}px)`
      : `${baseTransform} translate(${offsetX}px)`;
  };

  const pushSiblings = hoveredIdx => {
    if (!enableHover) return;

    images.forEach((_, i) => {
      gsap.killTweensOf(`.card-${i}`);
      const baseTransform = transformStyles[i] || 'none';

      if (i === hoveredIdx) {
        gsap.to(`.card-${i}`, {
          transform: getNoRotationTransform(baseTransform),
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto'
        });
      } else {
        const offsetX = i < hoveredIdx ? -50 : 50;
        const delay = Math.abs(hoveredIdx - i) * 0.05;

        gsap.to(`.card-${i}`, {
          transform: getPushedTransform(baseTransform, offsetX),
          duration: 0.4,
          ease: 'back.out(1.4)',
          delay,
          overwrite: 'auto'
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover) return;

    images.forEach((_, i) => {
      gsap.killTweensOf(`.card-${i}`);
      gsap.to(`.card-${i}`, {
        transform: transformStyles[i] || 'none',
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto'
      });
    });
  };

  return (
    <div
      className={`bounceCardsContainer ${className}`}
      style={{
        position: 'relative',
      }}
    >
      {images.map((src, idx) => {
        const href = links[idx]; 

        return (
          <div
            key={idx}
            className={`card card-${idx}`}
            style={{
              transform: transformStyles[idx] ?? 'none',
              cursor: href ? 'pointer' : 'default'
            }}
            onMouseEnter={() => pushSiblings(idx)}
            onMouseLeave={resetSiblings}
            onClick={() => {
              if (href)  window.open(href, '_blank', 'noopener,noreferrer');
            }}
          >
            <img className="image" src={src} alt={`card-${idx}`} />
          </div>
        );
      })}
    </div>
  );
}
