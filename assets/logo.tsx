type props = {
  fill: string;
  height: string;
  width: string;
  withBg: boolean;
  bg: string;
};
export const Logo = ({
  fill = "currentColor",
  height,
  width,
  withBg,
  bg,
  ...props
}: props) => {
  if (!withBg) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 60}
        height={height || 60}
        viewBox="10 0 150 160"
        {...props}
      >
        <defs>
          <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#BF953F" />
            <stop offset="50%" stopColor="#FCF6BA" />
            <stop offset="100%" stopColor="#AA771C" />
          </linearGradient>
        </defs>
        <g fill={"url(#Gradient2)"} alignmentBaseline={"baseline"}>
          <path d="M104.81,139.83c-6.15-4.93-12.02-11-15.34-17.21-9.59-18.94-23.91-15.6-36.44-19.77-14.72-4.91-13.05-11.5-10.38-14.59,2.67-3.08,5.12-7.3,3.08-8.97-2.03-1.69-1.96-3.86,0-4.29,1.97-.41,3.2-1.29,3.2-1.29-1.9,0-3.06-2.22-2.95-4,.11-1.79,4.73-2.74,5.89-4.84,1.16-2.1-1.68-6.62-3.47-9.26-1.78-2.63-1.48-5.27,8.74-6.84,10.2-1.58,12.73-8,12.73-8,3.59-15.96,15.44-25.58,22.02-29.82-9.72,16.3-15.3,35.36-15.3,55.71,0,28.17,10.68,53.83,28.23,73.17Z" />
          <path d="M137.16,74.4c0-.14-.92-14.29-8.93-18.16-6.43-3.11-8.69-5.04-10.88-6.91-.7-.59-1.42-1.21-2.26-1.85-3.33-2.53-9.45-3.1-9.51-3.11-.38-.03-3.66-.39-3.59-2.52,.01-.39,.24-.96,1.23-1.5,2.64-1.44,9.66-2.01,17.25,2.57l-.61,1.01c-7.15-4.31-13.35-3.69-15.62-2.76-.82,.34-1.06,.66-1.07,.72-.03,.8,1.68,1.22,2.52,1.29,.26,.02,6.52,.61,10.12,3.34,.87,.66,1.6,1.29,2.31,1.89,2.23,1.9,4.34,3.7,10.63,6.74,8.63,4.17,9.56,18.54,9.59,19.15l-1.18,.07Z" />
          <path d="M145.51,103.3l-1.08-.49c4.33-9.57,6.39-25.96,1.24-41.01-5.58-16.3-18.11-28.74-21.17-31.18-3.49-2.8-4.94-3.96-9.94-2.01-3.88,1.51-9.68,1.84-13.14,2.04-1.19,.07-2.13,.12-2.53,.2-.15,.03-.21,.08-.22,.09,0,.01,0,.11,.12,.28,.51,.71,2.26,1.65,5.51,1.93,3.94,.35,7.29-.91,9.74-1.83,1.23-.46,2.2-.83,2.99-.9,2.57-.27,4.5,4.37,7.13,11.43,2.24,6.01,9.46,13.07,9.54,13.14l-.82,.85c-.3-.3-7.49-7.32-9.82-13.58-1.68-4.51-3.98-10.67-5.83-10.67-.03,0-.05,0-.08,0-.63,.06-1.58,.42-2.69,.83-2.55,.96-6.04,2.28-10.26,1.9-4.52-.4-6.65-2-6.71-3.32-.03-.66,.43-1.18,1.18-1.32,.48-.09,1.4-.14,2.68-.22,3.39-.2,9.07-.52,12.78-1.96,5.4-2.1,7.31-.84,11.1,2.19,3.11,2.49,15.88,15.16,21.55,31.73,5.25,15.36,3.14,32.1-1.28,41.88Z" />
          <path d="M120.13,48.04c-.03-.16-.72-3.88,0-6.77,.66-2.66,.17-5.89,.16-5.92l1.17-.18c.02,.14,.54,3.51-.19,6.39-.66,2.64,0,6.23,0,6.27l-1.16,.22Z" />
          <path d="M109.99,29.72s-1.14-.33-4.76-.2c-3.13,.12-8.66-.07-10.53-2.62-.55-.75-.68-1.39-.37-1.88,.54-.88,2.15-.67,2.63-.59,3.15,.19,4.59,.11,8.08-.08,1.48-.08,3.33-.18,5.82-.28,8.53-.36,9.75,2.48,9.86,2.8l-1.12,.38,.56-.19-.55,.21s-1.08-2.35-8.7-2.02c-2.49,.1-4.32,.2-5.8,.28-3.54,.19-5,.27-8.28,.07-.64-.11-1.33-.08-1.49,.05,.02,0,.04,.18,.32,.56,1.13,1.54,4.61,2.32,9.53,2.14,3.86-.14,5.06,.22,5.18,.26l-.38,1.12Z" />
          <path d="M119.81,44.75c-.13-1.59-1.27-4.16-2.18-6.22-.56-1.25-1.04-2.33-1.27-3.12-.57-1.88-2.18-3.18-2.2-3.19l.73-.93c.08,.06,1.92,1.54,2.6,3.78,.22,.71,.7,1.81,1.22,2.98,1,2.26,2.14,4.81,2.28,6.6l-1.18,.1Z" />
          <path d="M101.42,25.66c-.2-.05-5-1.31-7.83-4.93-.16-.22-.86-1.28-.6-2.19,.08-.29,.3-.67,.84-.9,.77-.32,1.91,.29,3.8,1.3,2.1,1.12,4.72,2.52,7.23,2.79,1.82,.19,3.84,.27,5.63,.33,3.34,.12,5.26,.22,6,.76,1.21,.89,1.55,2.22,1.56,2.27l-1.15,.28s-.26-.97-1.11-1.6c-.49-.36-3.07-.45-5.34-.53-1.81-.07-3.85-.14-5.71-.34-2.74-.29-5.59-1.81-7.66-2.92-1.1-.59-2.45-1.32-2.81-1.25-.11,.05-.13,.1-.13,.13-.08,.26,.19,.85,.41,1.15,2.56,3.28,7.13,4.48,7.17,4.49l-.29,1.14Z" />
          <path d="M114.07,23.27s-2.37-2.86-5.15-5.03c-3.04-2.37-6.82-6.58-7.95-8.83-.39-.79-.71-1-.78-1.01-.07,.04-.33,.46-.34,1.39-.04,2.05,3.03,7.45,4.41,8.58,1.57,1.28,3.58,3.69,3.67,3.79l-.91,.76s-2.03-2.42-3.51-3.63c-1.64-1.34-4.9-7.06-4.85-9.52,.03-1.4,.51-2.34,1.28-2.51,.52-.12,1.3,.07,2.08,1.63,1.04,2.09,4.75,6.18,7.62,8.43,2.89,2.26,5.24,5.09,5.34,5.21l-.91,.75Z" />

          <path d="M53.85,124.44c-3.3,0-7.56-.91-12.03-3.6l.61-1.01c7.16,4.32,13.35,3.69,15.62,2.75,.82-.34,1.05-.66,1.07-.72,.02-.8-1.68-1.22-2.52-1.29-.26-.02-6.52-.61-10.12-3.34-.87-.66-1.6-1.29-2.31-1.89-2.23-1.9-4.34-3.7-10.63-6.74-8.63-4.17-9.55-18.54-9.59-19.15l1.18-.07c0,.14,.92,14.29,8.93,18.16,6.42,3.11,8.69,5.04,10.88,6.91,.7,.59,1.42,1.21,2.26,1.85,3.33,2.53,9.45,3.1,9.51,3.11,.38,.03,3.66,.39,3.59,2.52-.01,.38-.24,.96-1.23,1.5-1.09,.59-2.92,1.04-5.22,1.04Z" />
          <path d="M43.63,137.31c-2.41,0-4.09-1.23-6.59-3.23-3.11-2.49-15.88-15.16-21.55-31.72-5.25-15.36-3.14-32.1,1.28-41.88l1.08,.49c-4.33,9.57-6.39,25.96-1.24,41.01,5.57,16.29,18.11,28.74,21.17,31.19,3.49,2.8,4.94,3.95,9.94,2.02,3.88-1.5,9.68-1.84,13.14-2.04,1.19-.07,2.13-.12,2.54-.2,.15-.03,.21-.08,.22-.09,0-.01,0-.11-.12-.28-.51-.71-2.26-1.65-5.51-1.93-3.94-.35-7.29,.91-9.74,1.83-1.23,.46-2.2,.83-2.99,.9-2.58,.24-4.5-4.37-7.13-11.43-2.24-6.01-9.46-13.07-9.54-13.14l.82-.85c.3,.3,7.49,7.32,9.82,13.58,1.71,4.58,4.05,10.85,5.91,10.66,.63-.06,1.58-.42,2.69-.83,2.55-.96,6.05-2.27,10.25-1.9,4.52,.4,6.65,2,6.71,3.32,.03,.66-.43,1.18-1.18,1.32-.48,.09-1.41,.14-2.69,.22-3.39,.2-9.07,.52-12.78,1.96-1.84,.71-3.27,1.04-4.51,1.04Z" />
          <path d="M40.82,128.61c-.02-.14-.54-3.5,.19-6.39,.66-2.64,0-6.23,0-6.27l1.16-.22c.03,.16,.72,3.88,0,6.77-.66,2.65-.17,5.89-.16,5.92l-1.17,.18Z" />
          <path d="M49.98,139.75c-7.24,0-8.31-2.53-8.42-2.84l1.11-.4s1.08,2.34,8.7,2.02c2.49-.1,4.33-.2,5.81-.28,3.53-.19,5-.27,8.28-.07,.64,.1,1.33,.08,1.49-.05-.02,0-.04-.18-.32-.56-1.13-1.54-4.61-2.33-9.53-2.14-3.85,.14-5.06-.22-5.18-.26l.38-1.12s1.14,.33,4.76,.2c3.13-.12,8.66,.08,10.53,2.63,.55,.75,.68,1.39,.37,1.89-.54,.88-2.15,.67-2.63,.59-3.15-.19-4.59-.11-8.08,.08-1.48,.08-3.33,.18-5.82,.28-.51,.02-.99,.03-1.44,.03Z" />
          <path d="M47.4,132.47c-.08-.06-1.92-1.54-2.6-3.78-.22-.71-.7-1.81-1.22-2.98-1-2.26-2.14-4.81-2.28-6.6l1.18-.1c.13,1.59,1.27,4.16,2.18,6.22,.56,1.25,1.04,2.33,1.27,3.12,.57,1.88,2.18,3.18,2.2,3.2l-.73,.93Z" />
          <path d="M68,146.21c-.75,0-1.8-.56-3.35-1.39-2.1-1.13-4.72-2.52-7.23-2.79-1.82-.19-3.84-.27-5.63-.33-3.34-.12-5.26-.22-6-.76-1.21-.89-1.55-2.22-1.56-2.27l1.15-.28s.26,.97,1.11,1.6c.49,.36,3.07,.45,5.35,.53,1.8,.07,3.85,.14,5.71,.34,2.74,.29,5.59,1.81,7.66,2.92,1.1,.59,2.47,1.3,2.81,1.25,.11-.05,.13-.1,.14-.13,.08-.26-.19-.85-.41-1.15-2.56-3.28-7.13-4.48-7.17-4.49l.29-1.14c.2,.05,5,1.31,7.83,4.93,.16,.22,.86,1.28,.6,2.19-.08,.29-.3,.67-.84,.9-.14,.06-.29,.09-.46,.09Z" />
          <path d="M62.1,156.55c-.5,0-1.17-.34-1.83-1.66-1.04-2.09-4.75-6.18-7.62-8.42-2.89-2.26-5.24-5.09-5.34-5.21l.91-.75s2.37,2.86,5.15,5.03c3.04,2.37,6.82,6.58,7.95,8.83,.39,.79,.71,1,.78,1.01,.07-.04,.32-.46,.34-1.38,.04-2.05-3.03-7.45-4.41-8.58-1.57-1.28-3.58-3.69-3.67-3.79l.91-.76s2.03,2.42,3.51,3.63c1.64,1.34,4.9,7.06,4.85,9.52-.03,1.4-.51,2.34-1.28,2.51-.08,.02-.16,.03-.25,.03Z" />

          <path d="M83.81,17.24c-4.06,.62-7.98,1.95-10.74,4.33-2.73,2.32-4.29,5.69-3.88,8.71,.35,3.13,2.19,6.38,4.41,9.4,2.24,3.04,4.87,5.95,7.63,8.77,1.37,1.42,2.78,2.82,4.23,4.19l2.17,2.09c.79,.76,1.57,1.54,2.3,2.36,2.93,3.28,5.41,7.11,6.89,11.35,1.48,4.22,1.99,8.86,1.04,13.23-.51,2.17-1.3,4.29-2.61,6.09-.65,.9-1.42,1.72-2.32,2.36-.91,.62-1.97,1.07-3.02,1.05,.97-.39,1.72-1.05,2.28-1.83,.58-.76,1.01-1.62,1.32-2.52,.63-1.79,.92-3.68,.88-5.56-.02-3.75-1.06-7.39-2.72-10.68-1.68-3.29-3.96-6.25-6.63-8.88-.68-.65-1.35-1.31-2.06-1.92l-2.32-2.06c-1.53-1.41-3.04-2.86-4.51-4.36-2.92-3.03-5.71-6.25-8.09-9.93-1.18-1.84-2.27-3.81-3.1-5.97-.82-2.16-1.42-4.54-1.34-7.08,.04-2.52,.91-5.11,2.29-7.07,1.35-2,3.21-3.62,5.24-4.68,2.05-1.04,4.22-1.63,6.36-1.82,2.14-.2,4.27-.09,6.29,.4Z" />
          <path d="M57.14,105c-.37,.95-.77,1.7-1.22,2.49-.45,.78-.95,1.53-1.49,2.23-1.09,1.41-2.41,2.65-3.92,3.43,1.15-1.25,1.87-2.74,2.36-4.27,.24-.77,.43-1.55,.56-2.33,.13-.77,.24-1.61,.24-2.29l3.47,.73Z" />
          <path d="M92.83,50.24c3.02,1.67,5.55,4.16,7.76,6.88,2.18,2.76,3.93,5.89,5.22,9.22,1.29,3.33,2.1,6.87,2.39,10.43,.1,.89,.18,1.78,.15,2.71-.01,.92,.02,1.84-.04,2.76l-.34,2.77c-.15,.92-.41,1.82-.61,2.73-.51,1.79-1.18,3.53-1.95,5.15-.78,1.62-1.61,3.14-2.42,4.6-1.64,2.91-3.07,5.62-3.95,8.59-1.79,5.92-1.54,12.65-.93,19.44-.71-1.55-1.35-3.14-1.97-4.76-.26-.82-.48-1.65-.72-2.49-.22-.84-.51-1.67-.63-2.54-.72-3.43-.83-7.07-.27-10.69,.56-3.63,2.02-7.08,3.5-10.13,1.49-3.07,2.87-5.86,3.66-8.76,.87-2.88,1.05-5.9,.96-9.05,0-1.59-.2-3.15-.34-4.73-.26-1.55-.48-3.13-.88-4.67-1.5-6.17-4.27-12.19-8.56-17.49Z" />
          <path d="M145.5,103.69s.75-3.73-4.26-6.36c0,0,4.04,1.07,4.79,4.3,0,0,.02-4.45-3-5.75s-4.19-.11-5.65-1.9c0,0,.55,5.48,4.33,7.6l3.78,2.12Z" />
          <path d="M147.45,90.34s.34-1.93-1.46-3.63c0,0,1.49,.8,1.97,2.57,0,0,.53-2.38-.95-3.3s-2.9-1.4-3-2.08c0,0-.23,2.32,.9,4.19,.44,.73,1.13,1.28,1.88,1.7,.28,.15,.58,.36,.65,.54Z" />
          <path d="M150.41,80.57s1.28-.27,1.88-1.81c0,0-.12,1.12-1.1,1.86,0,0,1.6-.27,1.8-1.41s.14-2.14,.53-2.37c0,0-1.49,.44-2.37,1.61-.34,.46-.51,1.02-.58,1.59-.03,.21-.08,.45-.17,.54Z" />
          <path d="M147.35,96.91s4.4-.28,5.14-3.22c0,0,.12,2.53-3.33,3.49,0,0,2.51,.24,4.1-1.36s.33-4.03,1.83-5.09c0,0-4.63,0-6.6,4.43,0,0-.41,1.16-1.14,1.74Z" />
          <path d="M39.6,39.8h0c0-4.44-3.6-8.04-8.04-8.04h0c4.44,0,8.04-3.6,8.04-8.04h0c0,4.44,3.6,8.04,8.04,8.04h0c-4.44,0-8.04,3.6-8.04,8.04Z" />
          <path d="M32.27,15.35h0c0-1.46-1.18-2.64-2.64-2.64h0c1.46,0,2.64-1.18,2.64-2.64h0c0,1.46,1.18,2.64,2.64,2.64h0c-1.46,0-2.64,1.18-2.64,2.64Z" />
          <rect
            x="43.39"
            y="0"
            width="2.75"
            height="2.75"
            rx="1.37"
            ry="1.37"
          />
        </g>
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 60}
      height={height || 60}
      viewBox="0 0 399.31 399.31"
      {...props}
    >
      <defs>
        <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#BF953F" />
          <stop offset="50%" stopColor="#FCF6BA" />
          <stop offset="100%" stopColor="#AA771C" />
        </linearGradient>
      </defs>
      <rect
        fill={bg}
        x="58.48"
        y="58.48"
        width="282.35"
        height="282.35"
        transform="translate(199.65 -82.7) rotate(45)"
      />
      <g fill={"url(#Gradient2)"} alignmentBaseline={"baseline"}>
        <path d="M226.3,262.65c-6.15-4.93-12.02-11-15.34-17.21-9.59-18.94-23.91-15.6-36.44-19.77-14.72-4.91-13.05-11.5-10.38-14.59,2.67-3.08,5.12-7.3,3.08-8.97-2.03-1.69-1.96-3.86,0-4.29,1.97-.41,3.2-1.29,3.2-1.29-1.9,0-3.06-2.22-2.95-4,.11-1.79,4.73-2.74,5.89-4.84,1.16-2.1-1.68-6.62-3.47-9.26-1.78-2.63-1.48-5.27,8.74-6.84,10.2-1.58,12.73-8,12.73-8,3.59-15.96,15.44-25.58,22.02-29.82-9.72,16.3-15.3,35.36-15.3,55.71,0,28.17,10.68,53.83,28.23,73.17Z" />
        <g>
          <path d="M258.66,197.22c0-.14-.92-14.29-8.93-18.16-6.43-3.11-8.69-5.04-10.88-6.91-.7-.59-1.42-1.21-2.26-1.85-3.33-2.53-9.45-3.1-9.51-3.11-.38-.03-3.66-.39-3.59-2.52,.01-.39,.24-.96,1.23-1.5,2.64-1.44,9.66-2.01,17.25,2.57l-.61,1.01c-7.15-4.31-13.35-3.69-15.62-2.76-.82,.34-1.06,.66-1.07,.72-.03,.8,1.68,1.22,2.52,1.29,.26,.02,6.52,.61,10.12,3.34,.87,.66,1.6,1.29,2.31,1.89,2.23,1.9,4.34,3.7,10.63,6.74,8.63,4.17,9.56,18.54,9.59,19.15l-1.18,.07Z" />
          <path d="M267.01,226.11l-1.08-.49c4.33-9.57,6.39-25.96,1.24-41.01-5.58-16.3-18.11-28.74-21.17-31.18-3.49-2.8-4.94-3.96-9.94-2.01-3.88,1.51-9.68,1.84-13.14,2.04-1.19,.07-2.13,.12-2.53,.2-.15,.03-.21,.08-.22,.09,0,.01,0,.11,.12,.28,.51,.71,2.26,1.65,5.51,1.93,3.94,.35,7.29-.91,9.74-1.83,1.23-.46,2.2-.83,2.99-.9,2.57-.27,4.5,4.37,7.13,11.43,2.24,6.01,9.46,13.07,9.54,13.14l-.82,.85c-.3-.3-7.49-7.32-9.82-13.58-1.68-4.51-3.98-10.67-5.83-10.67-.03,0-.05,0-.08,0-.63,.06-1.58,.42-2.69,.83-2.55,.96-6.04,2.28-10.26,1.9-4.52-.4-6.65-2-6.71-3.32-.03-.66,.43-1.18,1.18-1.32,.48-.09,1.4-.14,2.68-.22,3.39-.2,9.07-.52,12.78-1.96,5.4-2.1,7.31-.84,11.1,2.19,3.11,2.49,15.88,15.16,21.55,31.73,5.25,15.36,3.14,32.1-1.28,41.88Z" />
          <path d="M241.62,170.86c-.03-.16-.72-3.88,0-6.77,.66-2.66,.17-5.89,.16-5.92l1.17-.18c.02,.14,.54,3.51-.19,6.39-.66,2.64,0,6.23,0,6.27l-1.16,.22Z" />
          <path d="M231.49,152.53s-1.14-.33-4.76-.2c-3.13,.12-8.66-.07-10.53-2.62-.55-.75-.68-1.39-.37-1.88,.54-.88,2.15-.67,2.63-.59,3.15,.19,4.59,.11,8.08-.08,1.48-.08,3.33-.18,5.82-.28,8.53-.36,9.75,2.48,9.86,2.8l-1.12,.38,.56-.19-.55,.21s-1.08-2.35-8.7-2.02c-2.49,.1-4.32,.2-5.8,.28-3.54,.19-5,.27-8.28,.07-.64-.11-1.33-.08-1.49,.05,.02,0,.04,.18,.32,.56,1.13,1.54,4.61,2.32,9.53,2.14,3.86-.14,5.06,.22,5.18,.26l-.38,1.12Z" />
          <path d="M241.31,167.57c-.13-1.59-1.27-4.16-2.18-6.22-.56-1.25-1.04-2.33-1.27-3.12-.57-1.88-2.18-3.18-2.2-3.19l.73-.93c.08,.06,1.92,1.54,2.6,3.78,.22,.71,.7,1.81,1.22,2.98,1,2.26,2.14,4.81,2.28,6.6l-1.18,.1Z" />
          <path d="M222.91,148.48c-.2-.05-5-1.31-7.83-4.93-.16-.22-.86-1.28-.6-2.19,.08-.29,.3-.67,.84-.9,.77-.32,1.91,.29,3.8,1.3,2.1,1.12,4.72,2.52,7.23,2.79,1.82,.19,3.84,.27,5.63,.33,3.34,.12,5.26,.22,6,.76,1.21,.89,1.55,2.22,1.56,2.27l-1.15,.28s-.26-.97-1.11-1.6c-.49-.36-3.07-.45-5.34-.53-1.81-.07-3.85-.14-5.71-.34-2.74-.29-5.59-1.81-7.66-2.92-1.1-.59-2.45-1.32-2.81-1.25-.11,.05-.13,.1-.13,.13-.08,.26,.19,.85,.41,1.15,2.56,3.28,7.13,4.48,7.17,4.49l-.29,1.14Z" />
          <path d="M235.56,146.09s-2.37-2.86-5.15-5.03c-3.04-2.37-6.82-6.58-7.95-8.83-.39-.79-.71-1-.78-1.01-.07,.04-.33,.46-.34,1.39-.04,2.05,3.03,7.45,4.41,8.58,1.57,1.28,3.58,3.69,3.67,3.79l-.91,.76s-2.03-2.42-3.51-3.63c-1.64-1.34-4.9-7.06-4.85-9.52,.03-1.4,.51-2.34,1.28-2.51,.52-.12,1.3,.07,2.08,1.63,1.04,2.09,4.75,6.18,7.62,8.43,2.89,2.26,5.24,5.09,5.34,5.21l-.91,.75Z" />
        </g>
        <g>
          <path d="M175.34,247.26c-3.3,0-7.56-.91-12.03-3.6l.61-1.01c7.16,4.32,13.35,3.69,15.62,2.75,.82-.34,1.05-.66,1.07-.72,.02-.8-1.68-1.22-2.52-1.29-.26-.02-6.52-.61-10.12-3.34-.87-.66-1.6-1.29-2.31-1.89-2.23-1.9-4.34-3.7-10.63-6.74-8.63-4.17-9.55-18.54-9.59-19.15l1.18-.07c0,.14,.92,14.29,8.93,18.16,6.42,3.11,8.69,5.04,10.88,6.91,.7,.59,1.42,1.21,2.26,1.85,3.33,2.53,9.45,3.1,9.51,3.11,.38,.03,3.66,.39,3.59,2.52-.01,.38-.24,.96-1.23,1.5-1.09,.59-2.92,1.04-5.22,1.04Z" />
          <path d="M165.12,260.13c-2.41,0-4.09-1.23-6.59-3.23-3.11-2.49-15.88-15.16-21.55-31.72-5.25-15.36-3.14-32.1,1.28-41.88l1.08,.49c-4.33,9.57-6.39,25.96-1.24,41.01,5.57,16.29,18.11,28.74,21.17,31.19,3.49,2.8,4.94,3.95,9.94,2.02,3.88-1.5,9.68-1.84,13.14-2.04,1.19-.07,2.13-.12,2.54-.2,.15-.03,.21-.08,.22-.09,0-.01,0-.11-.12-.28-.51-.71-2.26-1.65-5.51-1.93-3.94-.35-7.29,.91-9.74,1.83-1.23,.46-2.2,.83-2.99,.9-2.58,.24-4.5-4.37-7.13-11.43-2.24-6.01-9.46-13.07-9.54-13.14l.82-.85c.3,.3,7.49,7.32,9.82,13.58,1.71,4.58,4.05,10.85,5.91,10.66,.63-.06,1.58-.42,2.69-.83,2.55-.96,6.05-2.27,10.25-1.9,4.52,.4,6.65,2,6.71,3.32,.03,.66-.43,1.18-1.18,1.32-.48,.09-1.41,.14-2.69,.22-3.39,.2-9.07,.52-12.78,1.96-1.84,.71-3.27,1.04-4.51,1.04Z" />
          <path d="M162.31,251.43c-.02-.14-.54-3.5,.19-6.39,.66-2.64,0-6.23,0-6.27l1.16-.22c.03,.16,.72,3.88,0,6.77-.66,2.65-.17,5.89-.16,5.92l-1.17,.18Z" />
          <path d="M171.47,262.56c-7.24,0-8.31-2.53-8.42-2.84l1.11-.4s1.08,2.34,8.7,2.02c2.49-.1,4.33-.2,5.81-.28,3.53-.19,5-.27,8.28-.07,.64,.1,1.33,.08,1.49-.05-.02,0-.04-.18-.32-.56-1.13-1.54-4.61-2.33-9.53-2.14-3.85,.14-5.06-.22-5.18-.26l.38-1.12s1.14,.33,4.76,.2c3.13-.12,8.66,.08,10.53,2.63,.55,.75,.68,1.39,.37,1.89-.54,.88-2.15,.67-2.63,.59-3.15-.19-4.59-.11-8.08,.08-1.48,.08-3.33,.18-5.82,.28-.51,.02-.99,.03-1.44,.03Z" />
          <path d="M168.89,255.29c-.08-.06-1.92-1.54-2.6-3.78-.22-.71-.7-1.81-1.22-2.98-1-2.26-2.14-4.81-2.28-6.6l1.18-.1c.13,1.59,1.27,4.16,2.18,6.22,.56,1.25,1.04,2.33,1.27,3.12,.57,1.88,2.18,3.18,2.2,3.2l-.73,.93Z" />
          <path d="M189.49,269.03c-.75,0-1.8-.56-3.35-1.39-2.1-1.13-4.72-2.52-7.23-2.79-1.82-.19-3.84-.27-5.63-.33-3.34-.12-5.26-.22-6-.76-1.21-.89-1.55-2.22-1.56-2.27l1.15-.28s.26,.97,1.11,1.6c.49,.36,3.07,.45,5.35,.53,1.8,.07,3.85,.14,5.71,.34,2.74,.29,5.59,1.81,7.66,2.92,1.1,.59,2.47,1.3,2.81,1.25,.11-.05,.13-.1,.14-.13,.08-.26-.19-.85-.41-1.15-2.56-3.28-7.13-4.48-7.17-4.49l.29-1.14c.2,.05,5,1.31,7.83,4.93,.16,.22,.86,1.28,.6,2.19-.08,.29-.3,.67-.84,.9-.14,.06-.29,.09-.46,.09Z" />
          <path d="M183.59,279.37c-.5,0-1.17-.34-1.83-1.66-1.04-2.09-4.75-6.18-7.62-8.42-2.89-2.26-5.24-5.09-5.34-5.21l.91-.75s2.37,2.86,5.15,5.03c3.04,2.37,6.82,6.58,7.95,8.83,.39,.79,.71,1,.78,1.01,.07-.04,.32-.46,.34-1.38,.04-2.05-3.03-7.45-4.41-8.58-1.57-1.28-3.58-3.69-3.67-3.79l.91-.76s2.03,2.42,3.51,3.63c1.64,1.34,4.9,7.06,4.85,9.52-.03,1.4-.51,2.34-1.28,2.51-.08,.02-.16,.03-.25,.03Z" />
        </g>
        <path d="M205.3,140.06c-4.06,.62-7.98,1.95-10.74,4.33-2.73,2.32-4.29,5.69-3.88,8.71,.35,3.13,2.19,6.38,4.41,9.4,2.24,3.04,4.87,5.95,7.63,8.77,1.37,1.42,2.78,2.82,4.23,4.19l2.17,2.09c.79,.76,1.57,1.54,2.3,2.36,2.93,3.28,5.41,7.11,6.89,11.35,1.48,4.22,1.99,8.86,1.04,13.23-.51,2.17-1.3,4.29-2.61,6.09-.65,.9-1.42,1.72-2.32,2.36-.91,.62-1.97,1.07-3.02,1.05,.97-.39,1.72-1.05,2.28-1.83,.58-.76,1.01-1.62,1.32-2.52,.63-1.79,.92-3.68,.88-5.56-.02-3.75-1.06-7.39-2.72-10.68-1.68-3.29-3.96-6.25-6.63-8.88-.68-.65-1.35-1.31-2.06-1.92l-2.32-2.06c-1.53-1.41-3.04-2.86-4.51-4.36-2.92-3.03-5.71-6.25-8.09-9.93-1.18-1.84-2.27-3.81-3.1-5.97-.82-2.16-1.42-4.54-1.34-7.08,.04-2.52,.91-5.11,2.29-7.07,1.35-2,3.21-3.62,5.24-4.68,2.05-1.04,4.22-1.63,6.36-1.82,2.14-.2,4.27-.09,6.29,.4Z" />
        <path d="M178.63,227.81c-.37,.95-.77,1.7-1.22,2.49-.45,.78-.95,1.53-1.49,2.23-1.09,1.41-2.41,2.65-3.92,3.43,1.15-1.25,1.87-2.74,2.36-4.27,.24-.77,.43-1.55,.56-2.33,.13-.77,.24-1.61,.24-2.29l3.47,.73Z" />
        <path d="M214.32,173.06c3.02,1.67,5.55,4.16,7.76,6.88,2.18,2.76,3.93,5.89,5.22,9.22,1.29,3.33,2.1,6.87,2.39,10.43,.1,.89,.18,1.78,.15,2.71-.01,.92,.02,1.84-.04,2.76l-.34,2.77c-.15,.92-.41,1.82-.61,2.73-.51,1.79-1.18,3.53-1.95,5.15-.78,1.62-1.61,3.14-2.42,4.6-1.64,2.91-3.07,5.62-3.95,8.59-1.79,5.92-1.54,12.65-.93,19.44-.71-1.55-1.35-3.14-1.97-4.76-.26-.82-.48-1.65-.72-2.49-.22-.84-.51-1.67-.63-2.54-.72-3.43-.83-7.07-.27-10.69,.56-3.63,2.02-7.08,3.5-10.13,1.49-3.07,2.87-5.86,3.66-8.76,.87-2.88,1.05-5.9,.96-9.05,0-1.59-.2-3.15-.34-4.73-.26-1.55-.48-3.13-.88-4.67-1.5-6.17-4.27-12.19-8.56-17.49Z" />
        <path d="M266.99,226.5s.75-3.73-4.26-6.36c0,0,4.04,1.07,4.79,4.3,0,0,.02-4.45-3-5.75s-4.19-.11-5.65-1.9c0,0,.55,5.48,4.33,7.6l3.78,2.12Z" />
        <path d="M268.94,213.16s.34-1.93-1.46-3.63c0,0,1.49,.8,1.97,2.57,0,0,.53-2.38-.95-3.3s-2.9-1.4-3-2.08c0,0-.23,2.32,.9,4.19,.44,.73,1.13,1.28,1.88,1.7,.28,.15,.58,.36,.65,.54Z" />
        <path d="M271.91,203.39s1.28-.27,1.88-1.81c0,0-.12,1.12-1.1,1.86,0,0,1.6-.27,1.8-1.41s.14-2.14,.53-2.37c0,0-1.49,.44-2.37,1.61-.34,.46-.51,1.02-.58,1.59-.03,.21-.08,.45-.17,.54Z" />
        <path d="M268.84,219.73s4.4-.28,5.14-3.22c0,0,.12,2.53-3.33,3.49,0,0,2.51,.24,4.1-1.36s.33-4.03,1.83-5.09c0,0-4.63,0-6.6,4.43,0,0-.41,1.16-1.14,1.74Z" />
        <path d="M160.71,162.14h0c0-4.42-3.58-8-8-8h0c4.42,0,8-3.58,8-8h0c0,4.42,3.58,8,8,8h0c-4.42,0-8,3.58-8,8Z" />
        <rect x="151.71" y="133.14" width="5" height="5" rx="2.5" ry="2.5" />
        <rect x="164.71" y="123.14" width="3" height="3" rx="1.37" ry="1.37" />
      </g>
    </svg>
  );
};
