import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import { useRef } from "react";

function RevolvingLogo({ background, color }) {
  const ref = useRef(null);
  const words = " SUBLIME • DESIGNS • CONSTRUCTION • ASSOCIATES • LIMITED •";

  useEffect(() => {
    const containerRef = ref.current;
    const textElement = containerRef.querySelectorAll(".chara");

    const totalChars = words.length;
    const angle = (2 * Math.PI) / totalChars;

    textElement.forEach((chara, index) => {
      chara.style.transform = `rotate(${index * angle}rad)`;
    });
  }, [words]);
  return (
    <Spiner ref={ref} $backroundcolor={background} $textcolor={color}>
      <Svgholder>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_2"
          data-name="Layer 2"
          viewBox="0 0 500 300"
        >
          <g>
            <g>
              <polygon
                points="203.91 191.03 388.77 110.91 342.07 191.94 203.91 191.03"
                fill="currentColor"
              />
              <polygon
                points="346.52 191.94 355.81 191.94 393.22 129.37 431.99 191.94 449.95 191.94 397.32 106.75 346.52 191.94"
                fill="currentColor"
              />
              <polygon
                points="163.31 191.94 192.73 191.94 254.01 164.57 126.87 114.96 163.31 191.94"
                fill="currentColor"
              />
              <polygon
                points="144.92 191.94 158.75 191.94 119.9 111.28 51.03 191.94 74.18 191.94 119.05 136.86 144.92 191.94"
                fill="currentColor"
              />
              <polygon
                points="290.58 149.52 304.95 143.1 276.1 104.51 227.33 149.37 232.91 152.1 268.75 119.69 290.58 149.52"
                fill="currentColor"
              />
              <polygon
                points="265.18 109.45 223.44 147.51 220.23 147.51 190.16 135.13 210.89 127.32 210.89 114.56 227.33 114.56 227.33 130.36 228.65 130.41 231.5 122.72 232.02 121.23 232.82 119.98 233.5 119.41 234.24 119.01 234.93 118.78 265.18 109.45"
                fill="currentColor"
              />
              <rect
                x="100.27"
                y="162.35"
                width="11.97"
                height="11.97"
                fill="currentColor"
              />
              <rect
                x="115.92"
                y="162.35"
                width="12.57"
                height="11.63"
                fill="currentColor"
              />
              <rect
                x="100.27"
                y="176.97"
                width="11.97"
                height="11.97"
                fill="currentColor"
              />
              <rect
                x="115.92"
                y="176.97"
                width="12.57"
                height="11.63"
                fill="currentColor"
              />
              <rect
                x="258.21"
                y="136.38"
                width="6.15"
                height="5.53"
                fill="currentColor"
              />
              <rect
                x="265.31"
                y="136.38"
                width="6.15"
                height="5.53"
                fill="currentColor"
              />
              <rect
                x="258.21"
                y="143"
                width="6.15"
                height="5.53"
                fill="currentColor"
              />
              <rect
                x="265.31"
                y="143"
                width="6.15"
                height="5.53"
                fill="currentColor"
              />
              <rect
                x="382.7"
                y="162.52"
                width="12.57"
                height="11.38"
                fill="currentColor"
              />
              <rect
                x="398.23"
                y="162.52"
                width="12.57"
                height="11.38"
                fill="currentColor"
              />
              <rect
                x="382.7"
                y="176.89"
                width="12.57"
                height="11.38"
                fill="currentColor"
              />
              <rect
                x="398.23"
                y="176.89"
                width="12.57"
                height="11.38"
                fill="currentColor"
              />
              <path
                d="M306.34,23.05a10,10,0,0,1,4.79-1.15,57.13,57.13,0,0,0,23.61-7.4c1.38-.79,3.05-1.67,4.46-.94a4.72,4.72,0,0,1,1.63,1.77L366,54.78c-1.91-.37-3.17-2.15-4.23-3.78L342.56,21.36a5.34,5.34,0,0,0-2.74-2.57c-1.25-.33-2.53.28-3.69.85a75.7,75.7,0,0,1-29.31,7.62c-1.3.07-2.09.09-2.05-1.47A3.54,3.54,0,0,1,306.34,23.05Z"
                fill="currentColor"
              />
              <path
                d="M306.31,39.32a4.62,4.62,0,0,0,2.9.13c9.28-1.61,18.69-3.38,27.1-7.64,1.68-.85,3.53-1.84,5.37-1.37s2.92,2.09,3.92,3.62l14,21.46c1.79,2.75,3.66,5.58,6.35,7.46Q355.54,46,344,29.62a5.72,5.72,0,0,0-1.94-2c-1.27-.64-2.79-.27-4.16.12L308.82,36c-.82.23-2.69.38-3.25,1.06S305.61,39,306.31,39.32Z"
                fill="currentColor"
              />
              <path
                d="M309.76,45.78c3.19-.51,6.4-1,9.55-1.77a67,67,0,0,0,15.08-5.53c1.93-1,4-2.1,6.13-1.66s3.6,2.26,4.86,4c6.81,9.4,12.4,19.77,20.47,28.13-7.57-12.68-16.28-24.64-25-36.58,0,0-7.63,3.43-8.36,3.71q-4.27,1.65-8.69,2.88c-2.94.82-5.92,1.5-8.92,2q-2.31.4-4.62.69c-1.3.16-3,0-4.23.56a1.71,1.71,0,0,0-.55,2.69C306.45,46.27,308.36,46,309.76,45.78Z"
                fill="currentColor"
              />
              <path
                d="M305.38,48.8a2.28,2.28,0,0,0,.84,3.18,4.23,4.23,0,0,0,2.18.26c10.69-.73,20.86-4.69,30.74-8.83a3.78,3.78,0,0,1,2.07-.43,3.71,3.71,0,0,1,2.15,1.76q3.06,4.26,5.7,8.79c4.77,8.14,11,15.38,17,22.67-.55-2.85-2.25-5.31-3.91-7.68L341.35,38.87a100.68,100.68,0,0,1-21.14,7.67A45.38,45.38,0,0,1,305.38,48.8Z"
                fill="currentColor"
              />
              <path
                d="M314.27,55c8.64-1.6,17.4-3.25,25.27-7.16a3.07,3.07,0,0,1,2.61-.45,2.9,2.9,0,0,1,1,1L365.72,80c-1.86-.76-3.15-2.44-4.36-4L344.44,53.36a6.29,6.29,0,0,0-2.83-2.49c-1.55-.48-3.18.28-4.64,1a72.54,72.54,0,0,1-17.46,5.75,72.53,72.53,0,0,1-9,1.15c-1.07.07-7.21,1-5.53-1.37.83-1.19,2.7-1.14,4-1.38Z"
                fill="currentColor"
              />
              <path
                d="M304.54,66.77a4.93,4.93,0,0,0,2.93.37c11.09-.9,22.36-2.73,32.12-8.06a4.46,4.46,0,0,1,2.55-.79c1.16.14,2,1.18,2.63,2.13q9.9,14.07,20.65,27.53a3.84,3.84,0,0,0-.22-3.24,12.06,12.06,0,0,0-2-2.66c-7.52-8.23-14-17.31-20.75-26.22a1.9,1.9,0,0,0-2.85-.71,122.1,122.1,0,0,1-31.41,8.45c-1,.13-3.35-.06-4.17.56S303.75,66.3,304.54,66.77Z"
                fill="currentColor"
              />
              <path
                d="M306,70.21a4.74,4.74,0,0,0-2.93.66c-.81.62-1,2.08-.13,2.59a2.41,2.41,0,0,0,1.41.16,142.41,142.41,0,0,0,32.64-7,6.82,6.82,0,0,1,4.1-.52,6.38,6.38,0,0,1,2.41,1.65,72.36,72.36,0,0,1,11.94,15c2.47,4.12,6.61,7.17,9.78,10.77A158,158,0,0,0,344,65.5a7.25,7.25,0,0,0-3-2.2,7.49,7.49,0,0,0-4.28.52C326.43,67.1,316.81,70.15,306,70.21Z"
                fill="currentColor"
              />
              <path
                d="M301.08,78.7a1.76,1.76,0,0,0,1.33,1.38,5.22,5.22,0,0,0,2,0L314.1,79c6.55-.78,13.22-1.59,19.25-4.26,2.72-1.21,5.4-2.81,8.37-2.9L365,100.11c-.31-2.25-1.78-4.14-3.2-5.92l-17.1-21.44a7.79,7.79,0,0,0-2.33-2.21c-1.74-.91-3.85-.39-5.74.12a236.84,236.84,0,0,1-29.73,6C305.7,76.84,300.86,76.62,301.08,78.7Z"
                fill="currentColor"
              />
              <path
                d="M301.57,83.43c-.89.64-1.89,1.7-1.37,2.68.43.81,1.57.82,2.49.72,10.71-1.17,21.64-2.39,31.47-6.82,1.69-.76,3.53-1.64,5.32-1.16A7.57,7.57,0,0,1,343,81.63l12,14.14c2.48.5,4.17,3.19,5.54,5.32s3,4.44,5.45,5L344.71,79.2c-1.16-1.47-2.48-3-4.31-3.36-1.58-.28-3.15.42-4.62,1C325.08,81.42,313.14,82.35,301.57,83.43Z"
                fill="currentColor"
              />
              <path
                d="M296.93,94.31a83.39,83.39,0,0,0,13.55-2.21L332,87.39c2.53-.56,5.19-1.11,7.67-.36,3.28,1,5.46,4,7.51,6.73a131.66,131.66,0,0,0,19,20.52c-3.37-9.32-12.74-15-18.43-23.09-1.68-2.39-3.18-5.13-5.8-6.42s-5.52-.82-8.3-.35q-15.54,2.61-30.9,6.3c-1.1.26-2.81.36-3.77,1C298.35,92.07,297.48,94.28,296.93,94.31Z"
                fill="currentColor"
              />
              <path
                d="M294.92,100.59a3.45,3.45,0,0,0,2.78.55c11.6-1.09,23.36-2.22,34.27-6.33,1.89-.72,3.87-1.54,5.88-1.23,2.72.42,4.67,2.78,6.41,4.92a141.65,141.65,0,0,0,20.07,20.16l.27-2.74a33.32,33.32,0,0,1-7-6.55L344.34,94.44c-1.44-1.62-3-3.3-5-4-2.67-1-5.61-.11-8.35.66a139.24,139.24,0,0,1-22.34,4.41,53.25,53.25,0,0,0-8.71,1.41C298.86,97.19,293,98.71,294.92,100.59Z"
                fill="currentColor"
              />
              <path
                d="M290.93,108.11a200.81,200.81,0,0,0,40.56-6.19,12.74,12.74,0,0,1,4.35-.62c2.94.27,5.24,2.54,7.28,4.67l9.7,10.15c1.91,2,4.16,4.15,6.93,4.12.53-1.45-.86-2.83-2.07-3.8a68,68,0,0,1-11.88-12.15c-2.14-2.82-4.34-6-7.76-6.9a14.24,14.24,0,0,0-6.35.27l-34,6.64a25,25,0,0,0-4.61.88C292,105.65,291.52,107,290.93,108.11Z"
                fill="currentColor"
              />
              <path
                d="M287.18,113.23a1.76,1.76,0,0,0,.33,2.47,2.51,2.51,0,0,0,1.49.16,262,262,0,0,0,39.6-7c1.88-.49,3.88-1,5.74-.44a10.25,10.25,0,0,1,3.26,2,75.19,75.19,0,0,1,9.37,9,11,11,0,0,0,3.83,3.28c1.58.64,3.72.24,4.42-1.31l-12-10.68c-2.57-2.29-5.29-4.66-8.64-5.41a20.24,20.24,0,0,0-7.63.22l-19.43,3c-3.62.56-7.24,1.12-10.85,1.76C294,110.75,288.9,110.75,287.18,113.23Z"
                fill="currentColor"
              />
              <path
                d="M293.29,122.65a3.77,3.77,0,0,0,1.77.12A117.58,117.58,0,0,0,322.32,117a28.05,28.05,0,0,1,5.14-1.44,8.11,8.11,0,0,1,5.18.8,16.43,16.43,0,0,1,3.68,3.58,21.71,21.71,0,0,0,9.07,6,3.73,3.73,0,0,0,1.64.27,1.45,1.45,0,0,0,1.27-1c.22-.79-.48-1.53-1.11-2.06l-7.47-6.29c-2.41-2-4.93-4.11-8-4.85-4.83-1.16-9.69,1.25-14.48,2.54a65.91,65.91,0,0,1-9.06,1.53l-12.66,1.51c-1.21.15-4-.08-4.4,1.48C290.83,120.18,292.28,122.23,293.29,122.65Z"
                fill="currentColor"
              />
              <path
                d="M297.75,129.44a5.71,5.71,0,0,0,3.18.22,77.36,77.36,0,0,0,9.69-1.59c3.7-.94,7.27-2.44,11-3.08s7.94-.33,11,2c1.36,1.06,2.62,2.57,4.34,2.63,1.51.06,2.79-1,3.89-2.08L333.47,122a9.31,9.31,0,0,0-3.86-2,9.53,9.53,0,0,0-4.08.55,130.71,130.71,0,0,1-14.22,3.14q-3.66.6-7.35,1c-2.42.25-5,.13-7.41.57-1.28.23-1.23.65-.74,1.89A4.25,4.25,0,0,0,297.75,129.44Z"
                fill="currentColor"
              />
              <path
                d="M303.26,137.23l19.79-3.32c1.22-.2,2.73-.29,3.43.73a13.32,13.32,0,0,1,4.71-2.62c-1-2.2-3.52-3.34-5.93-3.4a22.35,22.35,0,0,0-7,1.47,91.85,91.85,0,0,1-11,2.68c-1.35.24-4.33.09-5.45.82-.81.54-.31.75.19,1.46C302.12,135.22,303.26,137.23,303.26,137.23Z"
                fill="currentColor"
              />
            </g>
            <g>
              <path
                d="M70.87,267.72q-10.77,0-17.36-6.25a20.76,20.76,0,0,1-6.95-14.59H60.37a9.18,9.18,0,0,0,3.51,6,11.26,11.26,0,0,0,7,2.13,10.2,10.2,0,0,0,5.78-1.48,4.57,4.57,0,0,0,2.21-4q0-4.43-8.07-6.69l-6-1.56a25.38,25.38,0,0,1-12.15-6.77,16.73,16.73,0,0,1-4.52-11.73q0-8.6,5.78-13.67T69.31,204q9.72,0,15.8,5.86a19.44,19.44,0,0,1,6.43,13.41H77.82a8.48,8.48,0,0,0-3.3-4.95,9.2,9.2,0,0,0-5.21-1.56,9.46,9.46,0,0,0-5.21,1.3A4.39,4.39,0,0,0,62,221.79a4.71,4.71,0,0,0,1.78,4,15.22,15.22,0,0,0,5.68,2.61l7,1.82q7.73,2.08,12,6.86a17.23,17.23,0,0,1,4.3,12,17,17,0,0,1-6.08,13.33Q80.68,267.72,70.87,267.72Z"
                fill="currentColor"
              />
              <path
                d="M151.59,260.73q-7.08,7-18.28,7t-18.28-7q-7.08-7-7.08-18.45V205h13.81v37.43a11.8,11.8,0,0,0,3.17,8.68,12.54,12.54,0,0,0,16.76,0,11.84,11.84,0,0,0,3.17-8.68V205h13.8v37.25Q158.66,253.74,151.59,260.73Z"
                fill="currentColor"
              />
              <path
                d="M177.07,266.68V205h23.19a18.3,18.3,0,0,1,18.32,18.32,14.49,14.49,0,0,1-4.43,10.6,16.17,16.17,0,0,1,6.38,5.9,16,16,0,0,1,2.39,8.68,17.31,17.31,0,0,1-5.38,12.9,18.4,18.4,0,0,1-13.37,5.25ZM190.88,230h7.81a6.41,6.41,0,0,0,4.61-1.74,5.74,5.74,0,0,0,1.82-4.34,6.07,6.07,0,0,0-1.82-4.43,6.27,6.27,0,0,0-4.61-1.82h-7.81Zm0,24.05H203a6.31,6.31,0,0,0,4.6-1.78,6.15,6.15,0,0,0,0-8.77,6.52,6.52,0,0,0-4.65-1.78H190.88Z"
                fill="currentColor"
              />
              <path
                d="M238.29,266.68V205H252.1v48.45h25.53v13.2Z"
                fill="currentColor"
              />
              <path d="M292.3,266.68V205h13.81v61.65Z" fill="currentColor" />
              <path
                d="M325.21,205H337.8L357,231.6,376.36,205H389v61.65H375.06v-38l-18,24.84L339,228.65v38H325.21Z"
                fill="currentColor"
              />
              <path
                d="M408.06,266.68V205h39.07v13.2H421.86v11h20.06v13.2H421.86v11h25.27v13.2Z"
                fill="currentColor"
              />
            </g>
            <g>
              <path
                d="M47,292.51V280.58h4.07a5.94,5.94,0,0,1,4.3,1.75,5.88,5.88,0,0,1,0,8.43,5.9,5.9,0,0,1-4.3,1.75Zm2.67-2.45h1.4a3.16,3.16,0,0,0,2.42-1,3.75,3.75,0,0,0,0-5,3.18,3.18,0,0,0-2.42-1h-1.4Z"
                fill="currentColor"
              />
              <path
                d="M60.21,292.51V280.58h7.56v2.56H62.88v2.13h3.88v2.55H62.88V290h4.89v2.55Z"
                fill="currentColor"
              />
              <path
                d="M75,292.71a4.66,4.66,0,0,1-3.35-1.21,4,4,0,0,1-1.35-2.82h2.67a1.79,1.79,0,0,0,.68,1.15,2.17,2.17,0,0,0,1.35.41,2,2,0,0,0,1.12-.28.88.88,0,0,0,.43-.78q0-.85-1.56-1.29l-1.16-.3a4.93,4.93,0,0,1-2.35-1.31,3.25,3.25,0,0,1-.88-2.27,3.34,3.34,0,0,1,1.12-2.64,4.34,4.34,0,0,1,3-1,4.21,4.21,0,0,1,3.06,1.14A3.74,3.74,0,0,1,79,284.11H76.3a1.73,1.73,0,0,0-.64-1,1.79,1.79,0,0,0-1-.3,1.91,1.91,0,0,0-1,.25.87.87,0,0,0-.4.73.9.9,0,0,0,.35.77,2.83,2.83,0,0,0,1.1.5l1.36.35a4.72,4.72,0,0,1,2.32,1.33,3.53,3.53,0,0,1-.34,4.9A4.5,4.5,0,0,1,75,292.71Z"
                fill="currentColor"
              />
              <path d="M82.26,292.51V280.58h2.67v11.93Z" fill="currentColor" />
              <path
                d="M94.27,292.71a6.11,6.11,0,0,1-4.52-1.78,6.29,6.29,0,0,1,0-8.77,6.11,6.11,0,0,1,4.49-1.78,6.19,6.19,0,0,1,3.42,1,5.3,5.3,0,0,1,2.18,2.72H96.77A3,3,0,0,0,94.24,283a3.45,3.45,0,0,0-2.6,1,3.59,3.59,0,0,0-1,2.56,3.52,3.52,0,0,0,1,2.55,3.48,3.48,0,0,0,2.62,1c1.76,0,2.79-.77,3.09-2.33H93.93v-2.5h6.2a8.78,8.78,0,0,1-.16,3.28,5.21,5.21,0,0,1-1.21,2.34,5.61,5.61,0,0,1-2,1.34A6.61,6.61,0,0,1,94.27,292.71Z"
                fill="currentColor"
              />
              <path
                d="M114.05,292.51h-2.3l-5.81-7.37v7.37h-2.67V280.58h2.3l5.8,7.38v-7.38h2.68Z"
                fill="currentColor"
              />
              <path
                d="M126.53,292.69a4.1,4.1,0,0,1-3-1,3.46,3.46,0,0,1-1-2.59,3.07,3.07,0,0,1,.51-1.79,5.21,5.21,0,0,1,1.45-1.38,3.54,3.54,0,0,1-1.23-2.45,2.85,2.85,0,0,1,1-2.16,3.48,3.48,0,0,1,2.47-.92,3.42,3.42,0,0,1,2.46.92,2.81,2.81,0,0,1,1,2.11,2.59,2.59,0,0,1-.5,1.64,5,5,0,0,1-1.47,1.21l1.8,1.73,1.06-1.24h3l-2.43,2.84,3,2.92h-3.32L130,291.27a6.46,6.46,0,0,1-1.66,1.09A4.8,4.8,0,0,1,126.53,292.69Zm0-2.21a2.86,2.86,0,0,0,1.88-.79l-2.27-2.19a2.13,2.13,0,0,0-1.16,1.67,1.13,1.13,0,0,0,.47,1A1.86,1.86,0,0,0,126.5,290.48Zm-.86-7a1,1,0,0,0,.16.5,2.42,2.42,0,0,0,.3.39l.52.47v0a2.61,2.61,0,0,0,.78-.56,1.15,1.15,0,0,0,.21-.73,1,1,0,0,0-.28-.73,1,1,0,0,0-.69-.26,1,1,0,0,0-.71.26A.85.85,0,0,0,125.64,283.46Z"
                fill="currentColor"
              />
              <path
                d="M147.11,292.71a6.07,6.07,0,0,1-4.49-1.78,6.29,6.29,0,0,1,0-8.77,6.39,6.39,0,0,1,8.14-.59,5.33,5.33,0,0,1,2.14,3.11H150a2.79,2.79,0,0,0-1.18-1.27,3.51,3.51,0,0,0-1.71-.44,3.45,3.45,0,0,0-2.6,1,3.59,3.59,0,0,0-1,2.56,3.55,3.55,0,0,0,1,2.55,3.45,3.45,0,0,0,2.6,1,3.41,3.41,0,0,0,1.71-.44,2.79,2.79,0,0,0,1.18-1.27h2.9a5.33,5.33,0,0,1-2.14,3.12A6.12,6.12,0,0,1,147.11,292.71Z"
                fill="currentColor"
              />
              <path
                d="M165.59,290.9a6.13,6.13,0,1,1,1.81-4.35A5.92,5.92,0,0,1,165.59,290.9Zm-6.82-1.83a3.31,3.31,0,0,0,2.46,1.05,3.25,3.25,0,0,0,2.45-1.05,3.65,3.65,0,0,0,0-5,3.23,3.23,0,0,0-2.45-1.06,3.28,3.28,0,0,0-2.46,1.06,3.65,3.65,0,0,0,0,5Z"
                fill="currentColor"
              />
              <path
                d="M181.2,292.51h-2.3l-5.81-7.37v7.37h-2.67V280.58h2.3l5.79,7.38v-7.38h2.69Z"
                fill="currentColor"
              />
              <path
                d="M188.88,292.71a4.67,4.67,0,0,1-3.36-1.21,4,4,0,0,1-1.35-2.82h2.68a1.75,1.75,0,0,0,.68,1.15,2.13,2.13,0,0,0,1.35.41A1.94,1.94,0,0,0,190,290a.88.88,0,0,0,.43-.78q0-.85-1.56-1.29l-1.16-.3a5,5,0,0,1-2.35-1.31,3.24,3.24,0,0,1-.87-2.27,3.33,3.33,0,0,1,1.11-2.64,4.35,4.35,0,0,1,3-1,4.19,4.19,0,0,1,3,1.14,3.7,3.7,0,0,1,1.24,2.59h-2.65a1.63,1.63,0,0,0-.64-1,1.78,1.78,0,0,0-1-.3,1.86,1.86,0,0,0-1,.25.88.88,0,0,0-.41.73.92.92,0,0,0,.35.77,2.9,2.9,0,0,0,1.1.5l1.36.35a4.75,4.75,0,0,1,2.33,1.33,3.37,3.37,0,0,1,.83,2.32,3.28,3.28,0,0,1-1.18,2.58A4.47,4.47,0,0,1,188.88,292.71Z"
                fill="currentColor"
              />
              <path
                d="M198.06,292.51v-9.37h-3v-2.56h8.8v2.56h-3.08v9.37Z"
                fill="currentColor"
              />
              <path
                d="M206.63,292.51V280.58h4.7a3.55,3.55,0,0,1,2.67,1.05,3.46,3.46,0,0,1,1,2.55,3.07,3.07,0,0,1-2.34,3.07l4.22,5.26H213.7l-4-4.92h-.42v4.92Zm2.67-7.19H211a1.51,1.51,0,0,0,1-.32,1.12,1.12,0,0,0,0-1.66,1.56,1.56,0,0,0-1-.3H209.3Z"
                fill="currentColor"
              />
              <path
                d="M227,291.36a4.91,4.91,0,0,1-8.44-3.57v-7.21h2.67v7.24a2.27,2.27,0,0,0,.62,1.68,2.43,2.43,0,0,0,3.24,0,2.27,2.27,0,0,0,.61-1.68v-7.24h2.67v7.21A4.8,4.8,0,0,1,227,291.36Z"
                fill="currentColor"
              />
              <path
                d="M237.55,292.71a6.05,6.05,0,0,1-4.48-1.78,6.29,6.29,0,0,1,0-8.77,6.38,6.38,0,0,1,8.13-.59,5.35,5.35,0,0,1,2.15,3.11h-2.91a2.79,2.79,0,0,0-1.18-1.27,3.7,3.7,0,0,0-4.3.58,3.56,3.56,0,0,0-1,2.56,3.52,3.52,0,0,0,1,2.55,3.43,3.43,0,0,0,2.59,1,3.35,3.35,0,0,0,1.71-.44,2.79,2.79,0,0,0,1.18-1.27h2.91a5.34,5.34,0,0,1-2.15,3.12A6.12,6.12,0,0,1,237.55,292.71Z"
                fill="currentColor"
              />
              <path
                d="M248.17,292.51v-9.37h-3v-2.56h8.8v2.56h-3.08v9.37Z"
                fill="currentColor"
              />
              <path d="M256.73,292.51V280.58h2.67v11.93Z" fill="currentColor" />
              <path
                d="M273,290.9a6.16,6.16,0,1,1,1.8-4.35A5.92,5.92,0,0,1,273,290.9Zm-6.82-1.83a3.31,3.31,0,0,0,2.46,1.05,3.27,3.27,0,0,0,2.45-1.05,3.65,3.65,0,0,0,0-5,3.24,3.24,0,0,0-2.45-1.06,3.28,3.28,0,0,0-2.46,1.06,3.62,3.62,0,0,0,0,5Z"
                fill="currentColor"
              />
              <path
                d="M288.56,292.51h-2.3l-5.81-7.37v7.37h-2.67V280.58h2.3l5.79,7.38v-7.38h2.69Z"
                fill="currentColor"
              />
              <path
                d="M295.43,292.51l5.1-11.93H303l5.11,11.93h-2.79L304.21,290h-4.94l-1,2.52Zm6.31-8.41-1.51,3.57h3Z"
                fill="currentColor"
              />
              <path
                d="M314,292.71a4.67,4.67,0,0,1-3.36-1.21,4,4,0,0,1-1.34-2.82H312a1.75,1.75,0,0,0,.68,1.15,2.13,2.13,0,0,0,1.35.41,2,2,0,0,0,1.12-.28.89.89,0,0,0,.42-.78q0-.85-1.56-1.29l-1.16-.3a5,5,0,0,1-2.35-1.31,3.24,3.24,0,0,1-.87-2.27,3.33,3.33,0,0,1,1.11-2.64,4.35,4.35,0,0,1,3-1,4.19,4.19,0,0,1,3.05,1.14,3.76,3.76,0,0,1,1.25,2.59h-2.66a1.63,1.63,0,0,0-.64-1,1.76,1.76,0,0,0-1-.3,1.89,1.89,0,0,0-1,.25.88.88,0,0,0-.41.73.92.92,0,0,0,.35.77,2.9,2.9,0,0,0,1.1.5l1.36.35a4.75,4.75,0,0,1,2.33,1.33,3.37,3.37,0,0,1,.83,2.32,3.28,3.28,0,0,1-1.18,2.58A4.47,4.47,0,0,1,314,292.71Z"
                fill="currentColor"
              />
              <path
                d="M325.33,292.71A4.67,4.67,0,0,1,322,291.5a4,4,0,0,1-1.35-2.82h2.67a1.79,1.79,0,0,0,.68,1.15,2.18,2.18,0,0,0,1.36.41,2,2,0,0,0,1.11-.28.88.88,0,0,0,.43-.78q0-.85-1.56-1.29l-1.16-.3a4.93,4.93,0,0,1-2.35-1.31,3.24,3.24,0,0,1-.87-2.27,3.33,3.33,0,0,1,1.11-2.64,4.34,4.34,0,0,1,3-1,4.2,4.2,0,0,1,3.06,1.14,3.74,3.74,0,0,1,1.24,2.59h-2.65a1.68,1.68,0,0,0-.64-1,1.79,1.79,0,0,0-1-.3,1.85,1.85,0,0,0-1,.25.86.86,0,0,0-.41.73.92.92,0,0,0,.35.77,2.83,2.83,0,0,0,1.1.5l1.36.35a4.72,4.72,0,0,1,2.32,1.33,3.53,3.53,0,0,1-.34,4.9A4.47,4.47,0,0,1,325.33,292.71Z"
                fill="currentColor"
              />
              <path
                d="M342.48,290.9a6.13,6.13,0,1,1,1.81-4.35A5.9,5.9,0,0,1,342.48,290.9Zm-6.82-1.83a3.41,3.41,0,0,0,4.92,0,3.68,3.68,0,0,0,0-5,3.38,3.38,0,0,0-4.92,0,3.65,3.65,0,0,0,0,5Z"
                fill="currentColor"
              />
              <path
                d="M352.92,292.71a6.05,6.05,0,0,1-4.48-1.78,6.29,6.29,0,0,1,0-8.77,6.38,6.38,0,0,1,8.13-.59,5.29,5.29,0,0,1,2.14,3.11h-2.9a2.79,2.79,0,0,0-1.18-1.27,3.71,3.71,0,0,0-4.31.58,3.59,3.59,0,0,0-1,2.56,3.55,3.55,0,0,0,1,2.55,3.46,3.46,0,0,0,2.6,1,3.35,3.35,0,0,0,1.71-.44,2.79,2.79,0,0,0,1.18-1.27h2.9a5.28,5.28,0,0,1-2.14,3.12A6.12,6.12,0,0,1,352.92,292.71Z"
                fill="currentColor"
              />
              <path d="M361.55,292.51V280.58h2.67v11.93Z" fill="currentColor" />
              <path
                d="M366.64,292.51l5.11-11.93h2.42l5.1,11.93h-2.79L375.43,290h-4.94l-1.06,2.52ZM373,284.1l-1.51,3.57h3Z"
                fill="currentColor"
              />
              <path
                d="M382.65,292.51v-9.37h-3v-2.56h8.8v2.56h-3.07v9.37Z"
                fill="currentColor"
              />
              <path
                d="M391.21,292.51V280.58h7.56v2.56h-4.89v2.13h3.88v2.55h-3.88V290h4.89v2.55Z"
                fill="currentColor"
              />
              <path
                d="M406,292.71a4.67,4.67,0,0,1-3.36-1.21,4,4,0,0,1-1.34-2.82h2.67a1.75,1.75,0,0,0,.68,1.15,2.13,2.13,0,0,0,1.35.41,2,2,0,0,0,1.12-.28.9.9,0,0,0,.43-.78c0-.57-.53-1-1.57-1.29l-1.16-.3a5,5,0,0,1-2.35-1.31,3.24,3.24,0,0,1-.87-2.27,3.31,3.31,0,0,1,1.12-2.64,4.32,4.32,0,0,1,3-1,4.19,4.19,0,0,1,3,1.14,3.76,3.76,0,0,1,1.25,2.59H407.3a1.67,1.67,0,0,0-.63-1,1.81,1.81,0,0,0-1-.3,1.89,1.89,0,0,0-1,.25.85.85,0,0,0-.4.73.92.92,0,0,0,.34.77,2.9,2.9,0,0,0,1.1.5l1.36.35a4.75,4.75,0,0,1,2.33,1.33,3.37,3.37,0,0,1,.83,2.32,3.28,3.28,0,0,1-1.18,2.58A4.45,4.45,0,0,1,406,292.71Z"
                fill="currentColor"
              />
              <path
                d="M418.22,292.51V280.58h2.67V290h4.94v2.55Z"
                fill="currentColor"
              />
              <path
                d="M429.2,292.51v-9.37h-3v-2.56H435v2.56h-3.08v9.37Z"
                fill="currentColor"
              />
              <path
                d="M437.77,292.51V280.58h4.07a6,6,0,0,1,4.3,1.75,5.88,5.88,0,0,1,0,8.43,5.92,5.92,0,0,1-4.3,1.75Zm2.67-2.45h1.4a3.16,3.16,0,0,0,2.42-1,3.75,3.75,0,0,0,0-5,3.18,3.18,0,0,0-2.42-1h-1.4Z"
                fill="currentColor"
              />
              <path
                d="M452.91,292.11a1.79,1.79,0,1,1-2.53-2.53,1.79,1.79,0,1,1,2.53,2.53Z"
                fill="currentColor"
              />
            </g>
          </g>
        </svg>
      </Svgholder>
      <div className="text">
        {words.split("").map((char, index) => (
          <Char key={index} className="chara">
            {char}
          </Char>
        ))}
      </div>
    </Spiner>
  );
}

const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spiner = styled.div`
  bottom: -30px;
  right: -30px;
  position: absolute;
  width: 187px;
  height: 187px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$backroundcolor};
  color: ${(props) => props.$textcolor};
  transition: all 0.7s ease-in-out;
  cursor: pointer;
  scale: 0.4;

  @media screen and (max-width: 750px) {
    display: none;
  }

  .text {
    width: 100%;
    height: 100%;
    position: absolute;
    animation: ${Spin} 12s linear infinite;
    color: ${(props) => props.$textcolor};
    gap: 2px;

    span {
      font-family: "euclidSemiBold";
      position: absolute;
      left: 50%;
      font-size: 13px;
      letter-spacing: 2px;
      transform-origin: 0 95px;

      @media screen and (max-width: 767px) {
        font-size: 11px;
      }

      @media screen and (max-width: 767px) {
        transform-origin: 0 76px;
      }
    }
  }
`;

const Char = styled.span`
  position: absolute;
  left: 50%;
  font-size: 0px;
  transform-origin: 0 85px;
`;

const Svgholder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;

  display: grid;
  place-content: center;

  svg {
    width: 100px;
    @media screen and (max-width: 767px) {
      width: 80px;
      height: 80px;
    }
  }
`;
export default RevolvingLogo;
