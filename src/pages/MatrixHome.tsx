import { useEffect, useState } from 'react';
import { ButtonLink } from '../components';
import { publicPath, routePath } from '../paths';
import './matrix-home.css';

const name = 'Vladislav Fidrik';
const role = 'UX/UI & Product Designer';
const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%+-<>/';
const codeGlyphs = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';
const titleStart = 470;
const roleStart = 1130;
const introEnd = 4300;

const projects = [
  {
    side: 'left',
    id: '1:890',
    icon: 'wellness',
    href: '/case-study-1',
    label: 'From Social Audio to Wellness',
  },
  {
    side: 'right',
    id: '1:904',
    icon: 'zuzuzoo',
    href: '/case-study-2',
    label: 'Zuzuzoo',
  },
];

const matrixImage = (file: string) => publicPath(`matrix/${file}.webp`);

function scramble(value: string, elapsed: number, start: number, duration: number) {
  const progress = Math.min(1, Math.max(0, (elapsed - start) / duration));
  const revealed = Math.floor(progress * value.length);
  const frame = Math.floor(elapsed / 65);

  return Array.from(value, (letter, index) => {
    if (letter === ' ' || index < revealed) return letter;
    return glyphs[(frame * (7 + index % 5) + index * 11) % glyphs.length];
  }).join('');
}

function MatrixHeading() {
  const [elapsed, setElapsed] = useState<number | null>(() =>
    matchMedia('(prefers-reduced-motion: reduce)').matches ? null : 0,
  );

  useEffect(() => {
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches) {
      setElapsed(null);
      return;
    }

    const start = performance.now();
    const interval = window.setInterval(() => {
      const time = performance.now() - start;
      if (time >= introEnd || motion.matches) {
        window.clearInterval(interval);
        setElapsed(null);
      } else {
        setElapsed(time);
      }
    }, 65);

    return () => window.clearInterval(interval);
  }, []);

  const [firstName, lastName] = (elapsed === null ? name : scramble(name, elapsed, titleStart, 3000)).split(' ');
  const jobTitle = elapsed === null ? role : scramble(role, elapsed, roleStart, introEnd - roleStart);

  return (
    <header className="matrix-heading">
      <h1 aria-label={name}>
        <span aria-hidden="true" style={{ opacity: elapsed !== null && elapsed < titleStart ? 0 : 1 }}>{firstName}</span>
        <span aria-hidden="true" style={{ opacity: elapsed !== null && elapsed < titleStart ? 0 : 1 }}>{lastName}</span>
      </h1>
      <p className="matrix-role">
        <span className="matrix-sr-only">{role}</span>
        <span aria-hidden="true" style={{ opacity: elapsed !== null && elapsed < roleStart ? 0 : 1 }}>{jobTitle}</span>
      </p>
    </header>
  );
}

function CodeField() {
  return (
    <div className="matrix-code" aria-hidden="true">
      {Array.from({ length: 24 }, (_, column) => (
        <span key={column}>
          {Array.from({ length: 37 }, (_, row) => (
            codeGlyphs[(column * 13 + row * (column + 5) + row * row) % codeGlyphs.length]
          )).join('\n')}
        </span>
      ))}
    </div>
  );
}

export default function MatrixHome() {
  return (
    <div className="matrix-home">
      <CodeField />
      <MatrixHeading />

      <div className="matrix-stage">
        <img className="matrix-portrait" src={matrixImage('portrait')} alt="" width="1536" height="1024" fetchPriority="high" />
        {projects.map((project) => (
          <a
            key={project.id}
            className={`matrix-choice matrix-choice--${project.side}`}
            href={routePath(project.href)}
            data-node-id={project.id}
          >
            <span className="matrix-choice__lift">
              <img className="matrix-hand" src={matrixImage(`hand-${project.side}`)} alt="" width="525" height="479" />
              <span className="matrix-choice__token">
                <img src={matrixImage(project.icon)} alt="" width="88" height="88" />
              </span>
            </span>
            <span className="matrix-choice__label">
              {project.label}
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5 9 3m-5.5 0H9v5.5" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </span>
          </a>
        ))}
      </div>

      <footer className="matrix-footer">
        <span>Gdańsk, Poland</span>
        <nav aria-label="Contact">
          <ButtonLink link="Resume" />
          <ButtonLink link="Linkedin" />
          <ButtonLink link="fidrikx@gmail.com" />
        </nav>
      </footer>
    </div>
  );
}
